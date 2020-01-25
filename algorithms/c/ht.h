
typedef struct _ht_entry_t {
    void *key;
    void *value;
    struct _ht_entry_t *next;
} ht_entry_t;

typedef unsigned int(*ht_hash_func_t)(const void *key);

typedef int (*ht_compare_func_t)(const void *a, const void *b);

typedef void (*ht_free_func_t)(void *ptr);

#define MAX_HASH_TABLE_SIZE 4096
#define MAX_HASH_TABLE_INDEX 0xFFF  // 4095

typedef struct ht_t {
    ht_entry_t *entries[MAX_HASH_TABLE_SIZE];
    long count;
    ht_hash_func_t hash_func;
    ht_compare_func_t compare_func;
    ht_free_func_t free_func;
} ht_t;

ht_t *ht_new(ht_hash_func_t hash_func, ht_compare_func_t compare_func, ht_free_func_t free_func);

void ht_destroy(ht_t *ht);

void ht_insert(ht_t *ht, void *key, void *value);

void *ht_lookup(ht_t *ht, void *key);

void ht_remove(ht_t *ht, void *key);


unsigned int ht_int_hash(const void *key);

int ht_int_compare(const void *a, const void *b);

void ht_int_free(void *ptr);