//
// Created by wade on 2019-10-05.
//

#include <stdlib.h>
#include <stdio.h>
#include "common.h"

struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

int heightOfBinaryTree(struct TreeNode *root) {
    if (root == NULL) return 0;
    int left = 0;
    int right = 0;
    left = heightOfBinaryTree(root->left);
    right = heightOfBinaryTree(root->right);

    return right > left ? right + 1 : left + 1;
}

int diameterOfBinaryTree(struct TreeNode *root) {
    if (root == NULL) return 0;

    int max_root = heightOfBinaryTree(root->left) + heightOfBinaryTree(root->right);
    int max_left = diameterOfBinaryTree(root->left);
    int max_right = diameterOfBinaryTree(root->right);

    int max = max_root;

    if (max < max_left) {
        max = max_left;
    }
    if (max < max_right) {
        max = max_right;
    }

    return max;
}


void test_diameterOfBinaryTree() {
    struct TreeNode n31 = {4, NULL, NULL};
    struct TreeNode n32 = {5, NULL, NULL};
    struct TreeNode n21 = {2, &n31, &n32};
    struct TreeNode n22 = {3, NULL, NULL};
    struct TreeNode n11 = {1, &n21, &n22};

    int r = diameterOfBinaryTree(&n11);
    ASSERT_EQ(r, 3);
}