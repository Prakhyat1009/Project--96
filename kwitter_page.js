var firebaseConfig = {
    apiKey: "AIzaSyDIGq9l5k3oTNK5MrRjjV6pApX2xip4Xdk",
    authDomain: "kwitter-project-d7791.firebaseapp.com",
    databaseURL: "https://kwitter-project-d7791-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-d7791",
    storageBucket: "kwitter-project-d7791.appspot.com",
    messagingSenderId: "308799533050",
    appId: "1:308799533050:web:779e7abd50f0569876be43",
    measurementId: "G-7X1GMCQ4RP"
  };

firebase.initializeApp(firebaseConfig);

    room_name = localStorage.getItem("Roomname");
    user_name = localStorage.getItem("Username");

    console.log("room name "+room_name);
    console.log("user name "+user_name);

    function logout() {
          localStorage.removeItem("Roomname");
          localStorage.removeItem("Username");
          window.location.replace("index.html");
    }
    function send() {
          msg = document.getElementById("msg").value;
          console.log("Message "+msg);
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0,
                dislike:0
          });
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      
//End code
      } });  }); }
getData();
