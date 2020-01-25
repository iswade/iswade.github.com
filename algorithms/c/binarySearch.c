//
// Created by wade on 2019-10-09.
//
#include "common.h"

// if find the target number return index in array
// if not find, return -1
int binarySearch(int *array, int size, int target) {
    int left = 0;
    int right = size - 1;

    while (left <= right) {
        int mid = left + ((right - left) >> 1);

        int num = array[mid];
        if (num == target) {
            return mid;
        } else if (num < target) {
            left = mid + 1;
        } else if (num > target) {
            right = mid - 1;
        }
    }

    return -1;
}

double binarySqrt(int n) {
    double low = 0;
    double mid = n / 2.0;
    double high = n;

    while (fabs(mid * mid - n) > 0.000001) {
        if (mid * mid < n) {
            low = mid;
        } else {
            high = mid;
        }

        mid = low + ((high - low) / 2);
    }

    return mid;
}

void test_binarySearch() {
    int a1[] = {1};
    int idx = binarySearch(a1, sizeof(a1) / sizeof(int), 1);
    ASSERT_EQ(idx, 0);
    idx = binarySearch(a1, sizeof(a1) / sizeof(int), 2);
    ASSERT_EQ(idx, -1);
    idx = binarySearch(a1, sizeof(a1) / sizeof(int), -1);
    ASSERT_EQ(idx, -1);

    int a2[] = {1, 2, 3};
    idx = binarySearch(a2, sizeof(a2) / sizeof(int), -1);
    ASSERT_EQ(idx, -1);
    idx = binarySearch(a2, sizeof(a2) / sizeof(int), 1);
    ASSERT_EQ(idx, 0);
    idx = binarySearch(a2, sizeof(a2) / sizeof(int), 2);
    ASSERT_EQ(idx, 1);
    idx = binarySearch(a2, sizeof(a2) / sizeof(int), 3);
    ASSERT_EQ(idx, 2);
    idx = binarySearch(a2, sizeof(a2) / sizeof(int), 4);
    ASSERT_EQ(idx, -1);
}

void test_binarySqrt(int n) {
    double d = binarySqrt(2);
    printf("binarySqrt(2) = %lf, sqrt(2) = %lf\n", d, sqrt(2));
    d = binarySqrt(3);
    printf("binarySqrt(3) = %lf, sqrt(3) = %lf\n", d, sqrt(3));
}