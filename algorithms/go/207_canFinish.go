package algorithms

func canFinishHelper(numCourses int, prerequisites [][]int, i int, visited []bool) bool {
	visitedCount := 0
	m := make(map[[2]int]bool)
	next := [2]int{prerequisites[i][0], prerequisites[i][1]}
	m[next] = true

	visited[i] = true

	for visitedCount < numCourses {
		index := -1
		j := i + 1
		count := 0
		for {
			if j == len(prerequisites) {
				j = 0
			}
			if prerequisites[j][1] == next[0] {
				index = j
				break
			}
			count++
			if count >= len(prerequisites) {
				break
			}

		}
		if index == -1 {
			return true
		}
		next = [2]int{prerequisites[index][0], prerequisites[index][1]}
		if _, ok := m[next]; ok {
			return false
		}
		visited[index] = true
		i = index
		m[next] = true
		visitedCount++
	}

	return true
}

func canFinish1(numCourses int, prerequisites [][]int) bool {
	visited := make([]bool, len(prerequisites))
	for i := 0; i < len(prerequisites); i++ {
		if visited[i] == true {
			continue
		}
		if canFinishHelper(numCourses, prerequisites, i, visited) == false {
			return false
		}
	}
	return true
}

func canFinish(numCourses int, pre [][]int) bool {
	var queue []int
	inDegrees := make([]int, numCourses)
	adj := make([][]int, numCourses)
	for i := 0; i < len(pre); i++ {
		adj[pre[i][0]] = append(adj[pre[i][0]], pre[i][1])
	}
	for i := 0; i < numCourses; i++ {
		for j := 0; j < len(adj[i]); j++ {
			w := adj[i][j]
			inDegrees[w]++
		}
	}

	for i := 0; i < numCourses; i++ {
		if inDegrees[i] == 0 {
			queue = append(queue, i)
		}
	}

	for len(queue) != 0 {
		i := queue[len(queue)-1]
		numCourses--
		queue = queue[0 : len(queue)-1]
		for j := 0; j < len(adj[i]); j++ {
			k := adj[i][j]
			inDegrees[k]--
			if inDegrees[k] == 0 {
				queue = append(queue, k)
			}
		}
	}

	return numCourses == 0
}
