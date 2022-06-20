import Sound from './sounds.js'

import {
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  minutesDisplay,
  secondsDisplay,
  buttonForestOff,
  buttonForestOn,
  buttonRainOff,
  buttonRainOn,
  buttonCoffeeShopOff,
  buttonCoffeeShopOn,
  buttonFirePlaceOff,
  buttonFirePlaceOn
} from './elements.js'

let minutes = Number(minutesDisplay.textContent)
let timerTimeOut
const sound = Sound()

function updateTimerDisplay(minutes, seconds){
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetTimer() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function addMoreMinutes() {
  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)

  updateTimerDisplay(String(minutes + 5), seconds)
}

function reduceMinutes() {
  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)

  if(minutes >= 1) {
    updateTimerDisplay(String(minutes - 5), seconds)
  }
}

function countdown() {
  timerTimeOut = setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes, 0)

    if(minutes <= 0) {
      return
    }

    if(seconds <= 0) {
      seconds = 60

      --minutes
    }
    updateTimerDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}


buttonPlay.addEventListener('click', function() {
  countdown()
  sound.pressButton()
})

buttonStop.addEventListener('click', function() {
  resetTimer()
  sound.pressButton()
})

buttonPlus.addEventListener('click', function() {
  addMoreMinutes()
  sound.pressButton()
})

buttonMinus.addEventListener('click', function() {
  reduceMinutes()
  sound.pressButton()
})

buttonForestOff.addEventListener('click', function() {
  buttonForestOn.classList.remove('hide')
  buttonForestOff.classList.add('hide')
  sound.pressButton()
  sound.forestSound.play()
})

buttonForestOn.addEventListener('click', function() {
  buttonForestOff.classList.remove('hide')
  buttonForestOn.classList.add('hide')
  sound.pressButton()
  sound.forestSound.pause()
})

buttonRainOff.addEventListener('click', function() {
  buttonRainOn.classList.remove('hide')
  buttonRainOff.classList.add('hide')
  sound.pressButton()
  sound.rainSound.play()
})

buttonRainOn.addEventListener('click', function() {
  buttonRainOff.classList.remove('hide')
  buttonRainOn.classList.add('hide')
  sound.pressButton()
  sound.rainSound.pause()
})

buttonCoffeeShopOff.addEventListener('click', function() {
  buttonCoffeeShopOn.classList.remove('hide')
  buttonCoffeeShopOff.classList.add('hide')
  sound.pressButton()
  sound.coffeeShopSound.play()
})

buttonCoffeeShopOn.addEventListener('click', function() {
  buttonCoffeeShopOff.classList.remove('hide')
  buttonCoffeeShopOn.classList.add('hide')
  sound.pressButton()
  sound.coffeeShopSound.pause()
})

buttonFirePlaceOff.addEventListener('click', function() {
  buttonFirePlaceOn.classList.remove('hide')
  buttonFirePlaceOff.classList.add('hide')
  sound.pressButton()
  sound.firePlaceSound.play()
})

buttonFirePlaceOn.addEventListener('click', function() {
  buttonFirePlaceOff.classList.remove('hide')
  buttonFirePlaceOn.classList.add('hide')
  sound.pressButton()
  sound.firePlaceSound.pause()
})