#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct ListNode {
    int val;
    struct ListNode *next;
};

int has_k_elements(struct ListNode *head, int k) {
    struct ListNode *cur = head;
    int i = 0;
    while (cur) {
        i++;
        if (i >= k) {
            return 1;
        }
        cur = cur->next;
    }

    return 0;
}

void reverseK(struct ListNode *head, struct ListNode **khead, struct ListNode **klast, int k) {
    struct ListNode *cur = head;
    struct ListNode *cur_next = NULL;

    int i = 0;

    while (1) {
        i++;
        if (i > k) {
            (*klast)->next = cur;
            break;
        }
        if (*khead == NULL) {
            *khead = cur;
            *klast = cur;
            cur_next = cur->next;
        } else {
            cur_next = cur->next;
            cur->next = *khead;
            *khead = cur;
        }

        cur = cur_next;
    }
}

struct ListNode *reverseKGroup(struct ListNode *head, int k) {
    struct ListNode *nhead = NULL; // new head
    struct ListNode *nlast = NULL;
    struct ListNode *cur = head;
    struct ListNode *khead = NULL;
    struct ListNode *klast = NULL;
    int i = 0;
    while (cur) {
        if (has_k_elements(cur, k)) {
            khead = NULL;
            klast = NULL;
            reverseK(cur, &khead, &klast, k);
            if (nhead == NULL) {
                nhead = khead;
                nlast = klast;
            } else {
                nlast->next = khead;
                nlast = klast;
            }

            cur = nlast->next;
        } else {
            if (nhead == NULL) {
                nhead = cur;
            } else {
                nlast->next = cur;
            }
            break;
        }
    }

    return nhead;
}

void print_llist(struct ListNode *head) {
    struct ListNode *cur = head;
    while (cur) {
        printf("%d ", cur->val);
        cur = cur->next;
    }

    printf("\n");
}

void test_reverse_01() {
    struct ListNode n1 = {5, NULL};
    struct ListNode n2 = {4, &n1};
    struct ListNode n3 = {3, &n2};
    struct ListNode n4 = {2, &n3};
    struct ListNode n5 = {1, &n4};
    print_llist(&n5);
    struct ListNode *ret = reverseKGroup(&n5, 4);
    print_llist(ret);
}

void test_reverse_02() {
    struct ListNode n1 = {2, NULL};
    struct ListNode n2 = {1, &n1};

    print_llist(&n2);
    struct ListNode *ret = reverseKGroup(&n2, 2);
    print_llist(ret);
}

void test_has_k_elems() {
    test_reverse_02();
}