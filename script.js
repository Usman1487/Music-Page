let nav_List = document.querySelector('.nav-list');
let menu_Icon = document.querySelector('#menu-icon');

menu_Icon.onclick = () => {
    menu_Icon.classList.toggle('bx-x');     // Toggle icon style
    nav_List.classList.toggle('active');    // Toggle nav visibility
};



const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 4000,
    delay: 300,

})

sr.reveal('.hero-content')
sr.reveal('.right-cont', { origin: 'right' })
sr.reveal('.logo, .nav-list', { origin: 'top' })




let mySong = document.querySelector("#mySong");
let icon = document.querySelector("#icon");

icon.onclick = function () {
    if (mySong.paused) {
        mySong.play();
        icon.src = "images/pause.png";
    } else {
        mySong.pause();
        icon.src = "images/play.png";
    }
}


















