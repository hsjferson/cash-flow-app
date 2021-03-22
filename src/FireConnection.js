import firebase from 'firebase';

let config = { 
    apiKey: "AIzaSyCdVbiBY1DxihlxTl8uB1fjz941Hr16bZE",
    authDomain: "projeto-teste-145a8.firebaseapp.com",
    databaseURL: "https://projeto-teste-145a8-default-rtdb.firebaseio.com",
    projectId: "projeto-teste-145a8",
    storageBucket: "projeto-teste-145a8.appspot.com",
    messagingSenderId: "504164980513",
    appId: "1:504164980513:web:147dfd74583ff8d1995060",
    measurementId: "G-YK7VHM31QT"
}

firebase.initializeApp(config);

export default firebase;