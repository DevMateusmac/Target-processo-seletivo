
let fibonacciSequence = []
let initialNumber = 0 
let nextNumber = 1
let lastNumber 

function belongToFibonacciSequence(number){
  fibonacciSequence.push(initialNumber, nextNumber)

  while(!fibonacciSequence.includes(number) && fibonacciSequence[fibonacciSequence.length - 1] < number){
    lastNumber = initialNumber + nextNumber
    fibonacciSequence.push(lastNumber)
    initialNumber = nextNumber
    nextNumber = lastNumber
  }
  if(fibonacciSequence.includes(number)){
    console.log(`O número ${number} pertence à sequencia Fibonacci`)
  }else{
    console.log(`O número ${number} não pertence à sequencia Fibonacci`)
  }
}

belongToFibonacciSequence(89) // neste caso 89 pertence à sequencia fibonacci