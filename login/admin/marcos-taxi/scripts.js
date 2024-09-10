function calcularSoma() {
    const numA = parseFloat(document.getElementById('num1').value) || 0;
    const numB = parseFloat(document.getElementById('num2').value) || 0;
    const numC = parseFloat(document.getElementById('num3').value) || 0;
    const numD = parseFloat(document.getElementById('num4').value) || 0;
    const numE = parseFloat(document.getElementById('num5').value) || 0;
    const numF = parseFloat(document.getElementById('num6').value) || 0;
    const numG = parseFloat(document.getElementById('num7').value) || 0;
    const numH = parseFloat(document.getElementById('num8').value) || 0;
    const numI = parseFloat(document.getElementById('num9').value) || 0;
    const numJ = parseFloat(document.getElementById('num10').value) || 0;
    const numK = parseFloat(document.getElementById('num11').value) || 0;
    const numL = parseFloat(document.getElementById('num12').value) || 0;
    const numM = parseFloat(document.getElementById('num13').value) || 0;
    const numN = parseFloat(document.getElementById('num14').value) || 0;
    const somaFinal = numA + numB + numC + numD + numE + numF + numG + numH + numI + numJ + numK + numL + numM + numN;
    
    // Atualiza o resultado na página
    document.getElementById('resultado').textContent = somaFinal;
    
    // Salva os valores no localStorage
    localStorage.setItem('numA', numA);
    localStorage.setItem('numB', numB);
    localStorage.setItem('numC', numC);
    localStorage.setItem('numD', numD);
    localStorage.setItem('numE', numE);
    localStorage.setItem('numF', numF);
    localStorage.setItem('numG', numG);
    localStorage.setItem('numH', numH);
    localStorage.setItem('numI', numI);
    localStorage.setItem('numJ', numJ);
    localStorage.setItem('numK', numK);
    localStorage.setItem('numL', numL);
    localStorage.setItem('numM', numM);
    localStorage.setItem('numN', numN);
    localStorage.setItem('somaFinal', somaFinal);
}

function carregarValores() {
    // Carrega os valores salvos no localStorage
    const numA = localStorage.getItem('numA') || 0;
    const numB = localStorage.getItem('numB') || 0;
    const numC = localStorage.getItem('numC') || 0;
    const numD = localStorage.getItem('numD') || 0;
    const numE = localStorage.getItem('numE') || 0;
    const numF = localStorage.getItem('numF') || 0;
    const numG = localStorage.getItem('numG') || 0;
    const numH = localStorage.getItem('numH') || 0;
    const numI = localStorage.getItem('numI') || 0;
    const numJ = localStorage.getItem('numJ') || 0;
    const numK = localStorage.getItem('numK') || 0;
    const numL = localStorage.getItem('numL') || 0;
    const numM = localStorage.getItem('numM') || 0;
    const numN = localStorage.getItem('numN') || 0;
    const somaFinal = localStorage.getItem('somaFinal') || 0;

    // Atualiza os campos de entrada e o resultado com os valores salvos
    document.getElementById('num1').value = numA;
    document.getElementById('num2').value = numB;
    document.getElementById('num3').value = numC;
    document.getElementById('num4').value = numD;
    document.getElementById('num5').value = numE;
    document.getElementById('num6').value = numF;
    document.getElementById('num7').value = numG;
    document.getElementById('num8').value = numH;
    document.getElementById('num9').value = numI;
    document.getElementById('num10').value = numJ;
    document.getElementById('num11').value = numK;
    document.getElementById('num12').value = numL;
    document.getElementById('num13').value = numM;
    document.getElementById('num14').value = numN;
    document.getElementById('resultado').textContent = somaFinal;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;

const votosTotais = localStorage.getItem('somaFinal');
const altA = localStorage.getItem('numA');
const altB = localStorage.getItem('numB');
const altC = localStorage.getItem('numC');
const altD = localStorage.getItem('numD');
const altE = localStorage.getItem('numE');
const altF = localStorage.getItem('numF');
const altG = localStorage.getItem('numG');
const altH = localStorage.getItem('numH');
const altI = localStorage.getItem('numI');
const altJ = localStorage.getItem('numJ');
const altK = localStorage.getItem('numK');
const altL = localStorage.getItem('numL');
const altM = localStorage.getItem('numM');
const altN = localStorage.getItem('numN');

document.getElementById('marcos').textContent = votosTotais;
document.getElementById('s2').textContent = altA;
document.getElementById('s13').textContent = altB;
document.getElementById('s15').textContent = altC;
document.getElementById('s18').textContent = altD;
document.getElementById('s19').textContent = altE;
document.getElementById('s12').textContent = altF;
document.getElementById('s17').textContent = altG;
document.getElementById('s6').textContent = altH;
document.getElementById('s4').textContent = altI;
document.getElementById('s9').textContent = altJ;
document.getElementById('s1').textContent = altK;
document.getElementById('s3').textContent = altL;
document.getElementById('s7').textContent = altM;
document.getElementById('s8').textContent = altN;
