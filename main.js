function whatsapp() {
  window.open("https://wa.link/0d1nex", "_blank");
  window.focus();
    return false;
}
function whatsapp() {
    window.open("https://wa.link/0d1nex", "_blank");
    window.focus();
    return false;
}

function enviar(){ //enviar dtos del formulario  por whatsapp//
    var nombre = document.getElementById("nombre").value; // Obtener el valor del campo nombre//
    var email = document.getElementById("email").value; // Obtener el valor del campo email//
    var mensaje = document.getElementById("mensaje").value; // Obtener el valor del campo mensaje//
    var telefono = document.getElementById("telefono").value; // Obtener el valor del campo teléfono//

    // Validar que los campos no estén vacíos
    if (nombre === "" || email === "" || mensaje === "") { // Validar que los campos no estén vacíos//
        alert("Por favor, completa todos los campos."); // Mostrar un mensaje de alerta// 
        return false;// Detener la ejecución si hay campos vacíos//
    }

    // Crear el enlace de WhatsApp
    var enlace = "https://wa.me/50370079140?text=" + // Crear el enlace de WhatsApp//
        encodeURIComponent("Nombre: " + nombre + "\n") + // Añadir el nombre//
        encodeURIComponent("Teléfono: " + telefono + "\n") + // Añadir el teléfono//
        encodeURIComponent("Email: " + email + "\n") +// Añadir el email//
        encodeURIComponent("Mensaje: " + mensaje);// Añadir el mensaje//

    // Abrir el enlace en una nueva pestaña
    window.open(enlace, "_blank"); // Abrir el enlace en una nueva pestaña//
    window.focus(); // Enfocar la nueva pestaña//


  
    
}