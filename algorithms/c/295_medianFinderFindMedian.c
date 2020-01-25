//
// Created by wade on 2019/10/7.
//
#include "stdlib.h"
#include "stdio.h"

typedef struct {
    int count;
    int cap;
    int *data;
} MedianFinder;

#define MF_ARRAY_STEP 128

/** initialize your data structure here. */

MedianFinder *medianFinderCreate() {
    MedianFinder *mf = malloc(sizeof(MedianFinder));
    mf->count = 0;
    mf->data = malloc(sizeof(int) * (MF_ARRAY_STEP + 1));
    mf->cap = MF_ARRAY_STEP;
    return mf;
}

void medianFinderAddNum(MedianFinder *obj, int num) {

    if (obj->count == 0) {
        obj->data[0] = num;
    } else {
        int i = 0;
        for (i = obj->count - 1; i >= 0; i--) {
            if (obj->data[i] > num) {
                obj->data[i + 1] = obj->data[i];
            } else {
                obj->data[i + 1] = num;
                break;
            }
        }

        if (i == -1) {
            obj->data[0] = num;
        }
    }

    obj->count++;
    if (obj->count >= obj->cap) {
        obj->data = realloc(obj->data, sizeof(int) * (obj->cap + MF_ARRAY_STEP + 1));
        obj->cap = obj->cap + MF_ARRAY_STEP;
    }
}

double medianFinderFindMedian(MedianFinder *obj) {
    if (obj->count == 0) {
        return 0;
    }

    if (obj->count % 2 == 0) {
        int a = obj->count / 2;
        int b = a - 1;
        return (obj->data[a] + obj->data[b]) / 2.0;
    } else {
        return obj->data[obj->count / 2];
    }
}

void medianFinderFree(MedianFinder *obj) {
    free(obj->data);
    obj->data = NULL;
    obj->cap = 0;
    obj->count = 0;
    free(obj);
}

/**
 * Your MedianFinder struct will be instantiated and called as such:
 * MedianFinder* obj = medianFinderCreate();
 * medianFinderAddNum(obj, num);

 * double param_2 = medianFinderFindMedian(obj);

 * medianFinderFree(obj);
*/

void test_medianFinderFindMedian() {
    MedianFinder *obj = medianFinderCreate();
    medianFinderAddNum(obj, 4);
    medianFinderAddNum(obj, 3);

    double r = medianFinderFindMedian(obj);
    printf("expected: 3.5 result: %lf\n", r);

    medianFinderAddNum(obj, 2);
    r = medianFinderFindMedian(obj);
    printf("expected: 3   result: %lf\n", r);

    medianFinderAddNum(obj, 1);
    r = medianFinderFindMedian(obj);
    printf("expected: 2.5 result: %lf\n", r);

    medianFinderFree(obj);
}