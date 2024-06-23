// PopUp
function popupopen(){
        document.querySelector(".popup").classList.add("active");
};
function popupcloce(){
    document.querySelector(".popup").classList.remove("active");
};
// Light/Dark Mode

// const toggleDark = document.getElementById("toggleDark");
// const toggleLight = document.getElementById("toggleLight");
// const body = document.querySelector("body");

// toggleDark.addEventListener("click", function(){
//     if(this.classList.toggle("fa-regular", "fa-sun")){
//         body.style.background = "white";
//         body.style.color = "black";
//         body.style.transition = "2s";
//         }
//     });

//     toggleLight.addEventListener("click", function(){
//         if(this.classList.toggle("fa-regular", "fa-moon")){
//             body.style.background = "black";
//             body.style.color = "white";
//             body.style.transition = "2s";

//         }
// });
function Zainteresowania(){
    document.getElementById("main").textContent = "Zainteresowania"
    document.getElementById("li1").textContent = "Programowanie"
    document.getElementById("li2").textContent = "Informatyka"
    document.getElementById("li3").textContent = "Podróżowanie"
    document.getElementById("li4").textContent = "Downhill"
    document.getElementById("li5").textContent = "Gry komputerowe"
    document.getElementById("li6").textContent = "E-sport"
};
function Umiejętności(){
    document.getElementById("main").textContent = "Umiejętności"
    document.getElementById("li1").textContent = "Dobra organizacja pracy"
    document.getElementById("li2").textContent = "Punktualność"
    document.getElementById("li3").textContent = "Pomysłowość"
    document.getElementById("li4").textContent = "Pracowitość"
    document.getElementById("li5").textContent = "Szybka nauka nowych języków oraz techonolgii"
    document.getElementById("li6").textContent = "Umiejętnośc pracy w zespole"
};
// Telefon
function shownumer(){
    document.getElementById("numer").textContent = "502-994-408"
};