import cipher from './cipher.js';

//  console.log(cipher);

const btnCifrar = document.getElementById("cifrar");
const btnDesCifrar = document.getElementById("descifrar");
const btnCifrar1 = document.getElementById("cifrar1");
const btnDesCifrar1 = document.getElementById("descifrar1");
const btnStart= document.getElementById("start");
const btnStart1=document.getElementById("start1");
const btnVolver=document.getElementById("volver");
const btnVolver1=document.getElementById("volver1");
const pagina1=document.getElementById("pagina1");
const pagina2=document.getElementById("pagina2");
const pagina3=document.getElementById("pagina3");

btnStart.addEventListener("click",function(){
  pagina1.style.display="none";
  pagina2.style.display="block";
})

btnVolver.addEventListener("click",function(){
  pagina2.style.display="none";
  pagina1.style.display="flex";
})

btnStart1.addEventListener("click",function(){
  pagina1.style.display="none";
  pagina3.style.display="block";
})
btnVolver1.addEventListener("click",function(){
  pagina3.style.display="none";
  pagina1.style.display="flex";
})

function onClickBtnCifrar(idTexto,idTextoRespuesta,idDesplazamiento) {
// console.log("cifrar");
    const valueTexto = document.getElementById(idTexto).value;
    const valueDesplazamiento = parseInt(document.getElementById(idDesplazamiento).value);
      // console.log(valueTexto,valueDesplazamiento);
    const cifradoCompleto = cipher.cifrado(valueDesplazamiento,valueTexto);
    document.getElementById(idTextoRespuesta).value=cifradoCompleto;
}

btnCifrar.addEventListener("click",() => onClickBtnCifrar("texto", "textoRespuesta","desplazamiento"));
btnCifrar1.addEventListener("click",() => onClickBtnCifrar("texto1", "textoRespuesta1","desplazamiento1"));
    
           
function onClickBtnDesCifrar(idTexto,idTextoRespuesta,idDesplazamiento) {
//  console.log("descifrar");
   const valueTexto = document.getElementById(idTexto).value;
   const valueDesplazamiento = parseInt(document.getElementById(idDesplazamiento).value);
    //  console.log(valueTexto,valueDesplazamiento);
   const desCifradoCompleto = cipher.descifrar(valueDesplazamiento,valueTexto);
   document.getElementById(idTextoRespuesta).value=desCifradoCompleto;
}
 
btnDesCifrar.addEventListener("click", () => onClickBtnDesCifrar("texto", "textoRespuesta","desplazamiento"));
btnDesCifrar1.addEventListener("click", () => onClickBtnDesCifrar("texto1", "textoRespuesta1","desplazamiento1"));


         
// console.log(cipher);


