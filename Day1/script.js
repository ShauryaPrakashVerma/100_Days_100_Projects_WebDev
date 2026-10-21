var eye = document.querySelector("#leyeball");

console.log("check");

document.addEventListener("mousemove", function (abc) {
    eye.style.top = abc.y + "px";
    eye.style.left = abc.x + "px";
})