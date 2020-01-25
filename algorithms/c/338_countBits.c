//
// Created by wade on 2019/10/9.
//
#include "common.h"

int *countBits(int num, int *returnSize) {
    int *ret = malloc(sizeof(int) * (num + 1));
    unsigned int last_2_pow = 0;
    unsigned int i = 0;
    ret[0] = 0;

    for (i = 1; i < num + 1; i++) {
        if ((i & (i - 1)) == 0) {
            last_2_pow = i;
            ret[i] = 1;
        } else {
            ret[i] = ret[i - last_2_pow] + 1;
        }
    }

    *returnSize = num + 1;
    return ret;
}


void test_countBits() {
    int count = 0;
    int *r = countBits(5, &count);
    printArray(r, count);

    r = countBits(16, &count);
    printArray(r, count);
}