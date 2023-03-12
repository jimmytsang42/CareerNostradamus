const points = [
    "You bet your stapler on it!",
    "Yes, and may your inbox always be empty.",
    "Absolutely, and don't forget to refill the coffee pot while you're at it.",
    "You can take that to the supply closet.",
    "Without a doubt, and don't forget to file your TPS reports.",
    "Yes, and don't forget to CC your boss.",
    "You better believe it, and don't forget to sharpen your pencils.",
    "Yes, and may your commute always be traffic-free.",
    "Most definitely, and don't forget to put a cover sheet on your TPS reports.",
    "Of course, and don't forget to empty the shredder.",
    "The WiFi signal is weak. Ask again later.",
    "The printer is jammed. Signs point to no.",
    "Outlook not responding. Signs point to no.",
    "The coffee machine is broken. Signs point to no.",
    "There's a meeting in progress. Reply hazy, try again later.",
    "I'm on my lunch break. Cannot predict now.",
    "I'm already working on five things. Don't count on it.",
    "The boss is in a bad mood. Very doubtful.",
    "It's Monday morning. My reply is no.",
    "There's a company-wide email about it. Better not tell you now.",
    "You're asking me during tax season? Cannot predict now.",
    "The server is down. Better ask the IT department.",
    "The database is corrupted. Most likely not.",
    "I'm swamped with work. Don't get your hopes up.",
    "Ask the boss, I'm just the intern!",
    "Not sure, let me check my email first.",
    "I'm not authorized to answer that.",
    "The meeting minutes say no.",
    "Better ask HR.",
    "I need more data to answer that.",
    "Let's circle back on that next week.",
    "Can you send me a calendar invite?",
    "I'm swamped right now, ask again later.",
    "I'll have to run that by legal.",
    "Can we discuss this in a breakout room?"
  ];
  
  document.getElementById("response").innerHTML = points;
  
  function myFunction() {
    const inputField = document.getElementById("clear");
    const input = inputField.value.trim();
  
    if (input === "") {
      alert("Please enter a question!");
      inputField.focus();
      return;
    }
  
    points.sort(function (a, b) {
      return 0.5 - Math.random();
    });
  
    document.getElementById("response").innerHTML = points[0];
    document.getElementById("response").style.fontSize = "18px";
    setTimeout(timeup, 4000);
  
    function timeup() {
      document.getElementById("response").innerHTML = "8";
      document.getElementById("response").style.fontSize = "120px";
      inputField.value = "";
    }

    inputField.value = ""; // reset input field value to empty string
  }
  
  const inputField = document.getElementById("clear");
  inputField.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("askme").click();
    }
  });
  
  const askButton = document.getElementById("askme");
  askButton.disabled = true;
  
  inputField.addEventListener("input", function () {
    if (inputField.value.trim() === "") {
      askButton.disabled = true;
    } else {
      askButton.disabled = false;
    }
  });
  