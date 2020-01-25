#include <stdlib.h>
#include <stdio.h>

struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

int maxDepth(struct TreeNode *root) {
    if (root == NULL) {
        return 0;
    }

    int l_d = maxDepth(root->left);
    int r_d = maxDepth(root->right);

    return l_d > r_d ? l_d + 1 : r_d + 1;
}

void test_maxDepth() {
    struct TreeNode n15 = {15, NULL, NULL};
    struct TreeNode n7 = {7, NULL, NULL};
    struct TreeNode n20 = {20, &n15, &n7};
    struct TreeNode n9 = {9, NULL, NULL};
    struct TreeNode n3 = {3, &n9, &n20};

    int depth = maxDepth(&n3);
    printf("%d\n", depth);
}
