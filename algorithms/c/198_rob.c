//
// Created by wade on 2019-10-06.
//

#include "stdlib.h"
#include "common.h"

int rob(int *nums, int numsSize) {
    if (numsSize == 0) {
        return 0;
    }

    int *dp = malloc((numsSize + 1) * sizeof(int));
    dp[0] = 0;
    for (int i = 1; i <= numsSize; i++) {
        if (i == 1) {
            dp[i] = nums[i - 1];
        } else {
            dp[i] = MAX(dp[i - 2] + nums[i - 1], dp[i - 1]);
        }
    }

    return dp[numsSize];
}


void test_rob() {
    int r;
    int a[] = {1, 2, 3, 1};
    r = rob(a, sizeof(a) / sizeof(4));
    ASSERT_EQ(r, 4);

    int b[] = {2, 7, 9, 3, 1};
    r = rob(b, sizeof(b) / sizeof(4));
    ASSERT_EQ(r, 12);
}