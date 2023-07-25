import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyBIYjI17NHZO-XWq0kmqOXlSAZoUnBpywg",
    authDomain: "tech-team-48ffd.firebaseapp.com",
    databaseURL: "https://tech-team-48ffd-default-rtdb.firebaseio.com",
    projectId: "tech-team-48ffd",
    storageBucket: "tech-team-48ffd.appspot.com",
    messagingSenderId: "342250297681",
    appId: "1:342250297681:web:52f6e788fa2551f3dcdb70"
  };

const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
