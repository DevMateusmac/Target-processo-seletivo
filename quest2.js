
function belongToFibonacci(number){
  let fibonacciSequence = []
  fibonacciSequence[0] = 0
  fibonacciSequence[1] = 1

  
  for(let i = 2; i < number; i++){
    fibonacciSequence[i] = fibonacciSequence [i - 2] + fibonacciSequence [i - 1]
    if(fibonacciSequence[i] >= number){
      break
    }
  }

  if(fibonacciSequence.includes(number)){
    console.log(fibonacciSequence)
    return console.log(`O número ${number} pertence à sequência de Fibonacci`)
  }else{
    console.log(fibonacciSequence)
    return console.log(`O número ${number} não pertence à sequência de Fibonacci`)
  }
}

belongToFibonacci(89) // neste caso 89 pertence à sequencia fibonacci
