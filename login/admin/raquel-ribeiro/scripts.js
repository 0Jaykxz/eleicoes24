function calcularSoma() {
    const granito = parseFloat(document.getElementById('num1').value) || 0;
    const marmore = parseFloat(document.getElementById('num2').value) || 0;
    const basalto = parseFloat(document.getElementById('num3').value) || 0;
    const ardósia = parseFloat(document.getElementById('num4').value) || 0;
    const calcario = parseFloat(document.getElementById('num5').value) || 0;
    const arenito = parseFloat(document.getElementById('num6').value) || 0;
    const quartzo = parseFloat(document.getElementById('num7').value) || 0;
    const xisto = parseFloat(document.getElementById('num8').value) || 0;
    const dolomita = parseFloat(document.getElementById('num9').value) || 0;
    const gnaisse = parseFloat(document.getElementById('num10').value) || 0;
    const diorito = parseFloat(document.getElementById('num11').value) || 0;
    const filito = parseFloat(document.getElementById('num12').value) || 0;
    const travertino = parseFloat(document.getElementById('num13').value) || 0;
    const gabro = parseFloat(document.getElementById('num14').value) || 0;
    const somaRochas = granito + marmore + basalto + ardósia + calcario + arenito + quartzo + xisto + dolomita + gnaisse + diorito + filito + travertino + gabro;
    
    // Atualiza o resultado na página
    document.getElementById('resultado').textContent = somaRochas;
    
    // Salva os valores no localStorage
    localStorage.setItem('granito', granito);
    localStorage.setItem('marmore', marmore);
    localStorage.setItem('basalto', basalto);
    localStorage.setItem('ardósia', ardósia);
    localStorage.setItem('calcario', calcario);
    localStorage.setItem('arenito', arenito);
    localStorage.setItem('quartzo', quartzo);
    localStorage.setItem('xisto', xisto);
    localStorage.setItem('dolomita', dolomita);
    localStorage.setItem('gnaisse', gnaisse);
    localStorage.setItem('diorito', diorito);
    localStorage.setItem('filito', filito);
    localStorage.setItem('travertino', travertino);
    localStorage.setItem('gabro', gabro);
    localStorage.setItem('somaRochas', somaRochas);
}

function carregarValores() {
    // Carrega os valores salvos no localStorage
    const granito = localStorage.getItem('granito') || 0;
    const marmore = localStorage.getItem('marmore') || 0;
    const basalto = localStorage.getItem('basalto') || 0;
    const ardósia = localStorage.getItem('ardósia') || 0;
    const calcario = localStorage.getItem('calcario') || 0;
    const arenito = localStorage.getItem('arenito') || 0;
    const quartzo = localStorage.getItem('quartzo') || 0;
    const xisto = localStorage.getItem('xisto') || 0;
    const dolomita = localStorage.getItem('dolomita') || 0;
    const gnaisse = localStorage.getItem('gnaisse') || 0;
    const diorito = localStorage.getItem('diorito') || 0;
    const filito = localStorage.getItem('filito') || 0;
    const travertino = localStorage.getItem('travertino') || 0;
    const gabro = localStorage.getItem('gabro') || 0;
    const somaRochas = localStorage.getItem('somaRochas') || 0;

    // Atualiza os campos de entrada e o resultado com os valores salvos
    document.getElementById('num1').value = granito;
    document.getElementById('num2').value = marmore;
    document.getElementById('num3').value = basalto;
    document.getElementById('num4').value = ardósia;
    document.getElementById('num5').value = calcario;
    document.getElementById('num6').value = arenito;
    document.getElementById('num7').value = quartzo;
    document.getElementById('num8').value = xisto;
    document.getElementById('num9').value = dolomita;
    document.getElementById('num10').value = gnaisse;
    document.getElementById('num11').value = diorito;
    document.getElementById('num12').value = filito;
    document.getElementById('num13').value = travertino;
    document.getElementById('num14').value = gabro;
    document.getElementById('resultado').textContent = somaRochas;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;

const totalRochas = localStorage.getItem('somaRochas');
const votoGranito = localStorage.getItem('granito');
const votoMarmore = localStorage.getItem('marmore');
const votoBasalto = localStorage.getItem('basalto');
const votoArdosia = localStorage.getItem('ardósia');
const votoCalcario = localStorage.getItem('calcario');
const votoArenito = localStorage.getItem('arenito');
const votoQuartzo = localStorage.getItem('quartzo');
const votoXisto = localStorage.getItem('xisto');
const votoDolomita = localStorage.getItem('dolomita');
const votoGnaisse = localStorage.getItem('gnaisse');
const votoDiorito = localStorage.getItem('diorito');
const votoFilito = localStorage.getItem('filito');
const votoTravertino = localStorage.getItem('travertino');
const votoGabro = localStorage.getItem('gabro');

document.getElementById('x').textContent = totalRochas;
document.getElementById('s2').textContent = votoGranito;
document.getElementById('s13').textContent = votoMarmore;
document.getElementById('s15').textContent = votoBasalto;
document.getElementById('s18').textContent = votoArdosia;
document.getElementById('s19').textContent = votoCalcario;
document.getElementById('s12').textContent = votoArenito;
document.getElementById('s17').textContent = votoQuartzo;
document.getElementById('s6').textContent = votoXisto;
document.getElementById('s4').textContent = votoDolomita;
document.getElementById('s9').textContent = votoGnaisse;
document.getElementById('s1').textContent = votoDiorito;
document.getElementById('s3').textContent = votoFilito;
document.getElementById('s7').textContent = votoTravertino;
document.getElementById('s8').textContent = votoGabro;
