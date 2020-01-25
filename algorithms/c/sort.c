#include "common.h"

static int cmpstringp(const void *p1, const void *p2) {
    return strcmp(*(char *const *) p1, *(char *const *) p2);
}

int cmpint(const void *a, const void *b) {
    return *(int *) a - *(int *) b;
}

typedef struct node {
    int i;
} node_t;

int cmpstruct(const void *a, const void *b) {
    return ((node_t *) a)->i - ((node_t *) b)->i;
}


void swap(int *a, int *b) {
    int t = *a;
    *a = *b;
    *b = t;
}

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = low - 1;

    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }

    swap(&arr[i + 1], &arr[high]);

    return (i + 1);
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}


void test_sort() {
    int j;
    char *s[6] = {"ABC", "abc", "D", "def", "ghi", "123"};
    qsort(s, 6, sizeof(char *), cmpstringp);
    for (j = 0; j < 6; j++) printf("%s ", s[j]);
    printf("\n");

    int a[6] = {1, 8, 3, 10, 20, 0};
    qsort(a, 6, sizeof(int), cmpint);
    for (j = 0; j < 6; j++) printf("%d ", a[j]);
    printf("\n");

    node_t nodes[6];
    nodes[0].i = 1;
    nodes[1].i = 8;
    nodes[2].i = 3;
    nodes[3].i = 10;
    nodes[4].i = 20;
    nodes[5].i = 0;
    qsort(nodes, 6, sizeof(node_t), cmpstruct);
    for (j = 0; j < 6; j++) printf("%d ", nodes[j].i);
    printf("\n");

    void quickSort(int arr[], int low, int high);
    void printArray(int arr[], int size);
    int a1[6] = {1, 8, 3, 10, 20, 0};
    int n = sizeof(a1) / sizeof(a1[0]);
    quickSort(a1, 0, n - 1);
    printArray(a1, n);
}