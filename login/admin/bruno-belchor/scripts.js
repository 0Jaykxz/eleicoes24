function calcularSoma() {
    const hallo = parseFloat(document.getElementById('num1').value) || 0;  // "Olá"
    const danke = parseFloat(document.getElementById('num2').value) || 0;  // "Obrigado"
    const ja = parseFloat(document.getElementById('num3').value) || 0;     // "Sim"
    const nein = parseFloat(document.getElementById('num4').value) || 0;   // "Não"
    const bitte = parseFloat(document.getElementById('num5').value) || 0;  // "Por favor"
    const tschuss = parseFloat(document.getElementById('num6').value) || 0; // "Tchau"
    const morgen = parseFloat(document.getElementById('num7').value) || 0; // "Manhã"
    const nacht = parseFloat(document.getElementById('num8').value) || 0;  // "Noite"
    const wasser = parseFloat(document.getElementById('num9').value) || 0; // "Água"
    const tee = parseFloat(document.getElementById('num10').value) || 0;   // "Chá"
    const brot = parseFloat(document.getElementById('num11').value) || 0;  // "Pão"
    const kaffee = parseFloat(document.getElementById('num12').value) || 0; // "Café"
    const haus = parseFloat(document.getElementById('num13').value) || 0;  // "Casa"
    const familie = parseFloat(document.getElementById('num14').value) || 0; // "Família"
    const salmão = parseFloat(document.getElementById('num15').value) || 0;
	const atum = parseFloat(document.getElementById('num16').value) || 0;
	const tilápia = parseFloat(document.getElementById('num17').value) || 0;
	const sardinha = parseFloat(document.getElementById('num18').value) || 0;
    const somaPala = hallo + danke + ja + nein + bitte + tschuss + morgen + nacht + wasser + tee + brot + kaffee + haus + familie + salmão + tilápia + sardinha + atum;
    
    // Atualiza o resultado na página
    document.getElementById('resultado').textContent = somaPala;
    
    // Salva os valores no localStorage
    localStorage.setItem('hallo', hallo);
    localStorage.setItem('danke', danke);
    localStorage.setItem('ja', ja);
    localStorage.setItem('nein', nein);
    localStorage.setItem('bitte', bitte);
    localStorage.setItem('tschuss', tschuss);
    localStorage.setItem('morgen', morgen);
    localStorage.setItem('nacht', nacht);
    localStorage.setItem('wasser', wasser);
    localStorage.setItem('tee', tee);
    localStorage.setItem('brot', brot);
    localStorage.setItem('kaffee', kaffee);
    localStorage.setItem('haus', haus);
    localStorage.setItem('familie', familie);
    localStorage.setItem('salmão', salmão);
	localStorage.setItem('atum', atum);
	localStorage.setItem('tilápia', tilápia);
	localStorage.setItem('sardinha', sardinha);
    localStorage.setItem('somaPala', somaPala);
}

function carregarValores() {
    // Carrega os valores salvos no localStorage
    const hallo = localStorage.getItem('hallo') || 0;
    const danke = localStorage.getItem('danke') || 0;
    const ja = localStorage.getItem('ja') || 0;
    const nein = localStorage.getItem('nein') || 0;
    const bitte = localStorage.getItem('bitte') || 0;
    const tschuss = localStorage.getItem('tschuss') || 0;
    const morgen = localStorage.getItem('morgen') || 0;
    const nacht = localStorage.getItem('nacht') || 0;
    const wasser = localStorage.getItem('wasser') || 0;
    const tee = localStorage.getItem('tee') || 0;
    const brot = localStorage.getItem('brot') || 0;
    const kaffee = localStorage.getItem('kaffee') || 0;
    const haus = localStorage.getItem('haus') || 0;
    const familie = localStorage.getItem('familie') || 0;
    const salmão = localStorage.getItem('salmão') || 0;
	const atum = localStorage.getItem('atum') || 0;
	const tilápia = localStorage.getItem('tilápia') || 0;
	const sardinha = localStorage.getItem('sardinha') || 0;
    const somaPala = localStorage.getItem('somaPala') || 0;
    

    // Atualiza os campos de entrada e o resultado com os valores salvos
    document.getElementById('num1').value = hallo;
    document.getElementById('num2').value = danke;
    document.getElementById('num3').value = ja;
    document.getElementById('num4').value = nein;
    document.getElementById('num5').value = bitte;
    document.getElementById('num6').value = tschuss;
    document.getElementById('num7').value = morgen;
    document.getElementById('num8').value = nacht;
    document.getElementById('num9').value = wasser;
    document.getElementById('num10').value = tee;
    document.getElementById('num11').value = brot;
    document.getElementById('num12').value = kaffee;
    document.getElementById('num13').value = haus;
    document.getElementById('num14').value = familie;
    document.getElementById('num15').value = salmão;
	document.getElementById('num16').value = atum;
	document.getElementById('num17').value = tilápia;
	document.getElementById('num18').value = sardinha;
    document.getElementById('resultado').textContent = somaPala;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;

const totalPala = localStorage.getItem('somaPala');
const votoHallo = localStorage.getItem('hallo');
const votoDanke = localStorage.getItem('danke');
const votoJa = localStorage.getItem('ja');
const votoNein = localStorage.getItem('nein');
const votoBitte = localStorage.getItem('bitte');
const votoTschuss = localStorage.getItem('tschuss');
const votoMorgen = localStorage.getItem('morgen');
const votoNacht = localStorage.getItem('nacht');
const votoWasser = localStorage.getItem('wasser');
const votoTee = localStorage.getItem('tee');
const votoBrot = localStorage.getItem('brot');
const votoKaffee = localStorage.getItem('kaffee');
const votoHaus = localStorage.getItem('haus');
const votoFamilie = localStorage.getItem('familie');
const sa = localStorage.getItem('salmão');
const sb = localStorage.getItem('atum');
const sc = localStorage.getItem('tilápia');
const sd = localStorage.getItem('sardinha');

document.getElementById('x').textContent = totalPala;
document.getElementById('s2').textContent = votoHallo;
document.getElementById('s13').textContent = votoDanke;
document.getElementById('s15').textContent = votoJa;
document.getElementById('s18').textContent = votoNein;
document.getElementById('s19').textContent = votoBitte;
document.getElementById('s12').textContent = votoTschuss;
document.getElementById('s17').textContent = votoMorgen;
document.getElementById('s6').textContent = votoNacht;
document.getElementById('s4').textContent = votoWasser;
document.getElementById('s9').textContent = votoTee;
document.getElementById('s1').textContent = votoBrot;
document.getElementById('s3').textContent = votoKaffee;
document.getElementById('s7').textContent = votoHaus;
document.getElementById('s8').textContent = votoFamilie;
document.getElementById('sa').textContent = sa;
document.getElementById('sb').textContent = sb;
document.getElementById('sc').textContent = sc;
document.getElementById('sd').textContent = sd;
