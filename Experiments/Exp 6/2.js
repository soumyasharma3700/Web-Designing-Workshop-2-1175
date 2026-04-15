let heading = document.getElementById("heading");
let input = document.getElementById("userInput");
let para = document.getElementById("para");

document.getElementById("changetextbtn").onclick = function() {
    heading.innerHTML = input.value;
};
input.onchange = function() {
    console.log("Input changed to: " + input.value);
}; 
document.getElementById("bgcolorbtn").addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";
});
document.getElementById("fontsizebtn").addEventListener("click", function() {
    heading.style.fontSize = "40px";
});

