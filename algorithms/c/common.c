//
// Created by wade on 2019/10/7.
//
#include <stdio.h>
#include <sys/timeb.h>
#include <time.h>

char *log_Time(void) {
    struct tm *ptm;
    struct timeb stTimeb;
    static char szTime[24];

    ftime(&stTimeb);
    ptm = localtime(&stTimeb.time);
//    sprintf(szTime, "%04d-%02d-%02d %02d:%02d:%02d.%03d", ptm->tm_year + 1900,
//            ptm->tm_mon + 1, ptm->tm_mday, ptm->tm_hour, ptm->tm_min, ptm->tm_sec, stTimeb.millitm);
    sprintf(szTime, "%02d:%02d:%02d.%03d", ptm->tm_hour, ptm->tm_min, ptm->tm_sec, stTimeb.millitm);
    szTime[23] = 0;
    return szTime;
}


void printArray(int arr[], int size) {
    int i;
    for (i = 0; i < size; i++)
        printf("%d ", arr[i]);
    printf("\n");
}


int gcd(int a, int b) {
    int temp;
    if (a < b) {
        temp = a;
        a = b;
        b = temp;
    }
    while (b != 0) {
        temp = a % b;
        a = b;
        b = temp;
    }
    return a;
}


int lcm(int a, int b) {
    int temp_lcm;
    temp_lcm = a * b / gcd(a, b);//最小公倍数等于两数之积除以其最大公约数
    return temp_lcm;
}