let estadoLicuadora = "apagada";
let sonidoLicuadora = document.getElementById('blender-sound');
let botonLicuadora = document.getElementById('blender-button-sound');
let licuadora = document.getElementById('blender');

controlaLicuadora = () => {
    if (estadoLicuadora == 'apagada') {
        estadoLicuadora = 'encendida';
        licuadora.classList.add("active");
        sonidoDeLicuadora();
        console.log('se ha encendido');
    } else {
        estadoLicuadora = 'apagada';
        licuadora.classList.remove("active");
        sonidoDeLicuadora();
        console.log('se ha apagado');
    }
};

sonidoDeLicuadora = () => {
    if(sonidoLicuadora.paused){
        botonLicuadora.play();
        sonidoLicuadora.play();
      } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0; /* Reinicia el audio al segundo 0 */
      }
}