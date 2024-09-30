function calcularSoma() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    const num3 = parseFloat(document.getElementById('num3').value) || 0;
    const num4 = parseFloat(document.getElementById('num4').value) || 0;
    const num5 = parseFloat(document.getElementById('num5').value) || 0;
    const num6 = parseFloat(document.getElementById('num6').value) || 0;
    const num7 = parseFloat(document.getElementById('num7').value) || 0;
    const num8 = parseFloat(document.getElementById('num8').value) || 0;
    const num9 = parseFloat(document.getElementById('num9').value) || 0;
    const num10 = parseFloat(document.getElementById('num10').value) || 0;
    const num11 = parseFloat(document.getElementById('num11').value) || 0;
    const num12 = parseFloat(document.getElementById('num12').value) || 0;
    const num13 = parseFloat(document.getElementById('num13').value) || 0;
    const num14 = parseFloat(document.getElementById('num14').value) || 0;
    //#
    const num15 = parseFloat(document.getElementById('num15').value) || 0;
    const num16 = parseFloat(document.getElementById('num16').value) || 0;
    const num17 = parseFloat(document.getElementById('num17').value) || 0;
    const num18 = parseFloat(document.getElementById('num18').value) || 0;

    const soma = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10 + num11 + num12 + num13 + num14 + num15 + num16 + num17 + num18;
    
    
    document.getElementById('resultado').textContent = soma;
    // Salva os valores no localStorage
    localStorage.setItem('num1', num1);
    localStorage.setItem('num2', num2);
    localStorage.setItem('num3', num3);
    localStorage.setItem('num4', num4);
    localStorage.setItem('num5', num5);
    localStorage.setItem('num6', num6);
    localStorage.setItem('num7', num7);
    localStorage.setItem('num8', num8);
    localStorage.setItem('num9', num9);
    localStorage.setItem('num10', num10);
    localStorage.setItem('num11', num11);
    localStorage.setItem('num12', num12);
    localStorage.setItem('num13', num13);
    localStorage.setItem('num14', num14);
    //#
    localStorage.setItem('num15', num15);
    localStorage.setItem('num16', num16);
    localStorage.setItem('num17', num17);
    localStorage.setItem('num18', num18);

    localStorage.setItem('soma', soma);
}



function carregarValores() {
    // Carrega os valores salvos no localStorage
    const num1 = localStorage.getItem('num1') || 0;
    const num2 = localStorage.getItem('num2') || 0;
    const num3 = localStorage.getItem('num3') || 0;
    const num4 = localStorage.getItem('num4') || 0;
    const num5 = localStorage.getItem('num5') || 0;
    const num6 = localStorage.getItem('num6') || 0;
    const num7 = localStorage.getItem('num7') || 0;
    const num8 = localStorage.getItem('num8') || 0;
    const num9 = localStorage.getItem('num9') || 0;
    const num10 = localStorage.getItem('num10') || 0;
    const num11 = localStorage.getItem('num11') || 0;
    const num12 = localStorage.getItem('num12') || 0;
    const num13 = localStorage.getItem('num13') || 0;
    const num14 = localStorage.getItem('num14') || 0;
    //#
    const num15 = localStorage.getItem('num15') || 0;
    const num16 = localStorage.getItem('num16') || 0;
    const num17 = localStorage.getItem('num17') || 0;
    const num18 = localStorage.getItem('num18') || 0;
    
    const soma = localStorage.getItem('soma') || 0;

    // Atualiza os campos de entrada e o resultado com os valores salvos
    document.getElementById('num1').value = num1;
    document.getElementById('num2').value = num2;
    document.getElementById('num3').value = num3;
    document.getElementById('num4').value = num4;
    document.getElementById('num5').value = num5;
    document.getElementById('num6').value = num6;
    document.getElementById('num7').value = num7;
    document.getElementById('num8').value = num8;
    document.getElementById('num9').value = num9;
    document.getElementById('num10').value = num10;
    document.getElementById('num11').value = num11;
    document.getElementById('num12').value = num12;
    document.getElementById('num13').value = num13;
    document.getElementById('num14').value = num14;
    //#
    document.getElementById('num15').value = num15;
    document.getElementById('num16').value = num16;
    document.getElementById('num17').value = num17;
    document.getElementById('num18').value = num18;
    document.getElementById('resultado').textContent = soma;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;
const votos = localStorage.getItem('soma');
const s2 = localStorage.getItem('num1');
const s13 = localStorage.getItem('num2');
const s15 = localStorage.getItem('num3');
const s18 = localStorage.getItem('num4');
const s19 = localStorage.getItem('num5');
const s12 = localStorage.getItem('num6');
const s17 = localStorage.getItem('num7');
const s6 = localStorage.getItem('num8');
const s4 = localStorage.getItem('num9');
const s9 = localStorage.getItem('num10');
const s1 = localStorage.getItem('num11');
const s3 = localStorage.getItem('num12');
const s7 = localStorage.getItem('num13');
const s8 = localStorage.getItem('num14');
//#
const sa = localStorage.getItem('num15');
const sb = localStorage.getItem('num16');
const sc = localStorage.getItem('num17');
const sd = localStorage.getItem('num18');

document.getElementById('neco').textContent = votos;
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
//#;
document.getElementById('sa').textContent = sa;
document.getElementById('sb').textContent = sb;
document.getElementById('sc').textContent = sc;
document.getElementById('sd').textContent = sd;