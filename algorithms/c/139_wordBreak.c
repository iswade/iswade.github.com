//
// Created by wade on 2019/10/7.
//
#include "limits.h"
#include "stdbool.h"
#include "string.h"
#include "common.h"
#include "ht.h"

bool wordHelper(char *s, char **wordDict, int wordDictSize, ht_t *ht) {

    unsigned int sLen = strlen(s);

    if (sLen == 0) {
        ht_insert(ht, s, (void *) (long) 1);
        return true;
    }

    for (int i = 0; i < wordDictSize; i++) {
        char *word = wordDict[i];
        unsigned int wLen = strlen(word);
        if ((int) (long) ht_lookup(ht, s) == 2) {
            continue;
        }

        if (wLen <= sLen && strncmp(s, word, wLen) == 0) {
            if (wordHelper(s + wLen, wordDict, wordDictSize, ht) == true) {
                return true;
            }

            ht_insert(ht, s + wLen, (void *) (long) 2);
        }
    }

    return false;
}

bool wordBreak(char *s, char **wordDict, int wordDictSize) {
    ht_t *ht = ht_new(ht_int_hash, ht_int_compare, ht_int_free);

    return wordHelper(s, wordDict, wordDictSize, ht);
}

void test_wordBreak01() {
    char *s = "leetcode";
    char *words[2];
    words[0] = "leet";
    words[1] = "code";

    bool r = wordBreak(s, words, 2);
    ASSERT_EQ(r, true);
}

void test_wordBreak02() {
    char *s = "applepenapple";
    char *words[2];
    words[0] = "apple";
    words[1] = "pen";

    bool r = wordBreak(s, words, 2);
    ASSERT_EQ(r, true);
}

void test_wordBreak03() {
    char *s = "catsandog";
    char *words[5];
    words[0] = "cats";
    words[1] = "dog";
    words[2] = "sand";
    words[3] = "and";
    words[4] = "cat";

    bool r = wordBreak(s, words, 5);
    ASSERT_EQ(r, false);
}

void test_wordBreak04() {
    char *s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab";
    char *words[10];
    words[0] = "a";
    words[1] = "aa";
    words[2] = "aaa";
    words[3] = "aaaa";
    words[4] = "aaaaa";
    words[5] = "aaaaaa";
    words[6] = "aaaaaaa";
    words[7] = "aaaaaaaa";
    words[8] = "aaaaaaaaa";
    words[9] = "aaaaaaaaaa";

    bool r = wordBreak(s, words, 10);
    ASSERT_EQ(r, false);
}

void test_wordBreak() {
    test_wordBreak01();
    test_wordBreak02();
    test_wordBreak03();
    test_wordBreak04();
}