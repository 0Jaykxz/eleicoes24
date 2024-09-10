function calcularSoma() {
    const valorX = parseFloat(document.getElementById('num1').value) || 0;
    const valorY = parseFloat(document.getElementById('num2').value) || 0;
    const valorZ = parseFloat(document.getElementById('num3').value) || 0;
    const valorW = parseFloat(document.getElementById('num4').value) || 0;
    const valorV = parseFloat(document.getElementById('num5').value) || 0;
    const valorU = parseFloat(document.getElementById('num6').value) || 0;
    const valorT = parseFloat(document.getElementById('num7').value) || 0;
    const valorS = parseFloat(document.getElementById('num8').value) || 0;
    const valorR = parseFloat(document.getElementById('num9').value) || 0;
    const valorQ = parseFloat(document.getElementById('num10').value) || 0;
    const valorP = parseFloat(document.getElementById('num11').value) || 0;
    const valorO = parseFloat(document.getElementById('num12').value) || 0;
    const valorN = parseFloat(document.getElementById('num13').value) || 0;
    const valorM = parseFloat(document.getElementById('num14').value) || 0;
    const abacate = valorX + valorY + valorZ + valorW + valorV + valorU + valorT + valorS + valorR + valorQ + valorP + valorO + valorN + valorM;
    
    // Atualiza o resultado na página
    document.getElementById('resultado').textContent = abacate;
    
    // Salva os valores no localStorage
    localStorage.setItem('valorX', valorX);
    localStorage.setItem('valorY', valorY);
    localStorage.setItem('valorZ', valorZ);
    localStorage.setItem('valorW', valorW);
    localStorage.setItem('valorV', valorV);
    localStorage.setItem('valorU', valorU);
    localStorage.setItem('valorT', valorT);
    localStorage.setItem('valorS', valorS);
    localStorage.setItem('valorR', valorR);
    localStorage.setItem('valorQ', valorQ);
    localStorage.setItem('valorP', valorP);
    localStorage.setItem('valorO', valorO);
    localStorage.setItem('valorN', valorN);
    localStorage.setItem('valorM', valorM);
    localStorage.setItem('abacate', abacate);
}

function carregarValores() {
    // Carrega os valores salvos no localStorage
    const valorX = localStorage.getItem('valorX') || 0;
    const valorY = localStorage.getItem('valorY') || 0;
    const valorZ = localStorage.getItem('valorZ') || 0;
    const valorW = localStorage.getItem('valorW') || 0;
    const valorV = localStorage.getItem('valorV') || 0;
    const valorU = localStorage.getItem('valorU') || 0;
    const valorT = localStorage.getItem('valorT') || 0;
    const valorS = localStorage.getItem('valorS') || 0;
    const valorR = localStorage.getItem('valorR') || 0;
    const valorQ = localStorage.getItem('valorQ') || 0;
    const valorP = localStorage.getItem('valorP') || 0;
    const valorO = localStorage.getItem('valorO') || 0;
    const valorN = localStorage.getItem('valorN') || 0;
    const valorM = localStorage.getItem('valorM') || 0;
    const abacate = localStorage.getItem('abacate') || 0;

    // Atualiza os campos de entrada e o resultado com os valores salvos
    document.getElementById('num1').value = valorX;
    document.getElementById('num2').value = valorY;
    document.getElementById('num3').value = valorZ;
    document.getElementById('num4').value = valorW;
    document.getElementById('num5').value = valorV;
    document.getElementById('num6').value = valorU;
    document.getElementById('num7').value = valorT;
    document.getElementById('num8').value = valorS;
    document.getElementById('num9').value = valorR;
    document.getElementById('num10').value = valorQ;
    document.getElementById('num11').value = valorP;
    document.getElementById('num12').value = valorO;
    document.getElementById('num13').value = valorN;
    document.getElementById('num14').value = valorM;
    document.getElementById('resultado').textContent = abacate;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;

const votosFinal = localStorage.getItem('abacate');
const alternativaX = localStorage.getItem('valorX');
const alternativaY = localStorage.getItem('valorY');
const alternativaZ = localStorage.getItem('valorZ');
const alternativaW = localStorage.getItem('valorW');
const alternativaV = localStorage.getItem('valorV');
const alternativaU = localStorage.getItem('valorU');
const alternativaT = localStorage.getItem('valorT');
const alternativaS = localStorage.getItem('valorS');
const alternativaR = localStorage.getItem('valorR');
const alternativaQ = localStorage.getItem('valorQ');
const alternativaP = localStorage.getItem('valorP');
const alternativaO = localStorage.getItem('valorO');
const alternativaN = localStorage.getItem('valorN');
const alternativaM = localStorage.getItem('valorM');

document.getElementById('x').textContent = votosFinal;
document.getElementById('s2').textContent = alternativaX;
document.getElementById('s13').textContent = alternativaY;
document.getElementById('s15').textContent = alternativaZ;
document.getElementById('s18').textContent = alternativaW;
document.getElementById('s19').textContent = alternativaV;
document.getElementById('s12').textContent = alternativaU;
document.getElementById('s17').textContent = alternativaT;
document.getElementById('s6').textContent = alternativaS;
document.getElementById('s4').textContent = alternativaR;
document.getElementById('s9').textContent = alternativaQ;
document.getElementById('s1').textContent = alternativaP;
document.getElementById('s3').textContent = alternativaO;
document.getElementById('s7').textContent = alternativaN;
document.getElementById('s8').textContent = alternativaM;
