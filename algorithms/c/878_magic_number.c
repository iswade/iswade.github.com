#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>


int nthMagicalNumber(int N, int A, int B) {
    int n = 0;
    int i = 1;

    while (1) {
        if (i % A == 0 || i % B == 0) {
            n++;
        }

        if (n == N) {
            break;
        }

        i++;
    }

    return i % (10000000 + 7);
}

void test_nthMagicalNumber() {
    int n;
    n = nthMagicalNumber(1, 2, 3);
    printf("1, 2, 3; 2 %d\n", n);
    n = nthMagicalNumber(4, 2, 3);
    printf("4, 2, 3; 6 %d\n", n);
    n = nthMagicalNumber(5, 2, 4);
    printf("5, 2, 4; 10 %d\n", n);
    n = nthMagicalNumber(3, 6, 4);
    printf("3, 6, 4; 8 %d\n", n);
}