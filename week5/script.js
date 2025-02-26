const onClickButton = () => {
  var element = document.getElementById('circle')
  var circleOpacity = parseFloat(element.style.opacity)
  element.style.opacity = circleOpacity - 0.1
}

const onLoad = () => {
  var element1 = document.getElementById('circle')
  element1.addEventListener('click', onClickButton)
  element1.style.opacity = 0.5
}

document.addEventListener('DOMContentLoaded', onLoad)
