package 真题

import (
	"strconv"
	"time"
)

type logTime struct {
	year   int
	month  int
	day    int
	hour   int
	minute int
	second int
}
type logEntry struct {
	id int
	t  *logTime
}

type LogSystem struct {
	logs []*logEntry
}

func Constructor() LogSystem {
	return LogSystem{}
}

func (logSys *LogSystem) parseTimestamp(timestamp string) *logTime {
	lt := &logTime{}
	lt.year, _ = strconv.Atoi(timestamp[0:4])
	lt.month, _ = strconv.Atoi(timestamp[5:7])
	lt.day, _ = strconv.Atoi(timestamp[8:10])
	lt.hour, _ = strconv.Atoi(timestamp[11:13])
	lt.minute, _ = strconv.Atoi(timestamp[14:16])
	lt.second, _ = strconv.Atoi(timestamp[17:19])
	return lt
}

func (logSys *LogSystem) inRange(s, e, c int64) bool {
	if c >= s && c <= e {
		return true
	}
	return false
}

func (logSys *LogSystem) Put(id int, timestamp string) {
	ts := logSys.parseTimestamp(timestamp)
	logSys.logs = append(logSys.logs, &logEntry{id, ts})
}

func (logSys *LogSystem) formatTime(t logTime, gra string) *logTime {
	switch gra {
	case "Year":
		t.month = 0
		fallthrough
	case "Month":
		t.day = 0
		fallthrough
	case "Day":
		t.hour = 0
		fallthrough
	case "Hour":
		t.minute = 0
		fallthrough
	case "Minute":
		t.second = 0
		fallthrough
	case "Second":
	}
	return &t
}

func (logSys *LogSystem) toUnix(in *logTime, gra string) int64 {
	ts := logSys.formatTime(*in, gra)
	cur := time.Date(ts.year, time.Month(ts.month), ts.day, ts.hour, ts.minute, ts.second, 0, time.UTC).Unix()
	return cur
}

func (logSys *LogSystem) Retrieve(s string, e string, gra string) []int {
	var res []int
	ts := logSys.parseTimestamp(s)
	start := logSys.toUnix(ts, gra)

	ts = logSys.parseTimestamp(e)
	end := logSys.toUnix(ts, gra)

	for _, log := range logSys.logs {
		cur := logSys.toUnix(log.t, gra)
		if logSys.inRange(start, end, cur) == true {
			res = append(res, log.id)
		}
	}
	return res
}
