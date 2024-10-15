const params = new URLSearchParams(window.location.search);
const chatid = params.get("chatid");
document.getElementById("roomid").innerText = chatid;
