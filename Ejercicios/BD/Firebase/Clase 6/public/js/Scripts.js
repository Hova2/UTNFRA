
var db = firebase.firestore();
var storage = firebase.storage().ref();
var campoClave = $('#clave');
var campoUsuario = $('#usuario');

function registrar(){
    var username = campoUsuario.val();
    var clave = campoClave.val();
    var campoArchivo = $('#archivo');
    var metadata = {
        contentType: 'image/jpeg',
        customMetadata: {
            'usuario': username,
            'activity': 'Programador'
        }
    };
 
    var file = campoArchivo.get(0).files[0];
    var uploadTask = storage.child('images/' + file.name).put(file, metadata);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
                function(snapshot) {
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                },
                function(E) {},
                function() {
                    var url = uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                        console.log('File available at', downloadURL);
                        return downloadURL;
                    });
                    db.collection("usuarios").add({
                        usuario: username,
                        clave: clave,
                        fecha: new Date(),
                        imagen: null
                    })
                    .then(function(docRef) {
                        console.log("Document written with ID: ", docRef.id);
                        docRef.update({ imagen: url.val() });
                    })
                    .catch(function(error) {
                        console.error("Error adding document: ", error);
                        
                    });
                });
                console.info("archivo",file);

}