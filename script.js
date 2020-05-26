//var images = document.querySelectorAll("img");
//var images = document.querySelectorAll("img");
var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var res = poem.split(" ");
var secondLeft = 5;

var head0 = document.createElement("h1"); 
var head1 = document.createElement("h1"); 
var head2 = document.createElement("h2"); 

head0.style = "text-align: center";
head1.style = "text-align: center; font-size: 20px";
head2.style = "text-align: center; font-size: 40px; clour: red";
head0.innerHTML = "Spead reading !!!!"; 
i =0;
document.body.appendChild(head0); 
document.body.appendChild(head1); 
document.body.appendChild(head2); 

prepareRead();

function prepareRead() {
  // Create the countdown timer.
  var myTime = setInterval(function () {
    if (secondLeft === 0) {
      head1.innerHTML = ""; 
      clearInterval(myTime);
      console.log("timer exhausted");
      read();
    }
    head1.innerHTML = "Countdown " + secondLeft; 
    console.log("second " + secondLeft);
    secondLeft--;
  }, 2000);
}

function read(){
  var myTime2 = setInterval(function () {
    head2.innerHTML = res[i]; 
    console.log("res number " + i);
    i++;
    if (i === res.length) {
      head2.innerHTML = ""; 
      clearInterval(myTime2);
      console.log("timer exhausted");
     }

  }, 1000);
}



