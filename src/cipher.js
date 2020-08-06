  const cipher = {
    cifrado: (valueDesplazamiento,valueTexto) => {
  if (typeof valueTexto != "string" || typeof valueDesplazamiento != "number"){
    throw new TypeError();
  }
      let nuevoString=""
        for (let i = 0; i < valueTexto.length; i++) {
          const letraAsc =valueTexto.charCodeAt(i);
          // Mayusculas
          if(letraAsc >= 65 && letraAsc<= 90){
            nuevoString += String.fromCharCode(((letraAsc-65+valueDesplazamiento)%26)+65);
          } 
          // Minusculas
          else if (letraAsc>=97 && letraAsc<=122){
            nuevoString += String.fromCharCode(((letraAsc-97+valueDesplazamiento)%26)+97);
          }
          // Numeros
          else if (letraAsc>=48 && letraAsc<=57){
            nuevoString += String.fromCharCode(((letraAsc-48+valueDesplazamiento)%10)+48);
          // Espacios
          } else {
            nuevoString += valueTexto[i];
          }
      }
      // console.log(nuevoString);
      return nuevoString;
    },
 
    descifrar: (valueDesplazamiento,valueTexto) => {
      if (typeof valueTexto != "string" || typeof valueDesplazamiento != "number"){
        throw new TypeError();
      }
      let nuevoString=""
      for (let i = 0; i < valueTexto.length; i+=1) {
        const letraAsc =valueTexto.charCodeAt(i);
        // Mayusculas
        if(letraAsc >= 65 && letraAsc<= 90){
          nuevoString += String.fromCharCode(((letraAsc - 90 - valueDesplazamiento)%26)+90);
        } 
        // Minusculas
        else if (letraAsc>=97 && letraAsc<=122){
          nuevoString += String.fromCharCode(((letraAsc - 122 - valueDesplazamiento)%26)+122);
        }
        // Numeros
        else if (letraAsc>=48 && letraAsc<=57){
          nuevoString += String.fromCharCode(((letraAsc - 57 - valueDesplazamiento)%10)+57);
        // Espacios
        } else {
          nuevoString += valueTexto[i];
        }
    }
    // console.log(nuevoString);
    return nuevoString;
    }


};

export default cipher;
