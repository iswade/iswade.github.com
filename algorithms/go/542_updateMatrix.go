package algorithms

import "math"

func find1Path(matrix [][]int, rows, cols int, x, y int) int {
	if matrix[x][y] == 0 {
		return 0
	}

	visited := make([][]bool, rows)
	for i := 0; i < rows; i++ {
		visited[i] = make([]bool, cols)
	}

	posX := []int{-1, 1, 0, 0}
	posY := []int{0, 0, 1, -1}

	queue := make([][]int, 0, rows)
	visited[x][y] = true
	queue = append(queue, []int{x, y})
	for len(queue) > 0 {
		v := queue[0]
		visited[v[0]][v[1]] = true
		queue = queue[1:]
		if matrix[v[0]][v[1]] == 0 {
			return int(math.Abs(float64(v[0]-x)) + math.Abs(float64(v[1]-y)))
		}
		for i := 0; i < 4; i++ {
			newX := v[0] + posX[i]
			newY := v[1] + posY[i]
			if newX >= 0 && newX < rows && newY >= 0 && newY < cols && visited[newX][newY] != true {
				if matrix[newX][newY] == 0 {
					return int(math.Abs(float64(newX-x)) + math.Abs(float64(newY-y)))
				}
				queue = append(queue, []int{newX, newY})
			}
		}
	}

	return 0
}

// my solution performance is poor only beat 5%
func updateMatrix1(matrix [][]int) [][]int {
	var res [][]int
	for i := 0; i < len(matrix); i++ {
		var line []int
		for j := 0; j < len(matrix[i]); j++ {
			r := find1Path(matrix, len(matrix), len(matrix[i]), i, j)
			line = append(line, r)
		}
		res = append(res, line)
	}
	return res
}

func updateMatrix(matrix [][]int) [][]int {
	r := len(matrix)
	c := len(matrix[0])
	var dist [][]int
	var queue [][]int
	for i := 0; i < r; i++ {
		line := make([]int, c)
		dist = append(dist, line)
		for j := 0; j < c; j++ {
			if matrix[i][j] == 0 {
				dist[i][j] = 0
				queue = append(queue, []int{i, j})
			} else {
				line[j] = math.MaxInt64
			}
		}
	}

	posX := []int{-1, 1, 0, 0}
	posY := []int{0, 0, 1, -1}

	for len(queue) > 0 {
		v := queue[0]
		queue = queue[1:]
		for i := 0; i < 4; i++ {
			x := v[0] + posX[i]
			y := v[1] + posY[i]
			if x >= 0 && x < r && y >= 0 && y < c {
				if dist[x][y] > dist[v[0]][v[1]]+1 {
					dist[x][y] = dist[v[0]][v[1]] + 1
					queue = append(queue, []int{x, y})
				}
			}
		}
	}
	return dist
}
