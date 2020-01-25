package algorithms

func scheduleHelper(courses [][]int, index []int, begin int, max *int) {
	if begin == len(courses) {
		if len(index) > *max {
			*max = len(index)
		}
		return
	}

	for i := begin; i < len(courses); i++ {
		flag := false
		for j := 0; j < len(index); j++ {
			if courses[index[j]][0] == courses[index[j]][1] {
				continue
			}
			if courses[i][0] > courses[index[j]][0] && courses[i][0] < courses[index[j]][1] {
				flag = true
				break
			}
			if courses[i][1] > courses[index[j]][0] && courses[i][1] < courses[index[j]][1] {
				flag = true
				break
			}
			if courses[i][0] <= courses[index[j]][0] && courses[i][1] >= courses[index[j]][1] {
				flag = true
				break
			}
		}

		if flag == true {
			continue
		}

		index = append(index, i)
		scheduleHelper(courses, index, i+1, max)
		index = index[:len(index)-1]
	}
}

func scheduleCourse(courses [][]int) int {
	if len(courses) == 0 {
		return 0
	}
	if len(courses) == 1 {
		return 1
	}
	max := 0
	var index []int
	scheduleHelper(courses, index, 0, &max)
	return max
}
