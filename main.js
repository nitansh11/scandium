window.onscroll = function() {myFunction()};

var navbar = document.querySelector(".main__navigation");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//This is just a dummy data ,ignore this
// let obj = {name:"Nitansh Rastogi",email:"nitansh11@gmail.com",waterLog:[
//     {date: "1-12-2020", noOfGlasses: 3},
//     {date: "2-12-2020", noOfGlasses: 4},
//     {date: "3-12-2020", noOfGlasses: 5},
//     {date: "4-12-2020", noOfGlasses: 8},
//     {date: "5-12-2020", noOfGlasses: 13},
//     {date: "6-12-2020", noOfGlasses: 17},
//     {date: "7-12-2020", noOfGlasses: 4},
//     {date: "8-12-2020", noOfGlasses: 12},
//     {date: "9-12-2020", noOfGlasses: 7},
//     {date: "10-12-2020", noOfGlasses: 4},
//     {date: "11-12-2020", noOfGlasses: 7},
//     {date: "12-12-2020", noOfGlasses: 9},
//     {date: "13-12-2020", noOfGlasses: 11},
//     {date: "14-12-2020", noOfGlasses: 15},
//     {date: "15-12-2020", noOfGlasses: 19},
//     {date: "16-12-2020", noOfGlasses: 20},
//     {date: "17-12-2020", noOfGlasses: 5},
//     {date: "18-12-2020", noOfGlasses: 2},
//     {date: "19-12-2020", noOfGlasses: 6},
//     {date: "20-12-2020", noOfGlasses: 6},
//     {date: "21-12-2020", noOfGlasses: 9},
//     {date: "22-12-2020", noOfGlasses: 2},
//     {date: "23-12-2020", noOfGlasses: 15},
//     {date: "24-12-2020", noOfGlasses: 18},
//     {date: "25-12-2020", noOfGlasses: 19},
//     {date: "26-12-2020", noOfGlasses: 12},
//     {date: "27-12-2020", noOfGlasses: 6},
//     {date: "28-12-2020", noOfGlasses: 16},
//     {date: "29-12-2020", noOfGlasses: 2},
//     {date: "30-12-2020", noOfGlasses: 7},
//     {date: "31-12-2020", noOfGlasses: 11}
// ],sleepLog:[
//     {date: "1-12-2020", noOfSleepHours: 3},
//     {date: "2-12-2020", noOfSleepHours: 4},
//     {date: "3-12-2020", noOfSleepHours: 5},
//     {date: "4-12-2020", noOfSleepHours: 8},
//     {date: "5-12-2020", noOfSleepHours: 13},
//     {date: "6-12-2020", noOfSleepHours: 17},
//     {date: "7-12-2020", noOfSleepHours: 4},
//     {date: "8-12-2020", noOfSleepHours: 12},
//     {date: "9-12-2020", noOfSleepHours: 7},
//     {date: "10-12-2020", noOfSleepHours: 4},
//     {date: "11-12-2020", noOfSleepHours: 7},
//     {date: "12-12-2020", noOfSleepHours: 9},
//     {date: "13-12-2020", noOfSleepHours: 11},
//     {date: "14-12-2020", noOfSleepHours: 15},
//     {date: "15-12-2020", noOfSleepHours: 19},
//     {date: "16-12-2020", noOfSleepHours: 20},
//     {date: "17-12-2020", noOfSleepHours: 5},
//     {date: "18-12-2020", noOfSleepHours: 2},
//     {date: "19-12-2020", noOfSleepHours: 6},
//     {date: "20-12-2020", noOfSleepHours: 6},
//     {date: "21-12-2020", noOfSleepHours: 9},
//     {date: "22-12-2020", noOfSleepHours: 2},
//     {date: "23-12-2020", noOfSleepHours: 15},
//     {date: "24-12-2020", noOfSleepHours: 18},
//     {date: "25-12-2020", noOfSleepHours: 19},
//     {date: "26-12-2020", noOfSleepHours: 12},
//     {date: "27-12-2020", noOfSleepHours: 6},
//     {date: "28-12-2020", noOfSleepHours: 16},
//     {date: "29-12-2020", noOfSleepHours: 2},
//     {date: "30-12-2020", noOfSleepHours: 7},
//     {date: "31-12-2020", noOfSleepHours: 11}
// ],steps:[]};
// localStorage.setItem("currentUser",JSON.stringify(obj));