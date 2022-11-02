let statuslight = false
const a = document.querySelector(".lamp");
const b = document.querySelector(".lamp-icon");

// function offLamp() {
//     const status = false
//     const a = document.querySelector(".lamp");
//     const b = document.querySelector(".lamp-icon");
//     a.classList.toggle("lamp-active");
//     b.classList.toggle("lamp-icon-active");
// }
// b.onclick = offLamp
b.addEventListener('click', function() {
    a.classList.toggle("lamp-active");
    b.classList.toggle("lamp-icon-active");
    b.textContent = statuslight ? "On" : "Off"
    statuslight = !statuslight
})
