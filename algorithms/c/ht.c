#include <stdlib.h>
#include <stdio.h>
#include "ht.h"
#include "common.h"

ht_t *ht_new(ht_hash_func_t hash_func, ht_compare_func_t compare_func, ht_free_func_t free_func) {
    ht_t *ht = (ht_t *) malloc(sizeof(ht_t));
    int i;
    for (i = 0; i < MAX_HASH_TABLE_SIZE; i++) {
        ht->entries[i] = NULL;
    }
    ht->count = 0;
    ht->hash_func = hash_func;
    ht->compare_func = compare_func;
    ht->free_func = free_func;
    return ht;
}

void ht_destroy(ht_t *ht) {
    if (!ht) return;

    int i = 0;
    for (i = 0; i < MAX_HASH_TABLE_SIZE; i++) {
        if (ht->entries[i]) {
            ht_entry_t *e = ht->entries[i];
            while (e) {
                if (ht->free_func) {
                    ht->free_func(e->value);
                }
                ht_entry_t *old = e;
                e = e->next;
                free(old);
            }
        }
    }
    free(ht);
}

void ht_insert(ht_t *ht, void *key, void *value) {
    if (!ht || !key) return;

    unsigned int hash = ht->hash_func(key);

    int idx0 = hash & MAX_HASH_TABLE_INDEX;

    ht_entry_t *e = ht->entries[idx0];
    while (e) {
        // if key exists, update value
        if (ht->compare_func(e->key, key) == 0) {
            e->value = value;
            return;
        }
        e = e->next;
    }

    ht_entry_t *entry = NULL;
    entry = (ht_entry_t *) malloc(sizeof(ht_entry_t));
    entry->key = key;
    entry->value = value;

    // insert into first
    if (!ht->entries[idx0]) {
        entry->next = NULL;
    } else {
        entry->next = ht->entries[idx0];
    }
    ht->entries[idx0] = entry;
    ht->count++;
}

void *ht_lookup(ht_t *ht, void *key) {
    if (!ht || !key) return NULL;
    unsigned int hash = ht->hash_func(key);

    int idx0 = hash & MAX_HASH_TABLE_INDEX;

    ht_entry_t *e = ht->entries[idx0];
    while (e) {
        if (ht->compare_func(e->key, key) == 0) {
            return e->value;
        }
        e = e->next;
    }
    return NULL;
}

void ht_remove(ht_t *ht, void *key) {
    if (!ht || !key) return;

    unsigned int hash = ht->hash_func(key);

    int idx0 = hash & MAX_HASH_TABLE_INDEX;

    ht_entry_t *e = ht->entries[idx0];
    ht_entry_t *last = e;
    while (e) {
        if (ht->compare_func(e->key, key) == 0) {
            ht_entry_t *old = e;
            if (e == ht->entries[idx0]) {
                ht->entries[idx0] = e->next;
            } else {
                last->next = e->next;
            }
            if (ht->free_func) {
                ht->free_func(old->value);
            }
            free(old);
            return;
        }
        last = e;
        e = e->next;
    }
}

unsigned int ht_int_hash(const void *key) {
    return ((unsigned int) (long) key);
}

int ht_int_compare(const void *a, const void *b) {
    return (int) ((long) a - (long) b);
}

void ht_int_free(void *ptr) {

}

void test_hash_table() {

    ht_t *ht = ht_new(ht_int_hash, ht_int_compare, ht_int_free);

    ht_insert(ht, (void *) 1L, (void *) 1l);
    ht_insert(ht, (void *) 2L, (void *) 2l);
    ht_insert(ht, (void *) 3L, (void *) 3l);
    ht_insert(ht, (void *) 4L, (void *) 4l);

    void *res = ht_lookup(ht, (void *) 3L);

    ASSERT_EQ((long) res, 3);

    res = ht_lookup(ht, (void *) 5L);

    ASSERT_EQ((long) res, 0);

    ht_destroy(ht);
}