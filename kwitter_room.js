
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyA-BSUMZDCCoEg7s4sfRTHDCkIrN0nuPiI",
      authDomain: "kwitter-6b8ce.firebaseapp.com",
      databaseURL: "https://kwitter-6b8ce-default-rtdb.firebaseio.com",
      projectId: "kwitter-6b8ce",
      storageBucket: "kwitter-6b8ce.appspot.com",
      messagingSenderId: "3233547204",
      appId: "1:3233547204:web:a2fffa66c8f1adb3dc9a91"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
