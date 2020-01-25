#include <stdio.h>
#include <stdlib.h>


struct ListNode {
    int val;
    struct ListNode *next;
};

struct ListNode *reverseList(struct ListNode *head) {
    struct ListNode *nhead = NULL;

    struct ListNode *cur = head;
    struct ListNode *node;
    while (cur) {
        if (nhead == NULL) {
            node = cur;
            cur = cur->next;
            nhead = node;
            nhead->next = NULL;
        } else {
            node = cur;
            cur = cur->next;
            node->next = nhead;
            nhead = node;
        }
    }

    return nhead;
}

void test_reverseList() {
    struct ListNode *res;

    struct ListNode n5 = {5, NULL};
    struct ListNode n4 = {4, &n5};
    struct ListNode n3 = {3, &n4};
    struct ListNode n2 = {2, &n3};
    struct ListNode n1 = {1, &n2};

    res = reverseList(&n1);
}

