const getValueInput = () =>{
      let inputValue = document.getElementById("nump").value; 
      let inputprimo = document.getElementById("nump").value;
      var numero = parseInt(inputValue);
      var primo = parseInt(inputprimo);
      
      console.log(numero);
      for (i=2; i<numero; i++) {
        
          if (i!=2  && i%2==0) {
          document.getElementById("valueInput").innerHTML = inputValue;
          document.getElementById("valprimo").innerHTML = "el numero "+i+" "+'no es primo';
        }else document.getElementById("valprimo").innerHTML = "el numero "+i+" "+'es primo';
        
      }
    }