package main

import "fmt"
func addition(x int, y int) int{
	return  x + y
}
func main(){
   sum:= addition(-3,-6)
   fmt.Println("sum" , sum)
   sum2:= addition(7,6)
   fmt.Println("sum" , sum2)
   sum3:= addition(3,76)
   fmt.Println("sum" , sum3)
}