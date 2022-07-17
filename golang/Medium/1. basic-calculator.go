package main

import "fmt"

func calculator(x int, y int, s string) float32 {
	var output float32 = 0
	switch s {
	case "+":
	   output =float32(x + y)
		break
	case "-" : 
	output = float32(x- y)
	    break
	case "/" : 
	output = float32(x/y)
	   break

	case "*" :
		output =float32(x * y)
	 break
	 default :
	 fmt.Println("Invalid Operator")

	}
	return output
}

func main() {
	sum := calculator(5 , 5 , "+")
	fmt.Println("SUm is "  , sum);
	subtract := calculator(10 , 5 , "-");
	fmt.Println("Subtract is " ,  subtract)
    
}