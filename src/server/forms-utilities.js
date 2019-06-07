// Use ES6/7 code
const onOpen = () => {
  FormApp.getUi()
    .createAddonMenu()
    .addItem('Configure notifications', 'showSidebar')
    .addItem('About', 'showAbout')
    .addToUi()
}

const showSidebar = () => {
  let ui = HtmlService.createHtmlOutputFromFile('sidebar').setTitle(
    'Form Awesome',
  )
  FormApp.getUi().showSidebar(ui)
}

const showAbout = () => {
  let ui = HtmlService.createHtmlOutputFromFile('about')
    .setWidth(420)
    .setHeight(270)
  FormApp.getUi().showModalDialog(ui, 'About Form Awesome')
}

export {
  onOpen,
  showSidebar,
  showAbout,
}
