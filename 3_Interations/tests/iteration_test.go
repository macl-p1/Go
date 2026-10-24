package tests

import (
	"testing"

	iteration "example.com/prog"
)

func testIterate(t *testing.T){
	got := iteration.Iterate()
	want := "aaaaa"

	if got != want {
		t.Errorf("got %q want %q",got,want)
	}
}