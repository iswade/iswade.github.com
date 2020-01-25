//
// Created by wade on 2019/10/10.
//
#include "common.h"

int cmpChar(const void *a, const void *b) {
    return *(char *)a - *(char *)b;
}

char * orderlyQueue(char * S, int K){
    if (K == 1) {
        size_t len = strlen(S);
        char *sub = malloc(sizeof(char) * (len + 1));
        strncpy(sub, S, len);
        sub[len] = 0;

        char *min = malloc(sizeof(char) * (len + 1));
        strncpy(min, S, len);
        min[len] = 0;

        for (size_t i = 0; i < len; i++) {
            char c = sub[0];
            memcpy(sub, sub + 1, len - 1);
            sub[len - 1] = c;
            if (strncmp(min, sub, len) > 0) {
                strcpy(min, sub);
            }
        }

        free(sub);

        return min;
    }

    if (K > 1) {
        size_t len = strlen(S);

        char *min = malloc(sizeof(char) * (len + 1));
        strcpy(min, S);
        min[len] = 0;

        qsort(min, len, sizeof(char), cmpChar);
        return min;
    }

    return S;
}

void test_orderlyQueue() {
    char s[4]="cba";
    printf("%s\n", orderlyQueue(s, 1));

    char s1[6] = "baaca";
    printf("%s\n", orderlyQueue(s1, 3));
}