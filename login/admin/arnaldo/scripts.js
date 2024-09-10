function calcularSoma() {
    const mario = parseFloat(document.getElementById('num1').value) || 0;
    const luigi = parseFloat(document.getElementById('num2').value) || 0;
    const peach = parseFloat(document.getElementById('num3').value) || 0;
    const bowser = parseFloat(document.getElementById('num4').value) || 0;
    const yoshi = parseFloat(document.getElementById('num5').value) || 0;
    const toad = parseFloat(document.getElementById('num6').value) || 0;
    const donkeyKong = parseFloat(document.getElementById('num7').value) || 0;
    const link = parseFloat(document.getElementById('num8').value) || 0;
    const zelda = parseFloat(document.getElementById('num9').value) || 0;
    const samus = parseFloat(document.getElementById('num10').value) || 0;
    const kirby = parseFloat(document.getElementById('num11').value) || 0;
    const fox = parseFloat(document.getElementById('num12').value) || 0;
    const pikachu = parseFloat(document.getElementById('num13').value) || 0;
    const jigglypuff = parseFloat(document.getElementById('num14').value) || 0;
    const somaPersonagens = mario + luigi + peach + bowser + yoshi + toad + donkeyKong + link + zelda + samus + kirby + fox + pikachu + jigglypuff;

    // Atualiza o resultado na página
    document.getElementById('resultado').textContent = somaPersonagens;

    // Salva os valores no localStorage
    localStorage.setItem('mario', mario);
    localStorage.setItem('luigi', luigi);
    localStorage.setItem('peach', peach);
    localStorage.setItem('bowser', bowser);
    localStorage.setItem('yoshi', yoshi);
    localStorage.setItem('toad', toad);
    localStorage.setItem('donkeyKong', donkeyKong);
    localStorage.setItem('link', link);
    localStorage.setItem('zelda', zelda);
    localStorage.setItem('samus', samus);
    localStorage.setItem('kirby', kirby);
    localStorage.setItem('fox', fox);
    localStorage.setItem('pikachu', pikachu);
    localStorage.setItem('jigglypuff', jigglypuff);
    localStorage.setItem('somaPersonagens', somaPersonagens);
}

function carregarValores() {
    // Carrega os valores salvos no localStorage
    const mario = localStorage.getItem('mario') || 0;
    const luigi = localStorage.getItem('luigi') || 0;
    const peach = localStorage.getItem('peach') || 0;
    const bowser = localStorage.getItem('bowser') || 0;
    const yoshi = localStorage.getItem('yoshi') || 0;
    const toad = localStorage.getItem('toad') || 0;
    const donkeyKong = localStorage.getItem('donkeyKong') || 0;
    const link = localStorage.getItem('link') || 0;
    const zelda = localStorage.getItem('zelda') || 0;
    const samus = localStorage.getItem('samus') || 0;
    const kirby = localStorage.getItem('kirby') || 0;
    const fox = localStorage.getItem('fox') || 0;
    const pikachu = localStorage.getItem('pikachu') || 0;
    const jigglypuff = localStorage.getItem('jigglypuff') || 0;
    const somaPersonagens = localStorage.getItem('somaPersonagens') || 0;

    // Atualiza os campos de entrada e o resultado com os valores salvos
    document.getElementById('num1').value = mario;
    document.getElementById('num2').value = luigi;
    document.getElementById('num3').value = peach;
    document.getElementById('num4').value = bowser;
    document.getElementById('num5').value = yoshi;
    document.getElementById('num6').value = toad;
    document.getElementById('num7').value = donkeyKong;
    document.getElementById('num8').value = link;
    document.getElementById('num9').value = zelda;
    document.getElementById('num10').value = samus;
    document.getElementById('num11').value = kirby;
    document.getElementById('num12').value = fox;
    document.getElementById('num13').value = pikachu;
    document.getElementById('num14').value = jigglypuff;
    document.getElementById('resultado').textContent = somaPersonagens;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;

const totalPersonagens = localStorage.getItem('somaPersonagens');
const votoMario = localStorage.getItem('mario');
const votoLuigi = localStorage.getItem('luigi');
const votoPeach = localStorage.getItem('peach');
const votoBowser = localStorage.getItem('bowser');
const votoYoshi = localStorage.getItem('yoshi');
const votoToad = localStorage.getItem('toad');
const votoDonkeyKong = localStorage.getItem('donkeyKong');
const votoLink = localStorage.getItem('link');
const votoZelda = localStorage.getItem('zelda');
const votoSamus = localStorage.getItem('samus');
const votoKirby = localStorage.getItem('kirby');
const votoFox = localStorage.getItem('fox');
const votoPikachu = localStorage.getItem('pikachu');
const votoJigglypuff = localStorage.getItem('jigglypuff');

document.getElementById('x').textContent = totalPersonagens;
document.getElementById('s2').textContent = votoMario;
document.getElementById('s13').textContent = votoLuigi;
document.getElementById('s15').textContent = votoPeach;
document.getElementById('s18').textContent = votoBowser;
document.getElementById('s19').textContent = votoYoshi;
document.getElementById('s12').textContent = votoToad;
document.getElementById('s17').textContent = votoDonkeyKong;
document.getElementById('s6').textContent = votoLink;
document.getElementById('s4').textContent = votoZelda;
document.getElementById('s9').textContent = votoSamus;
document.getElementById('s1').textContent = votoKirby;
document.getElementById('s3').textContent = votoFox;
document.getElementById('s7').textContent = votoPikachu;
document.getElementById('s8').textContent = votoJigglypuff;
