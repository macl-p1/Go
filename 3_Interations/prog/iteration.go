package iteration

func Iterate(c string) string {
	var s string
	for i := 0; i < 5; i++ {
		s += c
	}
	return s
}