let jokeIndex = 0;

// Fisher-Yates Shuffle function to randomize the jokes array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const jokes = [
  ["If the internet had a boat, where would they park it?", "In Google Docs."],
  ["What did 0 say to 8?", "Nice belt."],
  ["Why don’t skeletons fight each other?", "They don’t have the guts."],
  ["What do you call cheese that isn’t yours?", "Nacho cheese."],
  ["Why couldn’t the bicycle stand up by itself?", "It was two-tired."],
  ["Why did the scarecrow win an award?", "He was outstanding in his field."],
  ["What do you call fake spaghetti?", "An impasta."],
  ["Why are elevator jokes so good?", "They work on so many levels."],
  ["What do you call a fish wearing a bowtie?", "Sofishticated."],
  ["Why don’t eggs tell jokes?", "They might crack up."],
  ["How does a penguin build its house?", "Igloos it together."],
  ["What did the janitor say when he jumped out of the closet?", "Supplies!"],
  ["Why did the golfer bring two pairs of pants?", "In case he got a hole in one."],
  ["How does the moon cut his hair?", "Eclipse it."],
  ["What do you call an alligator in a vest?", "An investigator."]
];

// Shuffle the jokes at the start
shuffleArray(jokes);

const chatContent = document.querySelector(".chat-content");
const jokeButton = document.getElementById("requestJokeButton");

function appendBotMessage(messageText) {
  const messageDiv = document.createElement("div");
  messageDiv.className = "message bot-message";
  const avatar = document.createElement("div");
  avatar.className = "fas fa-robot message-avatar";
  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  contentDiv.textContent = messageText;
  messageDiv.append(avatar, contentDiv);
  chatContent.appendChild(messageDiv);
  chatContent.scrollTop = chatContent.scrollHeight;
}

function appendUserMessage() {
  const messageDiv = document.createElement("div");
  messageDiv.className = "message user-message";
  const avatar = document.createElement("div");
  avatar.className = "fas fa-smile message-avatar";
  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  contentDiv.textContent = "Tell me a joke!";
  messageDiv.append(contentDiv, avatar);
  chatContent.appendChild(messageDiv);
}
appendBotMessage(
  "Hello! I am Comedian Bot, here to make you laugh. Let me think of a joke."
);

function requestJoke() {
  appendUserMessage();
  if (jokeIndex >= jokes.length) {
    appendBotMessage("Sorry, I'm out of jokes for now!");
    return;
  }
  jokeButton.style.display = "none";
  setTimeout(function () {
    appendBotMessage(jokes[jokeIndex][0]);
  }, 2500);
  setTimeout(function () {
    appendBotMessage(jokes[jokeIndex][1]);
    jokeIndex++;
    jokeButton.style.display = "inline-block";
  }, 5000);
}
