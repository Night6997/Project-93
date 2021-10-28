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

Username = localStorage.getItem("username");
Roomname = localStorage.getItem("inputRoom");

function send(){

      message = document.getElementById("inputSend").value;
      firebase.database().ref(Roomname).push({

            name:Username,
            msg:message,
            like:0

      });

      document.getElementById("inputSend").value="";

}