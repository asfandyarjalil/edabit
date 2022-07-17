package main

import "fmt"

func convert(x int) int{
	return x * 60
}
func main(){
var seconds int
seconds = convert(5)
fmt.Println("seconds  ", seconds)
}