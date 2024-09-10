function calcularSoma() {
    const girassol = parseFloat(document.getElementById('num1').value) || 0;
    const tulipa = parseFloat(document.getElementById('num2').value) || 0;
    const rosa = parseFloat(document.getElementById('num3').value) || 0;
    const margarida = parseFloat(document.getElementById('num4').value) || 0;
    const orquidea = parseFloat(document.getElementById('num5').value) || 0;
    const lirio = parseFloat(document.getElementById('num6').value) || 0;
    const jasmim = parseFloat(document.getElementById('num7').value) || 0;
    const violeta = parseFloat(document.getElementById('num8').value) || 0;
    const hortensia = parseFloat(document.getElementById('num9').value) || 0;
    const lavanda = parseFloat(document.getElementById('num10').value) || 0;
    const begonia = parseFloat(document.getElementById('num11').value) || 0;
    const alecrim = parseFloat(document.getElementById('num12').value) || 0;
    const manjericao = parseFloat(document.getElementById('num13').value) || 0;
    const camomila = parseFloat(document.getElementById('num14').value) || 0;
    const somaPlantas = girassol + tulipa + rosa + margarida + orquidea + lirio + jasmim + violeta + hortensia + lavanda + begonia + alecrim + manjericao + camomila;
    
    // Atualiza o resultado na página
    document.getElementById('resultado').textContent = somaPlantas;
    
    // Salva os valores no localStorage
    localStorage.setItem('girassol', girassol);
    localStorage.setItem('tulipa', tulipa);
    localStorage.setItem('rosa', rosa);
    localStorage.setItem('margarida', margarida);
    localStorage.setItem('orquidea', orquidea);
    localStorage.setItem('lirio', lirio);
    localStorage.setItem('jasmim', jasmim);
    localStorage.setItem('violeta', violeta);
    localStorage.setItem('hortensia', hortensia);
    localStorage.setItem('lavanda', lavanda);
    localStorage.setItem('begonia', begonia);
    localStorage.setItem('alecrim', alecrim);
    localStorage.setItem('manjericao', manjericao);
    localStorage.setItem('camomila', camomila);
    localStorage.setItem('somaPlantas', somaPlantas);
}

function carregarValores() {
    // Carrega os valores salvos no localStorage
    const girassol = localStorage.getItem('girassol') || 0;
    const tulipa = localStorage.getItem('tulipa') || 0;
    const rosa = localStorage.getItem('rosa') || 0;
    const margarida = localStorage.getItem('margarida') || 0;
    const orquidea = localStorage.getItem('orquidea') || 0;
    const lirio = localStorage.getItem('lirio') || 0;
    const jasmim = localStorage.getItem('jasmim') || 0;
    const violeta = localStorage.getItem('violeta') || 0;
    const hortensia = localStorage.getItem('hortensia') || 0;
    const lavanda = localStorage.getItem('lavanda') || 0;
    const begonia = localStorage.getItem('begonia') || 0;
    const alecrim = localStorage.getItem('alecrim') || 0;
    const manjericao = localStorage.getItem('manjericao') || 0;
    const camomila = localStorage.getItem('camomila') || 0;
    const somaPlantas = localStorage.getItem('somaPlantas') || 0;

    // Atualiza os campos de entrada e o resultado com os valores salvos
    document.getElementById('num1').value = girassol;
    document.getElementById('num2').value = tulipa;
    document.getElementById('num3').value = rosa;
    document.getElementById('num4').value = margarida;
    document.getElementById('num5').value = orquidea;
    document.getElementById('num6').value = lirio;
    document.getElementById('num7').value = jasmim;
    document.getElementById('num8').value = violeta;
    document.getElementById('num9').value = hortensia;
    document.getElementById('num10').value = lavanda;
    document.getElementById('num11').value = begonia;
    document.getElementById('num12').value = alecrim;
    document.getElementById('num13').value = manjericao;
    document.getElementById('num14').value = camomila;
    document.getElementById('resultado').textContent = somaPlantas;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;

const totalPlantas = localStorage.getItem('somaPlantas');
const votoGirassol = localStorage.getItem('girassol');
const votoTulipa = localStorage.getItem('tulipa');
const votoRosa = localStorage.getItem('rosa');
const votoMargarida = localStorage.getItem('margarida');
const votoOrquidea = localStorage.getItem('orquidea');
const votoLirio = localStorage.getItem('lirio');
const votoJasmim = localStorage.getItem('jasmim');
const votoVioleta = localStorage.getItem('violeta');
const votoHortensia = localStorage.getItem('hortensia');
const votoLavanda = localStorage.getItem('lavanda');
const votoBegonia = localStorage.getItem('begonia');
const votoAlecrim = localStorage.getItem('alecrim');
const votoManjericao = localStorage.getItem('manjericao');
const votoCamomila = localStorage.getItem('camomila');

document.getElementById('beti').textContent = totalPlantas;
document.getElementById('s2').textContent = votoGirassol;
document.getElementById('s13').textContent = votoTulipa;
document.getElementById('s15').textContent = votoRosa;
document.getElementById('s18').textContent = votoMargarida;
document.getElementById('s19').textContent = votoOrquidea;
document.getElementById('s12').textContent = votoLirio;
document.getElementById('s17').textContent = votoJasmim;
document.getElementById('s6').textContent = votoVioleta; 
document.getElementById('s4').textContent = votoHortensia; 
document.getElementById('s9').textContent = votoLavanda; 
document.getElementById('s1').textContent = votoBegonia; 
document.getElementById('s3').textContent = votoAlecrim; 
document.getElementById('s7').textContent = votoManjericao; 
document.getElementById('s8').textContent = votoCamomila;