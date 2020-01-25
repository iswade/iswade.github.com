#include "common.h"

int **subsets(int *nums, int numsSize, int *returnSize, int **returnColumnSizes) {

    int max = (int)pow(2, numsSize);
    int **ret = malloc(sizeof(int *) * max);
    int retSize = 0;
    int *retColumns = malloc(sizeof(int) * max);

    // add []
    retColumns[0] = 0;
    retSize = 1;

    for (int i = 0; i < numsSize; i++) {
        int size = retSize;
        for (int j = 0; j < size; j++) {
            int k = retColumns[j];

            int *a = malloc(sizeof(int) * (k + 1));

            memcpy(a, ret[j], sizeof(int) * k);

            a[k] = nums[i];
            k++;

            retColumns[retSize] = k;
            ret[retSize] = a;
            retSize++;
        }
    }

    *returnColumnSizes = retColumns;
    *returnSize = retSize;
    return ret;
}


void test_subsets() {
    int a[4];

    for (int i = 0; i < 4; i++) {
        a[i] = (i + 1) * 10;
    }

    int res_size = 0;
    int *res_cols = NULL;
    int **res = subsets(a, 4, &res_size, &res_cols);
    ASSERT_EQ(res_size, 16);
    for (int i = 0; i < res_size; i++) {
        printf("%d: ", i);
        printArray(res[i], res_cols[i]);
        free(res[i]);
    }

    free(res_cols);

    res = subsets(a, 3, &res_size, &res_cols);
    ASSERT_EQ(res_size, 8);
    for (int i = 0; i < res_size; i++) {
        printf("%d: ", i);
        printArray(res[i], res_cols[i]);
        free(res[i]);
    }

    free(res_cols);
}

