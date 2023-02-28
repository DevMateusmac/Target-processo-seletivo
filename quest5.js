let stringInverted = ''

function revertString(stringToInvert){
  for(let i = stringToInvert.length -1; i >= 0; i--){
    stringInverted += stringToInvert[i]
  }
  console.log(stringInverted)
}

revertString('Target sistemas') // resultado 'sametsis tegraT'

