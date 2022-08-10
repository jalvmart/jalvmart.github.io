  /* 25/07/2022 by JMartinezR */

  const cvID = document.getElementById("contenedorVideo")
  const mvID = document.getElementById("mostrarVideo")
  const bcID = document.getElementById("botonCerrar")
  const bodyTag = document.getElementsByTagName("body")[0]
  
  cvID.style.display = "none"
  
  function crearVideos(enlace) {
      /* contenedor video */    
      cvID.style.display = "flex"
      bodyTag.style.background = "rgba(0, 0, 0, 0.5)"
         
      
      /* mostrar video */
      mvID.attributes.src.value = enlace
      mvID.style.display = "block"    
  
      /* botón cerrar video*/
      bcID.style.display = "block"    
  }
  
  
  function botonCerrar(){
      mvID.attributes.src.value = ""
      cvID.style.display = "none"
      bodyTag.style.background = ""   
  }