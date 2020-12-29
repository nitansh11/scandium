const getSection = (e) => {
    let button = e.currentTarget;
    var i;
    var x = document.getElementsByClassName("daily-log__content");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(e.currentTarget.value).style.display = "block";
    //Changing color on select
  
    let allButtons = button.parentNode.querySelectorAll("button");
    allButtons.forEach((button) => {
      button.style.borderBottom = "none";
      button.style.color = "rgb(159,159,159)";
      button.querySelector("p").style.color = "rgb(159,159,159)";
    });
    button.style.borderBottom = "2px solid #616161";
    button.style.color = "#616161";
    button.querySelector("p").style.color = "#616161";
  };
  let allButtons = document.querySelectorAll(".daily-log__navigation button");
  allButtons.forEach((button) => {
    button.addEventListener("click", (e) => getSection(e));
  });

  // CHALLENGES RULES
  var data=[
    {
      goal:"At or under carb goal",
      number:50
    },
    {
      goal:"At or under calorie goal",
      number:20
    },
    {
      goal:"Within 10g of protein goal",
      number:10
    },
    {
      goal:"Within 10g of fat goal",
      number:10
    },
    {
      goal:"Met sleep goal (My Nutrition & Wellness > Sleep)",
      number:10
    },
    {
      goal:"Met daily steps goal",
      number:10
    },
    {
      goal:"Burned at least 200 calories exercising",
      number:10
    }
  ]
  var output="";
  for(var i=0;i<data.length;i++){
    if(i%2==0){
      output+=`<div class="rules_even">
                <div>${data[i].goal}</div>
                <div>${data[i].number}</div>
              </div>`
    }
    else{
      output+=`<div class="rules_odd">
      <div>${data[i].goal}</div>
      <div>${data[i].number}</div>
            </div>`
    }
  }
  document.getElementById("rules").innerHTML=output
