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

let ctx2= document.getElementById("myChart2").getContext("2d");

let myChart2 = new Chart(ctx2, {
  type: "pie",
  data: {
    labels: ["Net Carbs","Fat","Protein"],
    datasets: [
      {
        // data: [10000, 10000, 10000, 10000, 10000, 10000, 10000],
        data: [10000, 10000, 10000],
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
   
    legend:{ // legends are : programming languages,Dates labels
      display:true,  
      position:"right",
      align:"center"
  },
    
    scales: {
      xAxes: [
        {
          display:false,
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          },
        },
      ],
      yAxes: [
        { display:false,
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

let ctx3= document.getElementById("myChartMyDay").getContext("2d");

let myChart3 = new Chart(ctx3, {
  type: "pie",
  data: {
    labels: ["Net Carbs","Fat","Protein"],
    datasets: [
      {
        // data: [10000, 10000, 10000, 10000, 10000, 10000, 10000],
        data: [10000, 10000, 10000],
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
   
    legend:{ // legends are : programming languages,Dates labels
      display:true,  
      position:"right",
      align:"center"
  },
    
    scales: {
      xAxes: [
        {
          display:false,
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          },
        },
      ],
      yAxes: [
        { display:false,
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
