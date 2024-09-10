function calcularSoma() {
    const espresso = parseFloat(document.getElementById('num1').value) || 0;
    const americano = parseFloat(document.getElementById('num2').value) || 0;
    const cappuccino = parseFloat(document.getElementById('num3').value) || 0;
    const latte = parseFloat(document.getElementById('num4').value) || 0;
    const mocha = parseFloat(document.getElementById('num5').value) || 0;
    const macchiato = parseFloat(document.getElementById('num6').value) || 0;
    const ristretto = parseFloat(document.getElementById('num7').value) || 0;
    const flatWhite = parseFloat(document.getElementById('num8').value) || 0;
    const cortado = parseFloat(document.getElementById('num9').value) || 0;
    const affogato = parseFloat(document.getElementById('num10').value) || 0;
    const lungo = parseFloat(document.getElementById('num11').value) || 0;
    const viennese = parseFloat(document.getElementById('num12').value) || 0;
    const turkish = parseFloat(document.getElementById('num13').value) || 0;
    const coldBrew = parseFloat(document.getElementById('num14').value) || 0;
    const somaCafe = espresso + americano + cappuccino + latte + mocha + macchiato + ristretto + flatWhite + cortado + affogato + lungo + viennese + turkish + coldBrew;
    
    // Atualiza o resultado na página
    document.getElementById('resultado').textContent = somaCafe;
    
    // Salva os valores no localStorage
    localStorage.setItem('espresso', espresso);
    localStorage.setItem('americano', americano);
    localStorage.setItem('cappuccino', cappuccino);
    localStorage.setItem('latte', latte);
    localStorage.setItem('mocha', mocha);
    localStorage.setItem('macchiato', macchiato);
    localStorage.setItem('ristretto', ristretto);
    localStorage.setItem('flatWhite', flatWhite);
    localStorage.setItem('cortado', cortado);
    localStorage.setItem('affogato', affogato);
    localStorage.setItem('lungo', lungo);
    localStorage.setItem('viennese', viennese);
    localStorage.setItem('turkish', turkish);
    localStorage.setItem('coldBrew', coldBrew);
    localStorage.setItem('somaCafe', somaCafe);
}

function carregarValores() {
    // Carrega os valores salvos no localStorage
    const espresso = localStorage.getItem('espresso') || 0;
    const americano = localStorage.getItem('americano') || 0;
    const cappuccino = localStorage.getItem('cappuccino') || 0;
    const latte = localStorage.getItem('latte') || 0;
    const mocha = localStorage.getItem('mocha') || 0;
    const macchiato = localStorage.getItem('macchiato') || 0;
    const ristretto = localStorage.getItem('ristretto') || 0;
    const flatWhite = localStorage.getItem('flatWhite') || 0;
    const cortado = localStorage.getItem('cortado') || 0;
    const affogato = localStorage.getItem('affogato') || 0;
    const lungo = localStorage.getItem('lungo') || 0;
    const viennese = localStorage.getItem('viennese') || 0;
    const turkish = localStorage.getItem('turkish') || 0;
    const coldBrew = localStorage.getItem('coldBrew') || 0;
    const somaCafe = localStorage.getItem('somaCafe') || 0;

    // Atualiza os campos de entrada e o resultado com os valores salvos
    document.getElementById('num1').value = espresso;
    document.getElementById('num2').value = americano;
    document.getElementById('num3').value = cappuccino;
    document.getElementById('num4').value = latte;
    document.getElementById('num5').value = mocha;
    document.getElementById('num6').value = macchiato;
    document.getElementById('num7').value = ristretto;
    document.getElementById('num8').value = flatWhite;
    document.getElementById('num9').value = cortado;
    document.getElementById('num10').value = affogato;
    document.getElementById('num11').value = lungo;
    document.getElementById('num12').value = viennese;
    document.getElementById('num13').value = turkish;
    document.getElementById('num14').value = coldBrew;
    document.getElementById('resultado').textContent = somaCafe;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;

const totalCafe = localStorage.getItem('somaCafe');
const votoEspresso = localStorage.getItem('espresso');
const votoAmericano = localStorage.getItem('americano');
const votoCappuccino = localStorage.getItem('cappuccino');
const votoLatte = localStorage.getItem('latte');
const votoMocha = localStorage.getItem('mocha');
const votoMacchiato = localStorage.getItem('macchiato');
const votoRistretto = localStorage.getItem('ristretto');
const votoFlatWhite = localStorage.getItem('flatWhite');
const votoCortado = localStorage.getItem('cortado');
const votoAffogato = localStorage.getItem('affogato');
const votoLungo = localStorage.getItem('lungo');
const votoViennese = localStorage.getItem('viennese');
const votoTurkish = localStorage.getItem('turkish');
const votoColdBrew = localStorage.getItem('coldBrew');

document.getElementById('x').textContent = totalCafe;
document.getElementById('s2').textContent = votoEspresso;
document.getElementById('s13').textContent = votoAmericano;
document.getElementById('s15').textContent = votoCappuccino;
document.getElementById('s18').textContent = votoLatte;
document.getElementById('s19').textContent = votoMocha;
document.getElementById('s12').textContent = votoMacchiato;
document.getElementById('s17').textContent = votoRistretto;
document.getElementById('s6').textContent = votoFlatWhite;
document.getElementById('s4').textContent = votoCortado;
document.getElementById('s9').textContent = votoAffogato;
document.getElementById('s1').textContent = votoLungo;
document.getElementById('s3').textContent = votoViennese;
document.getElementById('s7').textContent = votoTurkish;
document.getElementById('s8').textContent = votoColdBrew;
