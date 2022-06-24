// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyA0grczvVCuxExub7aCICnNuh7JWWzbIBc",
  authDomain: "kwitter-project2-ab1e9.firebaseapp.com",
  projectId: "kwitter-project2-ab1e9",
  storageBucket: "kwitter-project2-ab1e9.appspot.com",
  messagingSenderId: "731825226611",
  appId: "1:731825226611:web:5658be169c7cb59765fb06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  
  
  function addRoom (){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child("room_name").update({
          purpose:"adding room name"
    });
    localStorage.setitem("room_name",room_name);
    window.location="kwitter_page.html";


}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name-"+Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='rediractToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
    
    //End code
    });});}
getData();
function rediractToRoomName(name){
    console.log(name);
    localStorage.setitem("room_name",name);
    window.location="kwitter_page.html";
}
