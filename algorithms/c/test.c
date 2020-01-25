#include <stdio.h>
#include "common.h"

extern void test_stack();

extern void test_queue();

extern void test_llist();

extern void test_hash_table();

extern void test_threeSum();

extern void test_maxSlidingWindow();

extern void test_findDuplicate();

extern void test_serializeDeserialize();

extern void test_maxProfit();

extern void test_minStack();

extern void test_LRUcache();

extern void test_pathSum();

extern void test_isSymmetric();

extern void test_climbStairs();

extern void test_diameterOfBinaryTree();

extern void test_hasCycle();

extern void test_numSquares();

extern void test_rob();

extern void test_maxSubArray();

extern void test_isPalindrome();

extern void test_wordBreak();

extern void test_medianFinderFindMedian();

extern void test_isValid();

extern void test_findAnagrams();

extern void test_minWindow();

extern void test_findUnsortedSubarray();

extern void test_countBits();

extern void test_inorderTraversal();

extern void test_ConsecutiveInteger();

extern void test_Vowel();

extern void test_binarySearch();

extern void test_binarySqrt();

extern void test_subsets();

extern void test_orderlyQueue();

extern void test_rotateRight();

extern void TestUsedTime();

void test_suite() {
    TEST_CASE(TestUsedTime);
//    TEST_CASE(test_rotateRight);
//    TEST_CASE(test_orderlyQueue);
//    TEST_CASE(test_subsets);
//    TEST_CASE(test_binarySqrt);
//    TEST_CASE(test_binarySearch);
//    TEST_CASE(test_Vowel);
//    TEST_CASE(test_ConsecutiveInteger);
//    TEST_CASE(test_inorderTraversal);
//    TEST_CASE(test_countBits);
//    TEST_CASE(test_findUnsortedSubarray);
//    TEST_CASE(test_minWindow);
//    TEST_CASE(test_findAnagrams);
//    TEST_CASE(test_isValid);
//    TEST_CASE(test_llist);
//    TEST_CASE(test_stack);
//    TEST_CASE(test_queue);
//    TEST_CASE(test_hash_table);
//    TEST_CASE(test_threeSum);
//    TEST_CASE(test_maxSlidingWindow);
//    TEST_CASE(test_findDuplicate);
//    TEST_CASE(test_serializeDeserialize);
//    TEST_CASE(test_maxProfit);
//    TEST_CASE(test_llist);
//    TEST_CASE(test_stack);
//    TEST_CASE(test_queue);
//    TEST_CASE(test_hash_table);
//    TEST_CASE(test_LRUcache);
//    TEST_CASE(test_minStack);
//    TEST_CASE(test_pathSum);
//    TEST_CASE(test_isSymmetric);
//    TEST_CASE(test_climbStairs);
//    TEST_CASE(test_diameterOfBinaryTree);
//    TEST_CASE(test_hasCycle);
//    TEST_CASE(test_numSquares);
//    TEST_CASE(test_rob);
//    TEST_CASE(test_maxSubArray);
//    TEST_CASE(test_isPalindrome);
//    TEST_CASE(test_wordBreak);
//    TEST_CASE(test_medianFinderFindMedian);
}

int main() {
    setbuf(stdout, 0);
    printf("------------------------------------------------ TEST SUITE BEGIN\n");

    test_suite();

    printf("------------------------------------------------ TEST SUITE END\n");
    return 0;
}
