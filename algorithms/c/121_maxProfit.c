#include <stdlib.h>
#include "common.h"
#include <limits.h>

int maxProfitN2(int *prices, int pricesSize) {
    int max = INT_MIN;
    for (int i = 0; i < pricesSize - 1; i++) {
        for (int j = i + 1; j < pricesSize; j++) {
            if (prices[j] - prices[i] > max) {
                max = prices[j] - prices[i];
            }
        }
    }

    return max < 0 ? 0 : max;
}

int maxProfit(int *prices, int pricesSize) {
    int min = INT_MAX;
    int max = 0;
    for (int i = 0; i < pricesSize; i++) {
        if (prices[i] < min)
            min = prices[i];
        else if (prices[i] - min > max)
            max = prices[i] - min;
    }
    return max;
}


void test_maxProfit01() {
    int prices[] = {7, 1, 5, 3, 6, 4};
    int ret = maxProfit(prices, sizeof(prices) / sizeof(int));
    ASSERT_EQ(ret, 5);
}

void test_maxProfit02() {
    int prices[] = {7, 6, 4, 3, 1};
    int ret = maxProfit(prices, sizeof(prices) / sizeof(int));
    ASSERT_EQ(ret, 0);
}

void test_maxProfit() {
    test_maxProfit01();
    test_maxProfit02();
}