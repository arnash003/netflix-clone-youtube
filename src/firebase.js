import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB7LsQpu-5_TfAWdzZq9wej2ziBEe4ILBY",
    authDomain: "clone-netflix-2021-46a34.firebaseapp.com",
    projectId: "clone-netflix-2021-46a34",
    storageBucket: "clone-netflix-2021-46a34.appspot.com",
    messagingSenderId: "678244208861",
    appId: "1:678244208861:web:2ec1da703575280ff30b34"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };