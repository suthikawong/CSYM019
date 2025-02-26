const onClickButton = () => {
  var element = document.getElementById('circle')
  var circleOpacity = parseFloat(element.style.opacity)
  setInterval(() => {
    circleOpacity -= 0.01
    element.style.opacity = circleOpacity
  }, 10)
}

const onLoad = () => {
  var element1 = document.getElementById('circle')
  element1.style.opacity = 1
  element1.addEventListener('click', onClickButton)
}

document.addEventListener('DOMContentLoaded', onLoad)
