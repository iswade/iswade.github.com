//
// Created by wade on 2019/10/11.
//
#include "common.h"

struct ListNode {
    int val;
    struct ListNode *next;
};

struct ListNode* rotateRight(struct ListNode* head, int k){

    int i = 0;
    struct ListNode *prev = NULL;
    struct ListNode *cur = head;

    int size = 0;

    if (head == NULL) {
        return NULL;
    }

    if (k == 0) {
        return head;
    }

    while (cur) {
        prev = cur;
        cur = cur->next;
        size++;
    }

    if (prev != NULL) {
        prev->next = head;
    }

    cur = head;
    i = 0;

    k = k % size;  // if k > size

    while (i < (size - k - 1)) {
        cur = cur->next;
        i++;
    }

    head = cur->next;
    cur->next = NULL;

    return head;
}

extern void print_llist(struct ListNode *head);

void test_rotateRight01() {
    struct ListNode n1, n2, n3;

    n1.val = 0; n1.next = &n2;
    n2.val = 1; n2.next = &n3;
    n3.val = 2; n3.next = NULL;

    struct ListNode *r = rotateRight(&n1, 4);
    print_llist(r);
}

void test_rotateRight02() {
    struct ListNode n1, n2, n3, n4, n5;

    n1.val = 1; n1.next = &n2;
    n2.val = 2; n2.next = &n3;
    n3.val = 3; n3.next = &n4;
    n4.val = 4; n4.next = &n5;
    n5.val = 5; n5.next = NULL;

    struct ListNode *r = rotateRight(&n1, 2);
    print_llist(r);
}


void test_rotateRight03() {
    struct ListNode n1;

    n1.val = 1; n1.next = NULL;

    struct ListNode *r = rotateRight(&n1, 2);
    print_llist(r);
}

void test_rotateRight04() {
    struct ListNode n1, n2;

    n1.val = 1; n1.next = &n2;
    n2.val = 2; n2.next = NULL;

    struct ListNode *r = rotateRight(&n1, 1);
    print_llist(r);
}


void test_rotateRight() {
    test_rotateRight01();
    test_rotateRight02();
    test_rotateRight03();
    test_rotateRight04();
}