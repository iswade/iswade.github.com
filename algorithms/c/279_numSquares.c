//
// Created by wade on 2019-10-06.
//

#include <stdlib.h>
#include <math.h>
#include <limits.h>

#include "common.h"

int numSquares(int n) {

    int *dp = malloc((n + 1) * sizeof(int));
    dp[0] = 0;

    for (int i = 1; i <= n; i++) {
        int min = i;
        for (int j = 1; j * j <= i; j++) {
            int cur = dp[i - j * j];
            if (min > cur) {
                min = cur;
            }
        }

        dp[i] = min + 1;
    }

    return dp[n];
}


void test_numSquares() {
    int r = numSquares(12);
    ASSERT_EQ(r, 3);

    r = numSquares(13);
    ASSERT_EQ(r, 2);
}