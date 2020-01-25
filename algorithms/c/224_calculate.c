#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/*
typedef struct _stack{
	list_t *list;
	node_t *top_node;
} stack;

stack *new_stack() {
	stack * s = malloc(sizeof(stack));
	s->list = new_list();
	s->top_node = NULL;
}

void push(stack *s, int i, int type) {
	node_t *node = new_node(i, type);
	insert_last(s->list, node);
	s->top_node = node;
}

void pop(stack *s, int *i, int *type) {
	node_t *node = NULL;
	node = delete_last(s->list);
	*i = node->key;
	*type = node->type;
	if (s->list->count == 0) {
		s->top_node = NULL;
	}
}

void top(stack *s, int *i, int *type) {
	*i = s->top_node->key;
	*type = s->top_node->type;
}

#define TOKEN_NUM 0
#define TOKEN_PLUS 1
#define TOKEN_MINUS 2
#define TOKEN_LEFT 3
#define TOKEN_RIGHT 4

int calculate(char * s) {
	char c;
	int len = strlen(s);
	int i = 0;
	int num = 0;
	int sign = 1;

	int res = 0;

	stack *s1 = new_stack();
	stack *s2 = new_stack();
	int flag = 0;
	for (i = 0; i < len; i++) {
		c = s[i];
		if (c >= '0' && c <= '9') {
			num = num * 10 + (c - '0');
			continue;
		}
		
		if (c == '+') {
			int i;
			int type;
			top(s2, &i, &type);
			if (type == TOKEN_LEFT || type == TOKEN_RIGHT) {
				
			}
			push(s1, num, TOKEN_NUM);
			push(s2, c, TOKEN_PLUS);
			num = 0;
		}
		else if (c == '-') {
			push(s1, num, TOKEN_NUM);
			push(s2, c, TOKEN_MINUS);
			num = 0;
		}
		else if (c == '(') {
			push(s2, c, TOKEN_LEFT);
		}
		else if (c == ')') {
			int i;
			int type;

			while (1) {
				top(s2, &i, &type);
				if (type == TOKEN_LEFT) {
					pop(s2, &i, &type);
					break;
				}
				else {
					pop(s2, &i, &type);
					push(s1, i, type);
				}
			}
		}
	}

	return res;
}


void test_calculate()
{
	int ret = 0;
	
	ret = calculate("1 + 2 + 3");
	if (ret != 6) {
		printf("1 + 2 + 3 = %d", ret);
	}

	ret = calculate("(1+(4+5+2)-3)+(6+8)");
	if (ret != 23) {
		printf("(1+(4+5+2)-3)+(6+8) = %d", ret);
	}
}

*/