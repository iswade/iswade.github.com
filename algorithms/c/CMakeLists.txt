cmake_minimum_required(VERSION 3.13)
project(c C)

set(CMAKE_C_STANDARD 11)

add_executable(c
        001_twoSum.c
        003_lengthOfLongestSubstring.c
        005_longestPalindrome.c
        015_threeSum.c
        020_isValid.c
        021_mergeTwoLists.c
        025_reverse_k_llist.c
        053_maxSubArray.c
        070_climbStairs.c
        076_minWindow.c
        078_subsets.c
        101_isSymmetric.c
        104_maxDepth.c
        121_maxProfit.c
        139_wordBreak.c
        141_hasCycle.c
        146_LRUcache.c
        155_minStack.c
        160_getIntersectionNode.c
        169_majorityElement.c
        198_rob.c
        206_reverseList.c
        224_calculate.c
        226_inverTree.c
        234_isPalindrome.c
        239_maxSlidingWindow.c
        279_numSquares.c
        283_moveZeroes.c
        287_findDuplicate.c
        295_medianFinderFindMedian.c
        297_treeSerialize.c
        437_pathSum.c
        438_findAnagrams.c
        461_hammingDistance.c
        484_findDisappearedNumbers.c
        538_convertBST.c
        543_diameterOfBinaryTree.c
        617_mergeTrees.c
        685_findRedundantDirectedConnection.c
        878_magic_number.c
        common.c
        common.h
        ht.c
        ht.h
        llist.c
        llist.h
        oj_056_coin_change.c
        queue.c
        queue.h
        sort.c
        stack.c
        stack.h
        test.c
        312_maxCoins.c
        581_findUnsortedSubarray.c
        338_countBits.c
        094_inorderTraversal.c
        oj_009_ConsecutiveInteger.c oj_010_Vowel.c binarySearch.c 899_orderlyQueue.c 061_rotateRight.c 810_xorGame.c 1147_longestDecomposition.c time.c 399_calcEquation.c++)


target_link_libraries(c
        m
        #        securec
        )