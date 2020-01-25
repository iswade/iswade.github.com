//
// Created by wade on 2019/9/30.
//
#include <stdlib.h>
#include <stdio.h>
#include <string.h>

struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

void int2str(int i, char *str) {
    sprintf(str, "%d ", i);
}

void encodeTree(char *buf, struct TreeNode *node) {
    if (node == NULL) {
        strcat(buf, "N ");
        return;
    }

    char i_str[64] = {0};

    int2str(node->val, i_str);

    strcat(buf, i_str);
    encodeTree(buf, node->left);
    encodeTree(buf, node->right);
}

/** Encodes a tree to a single string. */
char *serialize(struct TreeNode *root) {
    char *buf = malloc(4096 * 32);
    memset(buf, 0, 4096);
    encodeTree(buf, root);
    return buf;
}


/** Decodes your encoded data to tree. */
struct TreeNode *decodeTree(char *data, int *idx) {
    char token[64] = {0};
    int count = 0;

    // get TOKEN
    while (data[*idx] != ' ') {
        token[count] = data[*idx];
        count++;
        (*idx)++;
    }
    (*idx)++;

    if (token[0] == 'N') {
        return NULL;
    }

    struct TreeNode *node = malloc(sizeof(struct TreeNode));
    node->val = atoi(token);
    node->left = decodeTree(data, idx);
    node->right = decodeTree(data, idx);
    return node;
}

struct TreeNode *deserialize(char *data) {
    int i = 0;
    return decodeTree(data, &i);
}


extern void print_binary_tree();

void test_serializeDeserialize() {
    struct TreeNode n5 = {5, NULL, NULL};
    struct TreeNode n4 = {4, NULL, NULL};
    struct TreeNode n3 = {3, &n4, &n5};
    struct TreeNode n2 = {2, NULL, NULL};
    struct TreeNode n1 = {1, &n2, &n3};

    print_binary_tree(&n1);

    char *data = serialize(&n1);

    printf("\nafter serialize: %s\n", data);

    struct TreeNode *n = deserialize(data);

    print_binary_tree(n);

    printf("\n");
}

