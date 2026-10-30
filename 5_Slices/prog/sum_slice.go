package prog

func Sum(num []int) int {
	sum := 0
	for _, value := range num {
		sum += value
	}
	return sum
}