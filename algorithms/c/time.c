//
// Created by wade on 2019/10/24.
//

#include "time.h"
#include "stdio.h"
#include "stdlib.h"

#define CALC_USED_TIME(max_ms, desc, code) \
{ \
    struct timespec wall; \
    (void)clock_gettime(CLOCK_MONOTONIC, &wall); \
    long long start  = wall.tv_sec * 1000000000L + wall.tv_nsec; \
    code; \
    (void)clock_gettime(CLOCK_MONOTONIC, &wall); \
    long long end  = wall.tv_sec * 1000000000L + wall.tv_nsec; \
    long long diff = (end - start) / 1000000L; \
    if (diff >= max_ms) { \
        printf(desc " used time = %llu ms, exceeded %d ms\n", diff, max_ms); \
    } \
}

static int cmpint(const void *a, const void *b) {
    return *(int *) a - *(int *) b;
}

void TestUsedTime() {

    int arr[1000000];
    int i;

    for (i = 0; i < 1000000; i++) {
        arr[i] = random();
    };

    CALC_USED_TIME(0, "test",
    qsort(arr, 1000000, sizeof(int), cmpint);
    );
}