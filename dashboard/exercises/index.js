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

let quickFind = (e) => {
    let button = e.target;
    var i;
    var x = document.getElementsByClassName('quickFind__btn')
    //console.log(x)
    for(i=0; i<x.length; i++){
        //console.log(x[i])
        //x[i].style.display = 'none'
    }
    //document.getElementById(e.target.value).style.display = 'block';

    let allBtns = button.parentNode.querySelectorAll('button');
    allBtns.forEach((button)=>{
        button.style.borderBottom = 'none';
        button.style.color = "rgb(159,159,159)"
        button.querySelector('p').style.color = 'rgb(159,159,159)'
    })
    button.style.borderBottom = '2px solid #616161';
    button.style.color = "#616161";
    button.querySelector('p').style.color = "#616161";
};
let allBtns = document.querySelectorAll('.quickFindBtnDiv button');
allBtns.forEach((button)=>{
    button.addEventListener('click', (e)=>quickFind(e))
})

// let getData = ()=>{
//     let parent = document.getElementById('parent')

//     let justNow = document.createElement('p')
//     justNow.setAttribute('class','justNow')
//     justNow.textContent = 'JUST NOW'

//     let barbellCurl = document.createElement('p')
//     barbellCurl.setAttribute('class','barbellCurl')
//     barbellCurl.textContent = 'Barbell Curl'

//     let forearmplank = document.createElement('p')
//     forearmplank.setAttribute('class','forearmplank')
//     forearmplank.textContent = 'Fore Arm Plank'

//     let crunches = document.createElement('p')
//     crunches.setAttribute('class','crunches')
//     crunches.textContent = 'Crunches'

//     parent.append(justNow, barbellCurl, forearmplank, crunches)
// }
// let btn3 = document.getElementsByClassName('quickFind__btn2');
// btn3.addEventListener("click",getData())

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
