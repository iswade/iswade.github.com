
typedef struct _ll_node_t {
    void *data;
    struct _ll_node_t *next;
    struct _ll_node_t *prev;
} ll_node_t;

typedef int (*ll_compare_func_t)(const void *a, const void *b);

typedef void (*ll_free_func_t)(void *ptr);

typedef void (*ll_print_func_t)(void *ptr);

typedef struct _ll_t {
    int count;
    ll_node_t *head;
    ll_node_t *last;
    ll_compare_func_t compare_func;
    ll_free_func_t free_func;
    ll_print_func_t print_func;
} ll_t;


ll_t *ll_new(ll_compare_func_t compare_func, ll_free_func_t free_func, ll_print_func_t print_func);

void ll_free(ll_t *list);

ll_node_t *ll_insert_right(ll_t *list, void *data);

ll_node_t *ll_insert_left(ll_t *list, void *data);

void *ll_delete_data(ll_t *list, void *data);

void *ll_delete_nth(ll_t *list, int n);

void *ll_delete_left(ll_t *list);

void *ll_delete_right(ll_t *list);

ll_node_t *ll_search(ll_t *list, void *data);

ll_node_t *ll_new_node(void *data);

void ll_free_node(ll_node_t *node);

void *ll_delete_node(ll_t *list, ll_node_t *node);

void *ll_get_nth(ll_t *list, int n);

void *ll_get_last(ll_t *list);

void ll_print(ll_t *list);

int ll_int_compare(const void *a, const void *b);

void ll_int_free(void *ptr);

void ll_int_print(void *ptr);

#define FOREACH_LIST(node, list) \
     for (node=list; node; node=node->next)


