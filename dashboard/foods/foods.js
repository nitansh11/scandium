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
  console.log("hey!");
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
  console.log(foods);
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

async function showFoodData(){
  console.log("Clicked",event.currentTarget.id);
  let url =`http://localhost:3001/foods/${event.currentTarget.id}`;
  console.log(url);
  let response = await fetch(url,{method:"GET"})
  let food = await response.json();
  console.log(food);
  renderFoodDetailsModal(food);
}

function renderFoodDetailsModal(food){
  console.log(food);
   // Get the modal
   var modal = document.getElementById("food-detail-modal");
   // Get the <span> element that closes the modal
   var span = document.getElementsByClassName(
     "food-detail-modal-close"
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
  
   let modalContentDiv = document.querySelector('.food-detail-modal__content');
  //  makePieChart();
   
}


  /***********Pie Chart */

let ctx= document.getElementById("myChartFoodDetail").getContext("2d");
let myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Energy","Net Carbs","Fat","Protein"],
    datasets: [
      {
        // data: [10000, 10000, 10000, 10000, 10000, 10000, 10000],
        data: [10,20, 20, 40],
        backgroundColor:["#1BC98E","orange","#36A2EB","#FF6384"]
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
      position:"left",
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





