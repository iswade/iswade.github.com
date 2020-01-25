package algorithms

import "testing"

func TestBulbSwitch(t *testing.T) {
	for i := 1; i < 1000; i++ {
		bulbSwitch(i)
	}
}
