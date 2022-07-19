
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

//********BTN CERRAR TEXTO************/
 const btnCerrarTexto = document.getElementById('btnCerrarTexto')
 
 btnCerrarTexto.addEventListener('click', (e) => {
    texto.style.display = 'none'
})

//********BTN CERRAR IMAGEN************/
const btnCerrarImagen = document.getElementById('btnCerrarImagen')
 
btnCerrarImagen.addEventListener('click', (e) => {
   imagen.style.display = 'none'
})

//**************BOTON CLARO OSCURO***********/
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
})

//**************MODO CLARO/OSCURO**************//
const btnModoOscuro = document.getElementById('btnModoOscuro')
const encabezado = document.getElementById('encabezado')
const vistaMeme = document.getElementById('vistaMeme')
const contenedorBody = document.getElementById('contenedorBody') 
const textoAside = document.getElementById('texto')
const imagenAside = document.getElementById('imagen')
const titulos2 = document.querySelectorAll('h2')
const titulos3 = document.querySelectorAll('h3')
const option = document.querySelectorAll('option')
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
    titulos2[i].classList.toggle('modo-oscuro4')
  }

  for ( let i = 0; i < titulos3.length; i++) {
    titulos3[i].classList.toggle('modo-oscuro4')
  }

  for ( let i = 0; i < option; i++) {
    option[i].classList.toggle('modo-oscuro3')
  }
})

//**************ESCRIBIR TEXTO**************//
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

//**************SACAR TEXTO SUPERIOR**************//
const btnSinTextoSuperior = document.getElementById('btnSinTextoSuperior')
const renderTopText = document.getElementById('renderTopText')

btnSinTextoSuperior.addEventListener('input', () => {
  renderTopText.classList.toggle('sinTxtSuperior')
  console.log(btnSinTextoSuperior)
  img.classList.toggle('contenedor')
}) 

//**************SACAR TEXTO INFERIOR**************//
const btnSinTextoInferior = document.getElementById('btnSinTextoInferior')
const renderBotText = document.getElementById('renderBotText')

btnSinTextoInferior.addEventListener('input', () => {
  renderBotText.classList.toggle('sinTxtInferior')
  console.log(btnSinTextoInferior)
  img.classList.toggle('contenedor')
}) 

//!!!!funciona pero me arrastra todo para arriba cuando aprieto las 2 opciones debe ser por el div de absolute

//**************AGREGAR IMAGEN CON URL**************//
const urlImagenMeme = document.getElementById('url-img-input')
const img = document.getElementById('img')

urlImagenMeme.addEventListener('input', () => {
  console.log(urlImagenMeme)
  img.style = `background-image: url(${urlImagenMeme.value})`
})

//***************FILTROS***************//
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


//***************BTN RESTABLECER FILTROS***************//
const restablecer = (e) => {
  e.preventDefault()
  img.style.filter = `brightness(1)`;
  img.style.filter = `opacity(1)`;
  img.style.filter = `contrast(100)`;
  img.style.filter = `blur(0)`;
  img.style.filter = `grayscale(0)`;
  img.style.filter = `sepia(0)`;
  img.style.filter = `saturate(0)`;
  img.style.filter = `saturate(100)`;
  img.style.filter = `invert(0)`;

  pointsBrillo.value = 1;
  pointsOpacidad.value = 1;
  pointsContraste.value = 100;
  pointsDesenfoque.value = 0;
  pointsGrises.value = 0;
  pointsSepia.value = 0;
  pointsHue.value = 0;
  pointsSaturado.value = 100;
  pointsNegativo.value = 0;
}

const btnRestablecerFiltros = document.getElementById('btnRestablecerFiltros') 
btnRestablecerFiltros.addEventListener('click', (e) => {restablecer(e)}) 

//***************COLOR FONDO IMAGEN***************//
const inputColorFondoImagen = document.getElementById('inputColorFondoImagen')

inputColorFondoImagen.addEventListener('input', (e) => {
  img.style.backgroundColor = e.target.value
})


//**********MEZCLADOR DE FONDO E IMAGEN **********// DEBE FUNCIONAR COMO LOS FILTROS DE MAS ARRIBA
// // PRIMER INTENTO NF
// const mezclador = document.getElementById('mezclador')

// mezclador.addEventListener('select', (e) => {
//   //cuando seleccione una opcion imprima la mezcla en la imagen
//   img.style.backgroundBlendMode = e.target.value
  
//   //`nombreDelFiltro(${variable.value})`
//   // `
//   // normal(${value})
//   // lighten(${})
//   // `
// })

//SEGUNDO INTENTO CON EJ DE MOZZILA
document.getElementById('mezclador').onchange = function(e) {
  document.getElementById('img').style.backgroundBlendMode = document.getElementById('mezclador').selectedOptions[0].innerHTML
}

console.log(document.getElementById('img'));

// mezclador.addEventListener('select', (e) => {
//   //cuando seleccione una opcion imprima la mezcla en la imagen
//   img.style.backgroundBlendMode = e.target.value
  
//   //`nombreDelFiltro(${variable.value})`
//   // `
//   // normal(${value})
//   // lighten(${})
//   // `
// })

// //**********ej mozzila
// document.getElementById("select").onchange = function(event) {
//   document.getElementById("div").style.backgroundBlendMode = document.getElementById("select").selectedOptions[0].innerHTML;
// }
// console.log(document.getElementById('div'));

//***************COLOR FUENTE***************//
const inputColorFuente = document.getElementById('inputColorFuente')
const inputColorFondo = document.getElementById('inputColorFondo')

inputColorFuente.addEventListener('input', (e) => {
  renderTopText.style.color = e.target.value
  renderBotText.style.color = e.target.value
})

//***************COLOR FONDO FUENTE***************//
inputColorFondo.addEventListener('input', (e) => {
  renderTopText.style.backgroundColor = e.target.value
  renderBotText.style.backgroundColor = e.target.value
})
///!!!!INVESTIGAR COMO HACER QUE ME IMPRIMA EL NUMERO DE COLOR

//***************FONDO TRANSPARENTE***************//
 const inputFondoTransparente = document.getElementById('fondoTransparente')

 inputFondoTransparente.classList.toggle('transparente')

 inputFondoTransparente.addEventListener('input', () => {
  renderBotText.classList.toggle('transparente')
  renderTopText.classList.toggle('transparente')
  img.classList.toggle('contenedorTotal')
  img.classList.toggle('transparente')
}) 

//***************ELEGIR TIPO DE FUENTE***************//
const selectEstiloFuente = document.getElementById('selectEstiloFuente') 

selectEstiloFuente.addEventListener('change', (e) => {
  renderBotText.style.fontFamily = e.target.value
  renderTopText.style.fontFamily = e.target.value
})

//***************ELEGIR TAMANIO DE FUENTE***************//
const tamanioFuente = document.getElementById('tamanioFuente')

tamanioFuente.addEventListener('input', (e) => {
  renderTopText.style.fontSize = `${e.target.value}px`
  renderBotText.style.fontSize = `${e.target.value}px`
})

//***************ALINEADO DE TEXTO NF***************//
const alineadoTexto = document.getElementById('alineadoTexto')
const alineadoDerecha = document.getElementById('alineadoDerecha')
const alineadoIzquierda = document.getElementById('alineadoIzquierda')
const alineadoCentro = document.getElementById('alineadoCentro')

alineadoDerecha.addEventListener('click', () => {
  // renderTopText.style.alignItems = 'flex-end'
  // console.log(alineadoDerecha)
  // renderTopText.style.textAlign = 'right' //NO FUNCIONA!!!
  renderTopText.classList.add('alineadoDerecha')
}) // ver si lo que lo contiene tiene lugar para que se mueva a la derecha o a la izquierda

alineadoIzquierda.addEventListener('click', () => {
  // renderTopText.style.alignItems = 'flex-end'
  // console.log(alineadoIzquierda)
  // renderTopText.style.textAlign = 'right' //NO FUNCIONA!!!
  renderTopText.classList.add('alineadoIzquierda')
})


//***************CONTORNO DE TEXTO***************//
const ningunContorno = document.getElementById('ningunContorno')
const contornoClaro = document.getElementById('contornoClaro')
const contornoOscuro = document.getElementById('contornoOscuro')

ningunContorno.addEventListener('click', () => {
  renderTopText.style.textShadow = 'none'
  renderBotText.style.textShadow = 'none'
})

contornoClaro.addEventListener('click', () => {
  renderTopText.style.textShadow = 'white 2px 2px, white -2px 2px, white 2px -2px, white -2px -2px'
  renderBotText.style.textShadow = 'white 2px 2px, white -2px 2px, white 2px -2px, white -2px -2px'
})

contornoOscuro.addEventListener('click', () => {
  renderTopText.style.textShadow = 'black 2px 2px, black -2px 2px, black 2px -2px, black -2px -2px'
  renderBotText.style.textShadow = 'black 2px 2px, black -2px 2px, black 2px -2px, black -2px -2px'
})

//***************ESPACIADO DE TEXTO NF***************//
const espaciado = document.getElementById('espaciado')

espaciado.addEventListener('input', (e) => {
  console.log(espaciado)
  renderTopText.style.padding = `${e.target.value}px`
  renderBotText.style.padding = `${e.target.value}px`
})

//***************INTERLINEADO DE TEXTO NF***************//
const interlineado = document.getElementById('interlineado')

interlineado.addEventListener('select', (e) => {
  console.log(interlineado)
  renderTopText.style.lineHeight = `${e.target.value}px`
  renderBotText.style.lineHeight = `${e.target.value}px`
})

//***************DESCARGAR MEME***************//

const btnDescargarMeme = document.getElementById('btnDescargarMeme')

btnDescargarMeme.addEventListener('click', () => 
  domtoimage.toBlob(document.getElementById('vistaMeme')).then((blob) => saveAs(blob, 'mi-meme.png')))