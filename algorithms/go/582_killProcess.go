package algorithms


func killProcess(pid []int, ppid []int, kill int) []int {
	if kill == 0 {
		return pid
	}

	ht := make(map[int][]int)
	for i := 0; i < len(ppid); i++ {
		ht[ppid[i]] = append(ht[ppid[i]], pid[i])
	}

	var queue []int
	queue = append(queue, kill)
	var res []int
	for len(queue) > 0 {
		process := queue[0]
		queue = queue[1:]
		res = append(res, process)
		children := ht[process]
		for i := 0; i < len(children); i++ {
			queue = append(queue, children[i])
		}
	}
	return res
}
