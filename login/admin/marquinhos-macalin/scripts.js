function calcularSoma() {
    const volga = parseFloat(document.getElementById('num1').value) || 0;
    const yenisei = parseFloat(document.getElementById('num2').value) || 0;
    const lena = parseFloat(document.getElementById('num3').value) || 0;
    const ob = parseFloat(document.getElementById('num4').value) || 0;
    const amur = parseFloat(document.getElementById('num5').value) || 0;
    const don = parseFloat(document.getElementById('num6').value) || 0;
    const kama = parseFloat(document.getElementById('num7').value) || 0;
    const pechora = parseFloat(document.getElementById('num8').value) || 0;
    const angara = parseFloat(document.getElementById('num9').value) || 0;
    const kolyma = parseFloat(document.getElementById('num10').value) || 0;
    const irtysh = parseFloat(document.getElementById('num11').value) || 0;
    const kuban = parseFloat(document.getElementById('num12').value) || 0;
    const oka = parseFloat(document.getElementById('num13').value) || 0;
    const dnieper = parseFloat(document.getElementById('num14').value) || 0;
    const somaRios = volga + yenisei + lena + ob + amur + don + kama + pechora + angara + kolyma + irtysh + kuban + oka + dnieper;
    
    // Atualiza o resultado na página
    document.getElementById('resultado').textContent = somaRios;
    
    // Salva os valores no localStorage
    localStorage.setItem('volga', volga);
    localStorage.setItem('yenisei', yenisei);
    localStorage.setItem('lena', lena);
    localStorage.setItem('ob', ob);
    localStorage.setItem('amur', amur);
    localStorage.setItem('don', don);
    localStorage.setItem('kama', kama);
    localStorage.setItem('pechora', pechora);
    localStorage.setItem('angara', angara);
    localStorage.setItem('kolyma', kolyma);
    localStorage.setItem('irtysh', irtysh);
    localStorage.setItem('kuban', kuban);
    localStorage.setItem('oka', oka);
    localStorage.setItem('dnieper', dnieper);
    localStorage.setItem('somaRios', somaRios);
}

function carregarValores() {
    // Carrega os valores salvos no localStorage
    const volga = localStorage.getItem('volga') || 0;
    const yenisei = localStorage.getItem('yenisei') || 0;
    const lena = localStorage.getItem('lena') || 0;
    const ob = localStorage.getItem('ob') || 0;
    const amur = localStorage.getItem('amur') || 0;
    const don = localStorage.getItem('don') || 0;
    const kama = localStorage.getItem('kama') || 0;
    const pechora = localStorage.getItem('pechora') || 0;
    const angara = localStorage.getItem('angara') || 0;
    const kolyma = localStorage.getItem('kolyma') || 0;
    const irtysh = localStorage.getItem('irtysh') || 0;
    const kuban = localStorage.getItem('kuban') || 0;
    const oka = localStorage.getItem('oka') || 0;
    const dnieper = localStorage.getItem('dnieper') || 0;
    const somaRios = localStorage.getItem('somaRios') || 0;

    // Atualiza os campos de entrada e o resultado com os valores salvos
    document.getElementById('num1').value = volga;
    document.getElementById('num2').value = yenisei;
    document.getElementById('num3').value = lena;
    document.getElementById('num4').value = ob;
    document.getElementById('num5').value = amur;
    document.getElementById('num6').value = don;
    document.getElementById('num7').value = kama;
    document.getElementById('num8').value = pechora;
    document.getElementById('num9').value = angara;
    document.getElementById('num10').value = kolyma;
    document.getElementById('num11').value = irtysh;
    document.getElementById('num12').value = kuban;
    document.getElementById('num13').value = oka;
    document.getElementById('num14').value = dnieper;
    document.getElementById('resultado').textContent = somaRios;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;

const totalRios = localStorage.getItem('somaRios');
const votoVolga = localStorage.getItem('volga');
const votoYenisei = localStorage.getItem('yenisei');
const votoLena = localStorage.getItem('lena');
const votoOb = localStorage.getItem('ob');
const votoAmur = localStorage.getItem('amur');
const votoDon = localStorage.getItem('don');
const votoKama = localStorage.getItem('kama');
const votoPechora = localStorage.getItem('pechora');
const votoAngara = localStorage.getItem('angara');
const votoKolyma = localStorage.getItem('kolyma');
const votoIrtysh = localStorage.getItem('irtysh');
const votoKuban = localStorage.getItem('kuban');
const votoOka = localStorage.getItem('oka');
const votoDnieper = localStorage.getItem('dnieper');

document.getElementById('x').textContent = totalRios;
document.getElementById('s2').textContent = votoVolga;
document.getElementById('s13').textContent = votoYenisei;
document.getElementById('s15').textContent = votoLena;
document.getElementById('s18').textContent = votoOb;
document.getElementById('s19').textContent = votoAmur;
document.getElementById('s12').textContent = votoDon;
document.getElementById('s17').textContent = votoKama;
document.getElementById('s6').textContent = votoPechora;
document.getElementById('s4').textContent = votoAngara;
document.getElementById('s9').textContent = votoKolyma;
document.getElementById('s1').textContent = votoIrtysh;
document.getElementById('s3').textContent = votoKuban;
document.getElementById('s7').textContent = votoOka;
document.getElementById('s8').textContent = votoDnieper;
