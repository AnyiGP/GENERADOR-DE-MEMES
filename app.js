
// const unicoElemento = document.querySelector('#parrafoId2')

// unicoElemento.classList.add('aniadida') // la clase aniadida est'a creada en el css pero no en el html, con classList.add('anidida') que en el css tiene un color de letra azul y un tama;o diferente a los dem'as, le pone ese estilo al #parrafoId2

// //ANIADIR UNA CLASE Y QUITAR OTRA COMO QUE SE MUESTRE TEXTO CUANDO APRIETO BOTON TEXTO Y SE OCULTE IMAGEN, eso lo hago con .remove saco la clase TEXTO y que se vea la otra la de IMAGEN que es igual pero tiene los atributos para modificar de la imagen


// console.log(unicoElemento)

// const quitarClase = document.querySelector('#parrafoId')
// quitarClase.classList.remove('otra') // con .remove saca la clase; con .replace la reemplaza; con .toggle si tiene la clase se la quita y si no la tiene se la agrega => con .toggle QUE SE MUESTRE OSCURO CUANDO ARIETO OSCURO Y CUANDO LO VUELVA A APRETAR SE VEA CLARO.

// console.log(quitarClase)


// //ANIDIR UNA IMAGEN MEDIANTE UNA URL QUE INGRESE EL USUARIO. //agregar imagen, a un DIV vacio del HTML. CREAMOS ELEMENTO DEL HTML, con .createElement('etiquetaDeHtml')

// const img = document.createElement('img')
// img.setAttribute('src', 'url') //'src' es el atributo y la 'url' el valor. 'src' es el atributo que le voy a poner a la variable 'img' 
// img.setAttribute('alt')


// //otra menera seria crear una etiqueta mediante un template string
// const imgQueAgregaElUsuario = //que el usuario ingrese la url en el imput
// const muestraImagenEnElDiv = `<div class='imagenAModificar'> ${imgQueAgregaElUsuario}</div>` 


// //disparar una accion un EVENTO (click) cuando el usuario haga click mediante el HANDLER que es el controlador

// prueba4Boton.addEventListener('click', funcionNombre)

//////////elegir entre texto e imagen//////////

const texto = document.getElementById('texto')
const imagen = document.getElementById('imagen')

const btnImg = document.getElementById('btnImg')
const btnTxt = document.getElementById('btnTxt')

btnImg.addEventListener('click', () => {
  texto.style.display = 'none'
  imagen.style.display = 'block'
})
 
btnTxt.addEventListener('click', () => {
  imagen.style.display = 'none'
  texto.style.display = 'block'
})

//**************BOTON CLARO OSCURO***********/

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
})


//**************modo claro/oscuro**************//

const btnModoOscuro = document.getElementById('btnModoOscuro')
const encabezado = document.getElementById('encabezado')
const vistaMeme = document.getElementById('vistaMeme')
const contenedorBody = document.getElementById('contenedorBody') 
const textoAside = document.getElementById('texto')
const imagenAside = document.getElementById('imagen')
const titulos2 = document.querySelectorAll('h2')
const titulos3 = document.querySelectorAll('h3')
const option = document.querySelectorAll('option')
// const label = document.querySelectorAll('label')
const brilloW = document.getElementById('brilloW')
const opacidadW = document.getElementById('opacidadW')
const contrasteW = document.getElementById('contrasteW')
const desenfoqueW = document.getElementById('desenfoqueW')
const grisesW = document.getElementById('grisesW')
const sepiaW = document.getElementById('sepiaW')
const hueW = document.getElementById('hueW')
const saturadoW = document.getElementById('saturadoW')
const negativoW = document.getElementById('negativoW')


btnModoOscuro.addEventListener('input', () => {
  contenedorBody.classList.toggle('modo-oscuro2')
  encabezado.classList.toggle('modo-oscuro')
  vistaMeme.classList.toggle('modo-oscuro')
  textoAside.classList.toggle('modo-oscuro3')  
  imagenAside.classList.toggle('modo-oscuro3')
  brilloW.classList.toggle('modo-oscuro4')
  opacidadW.classList.toggle('modo-oscuro4')
  contrasteW.classList.toggle('modo-oscuro4')
  desenfoqueW.classList.toggle('modo-oscuro4')
  grisesW.classList.toggle('modo-oscuro4')
  sepiaW.classList.toggle('modo-oscuro4')
  hueW.classList.toggle('modo-oscuro4')
  saturadoW.classList.toggle('modo-oscuro4')
  negativoW.classList.toggle('modo-oscuro4')
  

  for ( let i = 0; i < titulos2.length; i++) {
    titulos2[i].classList.toggle('modo-oscuro4') //lo taigo asi porque es un arreglo
  }

  for ( let i = 0; i < titulos3.length; i++) {
    titulos3[i].classList.toggle('modo-oscuro4')
  }

  for ( let i = 0; i < option; i++) {
    option[i].classList.toggle('modo-oscuro3')
  }
  
  // for ( let i = 0; i < label; i++) {
  //   label[i].classList.toggle('modo-oscuro4')
  // }
  
  
})

//////////escribir en el meme///////////////////

const TopTextInput = document.getElementById('TopTextInput') // traigo el input de donde tomar la info
const BotTextInput = document.getElementById('BotTextInput') // traigo el input de donde tomar la info

TopTextInput.addEventListener('input', (event) => {
    const textoIngresado = event.target.value;  //ESTO ES LO QUE EL USUARIO EST'A ESCRIBIENDO
    renderTopText.innerHTML = textoIngresado;
  })

BotTextInput.addEventListener('input', (event) => {
    const textoIngresado = event.target.value;  //ESTO ES LO QUE EL USUARIO EST'A ESCRIBIENDO
    renderBotText.innerHTML = textoIngresado;
  })


//sacar texto superior cuando el usuario haga click

const btnSinTextoSuperior = document.getElementById('btnSinTextoSuperior')
const renderTopText = document.getElementById('renderTopText')

btnSinTextoSuperior.addEventListener('input', () => {
  renderTopText.classList.toggle('sinTxtSuperior')
  console.log(btnSinTextoSuperior)
}) //funciona pero me lleva todo para arriba


//**************Agregar imagen con url*************//

const urlImagenMeme = document.getElementById('url-img-input') //me traigo lo que el usuario pega en el input
const img = document.getElementById('img') //me traigo el lugar donde quiero que aparezca la imagen

urlImagenMeme.addEventListener('input', () => {
  console.log(urlImagenMeme)
  img.style = `background-image: url(${urlImagenMeme.value})`
  // img.style.backgroundImage = url(`${urlImagenMeme}`)
})

//otra menera seria crear una etiqueta mediante un template string
//************************************
// // const imgQueAgregaElUsuario = //que el usuario ingrese la url en el imput
// const urlImagenMeme = document.getElementById('url-img-input')

// // const muestraImagenEnElDiv = `<div class='imagenAModificar'> ${imgQueAgregaElUsuario}</div>` 
// const muestraImagenEnElDiv = `<div class='img'> ${urlImagenMeme}</div>` 
//**************************************


// const img = getElementById('img')
// img.addEventListener('input', () => {
//   img.style.backgroundImage = url()
// })
//*****************************************
// let urlInput = document.getElementById("url-img-input");
// let img = document.getElementById("img");

// //Cargar imagen url
// const imagenMeme = (e) => {
//   img.style.backgroundImage = "url('" + e.target.value + "')";
// };

// urlInput.addEventListener("change", imagenMeme);
//******************************************** */

// const img = (evento) => {
//   if (evento.target.value.length !== 0) {
//     $('imagenMeme').style.backgroundImage = `url("${evento.value}")`
//   }
// }

//*******ME TRAIGO LA IMAGEN*******//
// const img = document.getElementById('img')

//***************FILTROS*******************//
const pointsBrillo = document.getElementById('pointsBrillo')
const pointsOpacidad = document.getElementById('pointsOpacidad')
const pointsContraste = document.getElementById('pointsContraste')
const pointsDesenfoque = document.getElementById('pointsDesenfoque')
const pointsGrises = document.getElementById('pointsGrises')
const pointsSepia = document.getElementById('pointsSepia');
const pointsHue = document.getElementById('pointsHue');
const pointsSaturado = document.getElementById('pointsSaturado')
const pointsNegativo = document.getElementById('pointsNegativo');

const filter = () => {
  img.style.filter = `
  brightness(${pointsBrillo.value}) 
  opacity(${pointsOpacidad.value}) 
  contrast(${pointsContraste.value}%) 
  blur(${pointsDesenfoque.value}px) 
  grayscale(${pointsGrises.value}%) 
  sepia(${pointsSepia.value}%) 
  hue-rotate(${pointsHue.value}deg) 
  saturate(${pointsSaturado.value}%) 
  invert(${pointsNegativo.value})`;
};

pointsBrillo.addEventListener('input', filter)
pointsOpacidad.addEventListener('input', filter)
pointsContraste.addEventListener('input', filter)
pointsDesenfoque.addEventListener('input', filter)
pointsGrises.addEventListener('input', filter)
pointsSepia.addEventListener('input', filter)
pointsHue.addEventListener('input', filter)
pointsSaturado.addEventListener('input', filter)
pointsNegativo.addEventListener('input', filter)


//*****************btn reestablecer filtros

const restablecer = (event) => {
  event.preventDefault()
  img.style.filter = `brightness(1)`;
  img.style.filter = `opacity(1)`;
  img.style.filter = `contrast(100)`;
  img.style.filter = `blur(0)`;
  img.style.filter = `grayscale(0)`;
  img.style.filter = `sepia(0)`;
  img.style.filter = `saturate(0)`;
  img.style.filter = `saturate(100)`;
  img.style.filter = `invert(0)`;
}

const btnReestablecerFiltros = document.getElementById('btnReestablecerFiltros') 
btnReestablecerFiltros.addEventListener('click', (event) => {restablecer(event)}) 

//como hago para que las bolitas me vuelvan al valor inicial?
pointsBrillo.value = 1;
pointsOpacidad.value = 1;
pointsContraste.value = 100;
pointsDesenfoque.value = 0;
pointsGrises.value = 0;
pointsSepia.value = 0;
pointsHue.value = 0;
pointsSaturado.value = 100;
pointsNegativo.value = 0;

// })


//**********FONDO TRANSPARENTE**********//

// const fondoTransCheck = document.getElementById("fondoTransCheck");

// fondoTransCheck.addEventListener("click", () => {
//   if (fondoTransCheck.checked) {
//     textoFondoTM.classList.add("fondoTrans");
//     textoFondoBM.classList.add("fondoTrans");
//   } else {
//     textoFondoTM.classList.remove("fondoTrans");
//     textoFondoBM.classList.remove("fondoTrans");
//   }
//   // textoFondoTM.classList.toggle("fondoTrans");
//   //textoFondoBM.classList.toggle("fondoTrans");
// });
