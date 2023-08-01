function validarFormulario() {
    // Validar datos generales
    var nombre = document.getElementById('nombre').value;
    var fechaNacimiento = document.getElementById('fechaNacimiento').value;
    var direccion = document.getElementById('direccion').value;
    var telefono = document.getElementById('telefono').value;
    var sexo = document.getElementById('sexo').value;
  
    if (!nombre || !fechaNacimiento || !direccion || !telefono || !sexo) {
      alert('Por favor, complete todos los campos de datos generales.');
      return false;
    }
  
    // Validar datos de tarjeta de crédito
    var nombreTarjeta = document.getElementById('nombreTarjeta').value;
    var numeroTarjeta = document.getElementById('numeroTarjeta').value;
    var fechaExpiracion = document.getElementById('fechaExpiracion').value;
    var cvv = document.getElementById('cvv').value;
  
    if (!nombreTarjeta || !numeroTarjeta || !fechaExpiracion || !cvv) {
      alert('Por favor, complete todos los campos de datos de pago con tarjeta.');
      return false;
    }
  
    return true; // Si todo está validado correctamente, el formulario se enviará.
  }
  