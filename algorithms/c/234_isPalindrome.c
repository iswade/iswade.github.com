#include "stdbool.h"
#include "stdlib.h"
#include "math.h"
#include "common.h"

struct ListNode {
    int val;
    struct ListNode *next;
};

bool isPalindrome(struct ListNode *head) {
    if (head == NULL || head->next == NULL) {
        return true;
    }

    struct ListNode *slow = head;
    struct ListNode *fast = head->next;
    struct ListNode *pre = NULL;
    struct ListNode *prepare = NULL;

    while (fast != NULL && fast->next != NULL) {
        pre = slow;
        slow = slow->next;
        fast = fast->next->next;

        pre->next = prepare;
        prepare = pre;
    }

    struct ListNode *p2 = slow->next;
    slow->next = pre;
    struct ListNode *p1 = fast == NULL ? slow->next : slow;

    while (p1 != NULL) {
        if (p1->val != p2->val) {
            return false;
        }

        p1 = p1->next;
        p2 = p2->next;
    }

    return true;
}


void test_isPalindrome() {
    struct ListNode n1, n2, n3, n4;

    n1.val = 1;
    n1.next = &n2;
    n2.val = 2;
    n2.next = &n3;
    n3.val = 2;
    n3.next = &n4;
    n4.val = 1;
    n4.next = NULL;

    bool r = isPalindrome(&n1);
    ASSERT_EQ(r, true);

    n1.val = 1;
    n1.next = &n2;
    n2.val = 2;
    n2.next = NULL;
    r = isPalindrome(&n1);
    ASSERT_EQ(r, false);

    n1.val = 1;
    n1.next = &n2;
    n2.val = 2;
    n2.next = &n3;
    n3.val = 1;
    n3.next = NULL;
    r = isPalindrome(&n1);
    ASSERT_EQ(r, true);
}