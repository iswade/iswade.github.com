package 真题

import "testing"

func TestMinMeetingRooms(t *testing.T) {
	intervals := [][]int{{0, 30}, {5, 10}, {15, 20}}
	r := minMeetingRooms(intervals)
	if r != 2 {
		t.Error(r)
	}

	intervals = [][]int{{7, 10}, {2, 4}}
	r = minMeetingRooms(intervals)
	if r != 1 {
		t.Error(r)
	}

	intervals = [][]int{{13, 15}, {1, 13}}
	r = minMeetingRooms(intervals)
	if r != 1 {
		t.Error(r)
	}

	intervals = [][]int{{1, 5}, {8, 9}, {8, 9}}
	r = minMeetingRooms(intervals)
	if r != 2 {
		t.Error(r)
	}

	intervals = [][]int{{20, 45}, {12, 13}, {2, 50}, {14, 20}, {3, 5}}
	r = minMeetingRooms(intervals)
	if r != 2 {
		t.Error(r)
	}

	intervals = [][]int{{2, 15}, {36, 45}, {9, 29}, {16, 23}, {4, 9}}
	r = minMeetingRooms(intervals)
	if r != 2 {
		t.Error(r)
	}
}
