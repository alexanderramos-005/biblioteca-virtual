<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Biblioteca Virtual PRO</title>
<link rel="stylesheet" href="estilos.css">
</head>
<body>

<nav class="navbar">
    <h2>📚 BiblioPro</h2>
    <div>
        <a href="index.html">Inicio</a>
        <a href="login.html">Login</a>
        <a href="registro.html">Registro</a>
    </div>
</nav>

<header class="hero">
    <div class="overlay">
        <h1>Explora el mundo de los libros</h1>
        <p>Descarga, aprende y disfruta 📖</p>
    </div>
</header>

<input type="text" id="buscador" placeholder="🔍 Buscar libros..." onkeyup="buscarLibro()">

<h2 class="categoria">🔥 Populares</h2>
<div class="fila">

    <div class="libro">
        <img src="https://covers.openlibrary.org/b/id/8231996-L.jpg">
        <h3>Aprendizaje</h3>
        <a href="libro1.pdf" download>Leer</a>
    </div>

    <div class="libro">
        <img src="https://covers.openlibrary.org/b/id/240726-L.jpg">
        <h3>Ciencia</h3>
        <a href="libro1.pdf" download>Leer</a>
    </div>

</div>

<h2 class="categoria">📖 Novelas</h2>
<div class="fila">

    <div class="libro">
        <img src="https://covers.openlibrary.org/b/id/8228691-L.jpg">
        <h3>Novela clásica</h3>
        <a href="libro1.pdf" download>Leer</a>
    </div>

</div>

<script src="script.js"></script>

</body>
</html>
