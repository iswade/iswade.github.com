//
// Created by wade on 2019-10-07.
//
#include "common.h"

int *findAnagrams(char *s, char *p, int *returnSize) {
    size_t sLen = strlen(s);
    size_t pLen = strlen(p);

    if (sLen < pLen) {
        *returnSize = 0;
        return NULL;
    }

    int needs[128] = {0};
    int window[128] = {0};
    int needs_len = 0;

    for (size_t i = 0; i < pLen; i++) {
        if (needs[p[i]] == 0) {
            needs_len++;
        }

        needs[p[i]]++;
    }

    int *ret = malloc(sizeof(int) * sLen);
    int count = 0;

    int right = 0;
    int left = 0;
    int matched = 0;

    while (right < sLen) {

        if (needs[s[right]]) {
            window[s[right]]++;

            if (window[s[right]] == needs[s[right]]) {
                matched++;
            }
        }

        right++;

        while (matched == needs_len) {

            if (right - left == pLen) {
                ret[count] = left;
                count++;
            }

            if (needs[s[left]]) {
                window[s[left]]--;
                if (window[s[left]] < needs[s[left]]) {
                    matched--;
                }
            }

            left++;
        }

    }

    *returnSize = count;
    return ret;
}


void test_findAnagrams() {
    char *s = "abab";
    char *p = "ab";

    int count = 0;
    int *ret = findAnagrams(s, p, &count);
    ASSERT_EQ(count, 3);
    ASSERT_EQ(ret[0], 0);
    ASSERT_EQ(ret[1], 1);
    ASSERT_EQ(ret[2], 2);
    free(ret);

    s = "cbaebabacd";
    p = "abc";
    count = 0;
    ret = findAnagrams(s, p, &count);
    ASSERT_EQ(count, 2);
    ASSERT_EQ(ret[0], 0);
    ASSERT_EQ(ret[1], 6);

    s = "kzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgocasbmlr";
    p = "ykzexfqiudtwvpjnhgocasbmlr";
    count = 0;
    ret = findAnagrams(s, p, &count);
    ASSERT_EQ(count, 7774);
}