window.addEventListener("load",function(){
    /* animation on scroll  */
    AOS.init();
})
/*   toggle navbar   */
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle("active")
    document.querySelector(".nav").classList.toggle("open");
}
/*  close nav clicking on a nav item  */
document.addEventListener("click", function(e){
    if(e.target.closest(".nav-item")){
        toggleNav();
    }
});
/*dark theme */
var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "images/moon.png";
    }else{
        icon.src = "images/sun.png";
    };
};


/*  sticky header  */
window.addEventListener("scroll", function(){
    if(this.pageYOffset > 60){
        document.querySelector(".header").classList.add("sticky");
    }else{
        document.querySelector(".header").classList.remove("sticky");
    }
});
/* menu tabs */
const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click", function(e){
    if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")){
        const target = e.target.getAttribute("data-target");
        menuTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const menuSection = document.querySelector(".menu-section");
        menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
        menuSection.querySelector(target).classList.add("active");
    }
});
/*  slider  */
var index = 1;
showSlide(index);
function plusSlide(n){
    showSlide(index = index + n);
}
function currentSlide(n){
    showSlide(index=n);
}
function showSlide(n){
    var i;
    var slide = document.getElementsByClassName("slider");
    var dots = document.getElementsByClassName("dot")
    if(n<1){
        index = slide.length;
    }
    if(n>slide.length){
        index = 1
    }
    for(i=0;i<slide.length;i++){
        slide[i].style.display="none";
    }
    for(i=0;i<dots.length;i++){
        dots[i].className = dots[i].className.replace(" active","");
    }
    slide[index-1].style.display="block";
    dots[index-1].className += " active";
}