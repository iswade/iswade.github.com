#include <stdio.h>
#include "common.h"

int coinChange(int *coins, int amount) {
    int max = amount / 3;
    int count = 0;
    for (int i = 0; i < max + 1; i++) {
        count += (amount - 3 * i) / 2 + 1;
    }

    return count;
}

void test_coinChange() {
    int n = 0;
    int coins[3] = {1, 2, 3};
    while (scanf("%d", &n) != EOF) {
        printf("%d\n", coinChange(coins, n));
    }
}