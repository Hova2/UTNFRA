var campoMensaje = $('#mensaje');
var campoUsuario = $('#usuario');
var listaDemensajes = $('#listadodemensajes');

// manejador del evento KEYPRESS
campoMensaje.keypress(function (e) {
  if (e.keyCode == 13) {
    //FIELD VALUES
    var username = campoUsuario.val();
    var message = campoMensaje.val();

    //SAVE DATA TO FIREBASE AND EMPTY FIELD
  db.collection("mensajes").add({
            usuario: username,
            mensaje: message,
            fecha: new Date(),
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    campoMensaje.val('');
  }
});



db.collection("mensajes").onSnapshot(function(coleccion) {


console.info("la coleccion : ", coleccion.docs);


coleccion.forEach(function(objeto) {
      // doc.data() is never undefined for query doc snapshots
      console.info( "el objeto",objeto);
      console.info( "el id",objeto.id);
      console.info( "el datos",objeto.data() );

      var messageElement = $("<li>");
      var nameElement = $("<strong class='example-chat-username'></strong>")
      nameElement.text(objeto.data().usuario);
      messageElement.text(objeto.data().mensaje).prepend(nameElement);

      //ADD MESSAGE
      listaDemensajes.append(messageElement)

      //SCROLL TO BOTTOM OF MESSAGE LIST
      listaDemensajes[0].scrollTop = listaDemensajes[0].scrollHeight;
});



});
