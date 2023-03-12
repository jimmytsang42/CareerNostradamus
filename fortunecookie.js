function generateFortune() {
    var cookie = document.getElementById("cookiepic");
    cookie.style.display = "none"; // hide the cookie image

    var whiteBox = document.createElement("div");
    whiteBox.setAttribute("id", "white-box"); // create the white box
    document.body.appendChild(whiteBox);

    var message = document.createElement("p");
    message.setAttribute("id", "message"); // create the message element
    var messages = [
"You will attend many meetings today, but only one of them will be productive.",
"Your inbox will be flooded with emails today, but at least one of them will make you smile.",
"Your co-worker will steal your lunch from the office fridge today, but karma will bring you a free snack later.",
"Your boss will give you a compliment today, but it will be followed by a new assignment with an impossible deadline.",
"Your stapler will mysteriously disappear from your desk today, but it will magically reappear tomorrow morning.",
"You will have a long day at work today, but the vending machine will have your favorite snack in stock.",
"Your computer will crash today, but you will discover a new coffee shop during the time it takes to reboot.",
"Your commute home will be stuck in traffic, but you will find a hilarious podcast that makes it bearable.",
"Your co-worker will ask for your help with a project today, but they will end up doing it themselves anyway.",
"Your boss will schedule a team-building activity today, but it will end up being a trust-fall exercise gone wrong.",
"Your TPS reports will be filed on time... just kidding, they're already overdue.",
"The best way to avoid burnout is to take frequent coffee breaks.",
"You will be promoted to head of the paperclip procurement department.",
"You will discover a forgotten snack in your desk drawer today.",
"Your coworkers secretly think you're the funniest person in the office.",
"Your expense reports will be approved without question... said no one ever.",
"Your day will be filled with endless meetings... and not a single productive one.",
"You will receive a passive-aggressive email from your boss... again.",
"Your to-do list will magically grow longer each time you check something off.",
"Your coworkers will appreciate your well-timed jokes, even if they don't show it."
    ];
    var randomIndex = Math.floor(Math.random() * messages.length);
    var text = document.createTextNode(messages[randomIndex]); // generate random text
    message.appendChild(text);
    whiteBox.appendChild(message); // add the text to the white box

    // Update the text of header2 to "Clicked!"
    var header2 = document.getElementById('header2');
    header2.textContent = "Here's your fortune!";

    // Show the "Let me eat another anyways!" button and hide the "Click the cookie..." text
    var generatenew = document.getElementById("generatenew");
    generatenew.style.display = "block";
  

}

function resetFortune() {
    var cookie = document.getElementById("cookiepic");
    cookie.style.display = "block"; // show the cookie image

    var whiteBox = document.getElementById("white-box");
    whiteBox.parentNode.removeChild(whiteBox); // remove the white box

    // Update the text of header2 back to "Click the cookie to see your fortune..."
    var header2 = document.getElementById('header2');
    header2.textContent = "Click the cookie to see your fortune!";
    
    // Show the "Click the cookie..." text and hide the "Let me eat another anyways!" button
    var generatenew = document.getElementById("generatenew");
    generatenew.style.display = "none";
    header2.style.display = "block";
}
