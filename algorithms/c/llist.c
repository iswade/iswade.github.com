#include <stdio.h>
#include <stdlib.h>
#include "llist.h"


ll_node_t *ll_new_node(void *data) {
    ll_node_t *n = malloc(sizeof(ll_node_t));
    n->data = data;
    n->next = NULL;
    n->prev = NULL;
    return n;
}

void ll_free_node(ll_node_t *node) {
    node->data = 0;
    node->prev = NULL;
    node->next = NULL;
    free(node);
}

ll_t *ll_new(ll_compare_func_t compare_func, ll_free_func_t free_func, ll_print_func_t print_func) {
    ll_t *list = malloc(sizeof(ll_t));
    list->head = NULL;
    list->last = NULL;
    list->count = 0;
    list->compare_func = compare_func;
    list->free_func = free_func;
    list->print_func = print_func;
    return list;
}

ll_node_t *ll_insert_right(ll_t *list, void *data) {
    if (list == NULL) {
        return NULL;
    }

    ll_node_t *node = ll_new_node(data);

    if (list->head == NULL) {
        list->head = node;
        list->last = node;
    } else {
        node->prev = list->last;
        list->last->next = node;
        list->last = node;
    }

    list->count++;

    return node;
}

ll_node_t *ll_insert_left(ll_t *list, void *data) {
    if (list == NULL) {
        return NULL;
    }

    ll_node_t *node = ll_new_node(data);

    if (list->head == NULL) {
        list->head = node;
        list->last = node;
    } else {
        node->next = list->head;
        list->head->prev = node;
        list->head = node;
    }

    list->count++;

    return node;
}

ll_node_t *ll_search(ll_t *list, void *data) {
    if (list == NULL) {
        return NULL;
    }

    ll_node_t *node = list->head;

    while (node) {
        if (list->compare_func(node->data, data) == 0) {
            return node;
        }
        node = node->next;
    }
    return NULL;
}

void *ll_delete_data(ll_t *list, void *data) {
    ll_node_t *node = ll_search(list, data);

    return ll_delete_node(list, node);
}

void *ll_delete_nth(ll_t *list, int n) {
    if (list == NULL) {
        return NULL;
    }

    if (n > list->count) {
        return NULL;
    }

    ll_node_t *node = list->head;
    int i = 1;

    while (i != n) {
        node = node->next;
        i++;
    }

    return ll_delete_node(list, node);
}


void *ll_get_nth(ll_t *list, int n) {
    if (list == NULL) {
        return NULL;
    }

    if (n > list->count) {
        return NULL;
    }

    ll_node_t *node = list->head;
    int i = 1;

    while (i != n) {
        node = node->next;
        i++;
    }

    return node->data;
}

void *ll_get_last(ll_t *list) {
    if (list == NULL) {
        return NULL;
    }

    if (list->count <= 0) {
        return NULL;
    }

    return list->last->data;
}

void *ll_delete_left(ll_t *list) {
    if (list == NULL) {
        return NULL;
    }

    if (list->head == NULL) {
        return NULL;
    }

    if (list->last == list->head) {
        list->last = NULL;
    }

    ll_node_t *node = list->head;
    list->head = list->head->next;

    if (list->head != NULL) {
        list->head->prev = NULL;
    }

    list->count--;

    void *data = node->data;
    ll_free_node(node);
    return data;
}

void *ll_delete_right(ll_t *list) {
    if (list == NULL) {
        return NULL;
    }

    if (list->last == NULL) {
        return NULL;
    }

    if (list->last == list->head) {
        list->head = NULL;
    }

    ll_node_t *node = list->last;
    list->last = list->last->prev;
    if (list->last != NULL) {
        list->last->next = NULL;
    }

    list->count--;

    void *data = node->data;
    ll_free_node(node);
    return data;
}

void *ll_delete_node(ll_t *list, ll_node_t *node) {
    if (list == NULL) {
        return NULL;
    }

    if (node == NULL) {
        return NULL;
    }

    if (node == list->head && node == list->last) {
        list->head = NULL;
        list->last = NULL;
    } else if (node == list->head) {
        list->head = node->next;
        list->head->prev = NULL;
    } else if (node == list->last) {
        list->last = list->last->prev;
        list->last->next = NULL;
    } else {
        node->prev->next = node->next;
        node->next->prev = node->prev;
    }

    void *data = node->data;
    ll_free_node(node);
    return data;
}

void ll_free(ll_t *list) {
    if (list == NULL) {
        return;
    }

    ll_node_t *cur = list->head;
    ll_node_t *next = NULL;

    while (cur) {
        next = cur->next;
        list->free_func(cur->data);
        ll_free_node(cur);
        cur = next;
    }

    list->head = NULL;
    list->last = NULL;
    list->count = 0;

    free(list);
}

void ll_print(ll_t *list) {
    if (list == NULL) {
        return;
    }

    ll_node_t *cur = list->head;

    while (cur) {
        list->print_func(cur->data);
        cur = cur->next;
    }

    printf("\n");
}

int ll_int_compare(const void *a, const void *b) {
    return (int) ((long) a - (long) b);
}

void ll_int_free(void *ptr) {

}

void ll_int_print(void *ptr) {
    printf("%ld ", (long) ptr);
}

void test_llist() {
    ll_t *l = ll_new(ll_int_compare, ll_int_free, ll_int_print);

    ll_insert_right(l, (void *) 10);
    ll_insert_right(l, (void *) 9);
    ll_insert_right(l, (void *) 20);
    ll_insert_right(l, (void *) 5);

    printf("list:");
    ll_print(l);

    ll_delete_nth(l, 4);
    ll_print(l);

    printf("del %d:", 9);
    ll_delete_data(l, (void *) 9);
    ll_print(l);

    printf("del %d:", 9);
    ll_delete_data(l, (void *) 9);
    ll_print(l);

    printf("del %d:", 10);
    ll_delete_data(l, (void *) 10);
    ll_print(l);

    printf("del first:");
    ll_delete_left(l);
    ll_print(l);

    printf("del first:");
    ll_delete_left(l);
    ll_print(l);

    printf("insert last %d:", 32);
    ll_insert_right(l, (void *) 32);
    ll_print(l);

    printf("del first:");
    ll_delete_left(l);
    ll_print(l);

    printf("insert first %d:", 64);
    ll_insert_left(l, (void *) 64);
    ll_print(l);

    printf("del last:");
    ll_delete_right(l);
    ll_print(l);

    ll_free(l);
    l = NULL;
}
