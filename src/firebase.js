import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCXP57KHkwT2s8mSw6rEOQUMwfoQyscJgk",
  authDomain: "epsp-cep-ahsan01.firebaseapp.com",
  databaseURL: "https://epsp-cep-ahsan01-default-rtdb.firebaseio.com",
  projectId: "epsp-cep-ahsan01",
  storageBucket: "epsp-cep-ahsan01.appspot.com",
  messagingSenderId: "1026393472892",
  appId: "1:1026393472892:web:cfae9e61841646dff5aef9",
  measurementId: "G-7HWSDCNC7Q"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;