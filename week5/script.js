const onClickButton = () => {
  var element = document.getElementById('circle')
  var positionLeft = element.offsetLeft
  element.style.left = positionLeft - 10 + 'px'
}

const onLoad = () => {
  document.addEventListener('keydown', onClickButton)
}

document.addEventListener('DOMContentLoaded', onLoad)
