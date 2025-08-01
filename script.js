const imgs = ["Screenshot_2.png", "Screenshot_3.png", "Screenshot_4.png"];
let index = 0;
function mostrar(){
    document.getElementById('sorpresa').innerHTML = "Te amo mucho ❤❤❤❤";
     document.getElementById('sorpresa').style.opacity = "100%"
    document.querySelector("img").src = imgs[0];
    document.querySelector("img").style.opacity="100%"
    document.querySelector(".botones-carrusel").style.opacity="100%";
    document.querySelector(".a").style.height = "auto";
}
function toggle(){
    index = (index+1) % imgs.length;
    document.querySelector("img").setAttribute("src",imgs[index]);
}
function toggleAtras(){
    index = (index - 1 + imgs.length) % imgs.length
    document.querySelector("img").src = imgs[index];
}