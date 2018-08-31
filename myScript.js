var sentences = ["You're wonderful today!", "You're sooooo fabulous!", "I hope you have a lovely day!", "Keep being fantastic!!", 
"Look at you, you spectacular being!", "I bet you're better than pizza", "You deserve a hug right now", "Is that your picture next to \"charming\" in the dictionary?", 
"On a scale from 1 to 10, you're an 11", "Your eyes are breathtaking", "You're more fun than a ball pit filled with candy", 
"Whoever raised you deserves a medal for a job well done", "There's ordinary, and then there's you", "You're cooler than the other side of the pillow", 
"Happiness is a choice", "I don’t want the sadness to spoil your beautiful face.", "Cheer up, you’re captivating!", 
"Pull yourself together and let’s rock this world!", "If he has left you, then he is blind and crazy, you’ll get through it.", 
"You must save the world and smile!", "I am so blessed to have such an amazing friend like you.",
"You’re stronger than you think!"," Now the sky is overcast, but soon the sun will appear.", "I know you question love as much as you believe in it, but you should know you deserve it", 
                "It takes a lot to have such a beautiful soul as you have", "Someone says you're not pretty enough, needs to be silenced"  ]

var button = document.getElementById("clickme");
var p = document.getElementById("click");

var but = function(){
  var random = sentences[Math.floor(Math.random()*sentences.length)];
  p.textContent = "";
  p.style.color = "black";
  p.textContent = "Keep Clicking";
  message.textContent = random;
  message.style.color = "black";
  backg.style.backgroundColor = "#FFDEA3;";
}

button.addEventListener("click", but);
