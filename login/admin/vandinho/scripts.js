function calcularSoma() {
    const brasil = parseFloat(document.getElementById('num1').value) || 0;
    const eua = parseFloat(document.getElementById('num2').value) || 0;
    const canada = parseFloat(document.getElementById('num3').value) || 0;
    const japao = parseFloat(document.getElementById('num4').value) || 0;
    const alemanha = parseFloat(document.getElementById('num5').value) || 0;
    const italia = parseFloat(document.getElementById('num6').value) || 0;
    const franca = parseFloat(document.getElementById('num7').value) || 0;
    const espanha = parseFloat(document.getElementById('num8').value) || 0;
    const australia = parseFloat(document.getElementById('num9').value) || 0;
    const argentina = parseFloat(document.getElementById('num10').value) || 0;
    const china = parseFloat(document.getElementById('num11').value) || 0;
    const india = parseFloat(document.getElementById('num12').value) || 0;
    const russia = parseFloat(document.getElementById('num13').value) || 0;
    const mexico = parseFloat(document.getElementById('num14').value) || 0;
    const somaPaises = brasil + eua + canada + japao + alemanha + italia + franca + espanha + australia + argentina + china + india + russia + mexico;
    
    // Atualiza o resultado na página
    document.getElementById('resultado').textContent = somaPaises;
    
    // Salva os valores no localStorage
    localStorage.setItem('brasil', brasil);
    localStorage.setItem('eua', eua);
    localStorage.setItem('canada', canada);
    localStorage.setItem('japao', japao);
    localStorage.setItem('alemanha', alemanha);
    localStorage.setItem('italia', italia);
    localStorage.setItem('franca', franca);
    localStorage.setItem('espanha', espanha);
    localStorage.setItem('australia', australia);
    localStorage.setItem('argentina', argentina);
    localStorage.setItem('china', china);
    localStorage.setItem('india', india);
    localStorage.setItem('russia', russia);
    localStorage.setItem('mexico', mexico);
    localStorage.setItem('somaPaises', somaPaises);
}

function carregarValores() {
    // Carrega os valores salvos no localStorage
    const brasil = localStorage.getItem('brasil') || 0;
    const eua = localStorage.getItem('eua') || 0;
    const canada = localStorage.getItem('canada') || 0;
    const japao = localStorage.getItem('japao') || 0;
    const alemanha = localStorage.getItem('alemanha') || 0;
    const italia = localStorage.getItem('italia') || 0;
    const franca = localStorage.getItem('franca') || 0;
    const espanha = localStorage.getItem('espanha') || 0;
    const australia = localStorage.getItem('australia') || 0;
    const argentina = localStorage.getItem('argentina') || 0;
    const china = localStorage.getItem('china') || 0;
    const india = localStorage.getItem('india') || 0;
    const russia = localStorage.getItem('russia') || 0;
    const mexico = localStorage.getItem('mexico') || 0;
    const somaPaises = localStorage.getItem('somaPaises') || 0;

    // Atualiza os campos de entrada e o resultado com os valores salvos
    document.getElementById('num1').value = brasil;
    document.getElementById('num2').value = eua;
    document.getElementById('num3').value = canada;
    document.getElementById('num4').value = japao;
    document.getElementById('num5').value = alemanha;
    document.getElementById('num6').value = italia;
    document.getElementById('num7').value = franca;
    document.getElementById('num8').value = espanha;
    document.getElementById('num9').value = australia;
    document.getElementById('num10').value = argentina;
    document.getElementById('num11').value = china;
    document.getElementById('num12').value = india;
    document.getElementById('num13').value = russia;
    document.getElementById('num14').value = mexico;
    document.getElementById('resultado').textContent = somaPaises;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;

const totalPaises = localStorage.getItem('somaPaises');
const votoBrasil = localStorage.getItem('brasil');
const votoEua = localStorage.getItem('eua');
const votoCanada = localStorage.getItem('canada');
const votoJapao = localStorage.getItem('japao');
const votoAlemanha = localStorage.getItem('alemanha');
const votoItalia = localStorage.getItem('italia');
const votoFranca = localStorage.getItem('franca');
const votoEspanha = localStorage.getItem('espanha');
const votoAustralia = localStorage.getItem('australia');
const votoArgentina = localStorage.getItem('argentina');
const votoChina = localStorage.getItem('china');
const votoIndia = localStorage.getItem('india');
const votoRussia = localStorage.getItem('russia');
const votoMexico = localStorage.getItem('mexico');

document.getElementById('x').textContent = totalPaises;
document.getElementById('s2').textContent = votoBrasil;
document.getElementById('s13').textContent = votoEua;
document.getElementById('s15').textContent = votoCanada;
document.getElementById('s18').textContent = votoJapao;
document.getElementById('s19').textContent = votoAlemanha;
document.getElementById('s12').textContent = votoItalia;
document.getElementById('s17').textContent = votoFranca;
document.getElementById('s6').textContent = votoEspanha;
document.getElementById('s4').textContent = votoAustralia;
document.getElementById('s9').textContent = votoArgentina;
document.getElementById('s1').textContent = votoChina;
document.getElementById('s3').textContent = votoIndia;
document.getElementById('s7').textContent = votoRussia;
document.getElementById('s8').textContent = votoMexico;
