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
// const header = document.querySelector("header");

// toggleDark.addEventListener("click", function(){
//     if(this.classList.toggle("fa-regular", "fa-sun")){
//         body.style.background = "white";
//         body.style.color = "black";
//         body.style.transition = "2s";
//         header.style.background = "white"
//         }
//     });

//     toggleLight.addEventListener("click", function(){
//         if(this.classList.toggle("fa-regular", "fa-moon")){
//             body.style.background = "black";
//             body.style.color = "white";
//             body.style.transition = "2s";
//             header.style.background = "black"
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
function shownumber(){
document.getElementById("btn6").textContent = "502-994-408"
};

function english(){
    document.getElementById("ust").innerHTML = 'Settings <i class="fa-solid fa-gear"></i>'
    document.getElementById("lang").innerHTML = 'Language <i class="fa-solid fa-language fa-lg"></i>'
    document.getElementById("mot").innerHTML = 'Theme <i class="fa-regular fa-lightbulb fa-lg"></i>'
    document.getElementById("omnie").innerHTML = 'About me <i class="fa-solid fa-user"></i>'
    document.getElementById("pro").innerHTML = 'Projects <i class="fa-solid fa-briefcase"></i>'
    document.getElementById("kon").innerHTML = 'contact <i class="fa-solid fa-address-book"></i>'
    document.getElementById("text").innerHTML = 'My name is Kamil Chabowski, I am currently 20 years old and I live near Płock. <br>I started to be interested in programming at the age of 17 and since then I have been expanding my knowledge in this field. <br>I mainly program front-end, but I also know the basics of back-end.'
    document.getElementById("btn1").innerHTML = 'Languages <i class="fa-solid fa-code"></i>'
    document.getElementById("btn2").innerHTML = 'Qualifications <i class="fa-solid fa-certificate"></i>'
    document.getElementById("html").innerHTML = 'HTML is the foundation of every website, defining the structure and core content elements, which are then styled and dynamically modified using CSS and JavaScript. <br> <br> Knowledge of: <i class="fa-solid fa-code"></i>'
    document.getElementById("css").innerHTML = 'CSS is a key tool in creating aesthetic and functional websites. Thanks to CSS, websites can be more attractive, readable and user-friendly.  <br> <br> Knowledge of: <i class="fa-solid fa-code"></i>'
    document.getElementById("js").innerHTML = 'JavaScript is a tool in the modern creation of websites and web applications, enabling the creation of interactive, responsive and attractive experiences for users. <br> <br> Knowledge of: <i class="fa-solid fa-code"></i>'
    document.getElementById("rjs").innerHTML = 'used to build a variety of applications, from simple websites to complex web applications such as social platforms, interactive dashboards and many others. <br> <br> Knowledge of: <i class="fa-solid fa-code"></i>'
    document.getElementById("php").innerHTML = 'It is ideal for creating websites that require logging in to the site and easily performs all scripts and operations on databases located on the <br> <br> server Knowledge of: <i class="fa-solid fa-code"></i>'
    document.getElementById("sql").innerHTML = 'SQL is the foundation for working with relational databases such as MySQL and many others. It is crucial for creating, modifying and managing data in web applications. <br> <br> Knowledge of: <i class="fa-solid fa-code"></i>'
    document.getElementById("d1").innerHTML = 'My <i>Experience</i>'
    document.getElementById("d2").innerHTML = 'The programming languages ​​I know and which I am currently developing. I plan to continue my studies in this field, but currently I am focusing on creating responsive websites that are well optimized and fulfill their role.'
    document.getElementById("text1").innerHTML = 'A bit information about me'
    document.getElementById("zbtn").innerHTML = 'Interests'
    document.getElementById("ubtn").innerHTML = 'Skills'
    document.getElementById("mp").innerHTML = 'My <i>Projects</i>'
    document.getElementById("lp").innerHTML = 'Here will be a list of larger projects done by me'
    document.getElementById("btn4").innerHTML = 'Show more <i class="fa-solid fa-arrow-right fa-rotate-90 fa-sm"></i>'
    document.getElementById("str").innerHTML = "Do you need to create a website? <br> Let's do it together!"
    document.getElementById("ig").innerHTML = 'Direct message me on <i>Instragram</i> <i class="fa-brands fa-instagram fa-lg"></i>'
    document.getElementById("dm").innerHTML = 'Contact:'
    document.getElementById("btn6").innerHTML = 'Show number'
    document.getElementById("btn7").innerHTML = 'Contact me'
}
function polish(){
    document.getElementById("ust").innerHTML = 'Ustawienia <i class="fa-solid fa-gear"></i>'
    document.getElementById("lang").innerHTML = 'Język <i class="fa-solid fa-language fa-lg"></i>'
    document.getElementById("mot").innerHTML = 'Motyw <i class="fa-regular fa-lightbulb fa-lg"></i>'
    document.getElementById("omnie").innerHTML = 'O mnie <i class="fa-solid fa-user"></i>'
    document.getElementById("pro").innerHTML = 'Projekty <i class="fa-solid fa-briefcase"></i>'
    document.getElementById("kon").innerHTML = 'Kontakt <i class="fa-solid fa-address-book"></i>'
    document.getElementById("text").innerHTML = 'Nazywam Się Kamil Chabowski, aktualnie mam 20 lat i Mieszkam niedaleko Płocka. <br>Zaczałem interesować się programowaniem w wieku 17 lat i od tego czasu poszerzam swoją więdze w tym zakresie. <br>Głownie programuje front-end, lecz znam też podstawy Back-endu.'
    document.getElementById("btn1").innerHTML = 'Znane języki <i class="fa-solid fa-code"></i>'
    document.getElementById("btn2").innerHTML = 'Kwalifikacje <i class="fa-solid fa-certificate"></i>'
    document.getElementById("html").innerHTML = 'HTML jest fundamentem każdej strony internetowej, definiując strukturę i podstawowe elementy treści, które są następnie stylizowane i dynamicznie modyfikowane przy użyciu CSS i JavaScript. <br> <br> Znajomość:  <i class="fa-solid fa-code"></i>'
    document.getElementById("css").innerHTML = 'CSS jest kluczowym narzędziem w tworzeniu estetycznych i funkcjonalnych stron internetowych. Dzięki CSS strony internetowe mogą być bardziej atrakcyjne, czytelne i przyjazne dla użytkowników.  <br> <br> Znajomość:  <i class="fa-solid fa-code"></i>'
    document.getElementById("js").innerHTML = 'JavaScript jest narzędziem w nowoczesnym tworzeniu stron i aplikacji internetowych, umożliwiającym tworzenie interaktywnych, responsywnych i atrakcyjnych dla użytkowników doświadczeń. <br> <br> Znajomość:  <i class="fa-solid fa-code"></i>'
    document.getElementById("rjs").innerHTML = 'wykorzystywany do budowy różnorodnych aplikacji, od prostych stron internetowych po złożone aplikacje webowe, takie jak platformy społecznościowe, interaktywne dashboardy i wiele innych. <br> <br> Znajomość:  <i class="fa-solid fa-code"></i>'
    document.getElementById("php").innerHTML = 'Idealnie nadaje się do tworzenia stron internetowych z wymogiem zalogowania się do witryny i z łatwością wykonuje wszystskie skrypty oraz operacje na bazach danych znajdujących się na serwerze <br> <br> Znajomość:  <i class="fa-solid fa-code"></i>'
    document.getElementById("sql").innerHTML = 'SQL jest fundamentem pracy z relacyjnymi bazami danych, takimi jak MySQL i wiele innych. Jest kluczowy dla tworzenia, modyfikowania i zarządzania danymi w aplikacjach internetowych. <br> <br> Znajomość:  <i class="fa-solid fa-code"></i>'
    document.getElementById("d1").innerHTML = 'Moje <i>Doświadczenie</i>'
    document.getElementById("d2").innerHTML = 'Znane mi języki progrmowania, w których aktualnie sie roziwjam. W planach mam dalszą nauke związaną z tym kierunkiem, aktualnie jednak skupiam się na Tworzeniu responsywcnych stron inyternetowych które jednocześnie są dobrze zooptymalizowane oraz spełniają swoją role'
    document.getElementById("text1").innerHTML = 'Troche Informacji o mnie'
    document.getElementById("zbtn").innerHTML = 'Zainteresowania'
    document.getElementById("ubtn").innerHTML = 'Umiejętności'
    document.getElementById("mp").innerHTML = 'Moje <i>projekty</i>'
    document.getElementById("lp").innerHTML = 'Tutaj będzie lista większym projektów zrobionych przemnie'
    document.getElementById("btn4").innerHTML = 'Rozwiń <i class="fa-solid fa-arrow-right fa-rotate-90 fa-sm"></i>'
    document.getElementById("str").innerHTML = 'Potrzebujesz zrobić strone internetową? <br> Zróbmy ją razem!'
    document.getElementById("ig").innerHTML = 'Napisz do mnie na <i>Instragramie</i> <i class="fa-brands fa-instagram fa-lg"></i>'
    document.getElementById("dm").innerHTML = 'Kontakt:'
    document.getElementById("btn6").innerHTML = 'Pokaż numer'
    document.getElementById("btn7").innerHTML = 'Skontaktuj się ze mną'
}
