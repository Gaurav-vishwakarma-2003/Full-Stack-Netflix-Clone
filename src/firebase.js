// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Await } from "react-router-dom";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnJw7NRo0w7_vn5aJ8CuRJLyWQt49H4x4",
  authDomain: "netflix-clone-23809.firebaseapp.com",
  projectId: "netflix-clone-23809",
  storageBucket: "netflix-clone-23809.firebasestorage.app",
  messagingSenderId: "659147542937",
  appId: "1:659147542937:web:8893b4e9e9f83b38bdc308"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

//Here i started

const signup = async (name, email, password) => {
    try {
       const res = await createUserWithEmailAndPassword(auth, email, password );
       const user = res.user;
       await addDoc(collection(db, "user"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
       })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email,password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
        
    }
}

const logout = () => {
    signOut(auth);
}

export {auth,db, login, signup, logout};