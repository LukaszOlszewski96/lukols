import firebase from 'firebase';

const firebaseConfig = {
    apiKey: ,
    authDomain: ,
    projectId: ,
    storageBucket: ,
    messagingSenderId: ,
    appId: ",
    measurementId: 
  };
  var firebaseApp = firebase.initializeApp(firebaseConfig);
  var cloudFirestore = firebaseApp.firestore();

  export {cloudFirestore};
  export default firebase;
