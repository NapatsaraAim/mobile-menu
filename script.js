//Skapa ref till HTML-taggar
let menuIcon = document.querySelector('#js-menu-toggle');
let menuList = document.querySelector('#js-menu');

//Lägga på en lyssnare på menuIcon som lyssnar efter click 
menuIcon.addEventListener('click',function(){
    //Vad ska hända när jag klickar? 
    console.log('click på icon');
    //lägger på en class på menu-list vid click
    menuList.classList.toggle('active');
    menuIcon.classList.toggle('exit');
});