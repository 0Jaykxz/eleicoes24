function calcularSoma() {
    const privet = parseFloat(document.getElementById('num1').value) || 0;  // "Olá"
    const spasibo = parseFloat(document.getElementById('num2').value) || 0; // "Obrigado"
    const da = parseFloat(document.getElementById('num3').value) || 0;      // "Sim"
    const nyet = parseFloat(document.getElementById('num4').value) || 0;    // "Não"
    const pozhaluysta = parseFloat(document.getElementById('num5').value) || 0; // "Por favor"
    const dosvidaniya = parseFloat(document.getElementById('num6').value) || 0; // "Adeus"
    const vecher = parseFloat(document.getElementById('num7').value) || 0;  // "Noite"
    const utro = parseFloat(document.getElementById('num8').value) || 0;    // "Manhã"
    const voda = parseFloat(document.getElementById('num9').value) || 0;    // "Água"
    const chai = parseFloat(document.getElementById('num10').value) || 0;   // "Chá"
    const kasha = parseFloat(document.getElementById('num11').value) || 0;  // "Porridge"
    const khleb = parseFloat(document.getElementById('num12').value) || 0;  // "Pão"
    const dom = parseFloat(document.getElementById('num13').value) || 0;    // "Casa"
    const semya = parseFloat(document.getElementById('num14').value) || 0;  // "Família"
    const somaPalavras = privet + spasibo + da + nyet + pozhaluysta + dosvidaniya + vecher + utro + voda + chai + kasha + khleb + dom + semya;
    
    // Atualiza o resultado na página
    document.getElementById('resultado').textContent = somaPalavras;
    
    // Salva os valores no localStorage
    localStorage.setItem('privet', privet);
    localStorage.setItem('spasibo', spasibo);
    localStorage.setItem('da', da);
    localStorage.setItem('nyet', nyet);
    localStorage.setItem('pozhaluysta', pozhaluysta);
    localStorage.setItem('dosvidaniya', dosvidaniya);
    localStorage.setItem('vecher', vecher);
    localStorage.setItem('utro', utro);
    localStorage.setItem('voda', voda);
    localStorage.setItem('chai', chai);
    localStorage.setItem('kasha', kasha);
    localStorage.setItem('khleb', khleb);
    localStorage.setItem('dom', dom);
    localStorage.setItem('semya', semya);
    localStorage.setItem('somaPalavras', somaPalavras);
}

function carregarValores() {
    // Carrega os valores salvos no localStorage
    const privet = localStorage.getItem('privet') || 0;
    const spasibo = localStorage.getItem('spasibo') || 0;
    const da = localStorage.getItem('da') || 0;
    const nyet = localStorage.getItem('nyet') || 0;
    const pozhaluysta = localStorage.getItem('pozhaluysta') || 0;
    const dosvidaniya = localStorage.getItem('dosvidaniya') || 0;
    const vecher = localStorage.getItem('vecher') || 0;
    const utro = localStorage.getItem('utro') || 0;
    const voda = localStorage.getItem('voda') || 0;
    const chai = localStorage.getItem('chai') || 0;
    const kasha = localStorage.getItem('kasha') || 0;
    const khleb = localStorage.getItem('khleb') || 0;
    const dom = localStorage.getItem('dom') || 0;
    const semya = localStorage.getItem('semya') || 0;
    const somaPalavras = localStorage.getItem('somaPalavras') || 0;

    // Atualiza os campos de entrada e o resultado com os valores salvos
    document.getElementById('num1').value = privet;
    document.getElementById('num2').value = spasibo;
    document.getElementById('num3').value = da;
    document.getElementById('num4').value = nyet;
    document.getElementById('num5').value = pozhaluysta;
    document.getElementById('num6').value = dosvidaniya;
    document.getElementById('num7').value = vecher;
    document.getElementById('num8').value = utro;
    document.getElementById('num9').value = voda;
    document.getElementById('num10').value = chai;
    document.getElementById('num11').value = kasha;
    document.getElementById('num12').value = khleb;
    document.getElementById('num13').value = dom;
    document.getElementById('num14').value = semya;
    document.getElementById('resultado').textContent = somaPalavras;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;

const totalPalavras = localStorage.getItem('somaPalavras');
const votoPrivet = localStorage.getItem('privet');
const votoSpasibo = localStorage.getItem('spasibo');
const votoDa = localStorage.getItem('da');
const votoNyet = localStorage.getItem('nyet');
const votoPozhaluysta = localStorage.getItem('pozhaluysta');
const votoDosvidaniya = localStorage.getItem('dosvidaniya');
const votoVecher = localStorage.getItem('vecher');
const votoUtro = localStorage.getItem('utro');
const votoVoda = localStorage.getItem('voda');
const votoChai = localStorage.getItem('chai');
const votoKasha = localStorage.getItem('kasha');
const votoKhleb = localStorage.getItem('khleb');
const votoDom = localStorage.getItem('dom');
const votoSemya = localStorage.getItem('semya');

document.getElementById('x').textContent = totalPalavras;
document.getElementById('s2').textContent = votoPrivet;
document.getElementById('s13').textContent = votoSpasibo;
document.getElementById('s15').textContent = votoDa;
document.getElementById('s18').textContent = votoNyet;
document.getElementById('s19').textContent = votoPozhaluysta;
document.getElementById('s12').textContent = votoDosvidaniya;
document.getElementById('s17').textContent = votoVecher;
document.getElementById('s6').textContent = votoUtro;
document.getElementById('s4').textContent = votoVoda;
document.getElementById('s9').textContent = votoChai;
document.getElementById('s1').textContent = votoKasha;
document.getElementById('s3').textContent = votoKhleb;
document.getElementById('s7').textContent = votoDom;
document.getElementById('s8').textContent = votoSemya;
