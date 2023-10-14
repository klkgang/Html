function validarUsuario() {
  const usuarioInput = document.getElementById('usuario');
  const errorMessage = document.getElementById('error-msg');
  const usuario = usuarioInput.value;

  if (usuario.includes(' ')) {
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
    // Aquí puedes enviar el nombre de usuario al servidor para su verificación
    // Por ejemplo: enviarUsuarioAlServidor(usuario);
    const valid = true;  
    console.log('Nombre de usuario válido:', usuario);
  }
}

function detectarPlataforma() {
  const anchoVentana = window.innerWidth;
  const agenteUsuario = window.navigator.userAgent;

  if (anchoVentana >= 768) {
    alert("Parece que estas en una computadora");
  } else {
    alert("Parece que estas en un dispositivo movil");
  }
}

