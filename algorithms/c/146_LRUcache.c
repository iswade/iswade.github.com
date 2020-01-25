#include <stdlib.h>
#include <stdio.h>
#include "ht.h"
#include "llist.h"
#include "common.h"

typedef struct _lru_node_t {
    int key;
    int value;
} lru_node_t;

typedef struct {
    int cap;
    int count;
    ht_t *ht;
    ll_t *ll;
} LRUCache;


void ll_lru_node_free(void *ptr) {
    lru_node_t *node = ptr;
    node->key = 0;
    node->value = 0;
    free(node);
}

void ht_node_free(void *ptr) {
    // managed by linked list
    // hash table no need to free anything
}

LRUCache *lRUCacheCreate(int capacity) {
    LRUCache *cache = malloc(sizeof(LRUCache));
    cache->count = 0;
    cache->cap = capacity;
    cache->ht = ht_new(ht_int_hash, ht_int_compare, ht_node_free);
    cache->ll = ll_new(ll_int_compare, ll_lru_node_free, ll_int_print);
    return cache;
}

int lRUCacheGet(LRUCache *obj, int key) {
    ll_node_t *node = ht_lookup(obj->ht, (void *) (long) key);
    if (node == NULL || obj->count == 0) {
        return -1;
    }

    lru_node_t *lruNode = ll_delete_node(obj->ll, node);
    obj->count--;

    node = ll_insert_left(obj->ll, lruNode);
    ht_insert(obj->ht, (void *) (long) key, node);
    obj->count++;
    return lruNode->value;
}

void lRUCachePut(LRUCache *obj, int key, int value) {
    ll_node_t *node;
    lru_node_t *lru_node;

    node = ht_lookup(obj->ht, (void *) (long) key);
    if (node == NULL) {
        lru_node = malloc(sizeof(lru_node_t));
    } else {
        lru_node = node->data;
        ll_delete_node(obj->ll, node);
        obj->count--;
    }

    lru_node->key = key;
    lru_node->value = value;

    if (obj->cap == 0) {
        return;
    }

    if (obj->count >= obj->cap) {
        // swap out
        lru_node_t *n = ll_delete_right(obj->ll);
        ht_remove(obj->ht, (void *) (long) (n->key));
        free(n);
        obj->count--;
    }

    node = ll_insert_left(obj->ll, lru_node);
    obj->count++;
    ht_insert(obj->ht, (void *) (long) key, node);
}

void lRUCacheFree(LRUCache *obj) {
    ht_destroy(obj->ht);
    ll_free(obj->ll);
    obj->ht = NULL;
    obj->cap = 0;
    obj->count = 0;
    free(obj);
}

void test_LRUcache01() {
    LRUCache *cache = lRUCacheCreate(2);
    int key = 0;

    lRUCachePut(cache, 1, 1);
    lRUCachePut(cache, 2, 2);
    key = lRUCacheGet(cache, 1);
    ASSERT_EQ(key, 1);
    lRUCachePut(cache, 3, 3);
    key = lRUCacheGet(cache, 2);
    ASSERT_EQ(key, -1);
    lRUCachePut(cache, 4, 4);
    key = lRUCacheGet(cache, 1);
    ASSERT_EQ(key, -1);
    key = lRUCacheGet(cache, 3);
    ASSERT_EQ(key, 3);
    key = lRUCacheGet(cache, 4);
    ASSERT_EQ(key, 4);

    lRUCacheFree(cache);
}

void test_LRUcache02() {
    LRUCache *cache = lRUCacheCreate(2);
    int key = 0;
    key = lRUCacheGet(cache, 2);   // -1
    ASSERT_EQ(key, -1);
    lRUCachePut(cache, 2, 6);
    key = lRUCacheGet(cache, 1);   // -1
    ASSERT_EQ(key, -1);
    lRUCachePut(cache, 1, 5);
    lRUCachePut(cache, 1, 2);
    key = lRUCacheGet(cache, 1);   // 2
    ASSERT_EQ(key, 2);
    key = lRUCacheGet(cache, 2);   // 6
    ASSERT_EQ(key, 6);

    lRUCacheFree(cache);
}

void test_LRUcache() {
    test_LRUcache01();
    test_LRUcache02();
}