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

let isvsible = true;
document.getElementById("togglebtn").addEventListener("click", function() {
    if (isvsible) {
        para.style.display = "none";
        isvsible = false;

    } else {
        para.style.display = "block";
        isvsible = true;
    }
});
document.getElementById("resetbtn").addEventListener("click", function() {
    location.reload();
});

heading.onmouseover = function() {
    heading.style.color = "red";
};