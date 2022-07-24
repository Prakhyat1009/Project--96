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

      user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;

             firebase.database().ref("/").child(room_name).update({
                  purpose: "Adding Room Name"
            });
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
            console.log("room_name - " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
            document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToroomname(name){
      console.log(name);
      localStorage.setItem("Roomname",name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("Username");
      localStorage.removeItem("Roomname");
      window.location = "index.html";
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
    document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
   firebase_message_id = childKey;
   message_data = childData;
//Start code

//End code
} });  }); }
getData();
