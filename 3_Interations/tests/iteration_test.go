package tests

import (
	"fmt"
	"testing"

	iteration "example.com/prog"
)

func testIterate(t *testing.T){
	got := iteration.Iterate("a",10)
	want := "aaaaaaaaaa"

	if got != want {
		t.Errorf("got %q want %q",got,want)
	}
}

func BenchmarkIterate(b *testing.B) {
	for b.Loop(){
			iteration.Iterate("a",10)
	}
	fmt.Println(b.N)
}