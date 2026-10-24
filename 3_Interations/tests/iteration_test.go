package tests

import (
	"fmt"
	"testing"

	iteration "example.com/prog"
)

func testIterate(t *testing.T){
	got := iteration.Iterate("a")
	want := "aaaaa"

	if got != want {
		t.Errorf("got %q want %q",got,want)
	}
}

func BenchmarkIterate(b *testing.B) {
	for b.Loop(){
			iteration.Iterate("a")
	}
	fmt.Println(b.N)
}