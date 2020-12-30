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