//
// Created by wade on 2019/10/9.
//

#include "common.h"

int findUnsortedSubarrayCmpInt(const void *a, const void *b) {
    return *(int *) a - *(int *) b;
}

int findUnsortedSubarray(int* nums, int numsSize){
    if (numsSize < 1) {
        return 0;
    }

    int *sorted = malloc(sizeof(int) * numsSize);

    memcpy(sorted, nums, sizeof(int) * numsSize);

    qsort(sorted, numsSize, sizeof(int), findUnsortedSubarrayCmpInt);

    int left = 0;
    int right = numsSize-1;

    while (left < numsSize && nums[left]==sorted[left]) {
        left++;
    }

    while (right > 0 && nums[right]==sorted[right]) {
        right--;
    }

    if (right > left) {
        return right-left+1;
    } else {
        return 0;
    }
}


void test_findUnsortedSubarray() {
    int nums[] = {2, 6, 4, 8, 10, 9, 15};
    int r = findUnsortedSubarray(nums, sizeof(nums) / sizeof(int));
    ASSERT_EQ(r, 5);

    int b[] = {1,2,3,4};
    r = findUnsortedSubarray(b, sizeof(b)/ sizeof(int));
    ASSERT_EQ(r, 0);
}
