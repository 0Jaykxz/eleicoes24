function calcularSoma() {
    const saoPaulo = parseFloat(document.getElementById('num1').value) || 0;
    const rioDeJaneiro = parseFloat(document.getElementById('num2').value) || 0;
    const brasilia = parseFloat(document.getElementById('num3').value) || 0;
    const salvador = parseFloat(document.getElementById('num4').value) || 0;
    const fortaleza = parseFloat(document.getElementById('num5').value) || 0;
    const beloHorizonte = parseFloat(document.getElementById('num6').value) || 0;
    const recife = parseFloat(document.getElementById('num7').value) || 0;
    const curitiba = parseFloat(document.getElementById('num8').value) || 0;
    const manaus = parseFloat(document.getElementById('num9').value) || 0;
    const goiania = parseFloat(document.getElementById('num10').value) || 0;
    const portoAlegre = parseFloat(document.getElementById('num11').value) || 0;
    const belem = parseFloat(document.getElementById('num12').value) || 0;
    const guarulhos = parseFloat(document.getElementById('num13').value) || 0;
    const campinas = parseFloat(document.getElementById('num14').value) || 0;
    const somaCidades = saoPaulo + rioDeJaneiro + brasilia + salvador + fortaleza + beloHorizonte + recife + curitiba + manaus + goiania + portoAlegre + belem + guarulhos + campinas;
    
    // Atualiza o resultado na página
    document.getElementById('resultado').textContent = somaCidades;
    
    // Salva os valores no localStorage
    localStorage.setItem('saoPaulo', saoPaulo);
    localStorage.setItem('rioDeJaneiro', rioDeJaneiro);
    localStorage.setItem('brasilia', brasilia);
    localStorage.setItem('salvador', salvador);
    localStorage.setItem('fortaleza', fortaleza);
    localStorage.setItem('beloHorizonte', beloHorizonte);
    localStorage.setItem('recife', recife);
    localStorage.setItem('curitiba', curitiba);
    localStorage.setItem('manaus', manaus);
    localStorage.setItem('goiania', goiania);
    localStorage.setItem('portoAlegre', portoAlegre);
    localStorage.setItem('belem', belem);
    localStorage.setItem('guarulhos', guarulhos);
    localStorage.setItem('campinas', campinas);
    localStorage.setItem('somaCidades', somaCidades);
}

function carregarValores() {
    // Carrega os valores salvos no localStorage
    const saoPaulo = localStorage.getItem('saoPaulo') || 0;
    const rioDeJaneiro = localStorage.getItem('rioDeJaneiro') || 0;
    const brasilia = localStorage.getItem('brasilia') || 0;
    const salvador = localStorage.getItem('salvador') || 0;
    const fortaleza = localStorage.getItem('fortaleza') || 0;
    const beloHorizonte = localStorage.getItem('beloHorizonte') || 0;
    const recife = localStorage.getItem('recife') || 0;
    const curitiba = localStorage.getItem('curitiba') || 0;
    const manaus = localStorage.getItem('manaus') || 0;
    const goiania = localStorage.getItem('goiania') || 0;
    const portoAlegre = localStorage.getItem('portoAlegre') || 0;
    const belem = localStorage.getItem('belem') || 0;
    const guarulhos = localStorage.getItem('guarulhos') || 0;
    const campinas = localStorage.getItem('campinas') || 0;
    const somaCidades = localStorage.getItem('somaCidades') || 0;

    // Atualiza os campos de entrada e o resultado com os valores salvos
    document.getElementById('num1').value = saoPaulo;
    document.getElementById('num2').value = rioDeJaneiro;
    document.getElementById('num3').value = brasilia;
    document.getElementById('num4').value = salvador;
    document.getElementById('num5').value = fortaleza;
    document.getElementById('num6').value = beloHorizonte;
    document.getElementById('num7').value = recife;
    document.getElementById('num8').value = curitiba;
    document.getElementById('num9').value = manaus;
    document.getElementById('num10').value = goiania;
    document.getElementById('num11').value = portoAlegre;
    document.getElementById('num12').value = belem;
    document.getElementById('num13').value = guarulhos;
    document.getElementById('num14').value = campinas;
    document.getElementById('resultado').textContent = somaCidades;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;

const totalCidades = localStorage.getItem('somaCidades');
const votoSaoPaulo = localStorage.getItem('saoPaulo');
const votoRioDeJaneiro = localStorage.getItem('rioDeJaneiro');
const votoBrasilia = localStorage.getItem('brasilia');
const votoSalvador = localStorage.getItem('salvador');
const votoFortaleza = localStorage.getItem('fortaleza');
const votoBeloHorizonte = localStorage.getItem('beloHorizonte');
const votoRecife = localStorage.getItem('recife');
const votoCuritiba = localStorage.getItem('curitiba');
const votoManaus = localStorage.getItem('manaus');
const votoGoiania = localStorage.getItem('goiania');
const votoPortoAlegre = localStorage.getItem('portoAlegre');
const votoBelem = localStorage.getItem('belem');
const votoGuarulhos = localStorage.getItem('guarulhos');
const votoCampinas = localStorage.getItem('campinas');

document.getElementById('x').textContent = totalCidades;
document.getElementById('s2').textContent = votoSaoPaulo;
document.getElementById('s13').textContent = votoRioDeJaneiro;
document.getElementById('s15').textContent = votoBrasilia;
document.getElementById('s18').textContent = votoSalvador;
document.getElementById('s19').textContent = votoFortaleza;
document.getElementById('s12').textContent = votoBeloHorizonte;
document.getElementById('s17').textContent = votoRecife;
document.getElementById('s6').textContent = votoCuritiba;
document.getElementById('s4').textContent = votoManaus;
document.getElementById('s9').textContent = votoGoiania;
document.getElementById('s1').textContent = votoPortoAlegre;
document.getElementById('s3').textContent = votoBelem;
document.getElementById('s7').textContent = votoGuarulhos;
document.getElementById('s8').textContent = votoCampinas;
