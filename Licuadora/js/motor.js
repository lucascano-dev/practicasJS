let estadoLicuadora = "apagado";
let sonidoLicuadora = document.getElementById('blender-sound');
let sonidoBotonLicuadora = document.getElementById('blender-button-sound');
let licuadora = document.getElementById('blender');

const controlarLicuadora = () => {
  if (estadoLicuadora == "apagado") {
    estadoLicuadora = "encendido";
    licuadora.classList.add('active');
    hacerRuido();
    console.log('me prendiste')
  } else {
    estadoLicuadora = 'apagado';
    licuadora.classList.remove('active');
    hacerRuido()
    console.log('me apagaste')
  }
}

const hacerRuido = () => {
  if (sonidoLicuadora.paused) {
    sonidoLicuadora.play();
    sonidoBotonLicuadora.play()
    sonidoLicuadora.loop = true;
  } else {
    sonidoBotonLicuadora.play();
    sonidoLicuadora.pause();
    sonidoLicuadora.loop = false;
    sonidoLicuadora.currenTime = 0; //reseteo a 0 el tiempo del sonido de la licuadora
  }
}