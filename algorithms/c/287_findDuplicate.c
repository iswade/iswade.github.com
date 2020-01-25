//
// Created by wade on 2019/9/30.
//

#include "common.h"
#include "ht.h"

int findDuplicate(int *nums, int numsSize) {
    ht_t *ht = ht_new(ht_int_hash, ht_int_compare, ht_int_free);

    for (int i = 0; i < numsSize; i++) {
        if (ht_lookup(ht, (void *) (long) nums[i]) != NULL) {
            return nums[i];
        }

        ht_insert(ht, (void *) (long) nums[i], (void *) (long) 1);
    }

    return 0;
}


void test_findDuplicate01() {
    int nums[] = {1, 3, 2, 4, 3};

    int ret = findDuplicate(nums, sizeof(nums) / sizeof(int));
    ASSERT_EQ(ret, 3);
}

void test_findDuplicate02() {
    int nums[] = {3, 1, 3, 4, 2};

    int ret = findDuplicate(nums, sizeof(nums) / sizeof(int));
    ASSERT_EQ(ret, 3);
}

void test_findDuplicate() {
    test_findDuplicate01();
    test_findDuplicate02();
}