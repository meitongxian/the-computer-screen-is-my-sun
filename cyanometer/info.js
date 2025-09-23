// toggle hidden section

let infoToggle = document.querySelector(".info-toggle");
let info = document.querySelector(".info");

infoToggle.addEventListener("click", () => {
    info.classList.toggle("hide");
    if (infoToggle.innerHTML === "+ what is a cyanometer?") {
        infoToggle.innerHTML = "- what is a cyanometer?";
    } else {
        infoToggle.innerHTML = "+ what is a cyanometer?";
    }
});