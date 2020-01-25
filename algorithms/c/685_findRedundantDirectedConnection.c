#include <stdbool.h>
#include <stdlib.h>
#include <stdio.h>

//
// Created by wade on 2019/9/29.
//

bool checkIsTree(int **edges, int edgesSize, int *edgesColSize, int ignore) {
    return true;
}

int *findRedundantDirectedConnection(int **edges, int edgesSize, int *edgesColSize, int *returnSize) {
    // delete last edge than check if it is a tree

    for (int i = edgesSize - 1; i >= 0; i--) {
        if (checkIsTree(edges, edgesSize, edgesColSize, i)) {

        }
    }

    *returnSize = 0;
    return NULL;
}