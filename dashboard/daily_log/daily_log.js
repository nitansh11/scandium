let currentUser = localStorage.getItem("currentUser");
if (currentUser) {
  currentUser = JSON.parse(currentUser);
}
let d = new Date();
let currentDate =
  d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
console.log(currentDate);
console.log(currentUser);
/*********************Navigation Javascript (Nitansh)********************** */
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

/*********************Water Section Javascript (Nitansh)********************** */

let allGlasses = document.querySelectorAll(
  ".daily-log__content--water__glasses img"
);
allGlasses.forEach((glass) => {
  glass.addEventListener("click", (e) => glassClicked(e.currentTarget));
});

const glassClicked = (glassImg) => {
  if (glassImg.alt === "empty_glass") {
    glassImg.alt = "full_glass";
    glassImg.src = "https://app.carbmanager.com/statics/glass_full.png";
  } else {
    glassImg.alt = "empty_glass";
    glassImg.src = "https://app.carbmanager.com/statics/glass_empty.png";
  }

let fullGlassImages = document.querySelectorAll('img[alt="full_glass"]')
  let currentUser = localStorage.getItem("currentUser");
  let waterObj={
    date: currentDate,
    noOfGlasses: fullGlassImages.length,
  };
  if(currentUser){
    currentUser=JSON.parse(currentUser);
    if(currentUser.waterLog){
      let waterObjIndex = currentUser.waterLog.findIndex(currentWaterObj=>currentWaterObj.date===waterObj.date);
      console.log(waterObjIndex)
      if(waterObjIndex!==-1){
        console.log("if")
          currentUser.steps[waterObjIndex]={...waterObj};
      }
      else{
        console.log("else")
        currentUser.steps.push({...waterObj}); 
      }
    }
    else{
      currentUser.steps=[{...waterObj}];
    }
  }
  localStorage.setItem("currentUser",JSON.stringify(currentUser));
};

/*********************Steps Section Javascript (Nitansh)********************** */

let ctx1 = document.getElementById("myChart-steps").getContext("2d");

let myChartSteps = new Chart(ctx1, {
  type: "bar",
  data: {
    labels: ["We", "Th", "Fr", "Sa", "Su", "Mo", "Tu"],
    datasets: [
      {
        // data: [10000, 10000, 10000, 10000, 10000, 10000, 10000],
        data: [10000, 10000, 10000, 10000, 10000, 10000, 10000],
        backgroundColor: [
          "#1BC98E",
          "#36A2EB",
          "#FF6384",
          "#1BC98E",
          "#36A2EB",
          "#FF6384",
          "#36A2EB",
        ],
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
            steps: 10,
            stepValue: 1000,
            max: 10000,
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          },
        },
      ],
    },
  },
});

document
  .querySelector(".daily-log__content--steps__header i")
  .addEventListener("click", () => {
    console.log("clicked");
    document.querySelector(
      ".daily-log__content--steps__modal-content"
    ).innerHTML = ` <span class="stepsModal-close">&times;</span>
<h1>Quick Entry</h1>
<div id="stepsformDiv">
  <div id="steps-form-date">
    <label for="date">Date</label>
    <input type="text" name="date" id="datepicker" />
  </div>
  <div id="steps-form-steps">
    <label for="steps">Steps</label>
    <input type="number" name="steps" id="stepsInput" />
  </div>
  <button onClick="addSteps()">Add Steps</button>
</div>`;
    var modal = document.getElementById("stepsModal");
    modal.style.display = "block";

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("stepsModal-close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
    $(function () {
      $("#datepicker").datepicker();
    });
    
  });


  function addSteps(e){
    
   let date = document.querySelector("#datepicker").value;
   date=date.split('/');
   date=date[0]+"-"+date[1]+"-"+date[2];
   let steps = parseInt(document.querySelector("#stepsInput").value);
  
    let currentUser = localStorage.getItem("currentUser");
    let stepsObj={date:date,stepsCount:steps};
    if(currentUser){
      currentUser=JSON.parse(currentUser);
      if(currentUser.steps){
        console.log("inside");
        let stepObjIndex = currentUser.steps.findIndex(currentStepObj=>currentStepObj.date===stepsObj.date);
        console.log(stepObjIndex)
        if(stepObjIndex!==-1){
          console.log("if")
            currentUser.steps[stepObjIndex]={...stepsObj};
        }
        else{
          console.log("else")
          currentUser.steps.push({...stepsObj}); 
        }
      }
      else{
        currentUser.steps=[{...stepsObj}];
      }
    }
    localStorage.setItem("currentUser",JSON.stringify(currentUser));
  }
/*********************In Depth Section Javascript (Nitansh)********************** */

let ctx = document.getElementById("myChart").getContext("2d");

let myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["We", "Th", "Fr", "Sa", "Su", "Mo", "Tu"],
    datasets: [
      {
        // data: [10000, 10000, 10000, 10000, 10000, 10000, 10000],
        data: [10000, 10000, 10000, 10000, 10000, 10000, 10000],
        backgroundColor: [
          "#1BC98E",
          "#36A2EB",
          "#FF6384",
          "#1BC98E",
          "#36A2EB",
          "#FF6384",
          "#36A2EB",
        ],
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

/***********Pie Chart */

let ctx2 = document.getElementById("myChart2").getContext("2d");

let myChart2 = new Chart(ctx2, {
  type: "pie",
  data: {
    labels: ["Net Carbs", "Fat", "Protein"],
    datasets: [
      {
        // data: [10000, 10000, 10000, 10000, 10000, 10000, 10000],
        data: [10000, 10000, 10000],
        backgroundColor: ["#1BC98E", "#36A2EB", "#FF6384"],
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
      // legends are : programming languages,Dates labels
      display: true,
      position: "right",
      align: "center",
    },

    scales: {
      xAxes: [
        {
          display: false,
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          },
        },
      ],
      yAxes: [
        {
          display: false,
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

/*********************My Day Section Javascript (Nitansh)********************** */

/***********Pie Chart */

let ctx3 = document.getElementById("myChartMyDay").getContext("2d");

let myChart3 = new Chart(ctx3, {
  type: "pie",
  data: {
    labels: ["Net Carbs", "Fat", "Protein"],
    datasets: [
      {
        // data: [10000, 10000, 10000, 10000, 10000, 10000, 10000],
        data: [10000, 10000, 10000],
        backgroundColor: ["#1BC98E", "#36A2EB", "#FF6384"],
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
      // legends are : programming languages,Dates labels
      display: true,
      position: "right",
      align: "center",
    },

    scales: {
      xAxes: [
        {
          display: false,
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          },
        },
      ],
      yAxes: [
        {
          display: false,
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
