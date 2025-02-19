const myLoad = () => {
  var element = document.getElementById('my-heading')
  element.firstChild.nodeValue = 'Page heading 2'

  var element = document.getElementById('my-content')
  element.firstChild.nodeValue = 'Page content 2'
}

document.addEventListener('DOMContentLoaded', myLoad)
