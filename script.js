let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')
let inicioDaPag = document.getElementById('inicioPag')

btnMenu.addEventListener('click', ()=>{
  menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
  menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
  menu.classList.remove('abrir-menu')
})

/*SOM DA IMAGEM FINAL DO SITE*/ 
function playSound() {
    var audio = document.getElementById("myAudio");
    audio.play();
  }
/*FIM SOM DA IMAGEM FINAL DO SITE*/