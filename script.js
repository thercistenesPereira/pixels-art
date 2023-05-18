
const geraCorAleatoria = () => {
    let caracteresCores = '0123456789ABCDEF';
    let cor = '#';

    const coresPaleta = recuperaDado();

    do {
        cor = '#'
        for (let index = 0; index < 6; index += 1) {
            cor += caracteresCores[Math.floor(Math.random() * 16)];
        }
    } while (coresPaleta.includes(cor) || corJaExiste(cor));

    return cor;
}

const corJaExiste = (cor) => {
    const pixels = document.querySelectorAll('.pixel');

    for (const pixel of pixels) {
        if (pixel.style.backgroundColor === cor) {
            return true
        }
    }
    return false;
}

const atualizaCorPaleta = () => {
    const cor2 = document.querySelector('#color2');
    const cor3 = document.querySelector('#color3');
    const cor4 = document.querySelector('#color4');

    const coresPaleta = [];
    coresPaleta.push(cor2.style.backgroundColor);
    coresPaleta.push(cor3.style.backgroundColor);
    coresPaleta.push(cor4.style.backgroundColor);

    cor2.style.backgroundColor = geraCorAleatoria();
    cor3.style.backgroundColor = geraCorAleatoria();
    cor4.style.backgroundColor = geraCorAleatoria();

    localStorage.setItem('cor2', JSON.stringify(cor2.style.backgroundColor));
    localStorage.setItem('cor3', JSON.stringify(cor3.style.backgroundColor));
    localStorage.setItem('cor4', JSON.stringify(cor4.style.backgroundColor));
};

const recuperaDado = () => {
    const cor2 = JSON.parse(localStorage.getItem('cor2'));
    const cor3 = JSON.parse(localStorage.getItem('cor3'));
    const cor4 = JSON.parse(localStorage.getItem('cor4'));

    return { cor2, cor3, cor4 }
};


const buttonRadomColor = document.querySelector('#button-random-color');
buttonRadomColor.addEventListener('click', () => {
    atualizaCorPaleta();
    const { cor2, cor3, cor4 } = recuperaDado();
    const paletaCores = [cor2, cor3, cor4];

    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
        pixel.addEventListener('click', () => {
            const corSelecionada = paletaCores[Math.floor(Math.random() * paletaCores.length)];
            pixel.style.backgroundColor = corSelecionada;
        })
    })
});

const pixelBoard = document.querySelector('#pixel-board');
for (let j = 0; j < 25; j++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.style.backgroundColor = "white";
    pixelBoard.appendChild(pixel);
}

window.onload = () => {
};
