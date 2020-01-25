//
// Created by wade on 2019/10/11.
//
#include "common.h"

bool xorGame(int* nums, int numsSize){
    unsigned int xor = 0;
    for (int i = 0; i < numsSize; i++) {
        xor ^= nums[i];
    }

    return xor == 0 || numsSize % 2 == 0;
}