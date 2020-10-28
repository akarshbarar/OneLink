import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJcDhzBYY_4e7kmZsGGF8Mk6ICpL1Yt8w",
    authDomain: "mylink-8273a.firebaseapp.com",
    databaseURL: "https://mylink-8273a.firebaseio.com",
    projectId: "mylink-8273a",
    storageBucket: "mylink-8273a.appspot.com",
    messagingSenderId: "382835475210",
    appId: "1:382835475210:web:fe04e2946bb25882d270f3",
    measurementId: "G-WVXJV4ZWD2"
  };

  var db;
  if(!firebase.apps.length){
    db= firebase.initializeApp(firebaseConfig);

  }
  else{
    db=firebase.app()
  }
  export default db;
