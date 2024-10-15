const signup = document.getElementById("signinasuser_btn");
signup.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "authentication.html";
});

const cancel = document.getElementById("cancel_btn");
cancel.addEventListener("click", (event) => {
  event.preventDefault();
  const div_signup_container = document.getElementById("div_signup_container");
  div_signup_container.style.display = "flex";
  window.location.href = "index.html";
});

// const next = document.getElementById('next_btn');
// next.addEventListener('click', (event)=>{
//   event.preventDefault();
//   const div_signup_container = document.getElementById('div_signup_container');
//   div_signup_container.style.display = "none";
//   const div_verify_container = document.getElementById('div_verify_container');
//   div_verify_container.style.display = "flex";
// })

// FOR FILLOUT CONTAINER

const step1 = document.getElementById("step1_btn");
const step2 = document.getElementById("step2_btn");
const step3 = document.getElementById("step3_btn");
const step4 = document.getElementById("step4_btn");
const step5 = document.getElementById("step5_btn");
const editdetails_btn = document.getElementById("editdetails_btn");

step1.addEventListener("click", (event) => {
  event.preventDefault();
  const step1_cont = document.getElementById("step1_cont");
  step1_cont.style.display = "none";

  const step2_cont = document.getElementById("step2_cont");
  step2_cont.style.display = "block";
  const step2_circle = document.getElementById("step2_circle");
  step2_circle.style.backgroundColor = "#007AFF";
  step2_circle.style.color = "#fefefe";

  const step3_cont = document.getElementById("step3_cont");
  step3_cont.style.display = "none";
  const step4_cont = document.getElementById("step4_cont");
  step4_cont.style.display = "none";
  const step5_cont = document.getElementById("step5_cont");
  step5_cont.style.display = "none";
});

step2.addEventListener("click", (event) => {
  event.preventDefault();
  const step1_cont = document.getElementById("step1_cont");
  step1_cont.style.display = "none";
  const step2_cont = document.getElementById("step2_cont");
  step2_cont.style.display = "none";

  const step3_cont = document.getElementById("step3_cont");
  step3_cont.style.display = "block";
  const step3_circle = document.getElementById("step3_circle");
  step3_circle.style.backgroundColor = "#007AFF";
  step3_circle.style.color = "#fefefe";

  const step4_cont = document.getElementById("step4_cont");
  step4_cont.style.display = "none";
  const step5_cont = document.getElementById("step5_cont");
  step5_cont.style.display = "none";
});

step3.addEventListener("click", (event) => {
  event.preventDefault();
  const step1_cont = document.getElementById("step1_cont");
  step1_cont.style.display = "none";
  const step2_cont = document.getElementById("step2_cont");
  step2_cont.style.display = "none";
  const step3_cont = document.getElementById("step3_cont");
  step3_cont.style.display = "none";

  const step4_cont = document.getElementById("step4_cont");
  step4_cont.style.display = "block";
  const step4_circle = document.getElementById("step4_circle");
  step4_circle.style.backgroundColor = "#007AFF";
  step4_circle.style.color = "#fefefe";

  const step5_cont = document.getElementById("step5_cont");
  step5_cont.style.display = "none";
});

step4.addEventListener("click", (event) => {

  var password = document.getElementById("txtpassword").value;
  var confirmpassword = document.getElementById("txtconfirmpass").value;

  if (password == confirmpassword) {
    event.preventDefault();
    const step1_cont = document.getElementById("step1_cont");
    step1_cont.style.display = "none";
    const step2_cont = document.getElementById("step2_cont");
    step2_cont.style.display = "none";
    const step3_cont = document.getElementById("step3_cont");
    step3_cont.style.display = "none";
    const step4_cont = document.getElementById("step4_cont");
    step4_cont.style.display = "none";

    const step5_cont = document.getElementById("step5_cont");
    step5_cont.style.display = "block";
    const step5_circle = document.getElementById("step5_circle");
    step5_circle.style.backgroundColor = "#007AFF";
    step5_circle.style.color = "#fefefe";

    var fullname =
      document.getElementById("txtfirstname").value + " " + document.getElementById("txtmidname").value + " " +
      document.getElementById("txtlastname").value + " " + document.getElementById("txtsuffixname").value;
    var birthday =
      document.getElementById("txtbirthmonth").value + " " +
      document.getElementById("txtbirthday").value + " " +
      document.getElementById("txtbirthyear").value;
    document.getElementById("confirm-id").innerText = document.getElementById("username_txt").value;
    document.getElementById("confirm-name").innerText = fullname;
    document.getElementById("confirm-birthday").innerText = birthday;
    document.getElementById("confirm-age").innerText = "test";
    document.getElementById("confirm-username").innerText = document.getElementById("txtusername").value;
    document.getElementById("confirm-email").innerText = document.getElementById("email_txt").value;


  }
  else {
    alert('not match')
  }
});

editdetails_btn.addEventListener("click", (event) => {
  event.preventDefault();
  const step1_cont = document.getElementById("step1_cont");
  step1_cont.style.display = "block";

  const step2_cont = document.getElementById("step2_cont");
  step2_cont.style.display = "none";

  const step3_cont = document.getElementById("step3_cont");
  step3_cont.style.display = "none";

  const step4_cont = document.getElementById("step4_cont");
  step4_cont.style.display = "none";

  const step5_cont = document.getElementById("step5_cont");
  step5_cont.style.display = "none";

  const step1_circle = document.getElementById("step1_circle");
  step1_circle.style.backgroundColor = "#007AFF";
  step1_circle.style.color = "#fefefe";

  const step2_circle = document.getElementById("step2_circle");
  step2_circle.style.backgroundColor = "#fefefe";
  step2_circle.style.color = "#007AFF";

  const step3_circle = document.getElementById("step3_circle");
  step3_circle.style.backgroundColor = "#fefefe";
  step3_circle.style.color = "#007AFF";

  const step4_circle = document.getElementById("step4_circle");
  step4_circle.style.backgroundColor = "#fefefe";
  step4_circle.style.color = "#007AFF";

  const step5_circle = document.getElementById("step5_circle");
  step5_circle.style.backgroundColor = "#fefefe";
  step5_circle.style.color = "#007AFF";
});
