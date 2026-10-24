package iteration

import "strings"

func Iterate(c string,x int) string {
	var s strings.Builder
	for i := 0; i < x; i++ {
		s.WriteString(c)
	}
	return s.String()
}