//
// Created by wade on 2019-09-23.
//


#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <stdbool.h>


char *longestPalindrome(char *s) {
    int len = strlen(s);

    int i;
    int j;

    bool **dp;
    dp = malloc(sizeof(bool *) * (len));
    for (i = 0; i < len; i++) {
        dp[i] = malloc(len);
    }

    int max_len = 0;
    int res_left = 0;

    for (i = len - 1; i >= 0; i--) {
        for (j = i; j < len; j++) {
            dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i + 1][j - 1]);
            if (dp[i][j] == true && j - i + 1 > max_len) {
                res_left = i;
                max_len = j - i + 1;
            }

        }
    }

    char *res = malloc(max_len + 1);
    memcpy(res, s + res_left, max_len);
    res[max_len] = '\0';
    return res;
}

void test_longestPalindrome() {
    char *s = "babad";
    printf("%s\n", longestPalindrome(s));

    s = "cbbd";
    printf("%s\n", longestPalindrome(s));

    s = "a";
    printf("%s\n", longestPalindrome(s));
}
