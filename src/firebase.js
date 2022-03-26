import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyCPCDLC7yTDMbM8XMI5df-2UWE21rqi_Nk",
    authDomain: "clone-f0f5d.firebaseapp.com",
    databaseURL: "https://clone-f0f5d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "clone-f0f5d",
    storageBucket: "clone-f0f5d.appspot.com",
    messagingSenderId: "481242395849",
    appId: "1:481242395849:web:e45820df53abcce2ec0918"
  })

const auth = firebase.auth()

export {auth}