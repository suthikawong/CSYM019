const onClickButton = () => {
  var element = document.getElementById('circle')
  element.style.opacity = 0.5
}

const onLoad = () => {
  var element1 = document.getElementById('circle')
  element1.addEventListener('click', onClickButton)
}

document.addEventListener('DOMContentLoaded', onLoad)
