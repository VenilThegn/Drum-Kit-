document.querySelector(".instruction").addEventListener("click", function() {
  alert("Blue means Right alphabet is right place.\n yelow means right alphabet in wrong place.\n No change means wrong alphabet. ")
})
for (var i = 0; i < document.querySelectorAll(".alpha").length; i++)

{
  var k = 0;
  var j = 1;
  var res;
  var right = "smart";
  document.querySelectorAll(".alpha")[i].addEventListener("click", function() {
    var press = this.innerHTML;
    check(press)
  });
}

window.addEventListener('keydown', function(eve) {

console.log(eve);
check(eve.key);


});




function check(pressed) {
  if (pressed == "Backspace") {
    k--;
    document.querySelectorAll(".try"+j)[k].innerHTML = " ";


  } else if (pressed === "Enter") {
    if (j <= 5) {
      res = colour(right);
      if (res == 5) {
        alert("you won")
      }
      j++;
      k = 0;
      console.log(".try"+j);
      if ((j == 6) && (res != 5)) {
        alert("game over . The right answer is " + right);
      }
    } else {
      alert("game over . The right answer is " + right);
    }
  } else {
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
