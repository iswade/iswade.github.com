//
// Created by wade on 2019/9/29.
//

#include "common.h"

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */

int maxInt(int *nums, int size) {
    int max = INT_MIN;

    for (int i = 0; i < size; i++) {
        if (max < nums[i]) {
            max = nums[i];
        }
    }

    return max;
}

int *maxSlidingWindow(int *nums, int numsSize, int k, int *returnSize) {
    int *retArray = malloc(sizeof(int) * numsSize);
    int size = 0;

    if (numsSize <= 0) {
        *returnSize = size;
        return NULL;
    }

    for (int i = 0; i <= numsSize - k; i++) {
        retArray[size] = maxInt(nums + i, k);
        size++;
    }

    *returnSize = size;
    return retArray;
}

void test_maxSlidingWindow01() {
    int nums[] = {1, 3, -1, -3, 5, 3, 6, 7};
    int k = 3;
    int size = 0;
    int *ret = maxSlidingWindow(nums, sizeof(nums) / sizeof(int), k, &size);
    printArray(ret, size);
}

void test_maxSlidingWindow02() {
    int nums[] = {};
    int k = 0;
    int size = 0;
    int *ret = maxSlidingWindow(nums, sizeof(nums) / sizeof(int), k, &size);
    printArray(ret, size);
}

void test_maxSlidingWindow() {

    test_maxSlidingWindow01();
    test_maxSlidingWindow02();
}