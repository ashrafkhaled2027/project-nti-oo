let header = document.querySelector("header");
let doctors = document.querySelectorAll(".div-doctor-1, .div-doctor-2, .div-doctor-3, .div-doctor-4");

// Header
window.onscroll = function () {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 2px 10px #999";
    } else {
        header.style.boxShadow = "none";
    }
};

// Doctor Cards
doctors.forEach(function (doctor) {

    let button = document.createElement("button");
    button.innerText = "Show Details";

    let info = document.createElement("p");
    info.innerText = "Available for appointments";
    info.style.display = "none";

    doctor.querySelector("aside").appendChild(button);
    doctor.querySelector("aside").appendChild(info);

    button.onclick = function () {

        if (info.style.display === "none") {
            info.style.display = "block";
            button.innerText = "Hide Details";
        } else {
            info.style.display = "none";
            button.innerText = "Show Details";
        }

    };
});