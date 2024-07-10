//boton
let imgPassword = document.querySelector("#password-iniciarsesion img");

//inputs
let inputUsuario = document.querySelector("#usuario-iniciarsesion");
let inputPassword = document.querySelector("#password-iniciarsesion input");


function verUsuario() {

    if (inputPassword.type === "password") {
        inputPassword.type = "text";
        imgPassword.src = "/img/ojo.png"
    }
    else {
        inputPassword.type = "password"
        imgPassword.src = "/img/ojo tachado.png"


    }
}

imgPassword.addEventListener("click", verUsuario);

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    verificarCredenciales(email, password);
});

function verificarCredenciales(email, password) {
    let url = 'https://mauron9.pythonanywhere.com/verificar-credenciales';

    let data = {
        username: email,
        password: password
    };

    let requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    fetch(url, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Credenciales incorrectas');
            }
            return response.json();
        })
        .then(data => {
            if (data.autenticado) {
                // Usuario autenticado, redirigir a la página de inicio
                window.location.href = '/inicio.html';
            } else {
                // Mostrar mensaje de error al usuario
                mostrarError('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
            }
        })
        .catch(error => {
            console.error('Error al verificar credenciales:', error);
            mostrarError('Error al verificar credenciales. Por favor, inténtalo de nuevo más tarde.');
        });
}

function mostrarError(mensaje) {
    let errorMessage = document.getElementById("error-message");
    errorMessage.textContent = mensaje;
}











