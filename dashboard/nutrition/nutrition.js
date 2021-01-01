const getSection = (e) => {
    let button = e.currentTarget;
    var i;
    var x = document.getElementsByClassName("nutrition__content");
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
  let allButtons = document.querySelectorAll(".nutrition__navigation button");
  allButtons.forEach((button) => {
    button.addEventListener("click", (e) => getSection(e));
  });
  

  // NUTRITION BLOG

  let ctx = document.getElementById("myChart").getContext("2d");
  let myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["We", "Th", "Fr", "Sa", "Su", "Mo", "Tu"],
      datasets: [
        {
          //data: [10000, 10000, 10000, 10000, 10000, 10000, 10000],
          data: [10000, 10000, 10000, 10000, 10000, 10000, 10000],
        },
      ],
    },
    options: {
      layout: {
        padding: {
          left: 30,
          right: 30,
          top: 30,
          bottom: 30,
        },
      },
     
      legend: {
        display: false,
      },
      
      scales: {
        xAxes: [
          {
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              steps: 6,
              stepValue: 5,
              max: 30,
            },
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            },
          },
        ],
      },
    },
  });
// document.querySelector('select[name="change_chart"]').addEventListener("change",function(){

// if(event.target.value="14"){
// let ctx = document.getElementById("myChart").getContext("2d");

//   let myChart = new Chart(ctx, {
//     type: "bar",
//     data: {
//       labels: ["dec 17","dec 18","dec 19","dec 20","dec 21","dec 22","dec 23","dec 24","dec 25","dec 26","dec 27",
//       "dec 28","dec 29","dec 30"],
//       datasets: [
//         {
//           //data: [10000, 10000, 10000, 10000, 10000, 10000, 10000],
//           data: [10000, 10000, 10000, 10000, 10000, 10000,10000,10000,10000, 10000, 10000, 10000,10000,10000]
//         },
//       ],
//     },
//     options: {
//       layout: {
//         padding: {
//           left: 30,
//           right: 30,
//           top: 30,
//           bottom: 30,
//         },
//       },
     
//       legend: {
//         display: false,
//       },
      
//       scales: {
//         xAxes: [
//           {
//             gridLines: {
//               color: "rgba(0, 0, 0, 0)",
//             },
//           },
//         ],
//         yAxes: [
//           {
//             ticks: {
//               beginAtZero: true,
//               steps: 6,
//               stepValue: 5,
//               max: 30,
//             },
//             gridLines: {
//               color: "rgba(0, 0, 0, 0)",
//             },
//           },
//         ],
//       },
//     },
//   });
// }
// e.display="none"
// })


// EXERSISE BLOG
let exe = document.getElementById("chart__exersise").getContext("2d");
let chart__exersise= new Chart(exe, {
  type: "bar",
  data: {
    labels: ["We", "Th", "Fr", "Sa", "Su", "Mo", "Tu"],
    datasets: [
      {
        //data: [10000, 10000, 10000, 10000, 10000, 10000, 10000],
        data: [10000, 10000, 10000, 10000, 10000, 10000, 10000],
      },
    ],
  },
  options: {
    layout: {
      padding: {
        left: 30,
        right: 30,
        top: 30,
        bottom: 30,
      },
    },
   
    legend: {
      display: false,
    },
    
    scales: {
      xAxes: [
        {
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            steps: 6,
            stepValue: 5,
            max: 30,
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          },
        },
      ],
    },
  },
});



// FASTING BLOG
// let fast = document.getElementById("chart__fasting").getContext("2d");
// let chartfasting = new Chart(fast, {
//   type: "bar",
//   data: {
//     labels: ["We", "Th", "Fr", "Sa", "Su", "Mo", "Tu"],
//     datasets: [
//       {
//         //data: [10000, 10000, 10000, 10000, 10000, 10000, 10000],
//         data: [10000, 10000, 10000, 10000, 10000, 10000, 10000],
//       },
//     ],
//   },
//   options: {
//     layout: {
//       padding: {
//         left: 30,
//         right: 30,
//         top: 30,
//         bottom: 30,
//       },
//     },
   
//     legend: {
//       display: false,
//     },
    
//     scales: {
//       xAxes: [
//         {
//           gridLines: {
//             color: "rgba(0, 0, 0, 0)",
//           },
//         },
//       ],
//       yAxes: [
//         {
//           ticks: {
//             beginAtZero: true,
//             steps: 6,
//             stepValue: 5,
//             max: 30,
//           },
//           gridLines: {
//             color: "rgba(0, 0, 0, 0)",
//           },
//         },
//       ],
//     },
//   },
// });



// HYDRODEN BLOG
var x=JSON.parse(localStorage.getItem("currentUser"))
var water=x.waterLog;
var water_labels=[];
var water_data=[];
var water_backgroundColor=[];
document.getElementById('hydrogen_change').addEventListener("click",function(event){
        if(event.target.value=="7"){
          num=event.target.value;
          
        }
        else if(event.target.value=="14"){
          num=event.target.value;
        }
        else if(event.target.value=="30"){
          num=event.target.value;
        }
        else{
          num=water.length
        }
        for(var i=0;i<num;i++){
          water_labels.push(water[water.length-1-i].date);
          water_data.push(water[water.length-1-i].noOfGlasses);
          var colors="#"+Math.floor(Math.random()*16777215).toString(16);
          water_backgroundColor.push(colors);
        }
        water_labels.reverse()
        water_data.reverse()
        hydro()
        water_labels=[];
        water_data=[];
        water_backgroundColor=[];
      });
function hydro(){
let hydro = document.getElementById("chart__hydrogen").getContext("2d");
let chart__hydeogen = new Chart(hydro, {
  type: "bar",
  data: {
    labels: water_labels,
    datasets: [
      {
        //data: [10000, 10000, 10000, 10000, 10000, 10000, 10000],
        data: water_data,
        backgroundColor:water_backgroundColor
      },
    ],
  },
  options: {
    layout: {
      padding: {
        left: 30,
        right: 30,
        top: 30,
        bottom: 30,
      },
    },
   
    legend: {
      display: false,
    },
    
    scales: {
      xAxes: [
        {
          gridLines: {
            // backgroundColor:"rgb(146, 146, 218)",

            color: "rgba(0, 0, 0, 0)",
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            steps: 6,
            stepValue: 5,
            max: 30,
          },
          gridLines: {
            // backgroundColor:"rgb(146, 146, 218)",
            color: "rgba(0, 0, 0, 0)",
          },
        },
      ],
    },
  },
});
}





// Sleep BLOG
var x=JSON.parse(localStorage.getItem("currentUser"))
var sleep=x.sleepLog;
var sleep_labels=[];
var sleep_data=[];
var sleep_backgroundColor=[];
document.getElementById('sleep_change').addEventListener("click",function(event){
        if(event.target.value=="7"){
          num=event.target.value;
          
        }
        else if(event.target.value=="14"){
          num=event.target.value;
        }
        else if(event.target.value=="30"){
          num=event.target.value;
        }
        else{
          num=sleep.length
        }
        for(var i=0;i<num;i++){
          sleep_labels.push(sleep[sleep.length-1-i].date);
          sleep_data.push(sleep[sleep.length-1-i].noOfSleepHours);
          var colors="#"+Math.floor(Math.random()*16777215).toString(16);
          sleep_backgroundColor.push(colors);
        }
        sleep_labels.reverse()
        sleep_data.reverse()
        sleep__ch()
        sleep_labels=[];
        sleep_data=[];
        sleep_backgroundColor=[];
      });
function sleep__ch(){
let sle = document.getElementById("chart__sleep").getContext("2d");
let chart_sleep = new Chart(sle, {
  type: "bar",
  data: {
    labels: sleep_labels,
    datasets: [
      {
        //data: [10000, 10000, 10000, 10000, 10000, 10000, 10000],
        data: sleep_data,
        backgroundColor:sleep_backgroundColor
      },
    ],
  },
  options: {
    layout: {
      padding: {
        left: 30,
        right: 30,
        top: 30,
        bottom: 30,
      },
    },
    legend: {
      display: false,
    },
    
    scales: {
      xAxes: [
        {
          gridLines: {
            // backgroundColor:"rgb(146, 146, 218)",

            color: "rgba(0, 0, 0, 0)",
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            steps: 1,
            stepValue: 1,
            max: 8,
          },
          gridLines: {
            // backgroundColor:"rgb(146, 146, 218)",
            color: "rgba(0, 0, 0, 0)",
          },
        },
      ],
    },
  },
});
}
// sleep();

//pop for fasting
function bodyPopup(){
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("fastingbtn");
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


function bodyPopup(){
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("macrosbtn");
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