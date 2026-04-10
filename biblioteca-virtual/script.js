// ==========================
// REGISTRO DE USUARIO
// ==========================
function registrar() {
    let user = document.getElementById("nuevoUsuario").value.trim();
    let pass = document.getElementById("nuevaClave").value.trim();

    if (user === "" || pass === "") {
        alert("⚠️ Completa todos los campos");
        return;
    }

    if (localStorage.getItem(user)) {
        alert("❌ El usuario ya existe");
        return;
    }

    localStorage.setItem(user, pass);
    alert("✅ Usuario registrado correctamente");

    // Limpiar campos
    document.getElementById("nuevoUsuario").value = "";
    document.getElementById("nuevaClave").value = "";
}


// ==========================
// LOGIN DE USUARIO
// ==========================
function login() {
    let user = document.getElementById("usuario").value.trim();
    let pass = document.getElementById("clave").value.trim();

    let storedPass = localStorage.getItem(user);

    if (user === "" || pass === "") {
        alert("⚠️ Completa todos los campos");
        return;
    }

    if (storedPass === null) {
        alert("❌ Usuario no existe");
        return;
    }

    if (storedPass === pass) {
        alert("✅ Bienvenido " + user);

        // Guardar sesión
        localStorage.setItem("usuarioActivo", user);

        // Redirigir
        window.location.href = "index.html";
    } else {
        alert("❌ Contraseña incorrecta");
    }
}


// ==========================
// CERRAR SESIÓN
// ==========================
function cerrarSesion() {
    localStorage.removeItem("usuarioActivo");
    alert("👋 Sesión cerrada");
    window.location.href = "login.html";
}


// ==========================
// VERIFICAR SESIÓN
// ==========================
function verificarSesion() {
    let usuario = localStorage.getItem("usuarioActivo");

    if (!usuario) {
        alert("⚠️ Debes iniciar sesión primero");
        window.location.href = "login.html";
    }
}


// ==========================
// MOSTRAR USUARIO EN PANTALLA
// ==========================
function mostrarUsuario() {
    let usuario = localStorage.getItem("usuarioActivo");

    if (usuario) {
        let elemento = document.getElementById("usuarioActivo");
        if (elemento) {
            elemento.innerText = "👤 " + usuario;
        }
    }
}


// ==========================
// BUSCADOR DE LIBROS
// ==========================
function buscarLibro() {
    let input = document.getElementById("buscador").value.toLowerCase();
    let libros = document.getElementsByClassName("libro");

    for (let i = 0; i < libros.length; i++) {
        let texto = libros[i].innerText.toLowerCase();

        if (texto.includes(input)) {
            libros[i].style.display = "block";
        } else {
            libros[i].style.display = "none";
        }
    }
}


// ==========================
// EFECTO DE CARGA (BONUS PRO)
// ==========================
window.onload = function() {
    console.log("🚀 Página cargada correctamente");
};