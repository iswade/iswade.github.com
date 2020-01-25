package algorithms

import (
	"testing"
)

func TestConvert(t *testing.T) {
	s := "LEETCODEISHIRING"
	r := convert(s, 3)
	if r != "LCIRETOESIIGEDHN" {
		t.Error(r, "LCIRETOESIIGEDHN")
	}
}

func TestConvert02(t *testing.T) {
	s := "LEETCODEISHIRING"
	r := convert(s, 4)
	if r != "LDREOEIIECIHNTSG" {
		t.Error(r, "LDREOEIIECIHNTSG")
	}
}
