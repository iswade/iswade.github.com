//
// Created by wade on 2019-10-05.
//
#include "common.h"

int climbStairs(int n) {
    if (n == 1) {
        return 1;
    }

    if (n == 2) {
        return 2;
    }

    return climbStairs(n - 1) + climbStairs(n - 2);
}

int climbStairs1(int n) {
    int a = 1;
    int b = 1;
    int c = 2;

    if (n == 1) {
        return b;
    }

    for (int i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }

    return c;
}


void test_climbStairs() {
    int r = climbStairs(44);
    ASSERT_EQ(r, 1134903170);

    r = climbStairs1(44);
    ASSERT_EQ(r, 1134903170);
}