// Mostrar un mensaje en la consola cuando se carga la página
window.onload = function() {
    console.log("Bienvenido a mi sitio de documentación!");
};

// Cambiar el color de fondo de los títulos cuando se hace clic
document.addEventListener("DOMContentLoaded", function() {
    const headings = document.querySelectorAll("h1, h2, h3");
    headings.forEach(heading => {
        heading.addEventListener("click", function() {
            this.style.backgroundColor = "#d1ecf1";
        });
    });
});
