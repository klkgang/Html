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

