//
// Created by wade on 2019/9/29.
//

#include <stdio.h>
#include <stdlib.h>
#include "llist.h"
#include "common.h"

static int cmpInt(const void *a, const void *b) {
    return *(int *) a - *(int *) b;
}

int **threeSum(int *nums, int numsSize, int *returnSize, int **returnColumnSizes) {
    int **returnArray = NULL;
    int size = 0;
    int *columns = NULL;

    returnArray = (int **) malloc(sizeof(int *) * numsSize * numsSize);
    columns = (int *) malloc(sizeof(int) * numsSize * numsSize);

    int i = 0;

    qsort(nums, numsSize, sizeof(int), cmpInt);

    int left = 0;
    int right = numsSize - 1;

    for (i = 0; i < numsSize; i++) {
        if (nums[i] > 0) {
            break;
        }

        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }

        left = i + 1;
        right = numsSize - 1;

        while (left < right) {
            int sum = nums[i] + nums[left] + nums[right];
            if (sum == 0) {
                returnArray[size] = malloc(sizeof(int) * 3);
                returnArray[size][0] = nums[i];
                returnArray[size][1] = nums[left];
                returnArray[size][2] = nums[right];
                columns[size] = 3;
                size++;
                while (left < right && nums[left] == nums[left + 1]) {
                    left++;
                }
                while (left < right && nums[right - 1] == nums[right]) {
                    right--;
                }
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    *returnColumnSizes = columns;
    *returnSize = size;
    return returnArray;
}

void test_threeSum01() {
    int nums[6] = {-1, 0, 1, 2, -1, -4};
    int size;
    int *columns;
    int **ret = threeSum(nums, sizeof(nums) / sizeof(int), &size, &columns);

    for (int i = 0; i < size; i++) {
        printArray(ret[i], columns[i]);
    }
}

void test_threeSum02() {
    int nums[] = {-4, -8, -2, 8, -8, 1, -7, 2, -1, 3, -8, 0, -7, 4, -6, 4, -8, -1, 6, 7, -10, -9, -5, -2};
    int size;
    int *columns;
    int **ret = threeSum(nums, sizeof(nums) / sizeof(int), &size, &columns);

    for (int i = 0; i < size; i++) {
        printArray(ret[i], columns[i]);
    }
}

void test_threeSum03() {
    int nums[] = {0, 0, 0, 0};
    int size;
    int *columns;
    int **ret = threeSum(nums, sizeof(nums) / sizeof(int), &size, &columns);

    for (int i = 0; i < size; i++) {
        printArray(ret[i], columns[i]);
    }
}


void test_threeSum() {
    test_threeSum01();
    test_threeSum02();
    test_threeSum03();
}