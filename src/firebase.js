import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDVxLCQOh9vVsDUv2CfCkPWTQt9gYyzc1w",
    authDomain: "nwitter-45cd1.firebaseapp.com",
    projectId: "nwitter-45cd1",
    storageBucket: "nwitter-45cd1.appspot.com",
    messagingSenderId: "756213216828",
    appId: "1:756213216828:web:5751c2810bb72834797539"
  };

  export default firebase.initializeApp(firebaseConfig);