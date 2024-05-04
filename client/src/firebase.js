
// import { initializeApp } from "firebase/app";
// const firebaseConfig = {
//   apiKey: "AIzaSyAXQnO_iQ09fboS6O1jXynrcIcWuuZnOco",
//   authDomain: "tuteme-d837d.firebaseapp.com",
//   projectId: "tuteme-d837d",
//   storageBucket: "tuteme-d837d.appspot.com",
//   messagingSenderId: "113470893787",
//   appId: "1:113470893787:web:333d9b239c94ce0a3fe6fe"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;

import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyAXQnO_iQ09fboS6O1jXynrcIcWuuZnOco",
  authDomain: "tuteme-d837d.firebaseapp.com",
  projectId: "tuteme-d837d",
  storageBucket: "tuteme-d837d.appspot.com",
  messagingSenderId: "113470893787",
  appId: "1:113470893787:web:333d9b239c94ce0a3fe6fe"
};

const app = initializeApp(firebaseConfig);
const storage=getStorage(app)
export  {storage}