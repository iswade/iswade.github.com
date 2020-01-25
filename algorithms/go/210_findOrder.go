package algorithms


func assignTaskOrder(numTasks int, predependents [][]int) []int {
	inDegree := make([]int, numTasks)
	adj := make([][]int, numTasks)
	for i := 0; i < len(predependents); i++ {
		task := predependents[i]
		adj[task[1]] = append(adj[task[1]], task[0])
	}

	for i := 0; i < numTasks; i++ {
		tasks := adj[i]
		for j := 0; j < len(tasks); j++ {
			inDegree[tasks[j]]++
		}
	}

	var queue []int
	for i := 0; i < len(inDegree); i++ {
		if inDegree[i] == 0 {
			queue = append(queue, i)
		}
	}

	var res []int
	for len(queue) > 0 {
		task := queue[0]
		queue = queue[1:]
		res = append(res, task)
		numTasks--
		for i := 0; i < len(adj[task]); i++ {
			inDegree[adj[task][i]]--
			if inDegree[adj[task][i]] == 0 {
				queue = append(queue, adj[task][i])
			}
		}
	}

	if numTasks == 0 {
		return res
	}

	return nil
}


func findOrder(numCourses int, prerequisites [][]int) []int {
	var q []int
	in := make([]int, numCourses)
	adj := make([][]int, numCourses)
	for i := 0; i < len(prerequisites); i++ {
		adj[prerequisites[i][1]] = append(adj[prerequisites[i][1]], prerequisites[i][0])
	}

	for i := 0; i < len(adj); i++ {
		for j := 0; j < len(adj[i]); j++ {
			in[adj[i][j]]++
		}
	}

	for i := 0; i < len(in); i++ {
		if in[i] == 0 {
			q = append(q, i)
		}
	}

	var res []int

	for len(q) > 0 {
		x := q[0]
		q = q[1:]
		res = append(res, x)
		numCourses--
		for i := 0; i < len(adj[x]); i++ {
			j := adj[x][i]
			in[j]--
			if in[j] == 0 {
				q = append(q, j)
			}
		}
	}

	if numCourses == 0 {
		return res
	}

	return nil
}
