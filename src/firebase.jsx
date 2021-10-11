import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyC2gDJkvkg3irjKIsagMHgystbsOQJsFB8",
  authDomain: "linkedin-clone-yt-64a28.firebaseapp.com",
  projectId: "linkedin-clone-yt-64a28",
  storageBucket: "linkedin -clone-yt-64a28.appspot.com",
  messagingSenderId: "299100254164",
  appId: "1:299100254164:web:2ccc51f1006c0bc6aa3041",
  measurementId: "G-RELBQ49FX9"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth()
export {db,auth}