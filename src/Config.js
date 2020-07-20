import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDvcE3Qp4xHAUDo_aU41LUJgVSKCIlGTjA",
  authDomain: "insta-clone-fa0ac.firebaseapp.com",
  databaseURL: "https://insta-clone-fa0ac.firebaseio.com",
  projectId: "insta-clone-fa0ac",
  storageBucket: "insta-clone-fa0ac.appspot.com",
  messagingSenderId: "900349810067",
  appId: "1:900349810067:web:5089ef866a7130479dc466"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage}