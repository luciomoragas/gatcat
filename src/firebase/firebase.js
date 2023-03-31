import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd2K4zwYhJhSfipvMsX2NVDub5MI69JnQ",
  authDomain: "lucio-react.firebaseapp.com",
  projectId: "lucio-react",
  storageBucket: "lucio-react.appspot.com",
  messagingSenderId: "407504561944",
  appId: "1:407504561944:web:211d00ea6459d47c36206d",
  measurementId: "G-57W0J8S3L3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const collectionProducts = collection(db, 'products');
export const orders = collection(db, 'orders');

export const getItemsFromDb = (db, func1, func2) => {
  getDocs(db)
    .then((res) => {
      const getProducts = res.docs.map((product) => {
        const aux = product.data();
        aux.id = product.id;
        return aux;
      });
      func1(getProducts);
      func2(false);
    })
    .catch((err) => console.log(err));
};
