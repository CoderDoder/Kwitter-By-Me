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
var roomname=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         name_1=message_data["name"];
         message=message_data["message"];
         like=message_data["like"];
         name_tag="<h4>"+name_1+"<img class='user_tick' src='tick.png' alt='verified' ></h4>";
         message_tag="<h4 class='message_h4' >"+message+"</h4>";
         like_btn="<button class='btn btn-danger' id='"+firebase_message_id+"' value="+like+" onclick='updatelike(this.id)' >";
         span_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
         row=name_tag+message_tag+like_btn+span_tag;
         document.getElementById("output").innerHTML+=row;
//Start code
      
//End code
      } });  }); }

      function updatelike(message_id){
            console.log("clicked on like button-"+message_id);
            button_id=message_id;
            likes=document.getElementById(button_id).value;
            updated_like=Number(likes)+1;
            console.log(updated_like)
            firebase.database().ref(roomname).child(message_id).update({
                like:updated_like
                  
            });
      }
      
      function logout(){
            localStorage.removeItem("username");
            localStorage.removeItem("room_name");
            window.location="index.html"
      }
getData();

function send(){
      message=document.getElementById("message_input").value;
      firebase.database().ref(roomname).push({
            name:username,
            message:message,
            like:0
      });
      document.getElementById("message_input").value="";
}
