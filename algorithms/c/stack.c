#include <stdlib.h>
#include "stack.h"
#include "common.h"

lstack_t *stack_new() {
    lstack_t *stack = malloc(sizeof(lstack_t));
    stack->ll = ll_new(ll_int_compare, ll_int_free, ll_int_print);
    stack->count = 0;

    return stack;
}

void stack_free(lstack_t *stack) {
    ll_free(stack->ll);
    stack->ll = NULL;
    stack->count = 0;
    free(stack);
}

void stack_push(lstack_t *s, void *data) {
    ll_insert_right(s->ll, data);
    s->count++;
}

void *stack_pop(lstack_t *s) {
    if (s->count <= 0) {
        return NULL;
    }

    s->count--;

    return ll_delete_right(s->ll);
}

void *stack_top(lstack_t *s) {
    if (s->count <= 0) {
        return NULL;
    }

    return ll_get_last(s->ll);
}

int stack_count(lstack_t *s) {
    return s->count;
}

void test_stack() {
    lstack_t *s = stack_new();

    stack_push(s, (void *) 1L);
    stack_push(s, (void *) 2L);
    stack_push(s, (void *) 3L);

    long r = 0;
    r = stack_count(s);
    ASSERT_EQ(r, 3);

    r = (long) stack_pop(s);
    ASSERT_EQ(r, 3);
    r = (long) stack_pop(s);
    ASSERT_EQ(r, 2);
    r = (long) stack_pop(s);
    ASSERT_EQ(r, 1);

    r = stack_count(s);
    ASSERT_EQ(r, 0);

    r = (long) stack_pop(s);
    ASSERT_EQ(r, 0);

    r = (long) stack_pop(s);
    ASSERT_EQ(r, 0);
}