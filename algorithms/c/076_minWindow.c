
#include "common.h"


char *minWindow(char *s, char *t) {
    int left = 0;
    int right = 0;
    int start = 0;

    int window[256] = {0};
    int needs[256] = {0};

    int i = 0;

    int t_len = strlen(t);
    int needs_size = 0;
    for (i = 0; i < t_len; i++) {
        if (needs[t[i]] == 0) {
            needs_size++;
        }
        needs[t[i]]++;
    }

    int s_len = strlen(s);
    int match = 0;
    int minLen = INT_MAX;

    while (right < s_len) {
        char c1 = s[right];
        if (needs[c1]) {
            window[c1]++;
            if (window[c1] == needs[c1]) {
                match++;
            }
        }
        right++;

        while (match == needs_size) {
            if (right - left < minLen) {
                start = left;
                minLen = right - left;
            }

            char c2 = s[left];
            if (needs[c2]) {
                window[c2]--;
                if (window[c2] < needs[c2]) {
                    match--;
                }
            }
            left++;
        }
    }

    if (minLen == INT_MAX) {
        return "";
    } else {
        char *a = malloc(s_len + 1);
        memcpy(a, &s[start], minLen);
        a[minLen] = '\0';
        return a;
    }
}

void test_minWindow() {
    char *res = NULL;
    res = minWindow("ADOBECODEBANC", "ABC");
    ASSERT_EQ(strcmp(res, "BANC"), 0);
}