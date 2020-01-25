package algorithms

import (
	"fmt"
	"testing"
)

func TestUpdateMatrix(t *testing.T) {
	grid := [][]int{
		{0, 0, 0},
		{0, 1, 0},
		{0, 0, 0}}

	r := updateMatrix(grid)
	for i := 0; i < len(r); i++ {
		fmt.Println(r[i])
	}

	fmt.Println("---------------------------------------------------")
}

func TestUpdateMatrix1(t *testing.T) {
	grid := [][]int{
		{0, 0, 0},
		{0, 1, 0},
		{1, 1, 1}}

	r := updateMatrix(grid)
	for i := 0; i < len(r); i++ {
		fmt.Println(r[i])
	}

	fmt.Println("---------------------------------------------------")
}

func TestUpdateMatrix2(t *testing.T) {
	grid := [][]int{
		{1, 0, 1, 1, 0, 0, 1, 0, 0, 1},
		{0, 1, 1, 0, 1, 0, 1, 0, 1, 1},
		{0, 0, 1, 0, 1, 0, 0, 1, 0, 0},
		{1, 0, 1, 0, 1, 1, 1, 1, 1, 1},
		{0, 1, 0, 1, 1, 0, 0, 0, 0, 1},
		{0, 0, 1, 0, 1, 1, 1, 0, 1, 0},
		{0, 1, 0, 1, 0, 1, 0, 0, 1, 1},
		{1, 0, 0, 0, 1, 1, 1, 1, 0, 1},
		{1, 1, 1, 1, 1, 1, 1, 0, 1, 0},
		{1, 1, 1, 1, 0, 1, 0, 0, 1, 1}}

	r := updateMatrix(grid)
	for i := 0; i < len(r); i++ {
		fmt.Println(r[i])
	}

	fmt.Println("---------------------------------------------------")
}

func TestUpdateMatrix3(t *testing.T) {
	grid := [][]int{
		{1, 0, 1, 1, 0, 0, 1, 0, 0, 1},
		{0, 1, 1, 0, 1, 0, 1, 0, 1, 1},
		{0, 0, 1, 0, 1, 0, 0, 1, 0, 0},
		{1, 0, 1, 0, 1, 1, 1, 1, 1, 1},
		{0, 1, 0, 1, 1, 0, 0, 0, 0, 1},
		{0, 0, 1, 0, 1, 1, 1, 0, 1, 0},
		{0, 1, 0, 1, 0, 1, 0, 0, 1, 1},
		{1, 0, 0, 0, 1, 1, 1, 1, 0, 1},
		{1, 1, 1, 1, 1, 1, 1, 0, 1, 0},
		{1, 1, 1, 1, 0, 1, 0, 0, 1, 1}}

	r := updateMatrix(grid)
	for i := 0; i < len(r); i++ {
		fmt.Println(r[i])
	}

	fmt.Println("---------------------------------------------------")
}
