import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  get,
  child,
  update,
  query,
  orderByKey,
  limitToLast,
  push,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";
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

let currentemail = localStorage.getItem("user-parser");
function trimEmail(text) {
  const emailDomain = "@gmail.com";
  const index = text.indexOf(emailDomain);
  if (index !== -1) {
    return text.substring(0, index);
  }
  return text;
}
const currentloggedin = trimEmail(currentemail);
let currentregular = null;
let currentsection = null;
let currentstudentid = null;
let currenttype = null;
let currentyear = null;
let currentname = null;
function getUserInfo() {
  return new Promise((resolve, reject) => {
    const dbRef = ref(database);
    get(child(dbRef, "PARSEIT/userinfo/" + currentloggedin))
      .then((snapshot) => {
        if (snapshot.exists()) {
          currentregular = snapshot.val().regular;
          currentsection = snapshot.val().section;
          currentstudentid = snapshot.val().studentid;
          currenttype = snapshot.val().type;
          currentyear = "year-lvl-" + snapshot.val().year;
          currentname = snapshot.val().fullname;
          resolve();
        } else {
          alert('No data available');
          resolve();
        }
      })
      .catch((error) => {
        alert('Error getting user info');
        reject(error);
      });
  });
}

getUserInfo().then(() => {
  get(child(dbRef, "PARSEIT/administration/semester/")).then((snapshot) => {
    if (snapshot.exists()) {
      if (snapshot.val().start == true) {
        // document.getElementById("currentstatus").style.display = "none";
        const homebtn_container = document.getElementById("lobby_btn");
        const gamebtn_container = document.getElementById("game_btn");
        const ytbtn_container = document.getElementById("yt_btn");
        const deansbtn_container = document.getElementById("deans_btn");
        const announce_container = document.getElementById("announce_btn");
        const chatgptbtn_container = document.getElementById("chatgpt_btn");
        //const dbRef = ref(database);

        get(child(dbRef, "PARSEIT/userinfo/" + currentloggedin)).then(
          (snapshot) => {
            if (snapshot.exists()) {
              if (currenttype == "student") {
                homebtn_container.style.display = "flex";
                gamebtn_container.style.display = "flex";
                ytbtn_container.style.display = "flex";
                deansbtn_container.style.display = "none";
                announce_container.style.display = "none";
                chatgptbtn_container.style.display = "flex";

                viewparseroom();
                viewannouncement();
              } else {
                homebtn_container.style.display = "flex";
                gamebtn_container.style.display = "none";
                ytbtn_container.style.display = "none";
                deansbtn_container.style.display = "flex";
                announce_container.style.display = "flex";
                chatgptbtn_container.style.display = "flex";
                document.getElementById("authorname").value = currentname;
                //viewteacher();
                viewannouncement();

              }
            } else {
              alert('Path for currentloggedin is missing.')
            }
          }
        );
      } else {
        //Semester not yet started.
        // document.getElementById("currentstatus").style.display = "block";
        document.getElementById("homelobby_container").style.backgroundImage = "url(assets/images/background_images/sem_bg_600px.png)";
        document.getElementById("subject_list").style.display = "flex";
        document.getElementById("subject_list").style.justifyContent = "center";


        const homebtn_container = document.getElementById("lobby_btn");
        const gamebtn_container = document.getElementById("game_btn");
        const ytbtn_container = document.getElementById("yt_btn");
        const deansbtn_container = document.getElementById("deans_btn");
        const announce_container = document.getElementById("announce_btn");
        const chatgptbtn_container = document.getElementById("chatgpt_btn");
        const dbRef = ref(database);

        get(child(dbRef, "PARSEIT/userinfo/" + currentloggedin)).then(
          (snapshot) => {
            if (snapshot.exists()) {
              if (currenttype == "student") {
                homebtn_container.style.display = "flex";
                gamebtn_container.style.display = "flex";
                ytbtn_container.style.display = "flex";
                deansbtn_container.style.display = "none";
                announce_container.style.display = "none";
                chatgptbtn_container.style.display = "flex";
                viewannouncement();
              } else {
                homebtn_container.style.display = "flex";
                gamebtn_container.style.display = "none";
                ytbtn_container.style.display = "none";
                deansbtn_container.style.display = "flex";
                announce_container.style.display = "flex";
                chatgptbtn_container.style.display = "flex";
                viewannouncement();
              }
            } else {
            }
          }
        );
      }
    } else {
      alert('Reference for Semester is missing.')
    }
  });
});

const dbRef = ref(database);
function viewparseroom() {

  const subject_list = document.getElementById("subject_list");

  // Get today's day name
  const today = new Date();
  const options = { weekday: "long" };
  const dayName = today.toLocaleDateString("en-US", options);

  get(child(dbRef, "PARSEIT/administration/semester/students/" + currentyear + "/" + currentsection + "/" + currentstudentid + "/subjects"))
    .then((snapshot) => {
      if (snapshot.exists()) {

        let promises = [];
        snapshot.forEach((childSnapshot) => {
          const subjectcode = childSnapshot.key;
          const subjectname = childSnapshot.val().name;
          const subjectteacher = "[Teacher not yet fixed]";

          const parseroomid = subjectcode + "-" + childSnapshot.val().section;

          const schedulePromise = get(
            child(dbRef, "PARSEIT/administration/semester/students/" + currentyear + "/" + currentsection + "/" + currentstudentid + "/subjects/" + subjectcode + "/schedule/" + dayName))
            .then((scheduleSnapshot) => {
              let schedule;
              if (scheduleSnapshot.exists()) {
                schedule = scheduleSnapshot.val().start + " - " + scheduleSnapshot.val().end;
                if (schedule = " - ") {
                  schedule = "[Schedule not yet fixed]";
                }
                else {

                }
              } else {
                schedule = "[Schedule not yet fixed]";
              }
              return {
                parseroomid,
                subjectcode,
                subjectname,
                subjectteacher,
                schedule,
              };
            });
          promises.push(schedulePromise); // Add the promise to the array
        });

        Promise.all(promises).then((subjects) => {
          let htmlstring = "";
          subjects.forEach(
            ({
              parseroomid,
              subjectcode,
              subjectname,
              subjectteacher,
              schedule,
            }) => {
              htmlstring += `<button class="subject" id="${parseroomid}" onclick="window.location.href='parseroom.html?chatid=${parseroomid}'">
            <div class="subjectcode"><a class="s_code s_all">${subjectcode}</a></div>
            <div class="subjectname"><a class="s_name s_all">${subjectname}</a></div>
            <div class="subjectteacher"><a class="s_teacher s_all">${subjectteacher}</a></div>
            <div class="schedule"><a class="s_schedule s_all">${schedule}</a></div>
          </button>`;
            }
          );
          subject_list.innerHTML = htmlstring; // Set the HTML after all data is fetched
          //document.getElementById(subjects[0].parseroomid).style.backgroundImage = "url(assets/images/background_images/" + subjects[1].subjectcode + ".png)";
          //console.log(subjects[1].subjectcode);
          subjects.forEach((subject) => {
            //document.getElementById(subject.parseroomid).style.backgroundColor = "red";
            const SubjectCode_ = encodeURIComponent(subject.subjectcode);
            //const SubjectCode_ = subject.subjectcode.replace(/ /g, "_");
            //console.log(subject.subjectcode);
            document.getElementById(subject.parseroomid).style.backgroundImage = "url(assets/images/background_images/" + SubjectCode_ + ".png)";
            document.getElementById(subject.parseroomid).style.backgroundSize = "cover";
            document.getElementById(subject.parseroomid).style.backgroundRepeat = "no-repeat";
            document.getElementById(subject.parseroomid).style.backgroundPosition = "center";
          });
        });
      }
      else {
        console.log('PATH ERROR');

      }
    })
    .catch((error) => {
      console.error("Error fetching subjects: ", error);
    });
}
function viewannouncement() {
  // Get the DOM elements for the labels
  const date_announcement_lbl = document.getElementById("date_announcement_lbl");
  const announcement_lbl = document.getElementById("announcement_lbl");
  const time_announcement_lbl = document.getElementById("time_announcement_lbl");

  // Reference to the 'announcement' node in your database
  const dbRef = ref(database, "PARSEIT/announcement/");

  // Create a query to get the latest announcement by ordering by key and limiting to the last one
  const latestAnnouncementQuery = query(dbRef, orderByKey(), limitToLast(1));

  get(latestAnnouncementQuery).then((snapshot) => {
    if (snapshot.exists()) {
      let latestAnnouncement = null;

      // Iterate over the snapshot (just in case there's more than one)
      snapshot.forEach((childSnapshot) => {
        const announcementData = childSnapshot.val();
        latestAnnouncement = announcementData; // Store the latest announcement
      });

      // If we have the latest announcement, update the UI
      if (latestAnnouncement) {
        date_announcement_lbl.innerText = latestAnnouncement.date || "[Date not available]";
        announcement_lbl.innerText = latestAnnouncement.header || "[Message not available]";
        time_announcement_lbl.innerText = latestAnnouncement.time || "[Time not available]";
        document.getElementById("announcement_container").style.backgroundImage = "url(assets/images/background_images/" + latestAnnouncement.background_img + ")";
      }
    } else {
      // document.getElementById("announcement_container").style.backgroundImage = "url(assets/images/background_images/)";
      console.log("No announcements available.");
      document.getElementById("announcement_container").style.backgroundColor = "blue";
      document.getElementById("announcement_container").style.backgroundImage = "url(assets/images/background_images/noannouncement_bg_600px.png)";
      date_announcement_lbl.innerText = "There is no announcement";
      date_announcement_lbl.style.color = "#fefefe";
      announcement_lbl.innerText = "Seems like you are all caught up!";
      announcement_lbl.style.color = "#fefefe";

    }
  }).catch((error) => {
    console.error("Error fetching announcement: ", error);
  });
}

function viewallannouncement() {
  // Get the DOM element where all announcements will be displayed
  const allannounce = document.getElementById("allannouncement");

  // Reference to the 'announcement' node in your database
  const dbRef = ref(database, "PARSEIT/announcement/");

  // Get all announcements without limiting to the last one
  get(dbRef).then((snapshot) => {
    if (snapshot.exists()) {
      let htmlannounce = "";

      // Retrieve all announcements data
      const announcements = snapshot.val();

      // Find the maximum key
      const maxKey = Math.max(...Object.keys(announcements).map(Number));

      // Loop through all the announcements and display each one
      Object.values(announcements).forEach(({
        authorid,
        authorname,
        backgroundname,
        date,
        day,
        description,
        header,
        time,
      }, index) => {
        // Create HTML for each announcement
        htmlannounce += `<div><strong>Date:</strong> ${date} ${time}</div><div><strong>Author:</strong> ${authorname}</div><div><strong>Title:</strong> ${header}</div><div><strong>Description:</strong> ${description}</div><hr>`;
      });

      // Display the highest key


      // Inject all announcements into the DOM
      allannounce.innerHTML = htmlannounce;
    } else {
      console.log("No announcements available.");
    }
  }).catch((error) => {
    console.error("Error fetching announcements: ", error);
  });
}

// Call the function to view all announcements
viewallannouncement();



const announcementForm = document.getElementById("announcementForm");
announcementForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting the default way
  document.getElementById("authorname").value = currentname;
  // Get the values from the form
  const authorname = document.getElementById("authorname").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const header = document.getElementById("header").value;
  const description = document.getElementById("description").value;

  // Format the date to "October 10, 2024"
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Format the time to include AM/PM
  const formattedTime = new Date(`1970-01-01T${time}`).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });

  // Function to get the next announcement number
  const dbRef = ref(database, 'PARSEIT/');
  get(child(dbRef, 'announcement_count')).then((snapshot) => {
    let nextKey = 1;

    if (snapshot.exists()) {
      nextKey = snapshot.val() + 1; // Increment the existing key
    }
    const background = document.getElementById('backgroundimg_announcement').value;
    // Create a new announcement object
    const newAnnouncement = {
      authorname,
      date: formattedDate,
      time: formattedTime,
      header,
      description,
      background_img: background + ".png"
    };

    // Save the new announcement with the incremented number as the key
    const newAnnouncementRef = ref(database, `PARSEIT/announcement/${nextKey}`);
    set(newAnnouncementRef, newAnnouncement)
      .then(() => {
        // Update the announcement count
        const countRef = ref(database, 'PARSEIT/');
        update(countRef, { announcement_count: nextKey });
        announcementForm.reset();
        viewallannouncement(); // Refresh the announcement list
      })
      .catch((error) => {
        console.error("Error submitting announcement: ", error);
      });
  }).catch((error) => {
    console.error("Error getting announcement count: ", error);
  });
});