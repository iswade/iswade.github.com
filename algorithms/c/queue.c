#include "queue.h"
#include <stdlib.h>
#include "common.h"

queue_t *queue_new() {
    queue_t *queue = malloc(sizeof(queue_t));
    queue->ll = ll_new(ll_int_compare, ll_int_free, ll_int_print);
    queue->count = 0;

    return queue;
}


void queue_insert(queue_t *queue, void *data) {
    ll_insert_right(queue->ll, data);
    queue->count++;
}

void *queue_delete(queue_t *queue) {
    if (queue->count <= 0) {
        return NULL;
    }

    queue->count--;
    return ll_delete_left(queue->ll);
}

int queue_count(queue_t *queue) {
    return queue->count;
}

void test_queue() {
    queue_t *queue = queue_new();

    queue_insert(queue, (void *) 1L);
    queue_insert(queue, (void *) 2L);
    queue_insert(queue, (void *) 3L);

    long r = 0;
    r = queue_count(queue);
    ASSERT_EQ(r, 3);

    r = (long) queue_delete(queue);
    ASSERT_EQ(r, 1);
    r = (long) queue_delete(queue);
    ASSERT_EQ(r, 2);
    r = (long) queue_delete(queue);
    ASSERT_EQ(r, 3);

    r = queue_count(queue);
    ASSERT_EQ(r, 0);

    r = (long) queue_delete(queue);
    ASSERT_EQ(r, 0);

    r = (long) queue_delete(queue);
    ASSERT_EQ(r, 0);

    r = queue_count(queue);
    ASSERT_EQ(r, 0);

}