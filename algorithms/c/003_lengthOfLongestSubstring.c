
#include <stdio.h>
#include <string.h>

int lengthOfLongestSubstring(char *s) {
    int ht[256] = {0};

    int max = 0;
    int i = 0;
    int j = 0;

    int len = strlen(s);

    while (i < len && j < len) {
        if (!ht[s[j]]) {
            ht[s[j]]++;
            j++;
            if (j - i > max) {
                max = j - i;
            }
        } else {
            ht[s[i]]--;
            i++;
        }
    }

    return max;
}

void test_lengthOfLongestSubstring() {
    char *s = "abcabcbb";
    int ret = lengthOfLongestSubstring(s);
    printf("3 = %d\n", ret);

    s = "bbbbb";
    ret = lengthOfLongestSubstring(s);
    printf("1 = %d\n", ret);

    s = "pwwkew";
    ret = lengthOfLongestSubstring(s);
    printf("3 = %d\n", ret);
}