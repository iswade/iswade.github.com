
#include "common.h"

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int *findDisappearedNumbers(int *nums, int numsSize, int *returnSize) {
    int *res = malloc(sizeof(int) * (numsSize + 1));
    for (int i = 0; i < numsSize + 1; i++) {
        res[i] = 0;
    }

    for (int i = 0; i < numsSize; i++) {
        res[nums[i]]++;
    }

    int j = 0;
    int i = 0;
    for (i = 1; i < numsSize + 1; i++) {
        if (res[i] == 0) {
            res[j] = i;
            j++;
        }
    }

    *returnSize = j;
    return res;
}

int *findDisappearedNumbers1(int *nums, int numsSize, int *returnSize) {
    int i = 0;
    while (i < numsSize) {
        if (nums[i] > 0) {
            int temp = nums[nums[i] - 1];
            if (temp < 0) {
                nums[nums[i] - 1]--;
            } else {
                nums[i] = temp;
                nums[nums[i] - 1] = -1;
            }
        } else {
            i++;
        }
    }

    *returnSize = 0;
    for (i = 0; i < numsSize; i++) {
        if (nums[i] > 0) {
            (*returnSize)++;
        }
    }

    return 0;
}

void test_findDisappearedNumbers() {
    int a[8] = {4, 3, 2, 7, 8, 2, 3, 1};
    int size = 0;
    int *b = findDisappearedNumbers1(a, 8, &size);
    printArray(b, size);
    free(b);


    int c[2] = {1, 1};
    size = 0;
    b = findDisappearedNumbers1(c, 2, &size);
    printArray(b, size);
    free(b);
}