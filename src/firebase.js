import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCRyLE0NVZV3nd-kIDTuAI9p3WzvG3InNg",
    authDomain: "linkedin-clone-ce672.firebaseapp.com",
    projectId: "linkedin-clone-ce672",
    storageBucket: "linkedin-clone-ce672.appspot.com",
    messagingSenderId: "591554851020",
    appId: "1:591554851020:web:0c033c1e0fcf86bf891269"
  };

  // Connects to our database. 
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebase.auth(); 