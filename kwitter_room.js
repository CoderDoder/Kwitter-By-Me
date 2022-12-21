var firebaseConfig = {
  apiKey: "AIzaSyDcaFAKQtWnO-a5UXWJakNnC44xwDP9xsk",
  authDomain: "kwitter-specify.firebaseapp.com",
  databaseURL: "https://kwitter-specify-default-rtdb.firebaseio.com",
  projectId: "kwitter-specify",
  storageBucket: "kwitter-specify.appspot.com",
  messagingSenderId: "28945690281",
  appId: "1:28945690281:web:aeefb59bed5a6ef1d883b8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  var username=localStorage.getItem("username");
  document.getElementById("user_name").innerHTML="Welcome "+username+"!";

  function addroom(){
    room_name=document.getElementById("roomname_input").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"adding roomname"
    });
    localStorage.setItem("roomname",room_name);
    window.location="room_page.html";
  
  }

  function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
     childKey  = childSnapshot.key;
     Room_names = childKey;
   //Start code
   console.log("room names= "+Room_names);
   row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)' >#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML+=row;
   //End code
   });});}
function redirect(name){
 console.log(name);
 localStorage.setItem("room_name",name);
 window.location="room_page.html";
}
getData();
function logout(){
window.location="index.html";
localStorage.removeItem("username");
}

