const onClickButton = () => {
  // var element = document.getElementsByTagName('body')
  // element[0].style.backgroundImage = 'none'
  // element[0].style.backgroundColor = 'blue'

  var element = document.getElementById('circle')
  element.style.backgroundColor = 'blue'
}

const onLoad = () => {
  var element1 = document.getElementById('circle')
  element1.addEventListener('click', onClickButton)
}

document.addEventListener('DOMContentLoaded', onLoad)
