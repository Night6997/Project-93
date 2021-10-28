var firebaseConfig = {
    apiKey: "AIzaSyB-rlcfwI93zutxJlZbhPm_sp2LzIvwkdM",
    authDomain: "letschatweb-40894.firebaseapp.com",
    databaseURL: "https://letschatweb-40894-default-rtdb.firebaseio.com",
    projectId: "letschatweb-40894",
    storageBucket: "letschatweb-40894.appspot.com",
    messagingSenderId: "384953594357",
    appId: "1:384953594357:web:b2a02c697ae142915ff0bc"
  };

  firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome "+ user_name+"!";
function addRoom(){

      var room_name = document.getElementById("inputRoom").value;
      firebase.database().ref("/").child(room_name).update({

            roomkey: "purpose adding room"

      });
      
      localStorage.setItem("inputRoom", room_name);

      window.location = "LetsChat_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {
  document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;

       Room_names = childKey;
      console.log("Room name - "+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      
      });});}

getData();

function redirectToRoomName(name){

     console.log(name);
     localStorage.setItem("inputRoom", name);
     window.location="LetsChat_page.html";

}

function logout(){

  localStorage.removeItem("username");
  localStorage.removeItem("inputRoom");
  window.location="index.html";

}


