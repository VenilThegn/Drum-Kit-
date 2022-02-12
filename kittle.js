for ( var i = 0; i < document.querySelectorAll(".alpha").length; i++)

{var k =0; var j=1; var ent=".try"; var entry= ent+j; var res;
 var right="siare";
  document.querySelectorAll(".alpha")[i].addEventListener("click", function() {
    var pressed = this.innerHTML;



if(pressed==="del")
{k--;
  document.querySelectorAll(entry)[k].innerHTML=" ";


}
else if (pressed==="enter")
{
  if(j<=5)
{ res=colour(right);
  if(res==5)
  {
    alert("you won")
  }

  j++;
  entry=ent+j;
  k=0;
  console.log(entry);
  if((j==6)&&(res!=5))
  {
    alert("game over . The right answer is "+right);
  }
}
else
{
    alert("game over . The right answer is "+right);
}
}
else{
  document.querySelectorAll(".try"+j)[k].innerHTML=pressed;
  k++;
}

  });

}
function colour(correct)
{ var temp=0;

  for(var x =0;x<5;x++)
  {
    for(var y =0;y<5;y++)
    {
      if((correct[x]==document.querySelectorAll(".try"+j)[y].innerHTML)&&(x==y))
      { temp++;
        document.querySelectorAll(".try"+j)[y].classList.add("blue");
        document.querySelector("."+correct[x]).classList.add("blue");
        document.querySelector("."+correct[x]).classList.remove("yellow");
      }
      else if ((correct[x]==document.querySelectorAll(".try"+j)[y].innerHTML)&&(x!=y))
      {
        document.querySelectorAll(".try"+j)[y].classList.add("yellow");
          document.querySelector("."+correct[x]).classList.add("yellow");
      }
      else
      {
        document.querySelectorAll(".try"+j)[y].classList.add("grey");
      }
    }
  }
  return temp;
}
