import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCFqgbA_t3EBVO21nW70umJOHX3UdRr9MY",
  authDomain: "parseit-8021e.firebaseapp.com",
  databaseURL:
    "https://parseit-8021e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "parseit-8021e",
  storageBucket: "parseit-8021e.appspot.com",
  messagingSenderId: "15166597986",
  appId: "1:15166597986:web:04b0219b1733780ae61a3b",
};
const app = initializeApp(firebaseConfig);

// Get modal elements
const modal = document.getElementById("errorModal");
const closeModal = document.getElementById("closeModal");
const errorMessage = document.getElementById("errorMessage");

// Function to show the error modal
function showError(message) {
  errorMessage.textContent = message; // Set the error message
  modal.style.display = "flex"; // Show the modal
  modal.style.opacity = "100";
}

// Close the modal when the close button is clicked
// closeModal.onclick = function () {
//   modal.style.display = "none";
// }

// // Close the modal when clicking outside of it
// window.onclick = function (event) {
//   if (event.target === modal) {
//     modal.style.display = "none";
//   }
// }



const signin = document.getElementById("signin_btn");
signin.addEventListener("click", (event) => {
  var email = document.getElementById("username_txt").value;
  var password = document.getElementById("password_txt").value;

  // if (!password && !email) {
  //   showError("Please enter your email and password.");
  //   return;
  // }

  // if (!email) {
  //   showError("Please enter your email.");
  //   return;
  // }
  // if (!password) {
  //   showError("Please enter your password.");
  //   return;
  // }


  const auth = getAuth();

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      localStorage.setItem("user-parser", email);
      window.location.href = "index.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      // let message = ""; // Initialize message variable
      if (errorCode === "auth/missing-password") {
        // message = "Please enter your password.";  // Show missing password error
        alert('Please enter your password.');
      }
      else if (errorCode === "auth/invalid-email") {
        // message = "The email address is not valid.";  // Show invalid email error
        alert('Please enter your email.');
      }
      else if (errorCode === "auth/wrong-password" || errorCode === "auth/user-not-found") {
        // message = "The email or password is incorrect.";  // Show credentials mismatch error
      }
      else if (errorCode === "auth/invalid-credential") {
        // message = "Invalid credentials provided."; // Show invalid credentials error
        alert('Invalid credentials provided.');
      }

      // if (message) {
      //   showError(message); // Show the error message in the modal
      // }
    });
});
