package algorithms

func searchMatrixHelper(matrix [][]int, x1, y1, x2, y2, rows, cols, target int) bool {
	if x1 < 0 || x1 >= rows || y1 < 0 || y1 >= cols ||
		x2 < 0 || x2 >= rows || y2 < 0 || y2 >= cols {
		return false
	}

	if x1 > x2 || y1 > y2 {
		return false
	}

	mx := (x1 + x2) / 2
	my := (y1 + y2) / 2

	if matrix[mx][my] == target {
		return true
	}

	if matrix[mx][my] < target {
		if searchMatrixHelper(matrix, mx, my+1, x2, y2, rows, cols, target) {
			return true
		}
		if searchMatrixHelper(matrix, mx+1, y1, x2, my, rows, cols, target) {
			return true
		}
	} else {
		if searchMatrixHelper(matrix, x1, y1, mx, my-1, rows, cols, target) {
			return true
		}
		if searchMatrixHelper(matrix, x1, my, mx-1, y2, rows, cols, target) {
			return true
		}
	}
	return false
}

func binarySearch1(nums []int, left, right int, target int) int {
	for left <= right {
		mid := left + (right-left)/2
		if nums[mid] == target {
			return mid
		}
		if nums[mid] < target {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}

	return -1
}

func searchMatrix(matrix [][]int, target int) bool {
	rows := len(matrix)
	if rows == 0 {
		return false
	}
	cols := len(matrix[0])
	if cols == 0 {
		return false
	}

	var res []int
	for i := 0; i < rows; i++ {
		res = append(res, matrix[i]...)
	}

	if binarySearch1(res, 0, len(res)-1, target) == -1 {
		return false
	}
	return true

	return searchMatrixHelper(matrix, 0, 0, rows-1, cols-1, rows, cols, target)
}
