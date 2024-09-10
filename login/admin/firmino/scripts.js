function calcularSoma() {
    const leonardoDaVinci = parseFloat(document.getElementById('num1').value) || 0;
    const michelangelo = parseFloat(document.getElementById('num2').value) || 0;
    const raphael = parseFloat(document.getElementById('num3').value) || 0;
    const donatello = parseFloat(document.getElementById('num4').value) || 0;
    const sandroBotticelli = parseFloat(document.getElementById('num5').value) || 0;
    const titian = parseFloat(document.getElementById('num6').value) || 0;
    const albrechtDurer = parseFloat(document.getElementById('num7').value) || 0;
    const masaccio = parseFloat(document.getElementById('num8').value) || 0;
    const caravaggio = parseFloat(document.getElementById('num9').value) || 0;
    const giorgione = parseFloat(document.getElementById('num10').value) || 0;
    const pieroDellaFrancesca = parseFloat(document.getElementById('num11').value) || 0;
    const fraAngelico = parseFloat(document.getElementById('num12').value) || 0;
    const verrocchio = parseFloat(document.getElementById('num13').value) || 0;
    const tintoretto = parseFloat(document.getElementById('num14').value) || 0;
    const somaArtistas = leonardoDaVinci + michelangelo + raphael + donatello + sandroBotticelli + titian + albrechtDurer + masaccio + caravaggio + giorgione + pieroDellaFrancesca + fraAngelico + verrocchio + tintoretto;

    // Atualiza o resultado na página
    document.getElementById('resultado').textContent = somaArtistas;

    // Salva os valores no localStorage
    localStorage.setItem('leonardoDaVinci', leonardoDaVinci);
    localStorage.setItem('michelangelo', michelangelo);
    localStorage.setItem('raphael', raphael);
    localStorage.setItem('donatello', donatello);
    localStorage.setItem('sandroBotticelli', sandroBotticelli);
    localStorage.setItem('titian', titian);
    localStorage.setItem('albrechtDurer', albrechtDurer);
    localStorage.setItem('masaccio', masaccio);
    localStorage.setItem('caravaggio', caravaggio);
    localStorage.setItem('giorgione', giorgione);
    localStorage.setItem('pieroDellaFrancesca', pieroDellaFrancesca);
    localStorage.setItem('fraAngelico', fraAngelico);
    localStorage.setItem('verrocchio', verrocchio);
    localStorage.setItem('tintoretto', tintoretto);
    localStorage.setItem('somaArtistas', somaArtistas);
}

function carregarValores() {
    // Carrega os valores salvos no localStorage
    const leonardoDaVinci = localStorage.getItem('leonardoDaVinci') || 0;
    const michelangelo = localStorage.getItem('michelangelo') || 0;
    const raphael = localStorage.getItem('raphael') || 0;
    const donatello = localStorage.getItem('donatello') || 0;
    const sandroBotticelli = localStorage.getItem('sandroBotticelli') || 0;
    const titian = localStorage.getItem('titian') || 0;
    const albrechtDurer = localStorage.getItem('albrechtDurer') || 0;
    const masaccio = localStorage.getItem('masaccio') || 0;
    const caravaggio = localStorage.getItem('caravaggio') || 0;
    const giorgione = localStorage.getItem('giorgione') || 0;
    const pieroDellaFrancesca = localStorage.getItem('pieroDellaFrancesca') || 0;
    const fraAngelico = localStorage.getItem('fraAngelico') || 0;
    const verrocchio = localStorage.getItem('verrocchio') || 0;
    const tintoretto = localStorage.getItem('tintoretto') || 0;
    const somaArtistas = localStorage.getItem('somaArtistas') || 0;

    // Atualiza os campos de entrada e o resultado com os valores salvos
    document.getElementById('num1').value = leonardoDaVinci;
    document.getElementById('num2').value = michelangelo;
    document.getElementById('num3').value = raphael;
    document.getElementById('num4').value = donatello;
    document.getElementById('num5').value = sandroBotticelli;
    document.getElementById('num6').value = titian;
    document.getElementById('num7').value = albrechtDurer;
    document.getElementById('num8').value = masaccio;
    document.getElementById('num9').value = caravaggio;
    document.getElementById('num10').value = giorgione;
    document.getElementById('num11').value = pieroDellaFrancesca;
    document.getElementById('num12').value = fraAngelico;
    document.getElementById('num13').value = verrocchio;
    document.getElementById('num14').value = tintoretto;
    document.getElementById('resultado').textContent = somaArtistas;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;

const totalArtistas = localStorage.getItem('somaArtistas');
const votoLeonardoDaVinci = localStorage.getItem('leonardoDaVinci');
const votoMichelangelo = localStorage.getItem('michelangelo');
const votoRaphael = localStorage.getItem('raphael');
const votoDonatello = localStorage.getItem('donatello');
const votoSandroBotticelli = localStorage.getItem('sandroBotticelli');
const votoTitian = localStorage.getItem('titian');
const votoAlbrechtDurer = localStorage.getItem('albrechtDurer');
const votoMasaccio = localStorage.getItem('masaccio');
const votoCaravaggio = localStorage.getItem('caravaggio');
const votoGiorgione = localStorage.getItem('giorgione');
const votoPieroDellaFrancesca = localStorage.getItem('pieroDellaFrancesca');
const votoFraAngelico = localStorage.getItem('fraAngelico');
const votoVerrocchio = localStorage.getItem('verrocchio');
const votoTintoretto = localStorage.getItem('tintoretto');

document.getElementById('x').textContent = totalArtistas;
document.getElementById('s2').textContent = votoLeonardoDaVinci;
document.getElementById('s13').textContent = votoMichelangelo;
document.getElementById('s15').textContent = votoRaphael;
document.getElementById('s18').textContent = votoDonatello;
document.getElementById('s19').textContent = votoSandroBotticelli;
document.getElementById('s12').textContent = votoTitian;
document.getElementById('s17').textContent = votoAlbrechtDurer;
document.getElementById('s6').textContent = votoMasaccio;
document.getElementById('s4').textContent = votoCaravaggio;
document.getElementById('s9').textContent = votoGiorgione;
document.getElementById('s1').textContent = votoPieroDellaFrancesca;
document.getElementById('s3').textContent = votoFraAngelico;
document.getElementById('s7').textContent = votoVerrocchio;
document.getElementById('s8').textContent = votoTintoretto;
