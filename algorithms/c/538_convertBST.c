#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>


struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

void walk_tree(struct TreeNode *root, int *pre) {
    if (root == NULL) {
        return;
    }

    walk_tree(root->right, pre);

    root->val += (*pre);
    *pre = root->val;

    walk_tree(root->left, pre);
}

struct TreeNode *convertBST(struct TreeNode *root) {
    int pre = 0;
    walk_tree(root, &pre);
    return root;
}


void test_convertBST() {
    struct TreeNode n2 = {2, NULL, NULL};
    struct TreeNode n13 = {13, NULL, NULL};
    struct TreeNode n5 = {5, &n2, &n13};

    struct TreeNode *res = convertBST(&n5);
}