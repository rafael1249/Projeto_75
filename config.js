import firebase from "firebase";
require("@firebase/firestore");

varfirebaseConfig = {
  apiKey: "AIzaSyBHuG_IFpqMwI2xoHS_xJb7P_MhyQ6-YTw",
  authDomain: "projeto-75-5363f.firebaseapp.com",
  projectId: "projeto-75-5363f",
  storageBucket: "projeto-75-5363f.appspot.com",
  messagingSenderId: "878660080663",
  appId: "1:878660080663:web:dc3ba758699d7dc240b852"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
