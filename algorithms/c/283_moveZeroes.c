#include "common.h"

void moveZeroes(int *nums, int numsSize) {
    int i = 0;
    int j = 0;

    while (j < numsSize) {
        if (nums[j] != 0) {
            nums[i] = nums[j];
            i++;
            j++;
        } else {
            j++;
        }
    }

    for (; i < numsSize; i++) {
        nums[i] = 0;
    }
}

void test_moveZeros() {
    int a[5] = {0, 1, 0, 3, 12};
    moveZeroes(a, 5);
    printArray(a, 5);

    int b[3] = {1, 0, 0};
    moveZeroes(b, 3);
    printArray(b, 3);
}