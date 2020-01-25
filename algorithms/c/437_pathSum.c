#include "common.h"

struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

int pathSum(struct TreeNode *root, int sum) {
    if (root == NULL) {
        return 0;
    }

    int count = 0;

    if (root->val == sum) {
        count = 1;
    }

    if (root->val != sum) {
        count += pathSum(root->left, sum - root->val) + pathSum(root->right, sum - root->val);
        count += pathSum(root->left, sum) + pathSum(root->right, sum);
    }

    return count;
}

extern void print_binary_tree(struct TreeNode *root);

void test_pathSum_01() {
    struct TreeNode n41 = {1, NULL, NULL};
    struct TreeNode n42 = {-2, NULL, NULL};
    struct TreeNode n43 = {3, NULL, NULL};
    struct TreeNode n311 = {11, NULL, NULL};
    struct TreeNode n32 = {2, NULL, &n41};
    struct TreeNode n33 = {3, &n43, &n42};

    struct TreeNode n25 = {5, &n33, &n32};
    struct TreeNode n23 = {-3, NULL, &n311};
    struct TreeNode n110 = {10, &n25, &n23};

    int r = pathSum(&n110, 8);
    ASSERT_EQ(r, 3);
}


void test_pathSum_02() {
    struct TreeNode n41 = {1, NULL, NULL};
    struct TreeNode n45 = {5, NULL, NULL};
    struct TreeNode n42 = {2, NULL, NULL};
    struct TreeNode n47 = {7, NULL, NULL};
    struct TreeNode n34 = {4, &n45, &n41};
    struct TreeNode n313 = {13, NULL, NULL};
    struct TreeNode n311 = {11, &n47, &n42};
    struct TreeNode n28 = {8, &n313, &n34};
    struct TreeNode n24 = {4, &n311, NULL};
    struct TreeNode n15 = {5, &n24, &n28};

    int r = pathSum(&n15, 22);
    ASSERT_EQ(r, 3);
}

void test_pathSum_03() {
    struct TreeNode n2 = {-3, NULL, NULL};
    struct TreeNode n1 = {-2, NULL, &n2};

    int r = pathSum(&n1, -5);
    ASSERT_EQ(r, 1);
}

void test_pathSum() {
    test_pathSum_01();
    test_pathSum_02();
    test_pathSum_03();
}