function init() {
  const filterPanel = document.querySelector('.filter-panel')
  const button = document.querySelector('.filter-panel__button')
  const buttonName = document.querySelector('.float-button__name')
  const buttonNameText = buttonName.innerHTML
  let expanded = false

  if (!filterPanel && !button) {
    return
  }

  button.addEventListener('click', () => {
    filterPanel.classList.toggle('filter-panel--open')
  })

  if (expanded) {
    button.setAttribute('aria-expanded', 'false')
    buttonName.innerHTML = buttonNameText
    expanded = false
  } else {
    button.setAttribute('aria-expanded', 'true')
    buttonName.innerHTML = 'Скрыть фильтр'
    expanded = true
  }
}

init()
