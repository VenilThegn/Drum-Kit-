document.querySelector(".instruction").addEventListener("click", function() {
  alert("Colour changes in the alphabets after entering a word indicates:\nGreen->The alphabet you have entered is correct and is in the right position.\nYellow->The alphabet you have entered is correct but not in the right position\nNo change-> The alphabet is not present in the word.");
})
var words = new Array("might", "white", "abode", "chase", "cabin", "satin", "light", "flake", "quail", "brave", "crave", "dream", "steam", "stare", "flare", "great", "break", "brake", "trace", "satin", "haste", "waste", "eight", "flake", "poise", "noise", "voice", "vocal", "focal", "focus", "train", "crate", "sedan", "paste", "paint", "faint", "whale", "shale", "frail", "grail", "chain", "quail", "image", "zebra", "yacht", "adopt", "urban", "eland", "extra", "hover", "cover", "lover");
var n = Math.floor(Math.random() * 52);


var right = words[n];
// console.log(words[n]+" "+n);
n++;

for (var i = 0; i < document.querySelectorAll(".alpha").length; i++)

{
  var k = 0;
  var j = 1;
  var res;



  document.querySelectorAll(".alpha")[i].addEventListener("click", function() {
    var press = this.innerHTML;
    check(press)
  });
}

window.addEventListener('keydown', function(eve) {


  check(eve.key);


});




function check(pressed) {
  if ((pressed == "Backspace") && (k > 0)) {
    k--;
    document.querySelectorAll(".try" + j)[k].innerHTML = " ";


  } else if ((pressed === "Enter") && (k == 5)) {
    if (j <= 5) {
      res = colour(right);
      console.log(res);
      if (res == 5) {
        alert("congratulations you won in " + j + "/5 chances." + " Keep refreshing for different words ");
        setTimeout(function() {
          window.location.reload()
        }, 4000);
      }
      j++;
      k = 0;
      console.log(".try" + j);
      if ((j == 6) && (res != 5)) {
        alert("game over . The right answer is " + right);
        setTimeout(function() {
          window.location.reload()
        }, 1000);
      }

    }
  } else if ((pressed >= "a") && (pressed <= "z")) {
    document.querySelectorAll(".try" + j)[k].innerHTML = pressed;
    k++;
  }

}


function colour(correct) {
  var temp = 0;

  for (var x = 0; x < 5; x++) {
    for (var y = 0; y < 5; y++) {
      if ((correct[x] == document.querySelectorAll(".try" + j)[y].innerHTML) && (x == y)) {
        temp++;
        document.querySelectorAll(".try" + j)[y].classList.add("blue");
        document.querySelector("." + correct[x]).classList.add("blue");
        document.querySelector("." + correct[x]).classList.remove("yellow");


      } else if ((correct[x] == document.querySelectorAll(".try" + j)[y].innerHTML) && (x != y)) {
        document.querySelectorAll(".try" + j)[y].classList.add("yellow");
        document.querySelector("." + correct[x]).classList.add("yellow");

      }

    }
  }
  return temp;
}
