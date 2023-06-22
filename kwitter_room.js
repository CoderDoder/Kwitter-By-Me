var firebaseConfig = {
  apiKey: "AIzaSyD4-cvUegewTRZkcSOxCBsKZIoiuWJEPaQ",
  authDomain: "kwitter-zinda-hai.firebaseapp.com",
  projectId: "kwitter-zinda-hai",
  databaseURL:"https://kwitter-zinda-hai-default-rtdb.firebaseio.com/",
  storageBucket: "kwitter-zinda-hai.appspot.com",
  messagingSenderId: "120935220963",
  appId: "1:120935220963:web:c08127e99ac157a7d527d6"
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
   getData();

function redirect(name){
 console.log(name);
 localStorage.setItem("roomname",name);
 window.location="room_page.html";
}
function logout(){
  localStorage.removeItem("username");
localStorage.removeItem("roomname");
window.location="index.html";

}

