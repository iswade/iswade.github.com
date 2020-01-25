//
// Created by wade on 2019-10-05.
//

#include "common.h"

int maxSubArray(int *nums, int numsSize) {
    int max = 0;
    if (numsSize == 0) {
        return max;
    }

    max = nums[0];
    int res = nums[0];

    for (int i = 2; i <= numsSize; i++) {
        max = MAX(max + nums[i - 1], nums[i - 1]);
        res = MAX(res, max);
    }

    return res;
}


void test_maxSubArray() {
    int r;

    int a[] = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
    r = maxSubArray(a, sizeof(a) / sizeof(int));
    ASSERT_EQ(r, 6);
}