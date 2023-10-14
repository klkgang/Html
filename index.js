function validarUsuario() {
  const usuarioInput = document.getElementById('usuario');
  const errorMessage = document.getElementById('error-msg');
  const usuario = usuarioInput.value;

  // Verificar si el nombre de usuario contiene espacios
  if (usuario.includes(' ')) {
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
    // Aquí puedes enviar el nombre de usuario al servidor para su verificación
    // Por ejemplo: enviarUsuarioAlServidor(usuario);
    console.log('Nombre de usuario válido:', usuario);
  }
}

function detectarPlataforma(){
  //variable para verificar el tamallo de la ventana de el navegador
  const anchoVentana = window.innerWidth;
 // variable para verificar el  navegador de el usaurio  
  const agenteUsuario = navigator.userAgent;

  if (anchoVentana > 768){
    alert("Parece que estas en una computadora")
  } else {
    alert("Parece que estas en un dispositivoi movil")
  }
}


