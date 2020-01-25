#include <stdio.h>

struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

#define NODE_TYPE_MID 0
#define NODE_TYPE_LEFT 1
#define NODE_TYPE_RIGHT 2

void mergeHelper(struct TreeNode *t1, struct TreeNode *t1_p, struct TreeNode *t2, struct TreeNode *t2_p, int type) {
    if (t1 != NULL && t2 != NULL) {
        t1->val += t2->val;
        mergeHelper(t1->left, t1, t2->left, t2, NODE_TYPE_LEFT);
        mergeHelper(t1->right, t1, t2->right, t2, NODE_TYPE_RIGHT);
    } else if (t1 != NULL && t2 == NULL) {
        return;
    } else if (t1 == NULL && t2 != NULL) {
        if (type == NODE_TYPE_LEFT) {
            t1_p->left = t2;
        } else if (type == NODE_TYPE_RIGHT) {
            t1_p->right = t2;
        }
    }
}

struct TreeNode *mergeTrees(struct TreeNode *t1, struct TreeNode *t2) {
    if (t1 == NULL && t2 == NULL) {
        return NULL;
    }

    if (t1 == NULL) {
        return t2;
    }

    if (t2 == NULL) {
        return t1;
    }

    t1->val += t2->val;
    t1->left = mergeTrees(t1->left, t2->left);
    t1->right = mergeTrees(t1->right, t2->right);

    return t1;

}


void test_mergeTrees() {
    struct TreeNode t1n5 = {5, NULL, NULL};
    struct TreeNode t1n3 = {3, &t1n5, NULL};
    struct TreeNode t1n2 = {2, NULL, NULL};
    struct TreeNode t1n1 = {1, &t1n3, &t1n2};

    struct TreeNode t2n4 = {4, NULL, NULL};
    struct TreeNode t2n7 = {7, NULL, NULL};
    struct TreeNode t2n3 = {3, NULL, &t2n7};
    struct TreeNode t2n1 = {1, NULL, &t2n4};
    struct TreeNode t2n2 = {2, &t2n1, &t2n3};

    struct TreeNode *res = mergeTrees(&t1n1, &t2n2);
}