const geraCorAleatoria = () => {
    let caracteresCores = '0123456789ABCDEF';
    let cor = '#';

    for (let index = 0; index < 6; index += 1) {
        cor += caracteresCores[Math.floor(Math.random() * 16)];
    };
    return cor;
}
const atualizaCorPaleta = ()=> {
    const cor2 = document.querySelector('#color2');
    const cor3 = document.querySelector('#color3');
    const cor4 = document.querySelector('#color4');

    cor2.style.backgroundColor = geraCorAleatoria();
    cor3.style.backgroundColor = geraCorAleatoria();
    cor4.style.backgroundColor = geraCorAleatoria();
};
atualizaCorPaleta()

const buttonRadomColor = document.querySelector('#button-random-color');
buttonRadomColor.addEventListener('click', atualizaCorPaleta);
