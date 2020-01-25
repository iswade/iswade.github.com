#include "llist.h"

typedef struct _stack {
    ll_t *ll;
    int count;
} lstack_t;


lstack_t *stack_new();

void stack_free(lstack_t *stack);

void stack_push(lstack_t *s, void *data);

void *stack_pop(lstack_t *s);

void *stack_top(lstack_t *s);

int stack_count(lstack_t *s);