funciton addNumbers(numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0)
}


// Rest Operator
//Capture all arguments into a single array
funciton addNumbers(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0)
}

addNumber([1,2,3,4,5]);
