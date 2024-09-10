function calcularSoma() {
    const entrada1 = parseFloat(document.getElementById('num1').value) || 0;
    const entrada2 = parseFloat(document.getElementById('num2').value) || 0;
    const entrada3 = parseFloat(document.getElementById('num3').value) || 0;
    const entrada4 = parseFloat(document.getElementById('num4').value) || 0;
    const entrada5 = parseFloat(document.getElementById('num5').value) || 0;
    const entrada6 = parseFloat(document.getElementById('num6').value) || 0;
    const entrada7 = parseFloat(document.getElementById('num7').value) || 0;
    const entrada8 = parseFloat(document.getElementById('num8').value) || 0;
    const entrada9 = parseFloat(document.getElementById('num9').value) || 0;
    const entrada10 = parseFloat(document.getElementById('num10').value) || 0;
    const entrada11 = parseFloat(document.getElementById('num11').value) || 0;
    const entrada12 = parseFloat(document.getElementById('num12').value) || 0;
    const entrada13 = parseFloat(document.getElementById('num13').value) || 0;
    const entrada14 = parseFloat(document.getElementById('num14').value) || 0;
    const totalSoma = entrada1 + entrada2 + entrada3 + entrada4 + entrada5 + entrada6 + entrada7 + entrada8 + entrada9 + entrada10 + entrada11 + entrada12 + entrada13 + entrada14;
    
    // Atualiza o resultado na página
    document.getElementById('resultado').textContent = totalSoma;
    
    // Salva os valores no localStorage
    localStorage.setItem('entrada1', entrada1);
    localStorage.setItem('entrada2', entrada2);
    localStorage.setItem('entrada3', entrada3);
    localStorage.setItem('entrada4', entrada4);
    localStorage.setItem('entrada5', entrada5);
    localStorage.setItem('entrada6', entrada6);
    localStorage.setItem('entrada7', entrada7);
    localStorage.setItem('entrada8', entrada8);
    localStorage.setItem('entrada9', entrada9);
    localStorage.setItem('entrada10', entrada10);
    localStorage.setItem('entrada11', entrada11);
    localStorage.setItem('entrada12', entrada12);
    localStorage.setItem('entrada13', entrada13);
    localStorage.setItem('entrada14', entrada14);
    localStorage.setItem('totalSoma', totalSoma);
}

function carregarValores() {
    // Carrega os valores salvos no localStorage
    const entrada1 = localStorage.getItem('entrada1') || 0;
    const entrada2 = localStorage.getItem('entrada2') || 0;
    const entrada3 = localStorage.getItem('entrada3') || 0;
    const entrada4 = localStorage.getItem('entrada4') || 0;
    const entrada5 = localStorage.getItem('entrada5') || 0;
    const entrada6 = localStorage.getItem('entrada6') || 0;
    const entrada7 = localStorage.getItem('entrada7') || 0;
    const entrada8 = localStorage.getItem('entrada8') || 0;
    const entrada9 = localStorage.getItem('entrada9') || 0;
    const entrada10 = localStorage.getItem('entrada10') || 0;
    const entrada11 = localStorage.getItem('entrada11') || 0;
    const entrada12 = localStorage.getItem('entrada12') || 0;
    const entrada13 = localStorage.getItem('entrada13') || 0;
    const entrada14 = localStorage.getItem('entrada14') || 0;
    const totalSoma = localStorage.getItem('totalSoma') || 0;

    // Atualiza os campos de entrada e o resultado com os valores salvos
    document.getElementById('num1').value = entrada1;
    document.getElementById('num2').value = entrada2;
    document.getElementById('num3').value = entrada3;
    document.getElementById('num4').value = entrada4;
    document.getElementById('num5').value = entrada5;
    document.getElementById('num6').value = entrada6;
    document.getElementById('num7').value = entrada7;
    document.getElementById('num8').value = entrada8;
    document.getElementById('num9').value = entrada9;
    document.getElementById('num10').value = entrada10;
    document.getElementById('num11').value = entrada11;
    document.getElementById('num12').value = entrada12;
    document.getElementById('num13').value = entrada13;
    document.getElementById('num14').value = entrada14;
    document.getElementById('resultado').textContent = totalSoma;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;

const votosCalculados = localStorage.getItem('totalSoma');
const valorA = localStorage.getItem('entrada1');
const valorB = localStorage.getItem('entrada2');
const valorC = localStorage.getItem('entrada3');
const valorD = localStorage.getItem('entrada4');
const valorE = localStorage.getItem('entrada5');
const valorF = localStorage.getItem('entrada6');
const valorG = localStorage.getItem('entrada7');
const valorH = localStorage.getItem('entrada8');
const valorI = localStorage.getItem('entrada9');
const valorJ = localStorage.getItem('entrada10');
const valorK = localStorage.getItem('entrada11');
const valorL = localStorage.getItem('entrada12');
const valorM = localStorage.getItem('entrada13');
const valorN = localStorage.getItem('entrada14');

document.getElementById('nene').textContent = votosCalculados;
document.getElementById('s2').textContent = valorA;
document.getElementById('s13').textContent = valorB;
document.getElementById('s15').textContent = valorC;
document.getElementById('s18').textContent = valorD;
document.getElementById('s19').textContent = valorE;
document.getElementById('s12').textContent = valorF;
document.getElementById('s17').textContent = valorG;
document.getElementById('s6').textContent = valorH;
document.getElementById('s4').textContent = valorI;
document.getElementById('s9').textContent = valorJ;
document.getElementById('s1').textContent = valorK;
document.getElementById('s3').textContent = valorL;
document.getElementById('s7').textContent = valorM;
document.getElementById('s8').textContent = valorN;
