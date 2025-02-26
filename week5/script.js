const onClickButton = () => {
  alert('The button was pressed')
}

const onLoad = () => {
  var element1 = document.getElementById('circle')
  element1.addEventListener('click', onClickButton)
}

document.addEventListener('DOMContentLoaded', onLoad)
