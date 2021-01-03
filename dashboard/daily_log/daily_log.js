let currentUser = localStorage.getItem("currentUser");

if (currentUser) {
  currentUser = JSON.parse(currentUser);
}
let d = new Date();
let currentDate =
  d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();

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
console.log("running");
let totalFullGlasses = JSON.parse(
  localStorage.getItem("currentUser")
).waterLog.find((oneWaterLog) => oneWaterLog.date === currentDate);
if (totalFullGlasses) {
  console.log("Total: ", totalFullGlasses.noOfGlasses);
  let glassesHtml = ``;
  let fullGlasses = totalFullGlasses.noOfGlasses;
  let emptyGlasses = 8 - fullGlasses;
  for (let i = 0; i < fullGlasses; i++) {
    glassesHtml += ` <img
    src="https://app.carbmanager.com/statics/glass_full.png"
    alt="full_glass"
  />`;
  }
  for (let i = 0; i < emptyGlasses; i++) {
    glassesHtml += ` <img
    src="https://app.carbmanager.com/statics/glass_empty.png"
    alt="empty_glass"
  />`;
  }
  document.querySelector(
    ".daily-log__content--water__glasses"
  ).innerHTML = glassesHtml;
} else {
  console.log("Do not have any glasses for today.");
}

/*************** */
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

  let fullGlassImages = document.querySelectorAll('img[alt="full_glass"]');
  let currentUser = localStorage.getItem("currentUser");
  let waterObj = {
    date: currentDate,
    noOfGlasses: fullGlassImages.length,
  };
  if (currentUser) {
    currentUser = JSON.parse(currentUser);
    if (currentUser.waterLog) {
      let waterObjIndex = currentUser.waterLog.findIndex(
        (currentWaterObj) => currentWaterObj.date === waterObj.date
      );

      if (waterObjIndex !== -1) {
        currentUser.waterLog[waterObjIndex] = { ...waterObj };
      } else {
        currentUser.waterLog.push({ ...waterObj });
      }
    } else {
      currentUser.waterLog = [{ ...waterObj }];
    }
  }
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
};

/*********************Steps Section Javascript (Nitansh)********************** */

let stepsArr = JSON.parse(localStorage.getItem("currentUser")).steps;
let lastSevenData = [];
let lastSevenLabels = [];
let backGroundColorArr = [];
let backgroundColorRandomArr = ["#1BC98E", "#36A2EB", "#FF6384", "#1BC98E"];
for (let i = 0; i < stepsArr.length; i++) {
  lastSevenData.push(stepsArr[i].stepsCount);
  lastSevenLabels.push(stepsArr[i].date);
  backGroundColorArr.push(
    backgroundColorRandomArr[
      Math.floor(Math.random() * backgroundColorRandomArr.length)
    ]
  );
}

renderStepsChart(lastSevenData, lastSevenLabels, backGroundColorArr);
function renderStepsChart(lastSevenData, lastSevenLabels, backGroundColorArr) {
  let ctx1 = document.getElementById("myChart-steps").getContext("2d");

  let myChartSteps = new Chart(ctx1, {
    type: "bar",
    data: {
      labels: lastSevenLabels,
      datasets: [
        {
          // data: [10000, 10000, 10000, 10000, 10000, 10000, 10000],
          data: lastSevenData,
          backgroundColor: backGroundColorArr,
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
              // steps: 10,
              // stepValue: 1000,
              // max: 10000,
            },
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            },
          },
        ],
      },
    },
  });
}

document
  .querySelector(".daily-log__content--steps__header i")
  .addEventListener("click", () => {
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

function addSteps(e) {
  let date = document.querySelector("#datepicker").value;
  date = date.split("/");
  date = date[0] + "-" + date[1] + "-" + date[2];
  let steps = parseInt(document.querySelector("#stepsInput").value);
  let currentUser = localStorage.getItem("currentUser");
  let stepsObj = { date: date, stepsCount: steps };
  if (currentUser) {
    currentUser = JSON.parse(currentUser);
    if (currentUser.steps) {
      let stepObjIndex = currentUser.steps.findIndex(
        (currentStepObj) => currentStepObj.date === stepsObj.date
      );

      if (stepObjIndex !== -1) {
        currentUser.steps[stepObjIndex] = { ...stepsObj };
      } else {
        currentUser.steps.push({ ...stepsObj });
      }
    } else {
      currentUser.steps = [{ ...stepsObj }];
    }
  }
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  window.location.reload();
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

/**************************Add Content on My Day ***************************/
let foodsArray = JSON.parse(localStorage.getItem("currentUser")).userFoods;
let subtotalObjTillNow = { carbohydrate: 0, protein: 0, fat: 0, energy: 0 };
for (let oneFood of foodsArray) {
  subtotalObjTillNow.carbohydrate += Number(oneFood[5]);
  subtotalObjTillNow.fat += Number(oneFood[4]);
  subtotalObjTillNow.protein += Number(oneFood[3]);
  subtotalObjTillNow.energy += Number(oneFood[2]);
}

// Append content in subtotal based on local storage data
let subtotalDiv = document.getElementById("subtotal-section");
//Create Brakfast html
let subtotalHtml = ` 
  <p>Subtotal</p>
  <p>${subtotalObjTillNow["carbohydrate"].toFixed(2)} g</p>
  <p>${subtotalObjTillNow["fat"].toFixed(2)} g</p>
  <p>${subtotalObjTillNow["protein"].toFixed(2)} g</p>
  <p>${subtotalObjTillNow["energy"].toFixed(2)}</p>
`;
subtotalDiv.innerHTML = subtotalHtml;

// Append content in breakbast based on local storage data
let breakFastDiv = document.getElementById("breakfast-section");
let breakFastFoodArray = foodsArray.filter(
  (oneFood) => oneFood[oneFood.length - 2] === "breakfast"
);

// Append content in breakfast header on local storage data
let breakfastHeaderDiv = document.getElementById("breakfast-header");
let breakfastTillNow = { carbohydrate: 0, protein: 0, fat: 0, energy: 0 };
for (let oneFood of breakFastFoodArray) {
  breakfastTillNow.carbohydrate += Number(oneFood[5]);
  breakfastTillNow.fat += Number(oneFood[4]);
  breakfastTillNow.protein += Number(oneFood[3]);
  breakfastTillNow.energy += Number(oneFood[2]);
}
//Create Brakfast Header html
let breakfastHeaderHtml = ` 
  <p>Breakfast</p>
  <p>${breakfastTillNow["carbohydrate"].toFixed(2)} g</p>
  <p>${breakfastTillNow["fat"].toFixed(2)} g</p>
  <p>${breakfastTillNow["protein"].toFixed(2)} g</p>
  <p>${breakfastTillNow["energy"].toFixed(2)}</p>
`;
breakfastHeaderDiv.innerHTML = breakfastHeaderHtml;

//Create Brakfast html
let breakFastHtml = "";
for (let oneBreakfast of breakFastFoodArray) {
  breakFastHtml += ` 
<div ondblclick=deleteThisRow() class="daily-log__content--my-day__my-meals__row daily-log__content--my-day__my-meals__row--white ${oneBreakfast[0]}">
  <p>${oneBreakfast[1]}</p>
  <p>${oneBreakfast[5]} g</p>
  <p>${oneBreakfast[4]} g</p>
  <p>${oneBreakfast[3]} g</p>
  <p>${oneBreakfast[2]}</p>
</div>`;
}
breakFastDiv.innerHTML = breakFastHtml;

// Append content in lunch based on local storage data
let lunchDiv = document.getElementById("lunch-section");
let lunchFoodArray = foodsArray.filter(
  (oneFood) => oneFood[oneFood.length - 2] === "lunch"
);

// Append content in lunch header on local storage data
let lunchHeaderDiv = document.getElementById("lunch-header");
let lunchTillNow = { carbohydrate: 0, protein: 0, fat: 0, energy: 0 };
for (let oneFood of lunchFoodArray) {
  lunchTillNow.carbohydrate += Number(oneFood[5]);
  lunchTillNow.fat += Number(oneFood[4]);
  lunchTillNow.protein += Number(oneFood[3]);
  lunchTillNow.energy += Number(oneFood[2]);
}
//Create Brakfast Header html
let lunchHeaderHtml = ` 
  <p>Lunch</p>
  <p>${lunchTillNow["carbohydrate"].toFixed(2)} g</p>
  <p>${lunchTillNow["fat"].toFixed(2)} g</p>
  <p>${lunchTillNow["protein"].toFixed(2)} g</p>
  <p>${lunchTillNow["energy"].toFixed(2)}</p>
`;
lunchHeaderDiv.innerHTML = lunchHeaderHtml;

//Create lunch html
let lunchtml = "";
for (let oneLunch of lunchFoodArray) {
  lunchtml += ` 
<div ondblclick=deleteThisRow() class="daily-log__content--my-day__my-meals__row daily-log__content--my-day__my-meals__row--white ${oneLunch[0]}">
  <p>${oneLunch[1]}</p>
  <p>${oneLunch[5]} g</p>
  <p>${oneLunch[4]} g</p>
  <p>${oneLunch[3]} g</p>
  <p>${oneLunch[2]}</p>
</div>`;
}
lunchDiv.innerHTML = lunchtml;

// Append content in dinner based on local storage data
let dinnerDiv = document.getElementById("dinner-section");
let dinnerFoodArray = foodsArray.filter(
  (oneFood) => oneFood[oneFood.length - 2] === "dinner"
);

// Append content in dinner header on local storage data
let dinnerHeaderDiv = document.getElementById("dinner-header");
let dinnerTillNow = { carbohydrate: 0, protein: 0, fat: 0, energy: 0 };
for (let oneFood of dinnerFoodArray) {
  dinnerTillNow.carbohydrate += Number(oneFood[5]);
  dinnerTillNow.fat += Number(oneFood[4]);
  dinnerTillNow.protein += Number(oneFood[3]);
  dinnerTillNow.energy += Number(oneFood[2]);
}
//Create Brakfast Header html
let dinnerHeaderHtml = ` 
  <p>Dinner</p>
  <p>${dinnerTillNow["carbohydrate"].toFixed(2)} g</p>
  <p>${dinnerTillNow["fat"].toFixed(2)} g</p>
  <p>${dinnerTillNow["protein"].toFixed(2)} g</p>
  <p>${dinnerTillNow["energy"].toFixed(2)}</p>
`;
dinnerHeaderDiv.innerHTML = dinnerHeaderHtml;

//Create dinner html
let dinnerHtml = "";
for (let oneDinner of dinnerFoodArray) {
  dinnerHtml += ` 
<div ondblclick=deleteThisRow() class="daily-log__content--my-day__my-meals__row daily-log__content--my-day__my-meals__row--white ${oneDinner[0]}">
  <p>${oneDinner[1]}</p>
  <p>${oneDinner[5]} g</p>
  <p>${oneDinner[4]} g</p>
  <p>${oneDinner[3]} g</p>
  <p>${oneDinner[2]}</p>
</div>`;
}
dinnerDiv.innerHTML = dinnerHtml;

// Append content in snack 1 based on local storage data
let snack1Div = document.getElementById("snack1-section");
let snack1FoodArray = foodsArray.filter(
  (oneFood) => oneFood[oneFood.length - 2] === "snack1"
);

// Append content in snack1 header on local storage data
let snack1HeaderDiv = document.getElementById("snack1-header");
let snack1TillNow = { carbohydrate: 0, protein: 0, fat: 0, energy: 0 };
for (let oneFood of snack1FoodArray) {
  snack1TillNow.carbohydrate += Number(oneFood[5]);
  snack1TillNow.fat += Number(oneFood[4]);
  snack1TillNow.protein += Number(oneFood[3]);
  snack1TillNow.energy += Number(oneFood[2]);
}
//Create Brakfast Header html
let snack1HeaderHtml = ` 
  <p>Snack1</p>
  <p>${snack1TillNow["carbohydrate"].toFixed(2)} g</p>
  <p>${snack1TillNow["fat"].toFixed(2)} g</p>
  <p>${snack1TillNow["protein"].toFixed(2)} g</p>
  <p>${snack1TillNow["energy"].toFixed(2)}</p>
`;
snack1HeaderDiv.innerHTML = snack1HeaderHtml;

//Create Snack 1 html
let snack1Html = "";
for (let oneSnack1 of snack1FoodArray) {
  snack1Html += ` 
<div ondblclick=deleteThisRow() class="daily-log__content--my-day__my-meals__row daily-log__content--my-day__my-meals__row--white ${oneSnack1[0]}">
  <p>${oneSnack1[1]}</p>
  <p>${oneSnack1[5]} g</p>
  <p>${oneSnack1[4]} g</p>
  <p>${oneSnack1[3]} g</p>
  <p>${oneSnack1[2]}</p>
</div>`;
}
snack1Div.innerHTML = snack1Html;

// Append content in snack 2 based on local storage data
let snack2Div = document.getElementById("snack2-section");
let snack2FoodArray = foodsArray.filter(
  (oneFood) => oneFood[oneFood.length - 2] === "snack2"
);

// Append content in snack2 header on local storage data
let snack2HeaderDiv = document.getElementById("snack2-header");
let snack2TillNow = { carbohydrate: 0, protein: 0, fat: 0, energy: 0 };
for (let oneFood of snack2FoodArray) {
  snack2TillNow.carbohydrate += Number(oneFood[5]);
  snack2TillNow.fat += Number(oneFood[4]);
  snack2TillNow.protein += Number(oneFood[3]);
  snack2TillNow.energy += Number(oneFood[2]);
}
//Create Brakfast Header html
let snack2HeaderHtml = ` 
  <p>snack2</p>
  <p>${snack2TillNow["carbohydrate"].toFixed(2)} g</p>
  <p>${snack2TillNow["fat"].toFixed(2)} g</p>
  <p>${snack2TillNow["protein"].toFixed(2)} g</p>
  <p>${snack2TillNow["energy"].toFixed(2)}</p>
`;
snack2HeaderDiv.innerHTML = snack2HeaderHtml;

//Create Snack 1 html
let snack2Html = "";
for (let onesnack2 of snack2FoodArray) {
  snack2Html += ` 
<div ondblclick=deleteThisRow() class="daily-log__content--my-day__my-meals__row daily-log__content--my-day__my-meals__row--white ${onesnack2[0]}">
  <p>${onesnack2[1]}</p>
  <p>${onesnack2[5]} g</p>
  <p>${onesnack2[4]} g</p>
  <p>${onesnack2[3]} g</p>
  <p>${onesnack2[2]}</p>
</div>`;
}
snack2Div.innerHTML = snack2Html;

// Append content in snack 3 based on local storage data
let snack3Div = document.getElementById("snack3-section");
let snack3FoodArray = foodsArray.filter(
  (oneFood) => oneFood[oneFood.length - 2] === "snack3"
);

// Append content in snack3 header on local storage data
let snack3HeaderDiv = document.getElementById("snack3-header");
let snack3TillNow = { carbohydrate: 0, protein: 0, fat: 0, energy: 0 };
for (let oneFood of snack3FoodArray) {
  snack3TillNow.carbohydrate += Number(oneFood[5]);
  snack3TillNow.fat += Number(oneFood[4]);
  snack3TillNow.protein += Number(oneFood[3]);
  snack3TillNow.energy += Number(oneFood[2]);
}
//Create Brakfast Header html
let snack3HeaderHtml = ` 
  <p>Snack3</p>
  <p>${snack3TillNow["carbohydrate"].toFixed(2)} g</p>
  <p>${snack3TillNow["fat"].toFixed(2)} g</p>
  <p>${snack3TillNow["protein"].toFixed(2)} g</p>
  <p>${snack3TillNow["energy"].toFixed(2)}</p>
`;
snack3HeaderDiv.innerHTML = snack3HeaderHtml;

//Create Snack 1 html
let snack3Html = "";
for (let onesnack3 of snack3FoodArray) {
  snack3Html += ` 
<div ondblclick=deleteThisRow() class="daily-log__content--my-day__my-meals__row daily-log__content--my-day__my-meals__row--white ${onesnack3[0]}">
  <p>${onesnack3[1]}</p>
  <p>${onesnack3[5]} g</p>
  <p>${onesnack3[4]} g</p>
  <p>${onesnack3[3]} g</p>
  <p>${onesnack3[2]}</p>
</div>`;
}
snack3Div.innerHTML = snack3Html;

// Append content in  supplements based on local storage data
let supplementsDiv = document.getElementById("supplements-section");
let supplementsFoodArray = foodsArray.filter(
  (oneFood) => oneFood[oneFood.length - 2] === "supplements"
);

// Append content in supplements header on local storage data
let supplementsHeaderDiv = document.getElementById("supplements-header");
let supplementsTillNow = { carbohydrate: 0, protein: 0, fat: 0, energy: 0 };
for (let oneFood of supplementsFoodArray) {
  supplementsTillNow.carbohydrate += Number(oneFood[5]);
  supplementsTillNow.fat += Number(oneFood[4]);
  supplementsTillNow.protein += Number(oneFood[3]);
  supplementsTillNow.energy += Number(oneFood[2]);
}
//Create Brakfast Header html
let supplementsHeaderHtml = ` 
  <p>supplements</p>
  <p>${supplementsTillNow["carbohydrate"].toFixed(2)} g</p>
  <p>${supplementsTillNow["fat"].toFixed(2)} g</p>
  <p>${supplementsTillNow["protein"].toFixed(2)} g</p>
  <p>${supplementsTillNow["energy"].toFixed(2)}</p>
`;
supplementsHeaderDiv.innerHTML = supplementsHeaderHtml;

//Create supplements html
let supplementsHtml = "";
for (let onesupplements of supplementsFoodArray) {
  supplementsHtml += ` 
<div ondblclick=deleteThisRow() class="daily-log__content--my-day__my-meals__row daily-log__content--my-day__my-meals__row--white ${onesupplements[0]}">
  <p>${onesupplements[1]}</p>
  <p>${onesupplements[5]} g</p>
  <p>${onesupplements[4]} g</p>
  <p>${onesupplements[3]} g</p>
  <p>${onesupplements[2]}</p>
</div>`;
}
supplementsDiv.innerHTML = supplementsHtml;

/**********************Done logging today****************************** */
let doneButton = document.getElementById("done-logging");
doneButton.addEventListener("click", (e) => {
  confetti.start();
  setTimeout(() => {
    // confetti.stop();
  }, 1000);
  setTotalLogRow(e);
});
let currentUser2 = JSON.parse(localStorage.getItem("currentUser"));
if (currentUser2.isLoggingDone) {
  setTotalLogRow();
}
function setTotalLogRow() {
  // Append content in total header on local storage data
  let totalHeaderDiv = document.getElementById("total-header");
  let totalTillNow = { carbohydrate: 0, protein: 0, fat: 0, energy: 0 };
  for (let oneFood of foodsArray) {
    totalTillNow.carbohydrate += Number(oneFood[5]);
    totalTillNow.fat += Number(oneFood[4]);
    totalTillNow.protein += Number(oneFood[3]);
    totalTillNow.energy += Number(oneFood[2]);
  }
  //Create total Header html
  let totalHeaderHtml = ` 
  <p>Total</p>
  <p>${totalTillNow["carbohydrate"].toFixed(2)} g</p>
  <p>${totalTillNow["fat"].toFixed(2)} g</p>
  <p>${totalTillNow["protein"].toFixed(2)} g</p>
  <p>${totalTillNow["energy"].toFixed(2)}</p>
`;
  totalHeaderDiv.innerHTML = totalHeaderHtml;
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!currentUser.isLoggingDone) {
    currentUser.isLoggingDone = true;
  }
  localStorage.setItem("currentUser", JSON.stringify({ ...currentUser }));
}

/***********Pie Chart */

let ctx3 = document.getElementById("myChartMyDay").getContext("2d");
let dataArrayPie = [];
dataArrayPie = [
  subtotalObjTillNow["carbohydrate"].toFixed(2),
  subtotalObjTillNow["fat"].toFixed(2),
  subtotalObjTillNow["protein"].toFixed(2),
];
let myChart3 = new Chart(ctx3, {
  type: "pie",
  data: {
    labels: ["Net Carbs", "Fat", "Protein"],
    datasets: [
      {
        // data: [10000, 10000, 10000, 10000, 10000, 10000, 10000],
        data: dataArrayPie,
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

function deleteThisRow() {
  let divElement = event.currentTarget;
  let foodId = divElement.classList[divElement.classList.length - 1];
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  let userFoods = [...currentUser.userFoods];
  let foundUserFoodIndex = userFoods.findIndex(
    (userFood) => userFood[0] === foodId
  );
  userFoods.splice(foundUserFoodIndex, 1);
  currentUser.userFoods = userFoods;
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  console.log(divElement.remove());
  window.location.href = "../daily_log/daily_log.html";
}
