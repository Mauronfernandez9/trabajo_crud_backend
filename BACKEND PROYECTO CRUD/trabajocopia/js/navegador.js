document.getElementById("header").innerHTML = `<ul class="nav nav-tabs">
<li class="nav-item">
    <a href="inicio.html" class="nav-link active" aria-current="page">HOME</a>
</li>
<li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
        aria-haspopup="true" aria-expanded="false">Links</a>
    <div class="dropdown-menu">
        <a class="dropdown-item" href="productos.html">Productos</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="usuarios.html">Usuarios</a>
    </div>
</li>
</ul>`

document.querySelector("footer").innerHTML =
    `
    <footer>
        <h6>administracion de productos</h6>
    </footer>

`

