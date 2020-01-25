//
// Created by wade on 2019-10-05.
//
#include <stdlib.h>
#include <stdbool.h>
#include "queue.h"
#include "common.h"

struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

bool isMirror(struct TreeNode *p, struct TreeNode *q) {
    if (p == NULL && q == NULL) {
        return true;
    }

    if (p == NULL || q == NULL) {
        return false;
    }

    if (p->val == q->val) {
        return isMirror(p->left, q->right) && isMirror(p->right, q->left);
    }

    return false;
}

bool isSymmetric(struct TreeNode *root) {
    return isMirror(root, root);
}


bool isSymmetric_norec(struct TreeNode *root) {
    queue_t *q = queue_new();
    queue_insert(q, root);
    queue_insert(q, root);

    while (queue_count(q) > 0) {
        struct TreeNode *t1 = queue_delete(q);
        struct TreeNode *t2 = queue_delete(q);

        if (t1 == NULL && t2 == NULL) continue;
        if (t1 == NULL || t2 == NULL) return false;
        if (t1->val != t2->val) return false;

        queue_insert(q, t1->left);
        queue_insert(q, t2->right);
        queue_insert(q, t1->right);
        queue_insert(q, t2->left);
    }

    return true;
}


void test_isSymmetric() {
    struct TreeNode n31 = {3, NULL, NULL};
    struct TreeNode n32 = {4, NULL, NULL};
    struct TreeNode n33 = {4, NULL, NULL};
    struct TreeNode n34 = {3, NULL, NULL};
    struct TreeNode n21 = {2, &n31, &n32};
    struct TreeNode n22 = {2, &n33, &n34};
    struct TreeNode n11 = {1, &n21, &n22};

    bool r = isSymmetric_norec(&n11);
    ASSERT_EQ(r, true);
}