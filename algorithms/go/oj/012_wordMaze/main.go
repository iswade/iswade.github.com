package main

import (
	"fmt"
)

// TODO: 待分析矩阵的深度优先遍历

func wordMaze(n, x, y int, s string, maze [][]byte) bool {

	if x < 0 || x >= len(maze) || y < 0 || y >= len(maze[0]) {
		return false
	}

	if maze[x][y] != s[n] {
		return false
	}

	if n == len(s)-1 {
		return true
	}

	tmp := maze[x][y]
	maze[x][y] = '#'

	if wordMaze(n+1, x+1, y, s, maze) ||
		wordMaze(n+1, x-1, y, s, maze) ||
		wordMaze(n+1, x, y+1, s, maze) ||
		wordMaze(n+1, x, y-1, s, maze) {
		return true
	}
	maze[x][y] = tmp
	return false
}

func main() {
	var n int
	var m int
	_, err := fmt.Scan(&n, &m)
	if err != nil {
		return
	}

	var word string
	_, err = fmt.Scanln(&word)
	if err != nil {
		return
	}

	var matrix [][]byte

	for i:=0; i < n; i++ {
		var line string
		_, err := fmt.Scanln(&line)
		if err != nil {
			return
		}
		matrix = append(matrix, []byte(line))
	}

	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			if wordMaze(0, i, j, word, matrix) {
				fmt.Println("YES")
				return
			}
		}
	}

	fmt.Println("NO")
}
