const button1 = document.getElementById("btn1");

const button2 = document.getElementById("btn2");

const button3 = document.getElementById("btn3");

const button4 = document.getElementById("btn4");

// const originalCol = document.getElementsById("originalCol");


button1.addEventListener("click", function() {
    button1.style.backgroundColor = "#ff6384";
    document.body.style.backgroundColor = "#ff6384";

});

button2.addEventListener("click", () => {
    button2.style.backgroundColor = "#FFE5B4";
    document.body.style.backgroundColor = "#FFE5B4";
   stop.eventpropagation()
});

button3.addEventListener("click", () => {
    button3.style.backgroundColor = "#FFD700";
    document.body.style.backgroundColor = "#FFD700";
     
});

button4.addEventListener("click", () => {
    button4.style.backgroundColor = "white";
    document.body.style.backgroundColor = "white";
     
});

originalCol.addEventListener("click", () => {
   originalCol.style.backgroundColor = "white";
   document.body.style.backgroundColor = "white"
  });






