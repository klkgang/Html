function validarUsuario() {
  const usuarioInput = document.getElementById('usuario');
  const errorMessage = document.getElementById('error-msg');
  const usuario = usuarioInput.value;

  if (usuario.includes(' ')) {
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';

    const url = 'http://localhost:5000/endpoint'; // Ajusta la URL según tu configuración
    const data = { usuario: usuario };

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };

    fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log('Respuesta del servidor Flask:', data);
        if (data.message === 'Datos recibidos correctamente') {
          // Aquí puedes agregar la lógica para redirigir a otra página o mostrar un mensaje de éxito
          alert('Datos recibidos correctamente en el servidor.');
        } else {
          // Aquí puedes agregar la lógica para manejar un caso de error
          alert('Hubo un problema al enviar los datos al servidor.');
        }
      })
      .catch(error => console.error('Error:', error));
  }
}

function detectarPlataforma() {
  const anchoVentana = window.innerWidth;

  if (anchoVentana >= 768) {
    alert("Parece que estás en una computadora");
  } else {
    alert("Parece que estás en un dispositivo móvil");
  }
}

