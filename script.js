window.onload = function () {
  loadTimer();
};

// Function time enter
function checkEnterKeyPercentage(event) {
  if (event.key === "Enter") {
    calculatePercentage();
  }
}

// Function % enter
function checkEnterKeyTime(event) {
  if (event.key === "Enter") {
    calculateTime();
  }
}

function calculatePercentage() {
  var percentageInput = document.getElementById("percentage-input");
  var resultDiv = document.getElementById("percentage-result");

  var percentage = percentageInput.value.replace(",", ".");
  var totalTimeHours = 5;

  if (percentage !== "") {
    var percentageValue = parseFloat(percentage);

    if (
      !isNaN(percentageValue) &&
      percentageValue >= 0 &&
      percentageValue <= 100
    ) {
      if (percentageValue === 100) {
        resultDiv.innerHTML = "Colhe isto pah!";
      } else if (percentageValue === 0) {
        resultDiv.innerHTML = "Acabaste de plantar não sejas burro";
      } else {
        var completedTimeHours = (percentageValue / 100) * totalTimeHours;
        var remainingTimeHours = totalTimeHours - completedTimeHours;
        var remainingTimeMinutes = remainingTimeHours * 60;

        var hours = Math.floor(remainingTimeMinutes / 60);
        var minutes = Math.floor(remainingTimeMinutes % 60);

        var timeLeftText = "Tens de esperar mais: ";
        if (hours === 0) {
          timeLeftText += minutes + " minutos";
        } else {
          timeLeftText += hours + " horas e " + minutes + " minutos";
        }

        // Format completion time
        var currentTime = new Date();
        var completionTime = new Date(
          currentTime.getTime() + remainingTimeMinutes * 60000
        ); // Add milliseconds
        var formattedCompletionTime =
          ("0" + completionTime.getHours()).slice(-2) +
          "h" +
          ("0" + completionTime.getMinutes()).slice(-2) +
          " - " +
          ("0" + completionTime.getDate()).slice(-2) +
          "/" +
          ("0" + (completionTime.getMonth() + 1)).slice(-2) +
          "/" +
          (completionTime.getFullYear() % 100);

        resultDiv.innerHTML =
          timeLeftText +
          "<br>Volta às: <strong><u>" +
          formattedCompletionTime +
          "</strong></u>";
      }
    } else {
      resultDiv.innerHTML = "Epa mete uma percentagem entre 0 e 100";
    }
  } else {
    resultDiv.innerHTML = "Ehrm.. te esqueceste de colocar a percentagem não?";
  }
}

function calculateTime() {
  var timeInput = document.getElementById("time-input");
  var resultDiv = document.getElementById("time-result");

  var time = timeInput.value;
  var totalTimeHours = 5;

  if (time !== "") {
    var timeValue = parseFloat(time);

    if (!isNaN(timeValue) && timeValue >= 0) {
      var percentageCompleted = (timeValue / (totalTimeHours * 60)) * 100;

      resultDiv.innerHTML =
        "Já vais a: <strong><u>" +
        percentageCompleted.toFixed(2) +
        "%</strong></u>";
    } else {
      resultDiv.innerHTML = "Epa mete um tempo válido em minutos sff!";
    }
  } else {
    resultDiv.innerHTML = "Epa mete o tempo em minutos sff!";
  }
}

function clearTimers() {
  var percentageInput = document.getElementById("percentage-input");
  var timeInput = document.getElementById("time-input");
  var percentageResult = document.getElementById("percentage-result");
  var timeResult = document.getElementById("time-result");

  percentageInput.value = "";
  timeInput.value = "";
  percentageResult.innerHTML = "";
  timeResult.innerHTML = "";
}

function loadTimer() {
  var percentageInput = document.getElementById("percentage-input");
  var timeInput = document.getElementById("time-input");

  percentageInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      calculatePercentage();
    }
  });

  timeInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      calculateTime();
    }
  });
}
