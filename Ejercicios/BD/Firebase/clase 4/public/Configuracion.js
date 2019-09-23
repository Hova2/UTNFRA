

//TODO: Add SDKs for Firebase products that you want to use https://firebase.google.com/docs/web/setup#config-web-app -->


  // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAtVj59qe9-ALmsZJN5t1a1-7zosD58A8k",
    authDomain: "miprimerchat-f6aec.firebaseapp.com",
    databaseURL: "https://miprimerchat-f6aec.firebaseio.com",
    projectId: "miprimerchat-f6aec",
    storageBucket: "miprimerchat-f6aec.appspot.com",
    messagingSenderId: "637583324093",
    appId: "1:637583324093:web:4bcc7d8a861485b0"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  /*
  https://firebase.google.com/docs/firestore/quickstart?authuser=0
  */
var db = firebase.firestore();
var storage = firebase.storage().ref();




