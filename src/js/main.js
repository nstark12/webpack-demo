const boxBtn = document.getElementById('boxBtn')
const headerBtn = document.getElementById('headerBtn')
const boxEl = document.getElementById('box')
const headerEl = document.getElementById('header')

function changeBoxColor() {
  const currBgColor = boxEl.style.backgroundColor
  if (currBgColor === 'yellow') {
    boxEl.style.backgroundColor = 'blue'
  } else {
    boxEl.style.backgroundColor = 'yellow'
  }
}

function changeHeaderColor() {
  const currColor = headerEl.style.color
  if (currColor === 'black') {
    headerEl.style.color = 'blue'
  } else {
    headerEl.style.color = 'black'
  }
}

boxEl.style.backgroundColor = 'yellow'
header.style.color = 'black'

boxBtn.addEventListener('click', changeBoxColor)
headerBtn.addEventListener('click', changeHeaderColor)