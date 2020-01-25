//
// Created by wade on 2019-10-05.
//
#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include "common.h"

struct ListNode {
    int val;
    struct ListNode *next;
};

bool hasCycle(struct ListNode *head) {
    struct ListNode *p = head;
    struct ListNode *q = head;

    if (p == NULL) {
        return false;
    }

    q = head->next;
    while (p != q) {
        if (p == NULL || q == NULL || q->next == NULL) {
            return false;
        }
        p = p->next;
        q = q->next->next;
    }

    return true;
}

#include "ht.h"

bool hasCycle_ht(struct ListNode *head) {
    ht_t *ht = ht_new(ht_int_hash, ht_int_compare, ht_int_free);

    while (head != NULL) {
        if (ht_lookup(ht, head) != NULL) {
            return true;
        } else {
            ht_insert(ht, head, (void *) 1L);
        }

        head = head->next;
    }

    return false;
}

void test_hasCycle1() {
    struct ListNode n1, n2, n3, n4;

    n1.val = 3;
    n1.next = &n2;
    n2.val = 2;
    n2.next = &n3;
    n3.val = 0;
    n3.next = &n4;
    n4.val = -1;
    n4.next = &n2;

    bool r = hasCycle_ht(&n1);
    ASSERT_EQ(r, true);
}

void test_hasCycle2() {
    struct ListNode n1, n2;

    n1.val = 1;
    n1.next = &n2;
    n2.val = 2;
    n2.next = &n1;

    bool r = hasCycle_ht(&n1);
    ASSERT_EQ(r, true);
}

void test_hasCycle3() {
    struct ListNode n1;

    n1.val = 1;
    n1.next = NULL;

    bool r = hasCycle_ht(&n1);
    ASSERT_EQ(r, false);
}

void test_hasCycle() {
    test_hasCycle1();
    test_hasCycle2();
    test_hasCycle3();
}