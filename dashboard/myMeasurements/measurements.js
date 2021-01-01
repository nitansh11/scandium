const getMeasurements = (e) => {
    let button = e.currentTarget;
    var i;
    var x = document.getElementsByClassName("measurements__content");
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
let allButtons = document.querySelectorAll(".measurements__navigation button");
allButtons.forEach((button) => {
    button.addEventListener("click", (e) => getMeasurements(e));
});


////measurements page body popup ///////
function bodyPopup(){
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("bodyBtn");
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


//// measurement page insulin popup //////
function insulinPopup(){
  var modal = document.getElementById("myModal1");
  var btn = document.getElementById("insulinBtn");
  var span = document.getElementsByClassName("close1")[0];

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
insulinPopup()

//// measurement page glucose popup //////
function glucosePopup(){
  var modal = document.getElementById("myModal2");
  var btn = document.getElementById("glucoseBtn");
  var span = document.getElementsByClassName("close2")[0];

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
glucosePopup()

/// weights graph in measurements page ///
var ctxw = document.getElementById('line-chart').getContext('2d');
var myChartWeight = new Chart(ctxw, {
  type: 'line',
  data: {
    // labels: ['0','90 Days', '60 Days', '30 Days', '14 Days', '7 Days'],
    labels: ['0','7 Days', '14 Days', '30 Days', '60 Days', '90 Days'],
    datasets: [{
      label: 'Days v/s Weight',
      data: [0, 0.1, 0.3, 0.5, 0.7, 1.0],
      //data: [1.0, 0.7, 0.5, 0.3, 0.2, 0.1],
      borderWidth: 0
    }]
  },
});
