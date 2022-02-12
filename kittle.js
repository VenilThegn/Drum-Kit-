for ( var i = 0; i < document.querySelectorAll(".alpha").length; i++)

{var k =0; var j=1; var ent=".try"; var entry= ent+j;
  document.querySelectorAll(".alpha")[i].addEventListener("click", function() {
    var pressed = this.innerHTML;



if(pressed==="del")
{k--;
  document.querySelectorAll(entry)[k].innerHTML=" ";


}
else if (pressed==="enter")
{
  if(j<=4)
{ j++;
  entry=ent+j;
  k=0;
  console.log(entry);
}
else
{
  alert("game over ");
}
}
else{
  document.querySelectorAll(".try"+j)[k].innerHTML=pressed;
  k++;
}

  });

}
