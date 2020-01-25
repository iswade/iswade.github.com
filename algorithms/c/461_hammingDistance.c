
#include <stdio.h>
#include <stdlib.h>


int hammingDistance(int x, int y) {
    int n = x ^y;
    int count = 0;

    while (n != 0) {
        count++;
        n = n & (n - 1);
    }

    return count;
}

void test_hammingDistance() {

    char s[64] = {0};

    printf("%s", s);
}

