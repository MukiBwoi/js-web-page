const body = document.querySelector("body");


//header
const header = document.createElement('header');
body.appendChild(header);

//header style
header.style.height = "100vh";



//nav-bar
const bgBox = document.createElement('nav')
header.appendChild(bgBox);


//nav-bar style
bgBox.style.width = "100%";
bgBox.style.height = "10vh";
bgBox.style.position = "fixed";
bgBox.style.backgroundColor = "rgba(67, 44, 158,0.2)";



//heading inside nav
const h1 = document.createElement('h1');
bgBox.appendChild(h1);
h1.innerHTML = "INTRODUCTION PAGE";

//heading inside nav style
h1.style.margin = "16px  70px"
h1.style.textAlign = "LEFT";
h1.style.color = "white";