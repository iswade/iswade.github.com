int q(int n, int m)
{
    if (n < 1 || m < 1) return 0;
    if (n == 1 || m == 1) return 1;
    if (n < m) return q(n, n);
    if (n == m) return q(n, m - 1) + 1;
    return q(n, m - 1) + q(n - m, m);
}

int main()
{

    // please define the C input here. For example: int n; scanf("%d",&n);
    int n = 0;

    // please finish the function body here.
    while (scanf("%d", &n) != EOF) {
        printf("%d\n", q(n, n));
    }

    // please define the C output here. For example: printf("%d\n",a);
    
    return 0;
}
