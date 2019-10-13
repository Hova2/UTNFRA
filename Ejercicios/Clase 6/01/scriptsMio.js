var db = firebase.firestore();

function enviar() {
  var mensaje = document.getElementById("txtMensaje").value;
  console.log(mensaje);
  db.collection("Mensajes").add({ Linea: mensaje });
}
