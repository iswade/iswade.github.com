package algorithms

import "math"

type DirectType int

const (
	directUp    DirectType = 0
	directDown  DirectType = 1
	directLeft  DirectType = 2
	directRight DirectType = 3
)

func directString(direct DirectType) string {
	switch direct {
	case directUp:
		return "u"
	case directDown:
		return "d"
	case directLeft:
		return "l"
	case directRight:
		return "r"
	default:
		return ""
	}
}

func isXYValid(x, y, rows, cols int) bool {
	if x == -1 || y == -1 || x == rows || y == cols {
		return false
	}
	return true
}

func findShortestWay(maze [][]int, ball []int, hole []int) string {
	rows := len(maze)
	if rows == 0 {
		return "impossible"
	}
	cols := len(maze[0])
	dp := make([][]int, rows)
	for i := 0; i < rows; i++ {
		dp[i] = make([]int, cols)
	}

	way := make([][]string, rows)
	for i := 0; i < rows; i++ {
		way[i] = make([]string, cols)
		for j := 0; j < cols; j++ {
			way[i][j] = ""
		}
	}

	var queue [][]int
	queue = append(queue, ball)
	posx := []int{-1, 1, 0, 0}
	posy := []int{0, 0, -1, 1}
	for len(queue) > 0 {
		cur := queue[0]
		queue = queue[1:]

		for i := 0; i < 4; i++ {
			nx := cur[0]
			ny := cur[1]
			for isXYValid(nx, ny, rows, cols) == true && maze[nx][ny] == 0 {
				if nx == hole[0] && ny == hole[1] {
					nx += posx[i]
					ny += posy[i]
					break
				}
				nx += posx[i]
				ny += posy[i]
			}

			nx -= posx[i]
			ny -= posy[i]

			steps := dp[cur[0]][cur[1]] + int(math.Abs(float64(nx-cur[0]))+math.Abs(float64(ny-cur[1])))

			if !(nx == cur[0] && ny == cur[1]) &&
				(dp[nx][ny] == 0 ||
					(dp[nx][ny] > steps ||
						(dp[nx][ny] == steps &&
							(way[cur[0]][cur[1]]+directString(DirectType(i))) < way[nx][ny]))) {
				dp[nx][ny] = steps
				way[nx][ny] = way[cur[0]][cur[1]] + directString(DirectType(i))
				if !(nx == hole[0] && ny == hole[1]) {
					queue = append(queue, []int{nx, ny})
				}
			}
		}
	}

	if way[hole[0]][hole[1]] == "" {
		return "impossible"
	}
	return way[hole[0]][hole[1]]
}
