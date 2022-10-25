
let slider = document.getElementById('slider'); //Obtener el slider contenedor
let itemSlider = document.querySelectorAll('.items-slider'); //obtener los items del slider
let navItemsSlider = document.querySelectorAll('.nav-slider'); //obtener los items de la navegacion slider


let widthSlider = `${itemSlider.length*100}`; 
slider.style.width = widthSlider+'%'; //Ancho del contenedor en funcion a los items del slider


for (let i = 0; i < navItemsSlider.length; i++) {
   navItemsSlider[i].setAttribute('id', `slide-${i}`); //Agregar a cada nav-slider in id
   if (i == 0) {
      navItemsSlider[i].classList.toggle('nav-slider--active'); //Agregar el active desde el inicio
   }
   navItemsSlider[i].addEventListener('click', (e)=> { //Evento al pulsar en la navegacion
      slideItems(e.target.id.slice(-1));
   });
}


let time = 8000; //Intervalos de tiempo para el contador
const startInterval = ()=> setInterval(counter, time);
startInterval(); //Inicial el contador


let active = true;
slider.addEventListener('mouseover', ()=> {if (active) active = false;});
slider.addEventListener('mouseout', ()=> {if (!active) active = true;});

let cont = 0; //Contador de items del slider
function counter() { //Funcion que cambiar los items
   if (active == true) {
      cont++;
      if(cont >= itemSlider.length) cont = 0;
      setInterval(slideItems(cont), time);
      setInterval(slideActive(cont), time);
   }
}

function slideItems(id) {
   if (active == true) {
      cont = id;
      slideActive(id);
   }
   slider.style.left = `-${id}00%`;
}

function slideActive(id) {
   for (const item in navItemsSlider) {
      if (item < navItemsSlider.length) {
         if (navItemsSlider[item].id == 'slide-'+id) {
            document.getElementById(navItemsSlider[item].id).classList.add('nav-slider--active');
         } else {
            document.getElementById(navItemsSlider[item].id).classList.remove('nav-slider--active');
         }
      }
   }
}
