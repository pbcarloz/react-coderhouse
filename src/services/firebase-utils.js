// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, query, getDocs, collection } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2sNlYTU7pK4EvJ3aP0x-_A6QM-XvnoAw",
  authDomain: "coderhouse-999dc.firebaseapp.com",
  projectId: "coderhouse-999dc",
  storageBucket: "coderhouse-999dc.appspot.com",
  messagingSenderId: "240880943485",
  appId: "1:240880943485:web:25b8c85cba83f08e5a8c14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const getCategoriesAndDocuments = async () => {

  const collectionRef = collection(db,'categorias');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items} = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};