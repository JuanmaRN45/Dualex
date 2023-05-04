/**
  Vista de mensajes de la aplicación.
  Muestra los mensajes de la aplicación.
**/

export class VistaMensaje{
  static INFO = 'info'
  static OK = 'ok'
  static AVISO = 'aviso'
  static ERROR = 'error'
  /**
    Constructor de la clase.
    @param {Object} controlador Controlador de la vista principal.
    @param {Node} base Nodo al que se añadirá la vista principal.
  **/
  constructor (controlador, base) {
    this.controlador=controlador
    this.base = base
  
    // Cogemos referencias a los elementos del interfaz
    this.btnCerrar = document.getElementsByTagName('span')[0]
    this.spanMensaje = document.getElementsByTagName('span')[1]

    // Asociamos eventos
    this.btnCerrar.onclick = this.cerrar.bind(this)
  }

  /**
    Cierra el mensaje.
  **/
  cerrar () {
    this.base.style.display = 'none'
  }

  mostrar (mensaje, nivel = VistaMensaje.ERROR) {
    this.base.className = `vistamensaje ${nivel}`
    this.spanMensaje.textContent = mensaje
    this.base.style.display = 'block'
    // Quitamos el mensaje a los 5 segundos
    if (nivel !== VistaMensaje.ERROR) setTimeout(this.cerrar.bind(this), 5000)
  }
}
