---
tags:
  - ansible
  - linux
  - nginx
published: true
date: 2021-06-11T08:57:07.623Z
title: Ansible Setup and Running a Playbook
---
Ansible is an automation tool, I've used it in a case where you have to run similar commands on  multiple machines.

In this example I'll install an ftp server, nginx and also allow all connection on firewall. 

```shell
sudo apt update
sudo apt install ansible
```


<br />

## Setup SSH Keys on Host and Clients

To start running commands on multiple host machines we first have to setup ssh Keys in host machine and clients.

In my case:

* 10.2.4.49 (Host machine/localhost)
* 10.2.4.50 (Client)
* 10.2.4.51 (Client)

```shell
ssh-keygen
# Fill the options, just remember what name you save your key with 
# Enter file in which to save the key: /root/.ssh/ansible_host

# Copy ssh public key wherever you want to run your commands
ssh-copy-id -i /root/.ssh/ansible_host.pub username@localhost
ssh-copy-id -i /root/.ssh/ansible_host.pub username@10.2.4.50
ssh-copy-id -i /root/.ssh/ansible_host.pub username@10.2.4.51


# login to your machines and copy the keys in root, 
# for some reason I'm not able to copy them directly into root
cp /home/username/.ssh/authorized_keys /root/.ssh/



```


<br />

## Configure Ansible 

Once ssh keys are done, add IPs in hosts and then edit your .cfg as follows

```shell
cd /etc/ansible/

vim hosts
# Edit servers and add your IPs and exit

[servers]
server1 ansible_host=localhost
server2 ansible_host=10.2.4.50
server3 ansible_host=10.2.4.51


# Edit ansible configurations and add inventory & ssh private key path
vim ansible.cfg

[defaults]
inventory = hosts
private_key_file = /root/.ssh/ansible_host



```


<br />


## Running Ansible

To check ansible is working run ping

```shell
ansible all -m ping


# Output
server1 | SUCCESS => {
    "changed": false,
    "ping": "pong"
}
server2 | SUCCESS => {
    "changed": false,
    "ping": "pong"
}
server3 | SUCCESS => {
    "changed": false,
    "ping": "pong"
}

```


<br />


## Create an Ansible playbook

Create a yaml file, this is a playbook which we'll run via **ansible-playbook** command. Ansible playbook contains multiple Plays which consist of metadata and a sequence of task and handler definitions, and roles.

```shell
# Create a yaml 
vim ftp_http_installer.yml

# Add the following lines
---

- name: Configure ftp server
  hosts: all
  remote_user: ta
  become: true
  tasks:
  - name: Installs vsftpd server
    apt:
      name: vsftpd
      state: latest
  - name: starts vsftpdf service
    service:
      name: vsftpd
      state: started
      enabled: true
- name: Configure http server
  hosts: all
  remote_user: ta
  become: true
  tasks:
  - name: Allow everything in ufw
    ufw:
      state: enabled
      policy: allow
  - name: Installs httpd server
    apt:
      name: nginx
      state: latest
      update_cache: yes
  - name: starts httpd service
    service:
      name: nginx
      state: started
      enabled: true
  - name: Create index.html
    copy:
      dest: /var/www/html/index.html
      content: "Created by Ansible"

```


<br />


## Running the Playbook



```shell
# Check syntax of yaml with ansible-playbook 
ansible-playbook ftp_http_installer.yml --syntax-check

# Before Running the playbook check it first with ---check/-C
# which means: don't make any changes; instead, try to predict changes
# And finally -K means it will ask for password to run as root
ansible-playbook -C ftp_http_server.yml -K

# If everything goes well and nothing fails
ansible-playbook ftp_http_server.yml -K


```




<br />


Final Output will look something like this

```

# Final Output
BECOME password:

PLAY [Configure ftp server] **************************************************************************

TASK [Gathering Facts] *******************************************************************************
ok: [server1]
ok: [server2]

TASK [Installs vsftpd server] ************************************************************************
changed: [server2]
changed: [server1]

TASK [starts vsftpdf service] ************************************************************************
ok: [server2]
ok: [server1]

PLAY [Configure http server] *************************************************************************

TASK [Gathering Facts] *******************************************************************************
ok: [server1]
ok: [server2]

TASK [Allow everything in ufw] ***********************************************************************
changed: [server2]
changed: [server1]

TASK [Installs httpd server] *************************************************************************
changed: [server2]
changed: [server1]

TASK [starts httpd service] **************************************************************************
ok: [server1]
ok: [server2]

TASK [Create index.html] *****************************************************************************
changed: [server1]
changed: [server2]

PLAY RECAP *******************************************************************************************
server1                    : ok=8    changed=4    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
server2                    : ok=8    changed=4    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0

```



## Testing our FTP Server & Http Server

```
curl 10.2.4.50

# Output
Created by Ansible


ftp -p 10.2.4.50

# Output
Connected to 10.2.4.50.
220 (vsFTPd 3.0.3)
Name (10.2.4.50:server): xuser
331 Please specify the password.
Password:
230 Login successful.
Remote system type is UNIX.
Using binary mode to transfer files.
ftp> ls
227 Entering Passive Mode (10,2,4,64,166,217).
150 Here comes the directory listing.
drwxr-xr-x    5 1000     1000         4096 May 31 10:02 Desktop
drwxr-xr-x    3 1000     1000         4096 May 24 12:49 Documents
drwxr-xr-x    2 1000     1000         4096 May 24 12:08 Downloads
drwxr-xr-x    2 1000     1000         4096 May 24 12:08 Music
drwxr-xr-x    2 1000     1000         4096 May 24 12:08 Pictures
drwxr-xr-x    2 1000     1000         4096 May 24 12:08 Public
drwxr-xr-x    2 1000     1000         4096 May 24 12:08 Templates
drwxr-xr-x    3 1000     1000         4096 May 24 12:49 Videos
drwxr-xr-x    4 1000     1000         4096 May 25 12:09 snap
226 Directory send OK.

```
