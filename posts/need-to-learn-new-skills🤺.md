---
tags:
  - Makefile
published: true
date: 2020-09-19T16:47:48.690Z
title: Need to learn new skills🤺 🦽
---
World is evolving and I feel incompetent....

So here is a make file to change myself

```Makefile
LIBS = -lpcap 
MONGOC = $(shell pkg-config --cflags --libs libmongoc-1.0)

APP = abcAPP
SRC = nofile.c

all:
	gcc -o $(APP) $(SRC) $(LIBS) $(MONGOC)
clean:
	rm abcAPP
```

 I think a makefile is not enough, try adding more dummy text that explains....