package algorithms

import (
	"testing"
)

func TestMedianFinder(t *testing.T) {
	mf := Constructor03()
	mf.AddNum(1)
	mf.AddNum(2)
	r := mf.FindMedian()
	if r != 1.5 {
		t.Error(r)
	}

	mf.AddNum(3)
	r = mf.FindMedian()
	if r != 2 {
		t.Error(r)
	}
}

func TestMedianFinder02(t *testing.T) {
	mf := Constructor03()
	mf.AddNum(-1)
	r := mf.FindMedian()
	if r != -1 {
		t.Error(r)
	}

	mf.AddNum(-2)
	r = mf.FindMedian()
	if r != -1.5 {
		t.Error(r)
	}

	mf.AddNum(-3)
	r = mf.FindMedian()
	if r != -2.0 {
		t.Error(r)
	}

	mf.AddNum(-4)
	r = mf.FindMedian()
	if r != -2.5 {
		t.Error(r)
	}

	mf.AddNum(-5)
	r = mf.FindMedian()
	if r != -3 {
		t.Error(r)
	}
}
