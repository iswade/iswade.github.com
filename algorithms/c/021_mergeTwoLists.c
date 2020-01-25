#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>


struct ListNode {
    int val;
    struct ListNode *next;
};


struct ListNode *mergeTwoLists(struct ListNode *l1, struct ListNode *l2) {
    struct ListNode *head = NULL;
    struct ListNode *last = NULL;

    while (l1 && l2) {
        if (l1->val <= l2->val) {

            struct ListNode *node = l1;
            l1 = l1->next;
            node->next = NULL;

            if (head == NULL) {
                head = node;
                last = node;
            } else {
                last->next = node;
                last = node;
            }
        } else {
            struct ListNode *node = l2;
            l2 = l2->next;
            node->next = node;

            if (head == NULL) {
                head = node;
                last = node;
            } else {
                last->next = node;
                last = node;
            }
        }
    }

    while (l1) {
        struct ListNode *node = l1;
        l1 = l1->next;
        node->next = NULL;

        if (head == NULL) {
            head = node;
            last = node;
        } else {
            last->next = node;
            last = node;
        }
    }

    while (l2) {
        struct ListNode *node = l2;
        l2 = l2->next;
        node->next = NULL;

        if (head == NULL) {
            head = node;
            last = node;
        } else {
            last->next = node;
            last = node;
        }
    }

    return head;
}

extern void print_llist(struct ListNode *head);

void test_mergeTwoLists() {
    // 1->2->4, 1->3->4
    struct ListNode n4 = {4, NULL};
    struct ListNode n2 = {2, &n4};
    struct ListNode n1 = {1, &n2};

    struct ListNode m4 = {4, NULL};
    struct ListNode m3 = {3, &m4};
    struct ListNode m1 = {1, &m3};

    print_llist(&n1);
    print_llist(&m1);
    struct ListNode *r = mergeTwoLists(&n1, &m1);
    print_llist(r);

}
