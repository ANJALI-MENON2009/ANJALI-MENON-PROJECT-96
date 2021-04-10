function toggleButtonState() {
    console.log(document.getElementById("user_input").value);
    alert("⚠️Press enter key after putting username⚠️");
    if(document.getElementById("user_input").value == ""){
        document.getElementById("login_button").disabled = true;
    } else {
        document.getElementById("login_button").disabled = false;
      
    }
}

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

function addUser() 
{  
    user_name = document.getElementById("user_input").value ; 
    localStorage.setItem("User name", user_name) ; 
    window.location = "room.html" ;
    firebase.database().ref("/").child(user_name).update({
        purpose: "add user" 
    }) ;
}

height = window.height;
width = window.width ; 
if(width<=300) {
    document.getElementById("splits_1").style.display = "none" ;
} 




