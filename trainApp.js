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

// Submit button to add train info
$("#anotherRow").on("click", function(event) {
  event.preventDefault();

  // inputs
  var trainName = $("#trainInput").val().trim();
  var destinationName = $("#destInput").val().trim();
  var firstTrainTime = $("#timeInput").val().trim();
  var frequencyInput = $('#freqInput').val().trim();

  // object with the inputs
  var newRow = {
    name: trainName,
    destination: destinationName,
    firstTrain: firstTrainTime,
    frequency: frequencyInput
  };

  database.ref().push(newRow);

  alert("New train info added!");

  $("#trainInput").val("");
  $("#destInput").val("");
  $("#timeInput").val("");
  $("#freqInput").val("");
})

database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());

    // Store everything into a variable.
    var trainName = childSnapshot.val().name;
    var destinationName = childSnapshot.val().destination;
    var firstTrainTime = childSnapshot.val().firstTrain;
    var frequencyInput = childSnapshot.val().frequency;

    // using frequency and firstTrainTime we calculate how many minutes away the next train is
    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(firstTrainTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    // Current Time
    var currentTime = moment(currentTime).format("hh:mm");

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");

    // Time apart (remainder)
    var tRemainder = diffTime % frequencyInput;

    // Minute Until Train
    var tMinutesTillTrain = frequencyInput - tRemainder;

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes").format("hh:mm");

    // Create the new row
    var addRow = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(destinationName),
    $("<td>").text(firstTrainTime),
    $("<td>").text(nextTrain),
    $("<td>").text(tMinutesTillTrain)
  );

    // Append the new row to the table
    $("#trainTable > tbody").append(addRow);
})



