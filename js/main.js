var btn = document.querySelector('.m');
var sec = document.querySelector('nav');


btn.onclick = function(){
    sec.classList.toggle('show');
}
var btnn = document.querySelector('.wond');
var secc = document.querySelector('#lorem');
btnn.onclick = function(){
    secc.src = 'http://127.0.0.1:5500/index.html#lorem';
}
var btn = document.querySelector('#b1');
var seccc = document.querySelector('body');


btn.onclick = function(){
    seccc.style.background = 'black';
}
var btn = document.querySelector('#b2');
var secc = document.querySelector('body');


btn.onclick = function(){
    secc.style.background = 'white';
}