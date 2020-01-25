//
// Created by wade on 2019/10/9.
//
#include "common.h"

bool ConsecutiveInteger1(int n) {
    if (n == 1) {
        return false;
    }

    int left = 1;
    int right = 2;

    while (left < right && right < n) {

        int sum = (int) ((right + left) / 2.0 * (right - left + 1));

        if (sum == n) {
            return true;
        }

        if (sum < n) {
            right++;
        }

        if (sum > n) {
            left++;
        }
    }

    return false;
}

bool ConsecutiveInteger(int n) {
    if (n == 1) {
        return false;
    }

    // 奇数，可以分解
    if (n % 2 == 1) {
        return true;
    }

    // 2的幂，不能分解
    unsigned long i = (unsigned long) n;
    if (((i & (i - 1)) == 0)) {
        return false;
    }

    // 非2的幂的偶数，可以分解
    return true;
}

void test_ConsecutiveInteger() {
    bool r = ConsecutiveInteger(15);
    ASSERT_EQ(r, true);

    r = ConsecutiveInteger(2);
    ASSERT_EQ(r, false);

    r = ConsecutiveInteger(3);
    ASSERT_EQ(r, true);

    r = ConsecutiveInteger(4);
    ASSERT_EQ(r, false);

    r = ConsecutiveInteger(1073741824);
    ASSERT_EQ(r, false);


#if 0
    int n = 0;
    scanf("%d", &n);

    bool ret = ConsecutiveInteger(n);
    if (ret == true) {
        printf("YES\n");
    } else {
        printf("NO\n");
    }
#endif
}