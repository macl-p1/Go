package tests

import (
	"testing"

	"example.com/prog"
)

func TestHello(t *testing.T) {
    got := prog.Hello("Gaurav")
    want := "Hello, Gaurav"

    if got != want {
        t.Errorf("got %q want %q", got, want)
    }
}