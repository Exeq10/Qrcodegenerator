// Esta función será llamada cuando se haga clic en el botón
const createQRCode = () => {
  // Obtén una referencia al elemento donde quieres mostrar el código QR
  /* variables */
  const container = document.getElementById('contenedor')
  const url = document.getElementById("url").value;
  const colorBg = document.getElementById("bg-color").value;
  const colorfront = document.getElementById("front-color").value;
  const msg = document.getElementById('msg')

 
  var el = document.getElementById("qrcode");


 

  el.innerHTML = ``;
  


    if(url) {

         // Crea un nuevo objeto QRCode con el texto que quieres codificar
  var qr = new QRCode(el, {
    text: `${url}`,
    width: 350,
    height: 350,
    colorDark: `${colorfront || "#00000"} `,
    colorLight: `${colorBg || "#ffff"}   `,
    correctLevel: QRCode.CorrectLevel.H,
  });


  const botonExistente = document.getElementById('Download');

// Si existe, elimina el botón existente
if (botonExistente) {
  botonExistente.parentNode.removeChild(botonExistente);
}

  const button = document.createElement('button')
  button.textContent = 'Descargar QR'
  button.id ='Download'
  button.addEventListener('click', download)


  

  container.appendChild(button)




 
    }



    else{

        msg.textContent = 'Debe ingresar una url '

        setTimeout(() => {
            
            msg.textContent = ''
        }, 1500);
    }



};


const download = () => {


        const elemento = document.getElementById('qrcode');
  
        html2canvas(elemento).then(canvas => {
          // Crea un elemento <a> para descargar la imagen
          const enlace = document.createElement('a');
          enlace.download = 'codigoQr.png';
  
          // Convierte el canvas a una imagen y establece el atributo href del enlace
          enlace.href = canvas.toDataURL('image/png');
  
          // Simula un clic en el enlace para iniciar la descarga
          enlace.click();
        });
      }
    
