const getSection = (e) => {
  let button = e.currentTarget;

  if (button.value === "quick-entry") {
    openModalForm();
    return;
  }

  var i;
  var x = document.getElementsByClassName("foods__content");
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
let allButtons = document.querySelectorAll(".foods__navigation button");
allButtons.forEach((button) => {
  button.addEventListener("click", (e) => getSection(e));
});

// Quick Entry Section Modal Pop Up Form

function openModalForm() {

  // Get the modal
  var modal = document.getElementById("quick-entry");
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName(
    "foods__content--quick-entry-modal-close"
  )[0];
  modal.style.display = "block";

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
}

/*****************food.json API **********************/

let button = document.querySelector(".foods__content--search__dropdown button");
button.addEventListener("click", (e) => getFoods(e.currentTarget));

async function getFoods(button) {
  let response = await fetch("http://localhost:3001/foods", { method: "GET" });
  let foods = await response.json();
  renderFoods(foods);
}
function renderFoods(foods) {

  let listDiv = document.querySelector(".foods__content--search__list");
  let output = "";
  for (let food of foods) {
    output += `  <div id=${food.id} onClick="showFoodData()" class="foods__content--search__list-item">
    <img
      src="https://app.carbmanager.com/statics/food/i302.png"
      alt="food-image"
    />
    <p>${food.name}</p>
  </div>`;
  }
  listDiv.innerHTML = output;
}

async function showFoodData() {
 
  let url = `http://localhost:3001/foods/${event.currentTarget.id}`;
 
  let response = await fetch(url, { method: "GET" });
  let food = await response.json();
 
  renderFoodDetailsModal(food);
}

function renderFoodDetailsModal(food) {
  console.log(food);
  let modalContentDiv = document.querySelector(".food-detail-modal__content");
  let foodNutritionObj,isGram;
  if(food["nutrition-per-100g"]){
      foodNutritionObj=food["nutrition-per-100g"];
      isGram=true;
  }
  else{
    foodNutritionObj=food["nutrition-per-100ml"];
    isGram=false;
  }
  modalContentDiv.innerHTML = `    <div id="form-top">
   <span class="food-detail-modal-close" style="color:white">&times;</span>
   <p>${food.name}</p>
   <button>Add Food Item</button>
 </div>

 <div class="food-detail-modal__content__chart-box">
   <div class="food-detail-modal__content__chart">
     <canvas
       id="myChartFoodDetail"
       aria-label="chart"
       role="img"
       width="1000"
       height="250"
     ></canvas>
   </div>
   <div class="food-detail-modal__content__table">
       <div class="food-detail-modal__content__table__row">
           <p>Nutrition</p>
           <p>Value ${isGram?" (nutrition-per-100g)":" (nutrition-per-100ml)"}</p>
       </div>
       <div class="food-detail-modal__content__table__row">
         <p>Energy</p>
         <p>${foodNutritionObj.energy} </p>
       </div>
       <div class="food-detail-modal__content__table__row">
         <p>Protein</p>
         <p>${foodNutritionObj.protein} g</p>
       </div>
       <div class="food-detail-modal__content__table__row">
           <p>Fat</p>
           <p>${foodNutritionObj.fat} g</p>
       </div>
       <div class="food-detail-modal__content__table__row">
         <p>Carbohydrates</p>
         <p>${foodNutritionObj.carbohydrate} g</p>
       </div>
      
   </div>
 </div>`;
 
  // Get the modal
  var modal = document.getElementById("food-detail-modal");
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("food-detail-modal-close")[0];
  modal.style.display = "block";



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


  /***********Pie Chart */

  let ctx = document.getElementById("myChartFoodDetail").getContext("2d");
  let myChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: [ "Net Carbs", "Fat", "Protein"],
      datasets: [
        {
          // data: [10000, 10000, 10000, 10000, 10000, 10000, 10000],
          data: [foodNutritionObj.carbohydrate, foodNutritionObj.fat, foodNutritionObj.protein],
          backgroundColor: [ "orange", "#36A2EB", "#FF6384"],
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
        position: "left",
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
              // beginAtZero: true,
              // steps: 6,
              // stepValue: 0.1,
              // max: 30,
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
