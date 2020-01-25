//
// Created by wade on 2019/10/9.
//

#include "common.h"


#define IS_LOW_VOWEL(c) c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u'
#define IS_UPPER_VOWEL(c) c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U'
#define IS_UPPER(c) c >= 'A' && c <= 'Z'

void Vowel(char *s, int len) {

    for (int i = 0; i < len; i++) {
        if (s[i] == '\0') {
            break;
        }

        if (IS_UPPER_VOWEL(s[i])) {
            continue;
        }

        if (IS_LOW_VOWEL(s[i])) {
            s[i] = s[i] - 'a' + 'A';
            continue;
        }

        if (IS_UPPER(s[i])) {
            s[i] = s[i] - 'A' + 'a';
        }
    }
}

void test_Vowel() {

    char s[128] = {0};

    fgets(s, 128, stdin);

    Vowel(s, 128);

    printf("%s", s);
}