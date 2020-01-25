#include <stdlib.h>
#include <limits.h>
#include "stack.h"
#include "common.h"

typedef struct {
    lstack_t *stack;
    lstack_t *min_stack;
    int count;
} MinStack;

/** initialize your data structure here. */

MinStack *minStackCreate() {
    MinStack *ms = malloc(sizeof(MinStack));
    ms->stack = stack_new();
    ms->min_stack = stack_new();
    ms->count = 0;

    return ms;
}

void minStackPush(MinStack *obj, int x) {
    stack_push(obj->stack, (void *) (long) x);

    if (obj->min_stack->count <= 0) {
        stack_push(obj->min_stack, (void *) (long) x);
    } else if (x <= (int) (long) stack_top(obj->min_stack)) {
        stack_push(obj->min_stack, (void *) (long) x);
    }

    obj->count++;
}

void minStackPop(MinStack *obj) {
    if (obj->count <= 0) {
        return;
    }

    int r = (int) (long) stack_pop(obj->stack);

    if (obj->min_stack->count > 0 && r == (int) (long) stack_top(obj->min_stack)) {
        stack_pop(obj->min_stack);
    }

    obj->count--;
    return;
}

int minStackTop(MinStack *obj) {
    return (int) (long) stack_top(obj->stack);
}

int minStackGetMin(MinStack *obj) {
    return (int) (long) stack_top(obj->min_stack);
}

void minStackFree(MinStack *obj) {
    stack_free(obj->stack);
    obj->stack = 0;
    free(obj);
}

void test_minStack() {
    int r = 0;
    MinStack *minStack = minStackCreate();
    minStackPush(minStack, -2);
    minStackPush(minStack, 0);
    minStackPush(minStack, -3);
    r = minStackGetMin(minStack);
    ASSERT_EQ(r, -3);
    minStackPop(minStack);
    r = minStackTop(minStack);
    ASSERT_EQ(r, 0);
    r = minStackGetMin(minStack);
    ASSERT_EQ(r, -2);

    minStackFree(minStack);
}