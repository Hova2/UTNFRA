var db = firebase.firestore();
var storage = firebase.storage().ref();
var campoClave = $("#clave");
var campoUsuario = $("#usuario");
var campoArchivo = $("#archivo");

function registrar() {
  var username = campoUsuario.val();
  var clave = campoClave.val();
  var archivo = campoArchivo.get(0).files[0];
  var metadata = {
    contentType: "image/jpeg",
    customMetadata: {
      usuario: username,
      activity: "Programador"
    }
  };

  var uploadTask = storage
    .child("images/" + archivo.name)
    .put(archivo, metadata);
  uploadTask.on(
    firebase.storage.TaskEvent.STATE_CHANGED,
    function(snapshot) {
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
    },
    function(error) {},
    function() {
      uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        console.log("File available at", downloadURL);
        var usuario = {
          usuario: username,
          clave: clave,
          fecha: new Date(),
          imagen: downloadURL
        };
        db.collection("usuarios")
          .add(usuario)
          .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
          })
          .catch(function(error) {
            console.error("Error adding document: ", error);
          });
      });
    }
  );
  console.info("archivo", archivo);
}

function listarUsuariosConFoto() {
  var campoContenedor = $("#contenedor");
  db.collection("usuarios").onSnapshot(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      var label = $("<label>");
      label.text(doc.data().usuario);
      campoContenedor.append(label);
      var img = $("<img>");
      img.attr("src", doc.data().imagen);
      campoContenedor.append(img);
      campoContenedor.append("<br>");
    });
  });
}
