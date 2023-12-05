// Drawer Web Component
class DialogComponent extends HTMLElement {
  
  connectedCallback() {
    
    const id = this.getAttribute('id')
    const trigger = this.getAttribute('trigger')
    const target = this.getAttribute('target')

    let dialogChildren = document.getElementById(id).firstChild.cloneNode(true)
    dialogChildren = dialogChildren.innerHTML

    console.log('dialogChildren', dialogChildren);
    
    const dialogContent = `
      <dialog id="${target}">
        <span class="icon">🍥</span>
        <div class="text-content">
          ${dialogChildren}
        </div>
        <button class="btn-close" close-dialog autofocus>Close Modal</button>
      </dialog>
    `
    
    this.innerHTML = dialogContent
    
    // Open Dialog
    const openButton = document.getElementById(trigger)
    const closeButton = this.querySelector('[close-dialog]')
    const dialog = this.querySelector(`#${target}`)
    
    openButton.addEventListener('click', e => {
      e.preventDefault()      
      dialog.showModal()
    })
    
    closeButton.addEventListener('click', () => dialog.close())
  }
}

customElements.define('dialog-component', DialogComponent)
