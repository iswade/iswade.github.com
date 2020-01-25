//
// Created by wade on 2019/10/11.
//
#include "common.h"

int longestDecomposition(char * text){
    int res = 0;

    int len = strlen(text);

    int left_l = 0;
    int left_r = 1;
    int right_l = len - 1;
    int right_r = len;

    while (left_r <= right_l) {
        if (strncmp(text+left_l, text+right_l, left_r - left_l) == 0) {
            res += 2;
            left_l = left_r;
            right_r = right_l;
        }

        left_r++;
        right_l--;
    }

    return left_l == right_r ? res : res + 1;
}

