function calcularSoma() {
    const anum1 = parseFloat(document.getElementById('num1').value) || 0;
    const anum2 = parseFloat(document.getElementById('num2').value) || 0;
    const anum3 = parseFloat(document.getElementById('num3').value) || 0;
    const anum4 = parseFloat(document.getElementById('num4').value) || 0;
    const anum5 = parseFloat(document.getElementById('num5').value) || 0;
    const anum6 = parseFloat(document.getElementById('num6').value) || 0;
    const anum7 = parseFloat(document.getElementById('num7').value) || 0;
    const anum8 = parseFloat(document.getElementById('num8').value) || 0;
    const anum9 = parseFloat(document.getElementById('num9').value) || 0;
    const anum10 = parseFloat(document.getElementById('num10').value) || 0;
    const anum11 = parseFloat(document.getElementById('num11').value) || 0;
    const anum12 = parseFloat(document.getElementById('num12').value) || 0;
    const anum13 = parseFloat(document.getElementById('num13').value) || 0;
    const anum14 = parseFloat(document.getElementById('num14').value) || 0;
    const asoma = anum1 + anum2 + anum3 + anum4 + anum5 + anum6 + anum7 + anum8 + anum9 + anum10 + anum11 + anum12 + anum13 + anum14;
    // Atualiza o resultado na página
    document.getElementById('resultado').textContent = asoma;
    // Salva os valores no localStorage
    localStorage.setItem('anum1', anum1);
    localStorage.setItem('anum2', anum2);
    localStorage.setItem('anum3', anum3);
    localStorage.setItem('anum4', anum4);
    localStorage.setItem('anum5', anum5);
    localStorage.setItem('anum6', anum6);
    localStorage.setItem('anum7', anum7);
    localStorage.setItem('anum8', anum8);
    localStorage.setItem('anum9', anum9);
    localStorage.setItem('anum10', anum10);
    localStorage.setItem('anum11', anum11);
    localStorage.setItem('anum12', anum12);
    localStorage.setItem('anum13', anum13);
    localStorage.setItem('anum14', anum14);
    localStorage.setItem('asoma', asoma);
}



function carregarValores() {
    // Carrega os valores salvos no localStorage
    const anum1 = localStorage.getItem('anum1') || 0;
    const anum3 = localStorage.getItem('anum3') || 0;
    const anum2 = localStorage.getItem('anum2') || 0;
    const anum4 = localStorage.getItem('anum4') || 0;
    const anum5 = localStorage.getItem('anum5') || 0;
    const anum6 = localStorage.getItem('anum6') || 0;
    const anum7 = localStorage.getItem('anum7') || 0;
    const anum8 = localStorage.getItem('anum8') || 0;
    const anum9 = localStorage.getItem('anum9') || 0;
    const anum10 = localStorage.getItem('anum10') || 0;
    const anum11 = localStorage.getItem('anum11') || 0;
    const anum12 = localStorage.getItem('anum12') || 0;
    const anum13 = localStorage.getItem('anum13') || 0;
    const anum14 = localStorage.getItem('anum14') || 0;
    const asoma = localStorage.getItem('asoma') || 0;

    // Atualiza os campos de entrada e o resultado com os valores salvos
    document.getElementById('num1').value = anum1;
    document.getElementById('num2').value = anum2;
    document.getElementById('num3').value = anum3;
    document.getElementById('num4').value = anum4;
    document.getElementById('num5').value = anum5;
    document.getElementById('num6').value = anum6;
    document.getElementById('num7').value = anum7;
    document.getElementById('num8').value = anum8;
    document.getElementById('num9').value = anum9;
    document.getElementById('num10').value = anum10;
    document.getElementById('num11').value = anum11;
    document.getElementById('num12').value = anum12;
    document.getElementById('num13').value = anum13;
    document.getElementById('num14').value = anum14;
    document.getElementById('resultado').textContent = asoma;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;
const avotos = localStorage.getItem('asoma');
const as2 = localStorage.getItem('anum1');
const as13 = localStorage.getItem('anum2');
const as15 = localStorage.getItem('anum3');
const as18 = localStorage.getItem('anum4');
const as19 = localStorage.getItem('anum5');
const as12 = localStorage.getItem('anum6');
const as17 = localStorage.getItem('anum7');
const as6 = localStorage.getItem('anum8');
const as4 = localStorage.getItem('anum9');
const as9 = localStorage.getItem('anum10');
const as1 = localStorage.getItem('anum11');
const as3 = localStorage.getItem('anum12');
const as7 = localStorage.getItem('anum13');
const as8 = localStorage.getItem('anum14');

document.getElementById('mosca').textContent = avotos;
document.getElementById('s2').textContent = as2;
document.getElementById('s13').textContent = as13;
document.getElementById('s15').textContent = as15;
document.getElementById('s18').textContent = as18;
document.getElementById('s19').textContent = as19;
document.getElementById('s12').textContent = as12;
document.getElementById('s17').textContent = as17;
document.getElementById('s6').textContent = as6;
document.getElementById('s4').textContent = as4;
document.getElementById('s9').textContent = as9;
document.getElementById('s1').textContent = as1;
document.getElementById('s3').textContent = as3;
document.getElementById('s7').textContent = as7;
document.getElementById('s8').textContent = as8;