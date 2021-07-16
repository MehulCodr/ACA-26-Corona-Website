 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCi3ZjMGAi6RKr5atWh9_eskUwmJ24WYPU",
    authDomain: "ipl-results-5c138.firebaseapp.com",
    databaseURL: "https://ipl-results-5c138-default-rtdb.firebaseio.com",
    projectId: "ipl-results-5c138",
    storageBucket: "ipl-results-5c138.appspot.com",
    messagingSenderId: "1019411130096",
    appId: "1:1019411130096:web:5c59f233be40a7b9c5c435"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function readResults(year){
    var results = firebase.database().ref(year);
    results.on('value', (data) => {
        var ranks = data.val();
        document.getElementById("result1").innerHTML ="<br> > 1"+ ranks[1];
        document.getElementById("result2").innerHTML ="<br> > 2"+ ranks[2];
        document.getElementById("result3").innerHTML ="<br> > 3"+ ranks[3];
        document.getElementById("result4").innerHTML ="<br> > 4"+ ranks[4];
        document.getElementById("result5").innerHTML ="<br> > 5"+ ranks[5];
        document.getElementById("result6").innerHTML ="<br> > 6"+ ranks[6];
        document.getElementById("result7").innerHTML ="<br> > 7"+ ranks[7];
        document.getElementById("result8").innerHTML ="<br> > 8"+ ranks[8];
        document.getElementById("result9").innerHTML ="<br> > 9"+ ranks[9];
        document.getElementById("result10").innerHTML ="<br> > 10"+ ranks[10];
        document.getElementById("result11").innerHTML ="<br> > 11"+ ranks[11];
        document.getElementById("result12").innerHTML ="<br> > 12"+ ranks[12];
        document.getElementById("result13").innerHTML ="<br> > 13"+ ranks[13];
    })
}