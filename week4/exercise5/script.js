const onClickHeader = () => {
  var element = document.getElementById('my-heading')
  element.firstChild.nodeValue = 'Page heading 2'
}

const onClickParagraph = () => {
  var element = document.getElementById('my-content')
  element.firstChild.nodeValue = 'Page content 2'
}

const onEnterHover = () => {
  var element = document.getElementById('my-hover')
  element.firstChild.nodeValue = 'Hover me 2'
}

const onLeaveHover = () => {
  var element = document.getElementById('my-hover')
  element.firstChild.nodeValue = 'Hover me'
}

const onLoad = () => {
  var element1 = document.getElementById('my-heading')
  element1.addEventListener('click', onClickHeader)

  var element2 = document.getElementById('my-content')
  element2.addEventListener('click', onClickParagraph)

  var element3 = document.getElementById('my-hover')
  element3.addEventListener('mouseenter', onEnterHover)
  element3.addEventListener('mouseleave', onLeaveHover)
}

document.addEventListener('DOMContentLoaded', onLoad)
