//
// Created by wade on 2019/10/8.
//

#include "common.h"

// TODO: 二维动态规划
int maxCoins(int *nums, int numsSize) {

    int **dp;

    numsSize += 2;

    dp = malloc(sizeof(int) * numsSize);
    for (int i = 0; i < numsSize; i++) {
        dp[i] = malloc(sizeof(int) * numsSize);
    }

    for (int len = 2; len < numsSize; ++len) {
        for (int i = 0; i < numsSize - len; ++i) {
            int j = i + len;
            for (int k = i + 1; k < j; ++k) {
                dp[i][j] = MAX(dp[i][j], nums[i] * nums[k] * nums[j] + dp[i][k] + dp[k][j]);
            }
        }
    }
    return dp[0][numsSize - 1];
}
