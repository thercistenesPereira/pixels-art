window.onload = ()=> {
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
    atualizaCorPaleta()

    const buttonRadomColor = document.querySelector('#button-random-color');
    buttonRadomColor.addEventListener('click', atualizaCorPaleta);

    const initialize = ()=> {
        let getCor2 = localStorage.getItem('cor2');    
    }
    initialize()
}

const pixelBoard = document.querySelector('#pixel-board');

for (let index = 0; index < 5; index += 1) {
    const linha = document.createElement("div");
    linha.classList.add("linha");
    
    for (let j = 0; j < 5; j++) {
      const pixel = document.createElement("div");
      pixel.classList.add("pixel");
      pixel.style.backgroundColor = "white";
      linha.appendChild(pixel);
    }
    
    pixelBoard.appendChild(linha);
}

