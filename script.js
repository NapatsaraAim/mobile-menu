//SKapa ref till HTML-taggar
let menuIcon = document.querySelector('#js-menu-toggle');
let menuList = document.querySelector('#js-menu');

//Lägga på en lyssanare på menuIconn
menuIcon.addEventListener('click', function(){
//vad händer när jag clickar
console.log('click på icon')
menuList.classList.toggle('active');
menuIcon.classList.toggle('exit');
})