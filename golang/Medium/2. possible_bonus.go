package main

import "fmt"
 
func possibleBonus(a , b int) bool {
	return b-a <= 6 && b-a >0
}
func main(){
   isPossibleBonus :=possibleBonus(5, 3)
   fmt.Println("isPossibleBonus" , isPossibleBonus)
}