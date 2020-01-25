#include "llist.h"

typedef struct _queue {
    ll_t *ll;
    int count;
} queue_t;


queue_t *queue_new();

void queue_insert(queue_t *queue, void *data);

void *queue_delete(queue_t *queue);

int queue_count(queue_t *queue);