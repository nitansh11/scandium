const getSection = (e) => {
    let button = e.currentTarget;
    var i;
    var x = document.getElementsByClassName("exercise__content");
    //console.log(x.length)
    for (i = 0; i < x.length; i++) {
        //console.log(x[i])
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
let allButtons = document.querySelectorAll(".exercise__navigation button");
allButtons.forEach((button) => {
    button.addEventListener("click", (e) => getSection(e));
});

/////////////
function modal(){
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
modal()

///
function modal1(){
  var modal = document.getElementById("myModal1");

// Get the button that opens the modal
  var btn = document.getElementById("myBtn1");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close1")[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
modal1()

function modal2(){
  var modal = document.getElementById("myModal2");

// Get the button that opens the modal
  var btn = document.getElementById("myBtn2");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close2")[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
modal2()

function modal3(){
  var modal = document.getElementById("myModal3");

// Get the button that opens the modal
  var btn = document.getElementById("myBtn3");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close3")[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
modal3()

////end at 30-12-2020 --  8.45 am 

function modal4(){
  var modal = document.getElementById("myModal4");
  var modal1 = document.getElementById("myModal5");
  var modal2 = document.getElementById("myModal6");
  var modal3 = document.getElementById("myModal7");
  var modal4 = document.getElementById("myModal8");
  var modal5 = document.getElementById("myModal9");
  var modal6 = document.getElementById("myModal10");
  var modal7 = document.getElementById("myModal11");

// Get the button that opens the modal
  var btn = document.getElementById("myBtn4");
  var btn1 = document.getElementById("myBtn5");
  var btn2 = document.getElementById("myBtn6");
  var btn3 = document.getElementById("myBtn7");
  var btn4 = document.getElementById("myBtn8");
  var btn5 = document.getElementById("myBtn9");
  var btn6 = document.getElementById("myBtn10");
  var btn7 = document.getElementById("myBtn11");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close4")[0];
  var span1 = document.getElementsByClassName("close5")[0];
  var span2 = document.getElementsByClassName("close6")[0];
  var span3 = document.getElementsByClassName("close7")[0];
  var span4 = document.getElementsByClassName("close8")[0];
  var span5 = document.getElementsByClassName("close9")[0];
  var span6 = document.getElementsByClassName("close10")[0];
  var span7 = document.getElementsByClassName("close11")[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }
  btn1.onclick = function() {
    modal1.style.display = "block";
  }
  btn2.onclick = function() {
    modal2.style.display = "block";
  }
  btn3.onclick = function() {
    modal3.style.display = "block";
  }
  btn4.onclick = function() {
    modal4.style.display = "block";
  }
  btn5.onclick = function() {
    modal5.style.display = "block";
  }
  btn6.onclick = function() {
    modal6.style.display = "block";
  }
  btn7.onclick = function() {
    modal7.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  span1.onclick = function() {
    modal1.style.display = "none";
  }
  span2.onclick = function() {
    modal2.style.display = "none";
  }
  span3.onclick = function() {
    modal3.style.display = "none";
  }
  span4.onclick = function() {
    modal4.style.display = "none";
  }
  span5.onclick = function() {
    modal5.style.display = "none";
  }
  span6.onclick = function() {
    modal6.style.display = "none";
  }
  span7.onclick = function() {
    modal7.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
    if (event.target == modal3) {
      modal3.style.display = "none";
    }
    if (event.target == modal4) {
      modal4.style.display = "none";
    }
    if (event.target == modal5) {
      modal5.style.display = "none";
    }
    if (event.target == modal6) {
      modal6.style.display = "none";
    }
    if (event.target == modal7) {
      modal7.style.display = "none";
    }
  }
}
modal4()


//// exercise page cardio button search bar JS /////
function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}



/////// add custom weights in exercise page ////////

  // Get the modal
  var modal = document.getElementById("myModalWeights");

  // Get the button that opens the modal
  var btn = document.getElementById("addCustomWeights");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close-weights")[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
//weights__saveBtn
  showTask();
  var addTaskInputName = document.getElementById("weights__nameInput")
  var addTaskInputWeight = document.getElementById("weights__equipmentInput")
  var addTaskInputTime = document.getElementById("weights__timeInput")
  var addTaskButton = document.getElementById("weights__saveBtn")

  addTaskButton.addEventListener("click", function(){
    var addTaskInputValue = addTaskInputName.value;
    var addTaskInputValue1 = addTaskInputWeight.value;
    var addTaskInputValue2 = addTaskInputTime.value;
  
    if(addTaskInputValue.trim() && addTaskInputValue1.trim() && addTaskInputValue2.trim()){
      var task = localStorage.getItem("weightTask")
      if (task == null) {
          taskObj = [];
      } else {
          taskObj = JSON.parse(task);
      }
      taskObj.push({task_name:addTaskInputValue, task_weight:addTaskInputValue1, task_time:addTaskInputValue2});
      localStorage.setItem("weightTask", JSON.stringify(taskObj));
      addTaskInputName.value = "";
      addTaskInputWeight.value = "";
      addTaskInputTime.value = "";
    }
    showTask();
    var modal = document.getElementById("myModalWeights");
    modal.style.display = "none";
  })
  
  function showTask(){
    var task = localStorage.getItem("weightTask")
    if(task == null){
        taskObj = []
    }else{
        taskObj = JSON.parse(task)
    }

    var html = ""
    var taskList = document.getElementById("taskList")
    taskObj.forEach(function(item, index){
        html += `<div class="eachRow">
        <p class='eachRowName'>Exercise : ${item.task_name}</p>
        <p class='eachRowWeight'>Equipment : ${item.task_weight}</p>
        <p class='eachRowTime'>Time : ${item.task_time}</p>
        <p class='eachRowButton'><button onclick = "deleteItem(${index})" class='weightDeleteBtn'>completed</button></p>
        </div>`;
    })
    taskList.innerHTML = html;
  }

  function deleteItem(index){
    var task = localStorage.getItem("weightTask")
    var taskObj = JSON.parse(task);
    taskObj.splice(index,1)
    localStorage.setItem("weightTask", JSON.stringify(taskObj))
    showTask()
  }
