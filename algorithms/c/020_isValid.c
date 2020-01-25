//
// Created by wade on 2019-10-07.
//

#include "stdbool.h"
#include "stdlib.h"
#include "stack.h"
#include "string.h"
#include "common.h"

#define IS_LEFT(c) c == '(' || c == '[' || c == '{'

bool isValid(char *s) {
    lstack_t *stack = stack_new();

    int l = strlen(s);

    for (int i = 0; i < l; i++) {
        if (IS_LEFT(s[i])) {
            stack_push(stack, (void *) (long) s[i]);
            continue;
        } else {
            if (stack->count == 0) {
                stack_free(stack);
                return false;
            }

            char c = (char) (long) stack_top(stack);
            if (c == 0) {
                break;
            } else if ((c == '{' && s[i] == '}')
                       || (c == '[' && s[i] == ']')
                       || (c == '(' && s[i] == ')')) {
                stack_pop(stack);
                continue;
            } else {
                break;
            }
        }
    }

    if (stack->count > 0) {
        stack_free(stack);
        return false;
    } else {
        stack_free(stack);
        return true;
    }
}

void test_isValid() {
    char *s = "()[]{}";
    bool r = isValid(s);
    ASSERT_EQ(r, true);

    s = "(]";
    r = isValid(s);
    ASSERT_EQ(r, false);

    s = "]";
    r = isValid(s);
    ASSERT_EQ(r, false);
}