
    const geraCorAleatoria = () => {
        let caracteresCores = '0123456789ABCDEF';
        let cor = '#';

        for (let index = 0; index < 6; index += 1) {
            cor += caracteresCores[Math.floor(Math.random() * 16)];
        }
        return cor;   
    }
    const atualizaCorPaleta = ()=> {
        const cor2 = document.querySelector('#color2');
        const cor3 = document.querySelector('#color3');
        const cor4 = document.querySelector('#color4');

        cor2.style.backgroundColor = geraCorAleatoria();
        cor3.style.backgroundColor = geraCorAleatoria();
        cor4.style.backgroundColor = geraCorAleatoria();
        
        localStorage.setItem('cor2', JSON.stringify(cor2.style.backgroundColor));
        localStorage.setItem('cor3', JSON.stringify(cor3.style.backgroundColor));
        localStorage.setItem('cor4', JSON.stringify(cor4.style.backgroundColor));  
    };
        
const recuperaDado = ()=> {
    const cor2 = JSON.parse(localStorage.getItem('cor2'));
    const cor3 = JSON.parse(localStorage.getItem('cor3'));
    const cor4 = JSON.parse(localStorage.getItem('cor4'));
}
    recuperaDado()
    atualizaCorPaleta()

    const buttonRadomColor = document.querySelector('#button-random-color');
    buttonRadomColor.addEventListener('click', atualizaCorPaleta);

const pixelBoard = document.querySelector('#pixel-board');    
    for (let j = 0; j < 25; j++) {
      const pixel = document.createElement("div");
      pixel.classList.add("pixel");
      pixel.style.backgroundColor = "white";
      pixelBoard.appendChild(pixel);
    }

const corSelecionada = ()=> {
    const paleta = document.querySelectorAll('.color');

    for(let index = 0; index < paleta.length; index += 1) {
        paleta[index].classList.remove('selected');
    }

    let corClicada = event.target;
    corClicada.classList.add('selected');
}

const corInicialSelecionada = document.querySelector('.color');
corInicialSelecionada.classList.add('selected');

const paleta = document.querySelector('#color-palette');
paleta.addEventListener('click', corSelecionada);

    
window.onload = ()=> {   
};
