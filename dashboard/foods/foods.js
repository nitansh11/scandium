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
