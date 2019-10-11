// Initialize Firebase
const fireBaseConfig = {
    apiKey: "AIzaSyDcGIF003vq_0dk2gmdB8WkpmcYqgdKAwQ",
    authDomain: "coders-bay-872ba.firebaseapp.com",
    databaseURL: "https://coders-bay-872ba.firebaseio.com",
    projectId: "coders-bay-872ba",
    storageBucket: "",
    messagingSenderId: "821809220618",
    appId: "1:821809220618:web:f40afa614663b61f8ba3f3"
  };

firebase.initializeApp(fireBaseConfig);

// Get a reference to the database service
var database = firebase.database();

var clickCounter = 0;

// Submit button to add train info
$("#anotherRow").on("click", function(event) {
  event.preventDefault();

  // inputs
  var trainName = $("#trainNameInput").val().trim();
  var destinationName = $("#destinationInput").val().trim();
  var firstTrainTime = $("#firstTrainTimeInput").val().trim();
  var frequencyInput = $('#freqInput').val().trim();

  // object with the inputs
  var newRow = {
    name: trainName,
    destination: destinationName,
    firstTrain: firstTrainTime,
    freqency: frequencyInput
  }
})

