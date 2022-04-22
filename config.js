import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
   apiKey: "AIzaSyBNv9aElOxBU8LnCHJ3KhZOJr2fiSzOvAc",
    authDomain: "e-library-6194f.firebaseapp.com",
     projectId: "e-library-6194f",
      storageBucket: "e-library-6194f.appspot.com",
       messagingSenderId: "533989491395",
        appId: "1:533989491395:web:897f7b83aca75a005fd876" 
      };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
