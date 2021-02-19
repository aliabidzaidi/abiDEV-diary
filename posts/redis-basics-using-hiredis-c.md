---
tags:
  - clang
  - cplusplus
  - redis
published: true
date: 2021-02-19T20:39:47.528Z
title: Redis basics using hiredis C
---
## Introduction, Downloading & Installing hiredis

* Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache, and message broker.
* Redis works with an in-memory dataset. Depending on your use case, you can persist your data either by periodically dumping the dataset to disk or by appending each command to a disk-based log.
* To install hiredis goto [Link ](https://github.com/redis/hiredis/releases/tag/v0.14.1)and download tar.gz and run these commands followed by code compiling

```shell
tar -xf hiredis-0.14.1.tar.gz
cd hiredis-0.14.1
make install

# To compile code with hiredis
gcc example.c -lhiredis -o example.o

#To run
./example.o
```



> Below is an example code just to check and see hiredis works fine ... 

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <hiredis/hiredis.h>

int main (int argc, char **argv) {
    struct redisReply *reply;
    struct redisContext *c;

    /* Redis Constructor */
    c = redisConnect("127.0.0.1", 6379);    // 127.0.0.1:6379
    if (c->err) {
        printf("Failed redisConnect error: %s\n", c->errstr);
        return 1;
    }

    /* PING to check server */
    reply = redisCommand(c,"PING %s", "Hello World");
    printf("RESPONSE: %s\n", reply->str);
    freeReplyObject(reply);

    redisFree(c);
    return 0;
}
```



## Data Structures

Redis provides data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs, geospatial indexes, and streams.



### Strings

key-value stores. Used to store three types of values: Byte string values, Integer values and Floating-point values.

* GET Fetches the data stored at the given key
* SET Sets the value stored at the given key
* DEL Deletes the value stored at the given key (works for all types)

```c
/* Strings */

// SET
reply = redisCommand(c,"SET x %s", "NICE");
printf("SET X: %s\n", reply->str);
freeReplyObject(reply);

// GET
reply = redisCommand(c,"GET x");
printf("GET X: %s\n", reply->str);
freeReplyObject(reply);

// DEL
reply = redisCommand(c,"DEL x");
printf("DEL X: %lld\n", reply->integer);
freeReplyObject(reply);

```

INCR, DECR, APPEND, SETRANGE, GETRANGE, BITOP

### Lists

linked-list structure. LISTs in Redis store an ordered sequence of strings. We can push items to the front and the back of the LIST with LPUSH/RPUSH, likewise in other commands as well.

* RPUSH Pushes the value onto the right end of the list
* LRANGE Fetches a range of values from the list
* LINDEX Fetches an item at a given position in the list
* LPOP Pops the value from the left end of the list and returns it

```c
/* LISTS */

// DEL
reply = redisCommand(c,"DEL myList");
printf("DEL myList: %lld\n", reply->integer);
freeReplyObject(reply);

// RPUSH
reply = redisCommand(c,"RPUSH myList abc.def");
redisCommand(c,"RPUSH myList hij.klm");
redisCommand(c,"RPUSH myList nop.qrs");
redisCommand(c,"RPUSH myList REMOVEEEE");
printf("RPUSH myList: %lld\n", reply->integer);
freeReplyObject(reply);

// LPOP
reply = redisCommand(c,"LPOP myList");
printf("LPOP X: %lld\n", reply->integer);
freeReplyObject(reply);

// LIST iterate and print
reply = redisCommand(c,"LRANGE myList 0 -1");

if (reply->type == REDIS_REPLY_ARRAY) {
    for (int j = 0; j < reply->elements; j++) {
        printf("%s, ",reply->element[j]->str);
    }
    printf("\n");
}
freeReplyObject(reply);
```



### Hashes

coming soon...



### Sets

coming soon...



### Sorted Sets

coming soon...