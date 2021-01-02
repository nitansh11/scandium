const getSection = (e) => {
    let button = e.currentTarget;
    var i;
    var x = document.getElementsByClassName("community__content");
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
  let allButtons = document.querySelectorAll(".community__navigation button");
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
// // newsfeed post
// var app=document.getElementById("comments")
// document.getElementById("newsfeed__post").addEventListener("click",post)
// function post(){
//   var elements=document.getElementById("newsfeed__comment").value;
//   var div=document.createElement("div")
//   div.innerHTML=`<div><div class="post_image"><img src="https://app.carbmanager.com/statics/avatar-blank.jpg"></div>
//                   <div class="Anonymous"><p class="small">Anonymous</p>
//                   <p>${elements}</p>
//                   <p><a href="#new__pop"><b class="small">Edit</b></a> | <b class="small">Reply</b></p>
//                   </div></div>`
  
//   app.append(div);
// }
// GROUPS BLOG

var group_data=[
  {
    image:"https://app.carbmanager.com/statics/emoji/1f951.svg",
    name:"Keto Diet",
    goal:"At or under carb goal",
    number:1172
  },
  {
    image:"https://app.carbmanager.com/statics/emoji/2696.svg",
    name:"50+ Pounds To Lose",
    goal:"At or under calorie goal",
    number:1050
  },
  {
    image:"https://app.carbmanager.com/statics/emoji/1f451.svg",
    name:"Ketogenic Queens",
    goal:"Within 10g of protein goal",
    number:2052
  },
  {
    image:"https://app.carbmanager.com/statics/emoji/1f457.svg",
    name:"Keto kool moms",
    goal:"Within 10g of fat goal",
    number:5075
  },
  {
    image:"https://app.carbmanager.com/statics/emoji/1f4aa.svg",
    name:"Keto + IF (18:6-20:4)",
    goal:"Met sleep goal (My Nutrition & Wellness > Sleep)",
    number:2015
  },
  {
    image:"https://app.carbmanager.com/statics/emoji/1f357.svg",
    name:"Keto food & recipes",
    goal:"Met daily steps goal",
    number:10
  },
  {
    image:"https://app.carbmanager.com/statics/emoji/1f6b6.svg",
    name:" Walkers & Fitbit Users",
    goal:"Burned at least 200 calories exercising",
    number:10
  }
]
let render_lists=function(data){
var group__output="";
for(var i=0;i<data.length;i++){
    group__output+=`<div>
                      <div>
                        <img src=${data[i].image}>
                      </div>
                      <div>
                        <div class="group_name"><h1>${data[i].name}<h1></div>
                        <div class="group_goal">${data[i].goal}</div>
                        <div class="group_number">${data[i].number} members</div>
                      </div>
                    </div>`
}
document.getElementById("groups__content1").innerHTML=group__output;
}
render_lists(group_data);

var input=document.getElementById("groups__content__search");
let filtersearch=function(event){
  keyword=input.value.toLowerCase();
filter_search=group_data.filter(function(data){
  data.name=data.name.toLowerCase();
  return data.name.indexOf(keyword)>-1;
});
render_lists(filter_search);

}
input.addEventListener('keyup',filtersearch)



function bodyPopup(){
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("forumbtn");
  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
bodyPopup()
//user Name
var x=JSON.parse(localStorage.getItem("currentUser"))
var name1=x.name,image=x.profileImageUrl,mail=x.email
output3=`<h3>${name1}</h3><h4>${mail}</h4>`
output_image=`<img src=${image}>`;
document.getElementById('user_name').innerHTML=output3;
document.getElementById('user_img').innerHTML=output_image;

// newsfeed post
var app=document.getElementById("comments")
document.getElementById("newsfeed__post").addEventListener("click",post)
function post(){
  var elements=document.getElementById("newsfeed__comment").value;
 
  var div=document.createElement("div")
  div.innerHTML=`<div><div class="post_image">${output_image}</div>
                  <div class="Anonymous"><p class="small">${output3}</p>
                  <p>${elements}</p>
                  <p><a href="#new__pop"><b class="small">Edit</b></a> | <b class="small">Reply</b></p>
                  </div></div>`
  
  app.append(div);
  document.getElementById("newsfeed__comment").value='';
}