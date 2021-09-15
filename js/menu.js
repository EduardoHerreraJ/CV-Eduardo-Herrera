// Para mostrar el menú agrega un margen izquierdo de 200px al div con id="main", mientras que el ancho del div con id="mySidebar" cambia a 200px
let openNav = () => {
    document.getElementById("mySidebar").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
}
  
// Para ocultar el menú el margen izquierdo del div con id="main" cambia a 0px, mientras que el ancho del div con id="mySidebar" cambia a 0px
let closeNav = () => {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

// Agregar el evento on click al botón del menú
document.getElementById("menubtn").onclick = openNav;

// Agregar el evento on click a los elementos del menú
Array.from(document.getElementsByClassName("menu-item")).forEach(element => {
    element.onclick = closeNav;
});