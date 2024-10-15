var maincontainer = document.getElementById("main");
let username = localStorage.getItem("user-parser");
if (username == null) {
  window.location.href = "authentication.html";
} else {
  //STARTS WITH LOBBY HEIGHT MAIN HOME CONTAINER
  const homelobby_container = document.getElementById("homelobby_container");
  homelobby_container.style.display = "flex";
  const menuset_lbl = document.getElementById("menuset_lbl");
  menuset_lbl.innerText = "Lobby";

  //HIDES ALL BUTTONS
  const homebtn_container = document.getElementById("lobby_btn");
  const gamebtn_container = document.getElementById("game_btn");
  const ytbtn_container = document.getElementById("yt_btn");
  const deansbtn_container = document.getElementById("deans_btn");
  const announce_container = document.getElementById("announce_btn");
  const chatgptbtn_container = document.getElementById("chatgpt_btn");
  homebtn_container.style.display = "none";
  gamebtn_container.style.display = "none";
  ytbtn_container.style.display = "none";
  deansbtn_container.style.display = "none";
  announce_container.style.display = "none";
  chatgptbtn_container.style.display = "none";
  // CHANGE LOBBY ICON TO RED
  const navlobby = document.getElementById("navlobby");
  navlobby.src = "Assets/Images/Icons/ParseRoom.png";

  //MENU BUTTON ANIMATION
  const menu_btn = document.getElementById("menu_btn");
  menu_btn.addEventListener("click", function () {
    const sidebar = document.getElementById("sidebar_container");
    sidebar.style.visibility = "visible";
    sidebar.style.animation = "left-to-right 0.3s ease-in-out forwards";
  });
  //CLOSE MENU BUTTON ANIMATION
  const closemenu_btn = document.getElementById("closemenu_btn");
  closemenu_btn.addEventListener("click", function () {
    const sidebar = document.getElementById("sidebar_container");
    sidebar.style.animation = "right-to-left 0.3s ease-in-out forwards";
  });

  //ANNOUNCEMENT BUTTON ANIMATION
  const announcement_container = document.getElementById(
    "announcement_container"
  );
  announcement_container.addEventListener("click", function () {
    const events_container = document.getElementById("events_container");
    events_container.style.visibility = "visible";
    events_container.style.animation = "pop-in 0.3s ease-in-out forwards";
  });
  //CLOSE ANNOUNCEMENT BUTTON ANIMATION
  const closeevents_btn = document.getElementById("closeevents_btn");
  closeevents_btn.addEventListener("click", function () {
    const events_container = document.getElementById("events_container");
    events_container.style.animation = "pop-out 0.3s ease-in-out forwards";
  });

  //NAVIGATION BAR LOBBY
  const lobby_btn = document.getElementById("lobby_btn");
  lobby_btn.addEventListener("click", function () {
    location.reload();
    const search_container = document.getElementById("search_container");
    search_container.style.display = "flex";
    const announcement_container = document.getElementById(
      "announcement_container"
    );
    announcement_container.style.display = "flex";

    //DISPLAY CONTAINER
    const homelobby_container = document.getElementById("homelobby_container");
    homelobby_container.style.display = "flex";
    const menuset_lbl = document.getElementById("menuset_lbl");
    menuset_lbl.innerText = "Lobby";

    //HIDE OTHER CONTAINERS
    const homegame_container = document.getElementById("homegame_container");
    homegame_container.style.display = "none";
    const homeyt_container = document.getElementById("homeyt_container");
    homeyt_container.style.display = "none";
    const homedeans_container = document.getElementById("homedeans_container");
    homedeans_container.style.display = "none";
    const homeannounce_container = document.getElementById(
      "homeannounce_container"
    );
    homeannounce_container.style.display = "none";
    const homechatgpt_container = document.getElementById(
      "homechatgpt_container"
    );
    homechatgpt_container.style.display = "none";

    //CHANGE ICON IMAGE TO RED
    const navlobby = document.getElementById("navlobby");
    navlobby.src = "Assets/Images/Icons/ParseRoom.png";
    //CHANGE OTHER ICONS IMAGE TO GRAY
    const navgame = document.getElementById("navgame");
    navgame.src = "Assets/Images/Icons/Game-1.png";
    const navyt = document.getElementById("navyt");
    navyt.src = "Assets/Images/Icons/YouTube-1.png";
    const navdeans = document.getElementById("navdeans");
    navdeans.src = "Assets/Images/Icons/Medal-1.png";
    const navannounce = document.getElementById("navannounce");
    navannounce.src = "Assets/Images/Icons/Announce-1.png";
    const navchatgpt = document.getElementById("navchatgpt");
    navchatgpt.src = "Assets/Images/Icons/ChatGPT-1.png";
  });

  //NAVIGATION BAR GAME
  const game_btn = document.getElementById("game_btn");
  game_btn.addEventListener("click", function () {
    const search_container = document.getElementById("search_container");
    search_container.style.display = "flex";
    const announcement_container = document.getElementById(
      "announcement_container"
    );
    announcement_container.style.display = "none";

    //DISPLAY CONTAINER
    const homegame_container = document.getElementById("homegame_container");
    homegame_container.style.display = "flex";
    const menuset_lbl = document.getElementById("menuset_lbl");
    menuset_lbl.innerText = "Gaming";

    //HIDE OTHER CONTAINERS
    const homelobby_container = document.getElementById("homelobby_container");
    homelobby_container.style.display = "none";
    const homeyt_container = document.getElementById("homeyt_container");
    homeyt_container.style.display = "none";
    const homedeans_container = document.getElementById("homedeans_container");
    homedeans_container.style.display = "none";
    const homeannounce_container = document.getElementById(
      "homeannounce_container"
    );
    homeannounce_container.style.display = "none";
    const homechatgpt_container = document.getElementById(
      "homechatgpt_container"
    );
    homechatgpt_container.style.display = "none";

    //CHANGE ICON IMAGE TO RED
    const navgame = document.getElementById("navgame");
    navgame.src = "Assets/Images/Icons/Game.png";
    //CHANGE OTHER ICONS IMAGE TO GRAY
    const navlobby = document.getElementById("navlobby");
    navlobby.src = "Assets/Images/Icons/ParseRoom-1.png";
    const navyt = document.getElementById("navyt");
    navyt.src = "Assets/Images/Icons/YouTube-1.png";
    const navdeans = document.getElementById("navdeans");
    navdeans.src = "Assets/Images/Icons/Medal-1.png";
    const navannounce = document.getElementById("navannounce");
    navannounce.src = "Assets/Images/Icons/Announce-1.png";
    const navchatgpt = document.getElementById("navchatgpt");
    navchatgpt.src = "Assets/Images/Icons/ChatGPT-1.png";
  });

  //NAVIGATION YOUTUBE
  const yt_btn = document.getElementById("yt_btn");
  yt_btn.addEventListener("click", function () {
    const search_container = document.getElementById("search_container");
    search_container.style.display = "flex";
    const announcement_container = document.getElementById(
      "announcement_container"
    );
    announcement_container.style.display = "none";

    //DISPLAY CONTAINER
    const homeyt_container = document.getElementById("homeyt_container");
    homeyt_container.style.display = "flex";
    const menuset_lbl = document.getElementById("menuset_lbl");
    menuset_lbl.innerText = "YT Library";
    document.getElementById("yttop").style.display = "flex";
    document.getElementById("ytbot").style.display = "block";

    //HIDE OTHER CONTAINERS
    const homelobby_container = document.getElementById("homelobby_container");
    homelobby_container.style.display = "none";
    const homegame_container = document.getElementById("homegame_container");
    homegame_container.style.display = "none";
    const homedeans_container = document.getElementById("homedeans_container");
    homedeans_container.style.display = "none";
    const homeannounce_container = document.getElementById(
      "homeannounce_container"
    );
    homeannounce_container.style.display = "none";
    const homechatgpt_container = document.getElementById(
      "homechatgpt_container"
    );
    homechatgpt_container.style.display = "none";

    //CHANGE ICON IMAGE TO RED
    const navyt = document.getElementById("navyt");
    navyt.src = "Assets/Images/Icons/YouTube.png";
    //CHANGE OTHER ICONS IMAGE TO GRAY
    const navlobby = document.getElementById("navlobby");
    navlobby.src = "Assets/Images/Icons/ParseRoom-1.png";
    const navgame = document.getElementById("navgame");
    navgame.src = "Assets/Images/Icons/Game-1.png";
    const navdeans = document.getElementById("navdeans");
    navdeans.src = "Assets/Images/Icons/Medal-1.png";
    const navannounce = document.getElementById("navannounce");
    navannounce.src = "Assets/Images/Icons/Announce-1.png";
    const navchatgpt = document.getElementById("navchatgpt");
    navchatgpt.src = "Assets/Images/Icons/ChatGPT-1.png";
  });

  //NAVIGATION DEANS LISTER
  const deans_btn = document.getElementById("deans_btn");
  deans_btn.addEventListener("click", function () {
    const search_container = document.getElementById("search_container");
    search_container.style.display = "flex";
    const announcement_container = document.getElementById(
      "announcement_container"
    );
    announcement_container.style.display = "none";

    //DISPLAY CONTAINER
    const homedeans_container = document.getElementById("homedeans_container");
    homedeans_container.style.display = "flex";
    const menuset_lbl = document.getElementById("menuset_lbl");
    menuset_lbl.innerText = "Dean's Listers";
    //HIDE OTHER CONTAINERS
    const homelobby_container = document.getElementById("homelobby_container");
    homelobby_container.style.display = "none";
    const homegame_container = document.getElementById("homegame_container");
    homegame_container.style.display = "none";
    const homeyt_container = document.getElementById("homeyt_container");
    homeyt_container.style.display = "none";
    const homeannounce_container = document.getElementById(
      "homeannounce_container"
    );
    homeannounce_container.style.display = "none";
    const homechatgpt_container = document.getElementById(
      "homechatgpt_container"
    );
    homechatgpt_container.style.display = "none";

    //CHANGE ICON IMAGE TO RED
    const navdeans = document.getElementById("navdeans");
    navdeans.src = "Assets/Images/Icons/Medal.png";
    //CHANGE OTHER ICONS IMAGE TO GRAY
    const navlobby = document.getElementById("navlobby");
    navlobby.src = "Assets/Images/Icons/ParseRoom-1.png";
    const navgame = document.getElementById("navgame");
    navgame.src = "Assets/Images/Icons/Game-1.png";
    const navyt = document.getElementById("navyt");
    navyt.src = "Assets/Images/Icons/YouTube-1.png";
    const navannounce = document.getElementById("navannounce");
    navannounce.src = "Assets/Images/Icons/Announce-1.png";
    const navchatgpt = document.getElementById("navchatgpt");
    navchatgpt.src = "Assets/Images/Icons/ChatGPT-1.png";
  });

  //NAVIGATION ANNOUNCE
  const announce_btn = document.getElementById("announce_btn");
  announce_btn.addEventListener("click", function () {

    const search_container = document.getElementById("search_container");
    search_container.style.display = "none";
    const announcement_container = document.getElementById(
      "announcement_container"
    );
    announcement_container.style.display = "none";

    //DISPLAY CONTAINER
    const homeannounce_container = document.getElementById(
      "homeannounce_container"
    );
    homeannounce_container.style.display = "flex";
    const menuset_lbl = document.getElementById("menuset_lbl");
    menuset_lbl.innerText = "Announcement";
    //HIDE OTHER CONTAINERS
    const homelobby_container = document.getElementById("homelobby_container");
    homelobby_container.style.display = "none";
    const homegame_container = document.getElementById("homegame_container");
    homegame_container.style.display = "none";
    const homeyt_container = document.getElementById("homeyt_container");
    homeyt_container.style.display = "none";
    const homedeans_container = document.getElementById("homedeans_container");
    homedeans_container.style.display = "none";
    const homechatgpt_container = document.getElementById(
      "homechatgpt_container"
    );
    homechatgpt_container.style.display = "none";

    //CHANGE ICON IMAGE TO RED
    const navannounce = document.getElementById("navannounce");
    navannounce.src = "Assets/Images/Icons/Announce.png";
    //CHANGE OTHER ICONS IMAGE TO GRAY
    const navlobby = document.getElementById("navlobby");
    navlobby.src = "Assets/Images/Icons/ParseRoom-1.png";
    const navgame = document.getElementById("navgame");
    navgame.src = "Assets/Images/Icons/Game-1.png";
    const navyt = document.getElementById("navyt");
    navyt.src = "Assets/Images/Icons/YouTube-1.png";
    const navdeans = document.getElementById("navdeans");
    navdeans.src = "Assets/Images/Icons/Medal-1.png";
    const navchatgpt = document.getElementById("navchatgpt");
    navchatgpt.src = "Assets/Images/Icons/ChatGPT-1.png";
  });

  //NAVIGATION CHATGPT
  const chatgpt_btn = document.getElementById("chatgpt_btn");
  chatgpt_btn.addEventListener("click", function () {
    const search_container = document.getElementById("search_container");
    search_container.style.display = "none";
    const announcement_container = document.getElementById(
      "announcement_container"
    );
    announcement_container.style.display = "none";

    //DISPLAY CONTAINER
    const homechatgpt_container = document.getElementById(
      "homechatgpt_container"
    );
    homechatgpt_container.style.display = "flex";
    const menuset_lbl = document.getElementById("menuset_lbl");
    menuset_lbl.innerText = "ChatGPT";
    //HIDE OTHER CONTAINERS
    const homelobby_container = document.getElementById("homelobby_container");
    homelobby_container.style.display = "none";
    const homegame_container = document.getElementById("homegame_container");
    homegame_container.style.display = "none";
    const homeyt_container = document.getElementById("homeyt_container");
    homeyt_container.style.display = "none";
    const homedeans_container = document.getElementById("homedeans_container");
    homedeans_container.style.display = "none";
    const homeannounce_container = document.getElementById(
      "homeannounce_container"
    );
    homeannounce_container.style.display = "none";

    //CHANGE ICON IMAGE TO RED
    const navchatgpt = document.getElementById("navchatgpt");
    navchatgpt.src = "Assets/Images/Icons/ChatGPT.png";
    //CHANGE OTHER ICONS IMAGE TO GRAY
    const navlobby = document.getElementById("navlobby");
    navlobby.src = "Assets/Images/Icons/ParseRoom-1.png";
    const navgame = document.getElementById("navgame");
    navgame.src = "Assets/Images/Icons/Game-1.png";
    const navyt = document.getElementById("navyt");
    navyt.src = "Assets/Images/Icons/YouTube-1.png";
    const navdeans = document.getElementById("navdeans");
    navdeans.src = "Assets/Images/Icons/Medal-1.png";
    const navannounce = document.getElementById("navannounce");
    navannounce.src = "Assets/Images/Icons/Announce-1.png";
  });

  //SIGN OUT
  const signout_btn = document.getElementById("signout_btn");
  signout_btn.addEventListener("click", function () {
    localStorage.removeItem("user-parser");
    window.location.href = "authentication.html";
  });
}



//TEMPORARY YT LIBRARY

const ytlist1_btn = document.getElementById("ytlist1_btn");
ytlist1_btn.addEventListener("click", function () {
  document.getElementById("ytview").style.display = "block";
  document.getElementById("ytlist").style.display = "none";
  document.getElementById("ytview_main").src = "https://www.youtube.com/embed/wm630HvedqI";
  document.getElementById("ytview_mainlbl").innerHTML = "CTU Argao Promotinal Video";
});

const ytlist2_btn = document.getElementById("ytlist2_btn");
ytlist2_btn.addEventListener("click", function () {
  document.getElementById("ytview").style.display = "block";
  document.getElementById("ytlist").style.display = "none";
  document.getElementById("ytview_main").src = "https://www.youtube.com/embed/zrycG5hxhjw";
  document.getElementById("ytview_mainlbl").innerHTML = "They Made a MISTAKE With This Unit... (Xilonen C0 Ultimate Guide & Review)";
});

const btn_yttop = document.getElementById("btn_yttop");
btn_yttop.addEventListener("click", function () {
  document.getElementById("ytview").style.display = "none";
  document.getElementById("ytlist").style.display = "flex";

});


//GAME
const btn_game1 = document.getElementById("btn_game1");
btn_game1.addEventListener("click", function () {
  window.location.href = "game_assets/ezhanHome/gameHomepage.html";

});
