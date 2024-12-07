
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAuth ,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDRJQYK8yP1tP8WrzIjOLKq4qWuR4-Jy1A",
    authDomain: "fir-f3a06.firebaseapp.com",
    projectId: "fir-f3a06",
    storageBucket: "fir-f3a06.firebasestorage.app",
    messagingSenderId: "545608722767",
    appId: "1:545608722767:web:f255d58f5ed380f734fd3a",
    measurementId: "G-JC2R8FKL6V"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const auth= getAuth(app)



 function SignUpUser (){
    const email= document.getElementById(`email`).value;
    const password= document.getElementById(`password`).value

    createUserWithEmailAndPassword(auth,email,password).then((userCredintial)=>{
console.log(userCredintial.user.uid);

      })

 }
 const SignUp = document.getElementById(`signup`)
 SignUp.addEventListener(`click`,SignUpUser)
  
  
 function SignInUser (){
    const email= document.getElementById(`email`).value;
    const password= document.getElementById(`password`).value

    signInWithEmailAndPassword(auth,email,password).then((userCredintial)=>{
console.log(userCredintial.user.uid);

      })
    }
    const SignIn = document.getElementById(`signIn`)
 SignIn.addEventListener(`click`,SignInUser)
  