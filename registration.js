
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  get,
  child,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
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
const database = getDatabase(app);

// FOR EMAIL VERIFICATION
(function () {
  emailjs.init({
    publicKey: "8FZVk4TobsyaJxcCJ",
  });
})();

const next = document.getElementById("next_btn");

next.addEventListener("click", (event) => {
  const input_id = document.getElementById("username_txt").value;
  const input_email = document.getElementById("email_txt").value;

  // Check if both fields are filled
  if (input_email !== "" && input_id !== "") {
    var id = input_id;
    var email = input_email;

    function generateUniqueID() {
      return Math.random().toString(36).substr(2, 5);
    }
    var code = generateUniqueID();

    function trimEmail(text) {
      const emailDomain = "@gmail.com";
      const index = text.indexOf(emailDomain);
      if (index !== -1) {
        return text.substring(0, index);
      }
      return text;
    }
    const trimmedEmail = trimEmail(email);

    const dbRef = ref(database);
    get(child(dbRef, "PARSEIT/administration/students/" + id)).then(
      (snapshot) => {
        if (snapshot.exists()) {
          get(child(dbRef, "PARSEIT/userinfo/" + trimmedEmail)).then(
            (snapshot) => {
              if (snapshot.exists()) {
                if (snapshot.val().studentid == id) {
                  if (snapshot.val().active == false) {
                    update(ref(database, "PARSEIT/userinfo/" + trimmedEmail), {
                      verificationcode: code,
                    });
                    emailjs.send('service_g8cli5d', 'template_b0rhzue', {
                      to_name: document.getElementById("email_txt").value,
                      message: "Your verification code is: " + code,

                    })
                      .then((response) => {
                        console.log('SUCCESS!', response.status, response.text);
                      })
                      .catch((error) => {
                        console.log('FAILED...', error);
                      });
                    document.getElementById("current_verify_email").innerHTML = email;
                    document.getElementById("current_confirm_email").innerHTML = snapshot.val().fullname;

                    const div_signup_container = document.getElementById("div_signup_container");
                    div_signup_container.style.display = "none";
                    const div_verify_container = document.getElementById("div_verify_container");
                    div_verify_container.style.display = "flex";
                  } else {
                    alert('This account seems active already. Try logging in.');
                  }
                } else {
                  alert('Cannot find Student ID.');
                }
              } else {
                alert("Credentials do not match.");
              }
            }
          );
        } else {
          get(child(dbRef, "PARSEIT/administration/teachers/" + id)).then(
            (snapshot) => {
              if (snapshot.exists()) {
                get(child(dbRef, "PARSEIT/userinfo/" + trimmedEmail)).then(
                  (snapshot) => {
                    if (snapshot.exists()) {
                      if (snapshot.val().studentid == id) {
                        if (snapshot.val().active == false) {
                          update(ref(database, "PARSEIT/userinfo/" + trimmedEmail), {
                            verificationcode: code,
                          });
                          document.getElementById("current_verify_email").innerHTML = email;
                          document.getElementById("current_confirm_email").innerHTML = snapshot.val().fullname;

                          const div_signup_container = document.getElementById("div_signup_container");
                          div_signup_container.style.display = "none";
                          const div_verify_container = document.getElementById("div_verify_container");
                          div_verify_container.style.display = "flex";
                        }
                      }
                    } else {
                      console.log("NO ID");
                    }
                  }
                );
              } else {
                alert('User doesn\'t exist.');
              }
            }
          );
        }
      }
    );
  } else {
    // If both fields are empty
    if (input_id === "" && input_email === "") {
      alert('Enter Credentials.');
    }
    // If only email is empty
    else if (input_email === "") {
      alert('Enter Email.');
    }
    // If only ID is empty
    else {
      alert('Enter ID.');
    }
  }
});


const next1 = document.getElementById("next1_btn");

next1.addEventListener("click", async (event) => {
  var email = document.getElementById("email_txt").value;

  // Trim email before using it
  function trimEmail(text) {
    const emailDomain = "@gmail.com";
    const index = text.indexOf(emailDomain);
    if (index !== -1) {
      return text.substring(0, index);
    }
    return text;
  }

  const trimmedEmail = trimEmail(email);
  const dbRef = ref(database);

  try {
    // Get user info using trimmed email
    const userSnapshot = await get(child(dbRef, "PARSEIT/userinfo/" + trimmedEmail));

    if (userSnapshot.exists()) {
      const studentid = userSnapshot.val().studentid;

      // Get student information using studentid
      const studentSnapshot = await get(child(dbRef, "PARSEIT/administration/students/" + studentid));

      if (studentSnapshot.exists()) {
        document.getElementById("txtfirstname").value = studentSnapshot.val().firstname;
        document.getElementById("txtlastname").value = studentSnapshot.val().lastname;
        document.getElementById("txtmidname").value = studentSnapshot.val().middlename;
        document.getElementById("txtsuffixname").value = studentSnapshot.val().suffix;
      }

      // Check if verification code exists
      const verificationCode = userSnapshot.val().verificationcode;
      if (verificationCode !== null) {
        const input_code = document.getElementById("verification_txt").value;

        // If input code matches verification code
        if (input_code === verificationCode) {
          // Remove the verification code
          await remove(ref(database, "PARSEIT/userinfo/" + trimmedEmail + "/verificationcode"));

          // Show/hide relevant containers
          document.getElementById("div_signup_container").style.display = "none";
          document.getElementById("div_verify_container").style.display = "none";
          document.getElementById("div_fillout_container").style.display = "flex";

          // Update the step progress
          document.getElementById("step1_cont").style.display = "block";
          document.getElementById("step1_circle").style.backgroundColor = "#007AFF";
          document.getElementById("step1_circle").style.color = "#fefefe";
        } else {
          console.log("Verification code does not match.");
        }
      }
    } else {
      console.log("User not found.");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});


const step5_btn = document.getElementById("step5_btn");
step5_btn.addEventListener("click", async (event) => {
  event.preventDefault();
  var fullname =
    document.getElementById("txtfirstname").value + " " +
    document.getElementById("txtmidname").value + " " +
    document.getElementById("txtlastname").value + " " +
    document.getElementById("txtsuffixname").value;
  var birthday =
    document.getElementById("txtbirthmonth").value + " " +
    document.getElementById("txtbirthday").value + " " +
    document.getElementById("txtbirthyear").value;

  var username = document.getElementById("txtusername").value;
  var password = document.getElementById("txtpassword").value;
  var email = document.getElementById("email_txt").value;
  var id = document.getElementById("username_txt").value;

  function trimEmail(text) {
    const emailDomain = "@gmail.com";
    const index = text.indexOf(emailDomain);
    if (index !== -1) {
      return text.substring(0, index);
    }
    return text;
  }

  const trimmedEmail = trimEmail(email);
  await update(ref(database, "PARSEIT/userinfo/" + trimmedEmail), {
    fullname: fullname,
    birthday: birthday,
    username: username,
    active: true,
  }).then(() => {
    const auth = getAuth();
    const userCredentials = createUserWithEmailAndPassword(auth, email, password).then(() => {
      window.location.href = "authentication.html";
    });

  });


});
