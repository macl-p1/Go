package test1

import (
	"testing"

	add "example.com/prog"
)

func Testadder(t *testing.T){
	got := add.Adder(2,2)
	want := 4

	if got != want {
		t.Errorf("got %d want %d",got,want)
	}
}