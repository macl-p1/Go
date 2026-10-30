package tester

import (
	"testing"

	prog "example.com/prog"
)

func TestSum(t *testing.T) {
	numbers := []int{1, 2, 3, 4, 5}
	got := prog.Sum(numbers)
	want := 15

	if got != want {
		t.Errorf("got %d want %d",got,want)
	}
}



