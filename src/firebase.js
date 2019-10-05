import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBwM3bToOKxHosNL0KPrwnN8WzXWs26Y_I",
    authDomain: "todo-f5077.firebaseapp.com",
    databaseURL: "https://todo-f5077.firebaseio.com",
    projectId: "todo-f5077",
    storageBucket: "",
    messagingSenderId: "97722524776",
    appId: "1:97722524776:web:585ba7a6bba55bd65ac7dd"
};
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

export default firebase;
