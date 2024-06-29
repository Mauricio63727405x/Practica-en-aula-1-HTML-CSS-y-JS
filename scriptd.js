
let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameInput = document.getElementById("nameInput");

signIn.onclick = function(){
    nameInput.style.maxHeight = "0";
    this.title.innerHTML = "Login";
    signUp.classList.add("disable");
}
signUp.onclick = function() {
    nameInput.style.maxHeight="60px";
    this.title.innerHTML = "Registro";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
}
//crear un vector vacio de ususarios
const usuarios = [];
//agregar un nuevo usuario al vector
document.getElementById("btnregistro").addEventListener("click", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const edad = parseInt(document.getElementById("edad").value);

    const nuevoUsuario = { nombre, edad };
    usuarios.push(nuevoUsuario);

    // Lógica para mostrar los usuarios en la página
    // (puede ser una tabla, una lista, etc.)
});
function mostrarUsuarios() {
    const tablaUsuarios = document.getElementById("tablaUsuarios");
    tablaUsuarios.innerHTML = ""; // Limpiamos la tabla antes de llenarla

    usuarios.forEach((usuario) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${usuario.nombre}</td>
            <td>${usuario.edad}</td>
        `;
        tablaUsuarios.appendChild(fila);
    });
}

