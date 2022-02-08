const screenEquation = document.getElementsByClassName('calculator__screen-equation')[0]
const screenResult = document.getElementsByClassName('calculator__screen-result')[0]

let equation = ''
let currentOperation = ''
let currentNumber = ''
let result = ''

function clickButtonNumber(number) {
  currentNumber += number
  screenResult.innerHTML = currentNumber
}

function clickOperation(operation) {
  if (equation[equation.length - 1] === '=') {
    equation = equation.slice(0, -1)
  }

  if (currentNumber.includes('.')) {
    const splitNumber = currentNumber.split('.')

    if (splitNumber[splitNumber.length - 1] === '') {
      currentNumber = currentNumber.slice(0, -1)
    }
  }

  if (result !== '') {
    equation = result
  }

  currentOperation = operation
  equation += currentNumber + operation
  screenEquation.innerHTML = equation

  currentNumber = ''

  screenResult.innerHTML = '0'
}

function clickDot() {
  if (currentNumber === '') {
    currentNumber += '0.'
  } else {
    currentNumber += '.'
  }

  screenResult.innerHTML = currentNumber
}

function clickEqual() {
  if (currentOperation !== '' && currentNumber === '') {
    equation = equation.slice(0, -1)
  }

  if (currentNumber !== '') {
    if (currentNumber.includes('.')) {
      const splitNumber = currentNumber.split('.')

      if (splitNumber[splitNumber.length - 1] === '') {
        currentNumber = currentNumber.slice(0, -1)
      }
    }

    equation += currentNumber
  }

  result = String(eval(equation))

  currentNumber = ''
  equation += '='
  screenEquation.innerHTML = equation

  screenResult.innerHTML = result
}

function clearAll() {
  result = ''
  currentNumber = ''
  equation = ''
  screenEquation.innerHTML = equation
  screenResult.innerHTML = '0'
}

function clearLastCharacter() {
  currentNumber = currentNumber.slice(0, -1)
  screenResult.innerHTML = currentNumber
}
