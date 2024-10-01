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
    const cenoura = parseFloat(document.getElementById('num15').value) || 0;
	const brócolis = parseFloat(document.getElementById('num16').value) || 0;
	const batata = parseFloat(document.getElementById('num17').value) || 0;
	const abobrinha = parseFloat(document.getElementById('num18').value) || 0;
    const somaTotal = valor1 + valor2 + valor3 + valor4 + valor5 + valor6 + valor7 + valor8 + valor9 + valor10 + valor11 + valor12 + valor13 + valor14 + cenoura + batata + brócolis + abobrinha;
    
    // Atualiza o resultado na página
    document.getElementById('resultado').textContent = somaTotal;
    
    // Salva os valores no localStorage
    localStorage.setItem('data1', valor1);
    localStorage.setItem('data2', valor2);
    localStorage.setItem('data3', valor3);
    localStorage.setItem('data4', valor4);
    localStorage.setItem('data5', valor5);
    localStorage.setItem('data6', valor6);
    localStorage.setItem('data7', valor7);
    localStorage.setItem('data8', valor8);
    localStorage.setItem('data9', valor9);
    localStorage.setItem('data10', valor10);
    localStorage.setItem('data11', valor11);
    localStorage.setItem('data12', valor12);
    localStorage.setItem('data13', valor13);
    localStorage.setItem('data14', valor14);
    localStorage.setItem('cenoura', cenoura);
	localStorage.setItem('brócolis', brócolis);
	localStorage.setItem('batata', batata);
	localStorage.setItem('abobrinha', abobrinha);
    localStorage.setItem('totalSomaData', somaTotal);
}

function carregarValores() {
    // Carrega os valores salvos no localStorage
    const valor1 = localStorage.getItem('data1') || 0;
    const valor2 = localStorage.getItem('data2') || 0;
    const valor3 = localStorage.getItem('data3') || 0;
    const valor4 = localStorage.getItem('data4') || 0;
    const valor5 = localStorage.getItem('data5') || 0;
    const valor6 = localStorage.getItem('data6') || 0;
    const valor7 = localStorage.getItem('data7') || 0;
    const valor8 = localStorage.getItem('data8') || 0;
    const valor9 = localStorage.getItem('data9') || 0;
    const valor10 = localStorage.getItem('data10') || 0;
    const valor11 = localStorage.getItem('data11') || 0;
    const valor12 = localStorage.getItem('data12') || 0;
    const valor13 = localStorage.getItem('data13') || 0;
    const valor14 = localStorage.getItem('data14') || 0;
    const cenoura = localStorage.getItem('cenoura') || 0;
	const brócolis = localStorage.getItem('brócolis') || 0;
	const batata = localStorage.getItem('batata') || 0;
	const abobrinha = localStorage.getItem('abobrinha') || 0;
    const somaTotal = localStorage.getItem('totalSomaData') || 0;

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
    document.getElementById('num15').value = cenoura;
	document.getElementById('num16').value = brócolis;
	document.getElementById('num17').value = batata;
	document.getElementById('num18').value = abobrinha;
    document.getElementById('resultado').textContent = somaTotal;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;

const totalVotos = localStorage.getItem('totalSomaData');
const s2 = localStorage.getItem('data1');
const s13 = localStorage.getItem('data2');
const s15 = localStorage.getItem('data3');
const s18 = localStorage.getItem('data4');
const s19 = localStorage.getItem('data5');
const s12 = localStorage.getItem('data6');
const s17 = localStorage.getItem('data7');
const s6 = localStorage.getItem('data8');
const s4 = localStorage.getItem('data9');
const s9 = localStorage.getItem('data10');
const s1 = localStorage.getItem('data11');
const s3 = localStorage.getItem('data12');
const s7 = localStorage.getItem('data13');
const s8 = localStorage.getItem('data14');
const sa = localStorage.getItem('cenoura');
const sb = localStorage.getItem('brócolis');
const sc = localStorage.getItem('batata');
const sd = localStorage.getItem('abobrinha');

document.getElementById('charlene').textContent = totalVotos;
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
