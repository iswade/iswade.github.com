#ifndef __COMMON_H__
#define __COMMON_H__

#include <stdio.h>
#include <string.h>
#include "stdlib.h"
#include "limits.h"
#include "stdbool.h"
#include "math.h"

#ifdef __win32__
#define __FILENAME__ (strrchr(__FILE__, '\\') ? strrchr(__FILE__, '\\') + 1 : __FILE__)
#else
#define __FILENAME__ (strrchr(__FILE__, '/') ? strrchr(__FILE__, '/') + 1 : __FILE__)
#endif

char *log_Time();

#define ASSERT_EQ(a, b) \
{ \
    printf("[%s %s:%d %s]", log_Time(), __FILENAME__, __LINE__, __func__); \
    if (a == b) { printf(" success\n");} \
    else { printf(" failed\n"); } \
}

#define TEST_CASE(name) \
{ \
    printf("================== "); \
    printf(" %s\n", #name); \
    name(); \
}

#define MIN(a, b) (a) > (b) ? (b): (a)
#define MAX(a, b) (a) < (b) ? (b): (a)

void printArray(int arr[], int size);

#endif