function calcularSoma() {
    const valor1 = parseFloat(document.getElementById('num1').value) || 0;
    const valor2 = parseFloat(document.getElementById('num2').value) || 0;
    const valor3 = parseFloat(document.getElementById('num3').value) || 0;
    const valor4 = parseFloat(document.getElementById('num4').value) || 0;
    const valor5 = parseFloat(document.getElementById('num5').value) || 0;
    const valor6 = parseFloat(document.getElementById('num6').value) || 0;
    const valor7 = parseFloat(document.getElementById('num7').value) || 0;
    const valor8 = parseFloat(document.getElementById('num8').value) || 0;
    const valor9 = parseFloat(document.getElementById('num9').value) || 0;
    const valor10 = parseFloat(document.getElementById('num10').value) || 0;
    const valor11 = parseFloat(document.getElementById('num11').value) || 0;
    const valor12 = parseFloat(document.getElementById('num12').value) || 0;
    const valor13 = parseFloat(document.getElementById('num13').value) || 0;
    const valor14 = parseFloat(document.getElementById('num14').value) || 0;
    const leão = parseFloat(document.getElementById('num15').value) || 0;
	const tigre = parseFloat(document.getElementById('num16').value) || 0;
	const elefante = parseFloat(document.getElementById('num17').value) || 0;
	const girafa = parseFloat(document.getElementById('num18').value) || 0;
    const somaTotal = valor1 + valor2 + valor3 + valor4 + valor5 + valor6 + valor7 + valor8 + valor9 + valor10 + valor11 + valor12 + valor13 + valor14 + leão + tigre + elefante + girafa;
    
    // Atualiza o resultado na página
    document.getElementById('resultado').textContent = somaTotal;
    
    // Salva os valores no localStorage
    localStorage.setItem('valor1', valor1);
    localStorage.setItem('valor2', valor2);
    localStorage.setItem('valor3', valor3);
    localStorage.setItem('valor4', valor4);
    localStorage.setItem('valor5', valor5);
    localStorage.setItem('valor6', valor6);
    localStorage.setItem('valor7', valor7);
    localStorage.setItem('valor8', valor8);
    localStorage.setItem('valor9', valor9);
    localStorage.setItem('valor10', valor10);
    localStorage.setItem('valor11', valor11);
    localStorage.setItem('valor12', valor12);
    localStorage.setItem('valor13', valor13);
    localStorage.setItem('valor14', valor14);
    localStorage.setItem('leão', leão);
	localStorage.setItem('tigre', tigre);
	localStorage.setItem('elefante', elefante);
	localStorage.setItem('girafa', girafa);
    localStorage.setItem('somaTotal', somaTotal);
}

function carregarValores() {
    // Carrega os valores salvos no localStorage
    const valor1 = localStorage.getItem('valor1') || 0;
    const valor2 = localStorage.getItem('valor2') || 0;
    const valor3 = localStorage.getItem('valor3') || 0;
    const valor4 = localStorage.getItem('valor4') || 0;
    const valor5 = localStorage.getItem('valor5') || 0;
    const valor6 = localStorage.getItem('valor6') || 0;
    const valor7 = localStorage.getItem('valor7') || 0;
    const valor8 = localStorage.getItem('valor8') || 0;
    const valor9 = localStorage.getItem('valor9') || 0;
    const valor10 = localStorage.getItem('valor10') || 0;
    const valor11 = localStorage.getItem('valor11') || 0;
    const valor12 = localStorage.getItem('valor12') || 0;
    const valor13 = localStorage.getItem('valor13') || 0;
    const valor14 = localStorage.getItem('valor14') || 0;
    const leão = localStorage.getItem('leão') || 0;
	const tigre = localStorage.getItem('tigre') || 0;
	const elefante = localStorage.getItem('elefante') || 0;
	const girafa = localStorage.getItem('girafa') || 0;
    const somaTotal = localStorage.getItem('somaTotal') || 0;

    // Atualiza os campos de entrada e o resultado com os valores salvos
    document.getElementById('num1').value = valor1;
    document.getElementById('num2').value = valor2;
    document.getElementById('num3').value = valor3;
    document.getElementById('num4').value = valor4;
    document.getElementById('num5').value = valor5;
    document.getElementById('num6').value = valor6;
    document.getElementById('num7').value = valor7;
    document.getElementById('num8').value = valor8;
    document.getElementById('num9').value = valor9;
    document.getElementById('num10').value = valor10;
    document.getElementById('num11').value = valor11;
    document.getElementById('num12').value = valor12;
    document.getElementById('num13').value = valor13;
    document.getElementById('num14').value = valor14;
    document.getElementById('num15').value = leão;
	document.getElementById('num16').value = tigre;
	document.getElementById('num17').value = elefante;
	document.getElementById('num18').value = girafa;
    document.getElementById('resultado').textContent = somaTotal;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;

const totalVotos = localStorage.getItem('somaTotal');
const s2 = localStorage.getItem('valor1');
const s13 = localStorage.getItem('valor2');
const s15 = localStorage.getItem('valor3');
const s18 = localStorage.getItem('valor4');
const s19 = localStorage.getItem('valor5');
const s12 = localStorage.getItem('valor6');
const s17 = localStorage.getItem('valor7');
const s6 = localStorage.getItem('valor8');
const s4 = localStorage.getItem('valor9');
const s9 = localStorage.getItem('valor10');
const s1 = localStorage.getItem('valor11');
const s3 = localStorage.getItem('valor12');
const s7 = localStorage.getItem('valor13');
const s8 = localStorage.getItem('valor14');
const sa = localStorage.getItem('leão');
const sb = localStorage.getItem('tigre');
const sc = localStorage.getItem('elefante');
const sd = localStorage.getItem('girafa');

document.getElementById('beti').textContent = totalVotos;
document.getElementById('s2').textContent = s2;
document.getElementById('s13').textContent = s13;
document.getElementById('s15').textContent = s15;
document.getElementById('s18').textContent = s18;
document.getElementById('s19').textContent = s19;
document.getElementById('s12').textContent = s12;
document.getElementById('s17').textContent = s17;
document.getElementById('s6').textContent = s6;
document.getElementById('s4').textContent = s4;
document.getElementById('s9').textContent = s9;
document.getElementById('s1').textContent = s1;
document.getElementById('s3').textContent = s3;
document.getElementById('s7').textContent = s7;
document.getElementById('s8').textContent = s8;
document.getElementById('sa').textContent = sa;
document.getElementById('sb').textContent = sb;
document.getElementById('sc').textContent = sc;
document.getElementById('sd').textContent = sd;

