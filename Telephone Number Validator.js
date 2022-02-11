function telephoneCheck(str) {

    let contador = 0;
      for(let i = 0; i < str.length ; i++){
        if (str[0] == "-"){
          return false
        }
        if(str[0] == "(" && str[str.length-1] == ")"){
          return false
        } if(str[i] == "-"){
        contador++;
        if(contador > 2){
          return false
        }
      } 
      }
    
    let numeros = str.replace(/\-|\s|/g,"")
    
    console.log(numeros)
      
    if(numeros.indexOf("(") > numeros.indexOf(")") ||
           numeros.indexOf("(") == -1 && numeros.indexOf(")") >= 0 ) {
          console.log("parentesis incorrectos")
          return false
        } 
    
    for(let i = 0; i < numeros.length; i++){
      if(numeros[i] == "?"){
        console.log("/W")
        return false
      }
    }
    numeros = numeros.replace(/\W/g,"");
        
    console.log(numeros, "numeros w")
    
      if(numeros.length == 11 && numeros[0] != 1){
        console.log("mayor a 10 y no empieza con 1")
        return false
      }  
    
      if(numeros.length < 10 || numeros.length > 11){
        console.log("falso numero muy chico o muy grande")
        return false
      } 
    
      return true
    
    }
    
    let result = telephoneCheck("1 555-555-5555");
    console.log(result);