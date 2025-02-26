const onClickButton = () => {
  var element = document.getElementById('circle')
  element.style.opacity = 1
}

const onLoad = () => {
  var element1 = document.getElementById('circle')
  element1.addEventListener('click', onClickButton)
  element1.style.opacity = 0.5
}

document.addEventListener('DOMContentLoaded', onLoad)
