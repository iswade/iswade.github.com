//
// Created by wade on 2019/10/9.
//

#include "common.h"
#include "stack.h"

struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

int *inorderTraversal(struct TreeNode *root, int *returnSize) {
    int *ret = malloc(sizeof(int) * 128);
    int cap = 128;
    int count = 0;

    lstack_t *stack = stack_new();

    struct TreeNode *node = root;

    while (node || stack->count > 0) {
        while (node) {
            stack_push(stack, node);
            node = node->left;
        }

        node = stack_pop(stack);

        ret[count] = node->val;
        count++;
        if (count >= cap) {
            ret = realloc(ret, sizeof(int) * cap * 2);
            cap = cap * 2;
        }

        node = node->right;
    }

    *returnSize = count;
    return ret;
}


void test_inorderTraversal() {
    struct TreeNode n1, n2, n3;
    n1.val = 1; n1.left = NULL; n1.right = &n2;
    n2.val = 2; n2.left = &n3; n2.right = NULL;
    n3.val = 3; n3.left = NULL; n3.right = NULL;

    int count = 0;
    int *r = inorderTraversal(&n1, &count);
    ASSERT_EQ(count, 3);
    ASSERT_EQ(r[0], 1);
    ASSERT_EQ(r[1], 3);
    ASSERT_EQ(r[2], 2);
}