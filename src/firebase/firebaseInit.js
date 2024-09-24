import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFx29Vu8Dq87-Ac6PBVTIcsfmzh-DcT5w",
  authDomain: "fireblogs-af758.firebaseapp.com",
  projectId: "fireblogs-af758",
  storageBucket: "fireblogs-af758.appspot.com",
  messagingSenderId: "802880734043",
  appId: "1:802880734043:web:52ba0adb7378063925507e",
  measurementId: "G-DRJXQF7PK4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
