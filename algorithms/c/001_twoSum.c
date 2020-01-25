#include <stdio.h>
#include <stdlib.h>


int *twoSum(int *nums, int numsSize, int target, int *returnSize) {

    int i = 0;
    int j = numsSize - 1;

    // need hash table to store data
    return 0;
}

void test_twoSum() {
    int a[4] = {2, 7, 11, 15};
    int size = 0;
    int *res = twoSum(a, 2, 9, &size);
    for (int i = 0; i < size; i++) {
        printf("%d ", res[i]);
    }
}