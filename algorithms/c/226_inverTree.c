
#include <stdlib.h>
#include <stdio.h>


struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};


struct TreeNode *invertTree(struct TreeNode *root) {
    if (root == NULL) {
        return NULL;
    }

    if (root->left) {
        root->left = invertTree(root->left);
    }

    if (root->right) {
        root->right = invertTree(root->right);
    }

    struct TreeNode *node;
    node = root->left;
    root->left = root->right;
    root->right = node;

    return root;
}

void print_binary_tree(struct TreeNode *root) {
    if (root == NULL) {
        printf("N ");
        return;
    }

    printf("%d ", root->val);
    print_binary_tree(root->left);
    print_binary_tree(root->right);
}

void test_invertTree() {
    struct TreeNode n9 = {9, NULL, NULL};
    struct TreeNode n6 = {6, NULL, NULL};
    struct TreeNode n3 = {3, NULL, NULL};
    struct TreeNode n1 = {1, NULL, NULL};
    struct TreeNode n7 = {7, &n9, &n6};
    struct TreeNode n2 = {2, &n3, &n1};
    struct TreeNode n4 = {4, &n7, &n2};

    struct TreeNode *res = invertTree(&n4);
    print_binary_tree(res);
}