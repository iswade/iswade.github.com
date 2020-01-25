#include <stdio.h>
#include <stdlib.h>


int majorityElement(int *nums, int numsSize) {
    int i = 0;

    int count = 0;
    int target = 0;

    for (i = 0; i < numsSize; i++) {
        if (count == 0) {
            target = nums[i];
        }
        count += (nums[i] == target) ? 1 : -1;
    }

    return target;
}

