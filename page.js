var firebaseConfig = {
    apiKey: "AIzaSyBFUEaJqw9ooP_EnM19flNjExtcs_CPOOo",
    authDomain: "anjali-menon-project-93.firebaseapp.com",
    databaseURL: "https://anjali-menon-project-93-default-rtdb.firebaseio.com",
    projectId: "anjali-menon-project-93",
    storageBucket: "anjali-menon-project-93.appspot.com",
    messagingSenderId: "96744447122",
    appId: "1:96744447122:web:e67c16b1b8e808330a9a4b",
    measurementId: "G-TH5DXRH60D"
  };
  firebase.initializeApp(firebaseConfig) ;
  user_name = localStorage.getItem("User name") ;
  room_name = localStorage.getItem("Room name") ;

  function send()
  {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
      }) ;
      document.getElementById("msg").value = "" ;
  }

function getData()
  {
 firebase.database().ref("/"+room_name).on('value', function(snapshot) { 
     document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { 
         childKey  = childSnapshot.key; childData = childSnapshot.val(); 
         if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         }
     })
 })
}

//Start code
getData();
function logout()
{
    localStorage.removeItem("user_name") ;
    localStorage.removeItem("room_name") ;
    window.location = "index.html" ;
}