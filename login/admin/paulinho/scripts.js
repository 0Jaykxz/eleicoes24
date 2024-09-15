function calcularSoma() {
    const statueOfLiberty = parseFloat(document.getElementById('num1').value) || 0;
    const grandCanyon = parseFloat(document.getElementById('num2').value) || 0;
    const yellowstone = parseFloat(document.getElementById('num3').value) || 0;
    const yosemite = parseFloat(document.getElementById('num4').value) || 0;
    const mountRushmore = parseFloat(document.getElementById('num5').value) || 0;
    const niagaraFalls = parseFloat(document.getElementById('num6').value) || 0;
    const goldenGateBridge = parseFloat(document.getElementById('num7').value) || 0;
    const hollywoodSign = parseFloat(document.getElementById('num8').value) || 0;
    const centralPark = parseFloat(document.getElementById('num9').value) || 0;
    const whiteHouse = parseFloat(document.getElementById('num10').value) || 0;
    const lasVegasStrip = parseFloat(document.getElementById('num11').value) || 0;
    const disneyWorld = parseFloat(document.getElementById('num12').value) || 0;
    const timesSquare = parseFloat(document.getElementById('num13').value) || 0;
    const spaceNeedle = parseFloat(document.getElementById('num14').value) || 0;
    const somaPontosTuristicos = statueOfLiberty + grandCanyon + yellowstone + yosemite + mountRushmore + niagaraFalls + goldenGateBridge + hollywoodSign + centralPark + whiteHouse + lasVegasStrip + disneyWorld + timesSquare + spaceNeedle;

    // Atualiza o resultado na página
    document.getElementById('resultado').textContent = somaPontosTuristicos;

    // Salva os valores no localStorage
    localStorage.setItem('statueOfLiberty', statueOfLiberty);
    localStorage.setItem('grandCanyon', grandCanyon);
    localStorage.setItem('yellowstone', yellowstone);
    localStorage.setItem('yosemite', yosemite);
    localStorage.setItem('mountRushmore', mountRushmore);
    localStorage.setItem('niagaraFalls', niagaraFalls);
    localStorage.setItem('goldenGateBridge', goldenGateBridge);
    localStorage.setItem('hollywoodSign', hollywoodSign);
    localStorage.setItem('centralPark', centralPark);
    localStorage.setItem('whiteHouse', whiteHouse);
    localStorage.setItem('lasVegasStrip', lasVegasStrip);
    localStorage.setItem('disneyWorld', disneyWorld);
    localStorage.setItem('timesSquare', timesSquare);
    localStorage.setItem('spaceNeedle', spaceNeedle);
    localStorage.setItem('somaPontosTuristicos', somaPontosTuristicos);
}

function carregarValores() {
    // Carrega os valores salvos no localStorage
    const statueOfLiberty = localStorage.getItem('statueOfLiberty') || 0;
    const grandCanyon = localStorage.getItem('grandCanyon') || 0;
    const yellowstone = localStorage.getItem('yellowstone') || 0;
    const yosemite = localStorage.getItem('yosemite') || 0;
    const mountRushmore = localStorage.getItem('mountRushmore') || 0;
    const niagaraFalls = localStorage.getItem('niagaraFalls') || 0;
    const goldenGateBridge = localStorage.getItem('goldenGateBridge') || 0;
    const hollywoodSign = localStorage.getItem('hollywoodSign') || 0;
    const centralPark = localStorage.getItem('centralPark') || 0;
    const whiteHouse = localStorage.getItem('whiteHouse') || 0;
    const lasVegasStrip = localStorage.getItem('lasVegasStrip') || 0;
    const disneyWorld = localStorage.getItem('disneyWorld') || 0;
    const timesSquare = localStorage.getItem('timesSquare') || 0;
    const spaceNeedle = localStorage.getItem('spaceNeedle') || 0;
    const somaPontosTuristicos = localStorage.getItem('somaPontosTuristicos') || 0;

    // Atualiza os campos de entrada e o resultado com os valores salvos
    document.getElementById('num1').value = statueOfLiberty;
    document.getElementById('num2').value = grandCanyon;
    document.getElementById('num3').value = yellowstone;
    document.getElementById('num4').value = yosemite;
    document.getElementById('num5').value = mountRushmore;
    document.getElementById('num6').value = niagaraFalls;
    document.getElementById('num7').value = goldenGateBridge;
    document.getElementById('num8').value = hollywoodSign;
    document.getElementById('num9').value = centralPark;
    document.getElementById('num10').value = whiteHouse;
    document.getElementById('num11').value = lasVegasStrip;
    document.getElementById('num12').value = disneyWorld;
    document.getElementById('num13').value = timesSquare;
    document.getElementById('num14').value = spaceNeedle;
    document.getElementById('resultado').textContent = somaPontosTuristicos;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;

const totalPontosTuristicos = localStorage.getItem('somaPontosTuristicos');
const votoStatueOfLiberty = localStorage.getItem('statueOfLiberty');
const votoGrandCanyon = localStorage.getItem('grandCanyon');
const votoYellowstone = localStorage.getItem('yellowstone');
const votoYosemite = localStorage.getItem('yosemite');
const votoMountRushmore = localStorage.getItem('mountRushmore');
const votoNiagaraFalls = localStorage.getItem('niagaraFalls');
const votoGoldenGateBridge = localStorage.getItem('goldenGateBridge');
const votoHollywoodSign = localStorage.getItem('hollywoodSign');
const votoCentralPark = localStorage.getItem('centralPark');
const votoWhiteHouse = localStorage.getItem('whiteHouse');
const votoLasVegasStrip = localStorage.getItem('lasVegasStrip');
const votoDisneyWorld = localStorage.getItem('disneyWorld');
const votoTimesSquare = localStorage.getItem('timesSquare');
const votoSpaceNeedle = localStorage.getItem('spaceNeedle');

document.getElementById('x').textContent = totalPontosTuristicos;
document.getElementById('s2').textContent = votoStatueOfLiberty;
document.getElementById('s13').textContent = votoGrandCanyon;
document.getElementById('s15').textContent = votoYellowstone;
document.getElementById('s18').textContent = votoYosemite;
document.getElementById('s19').textContent = votoMountRushmore;
document.getElementById('s12').textContent = votoNiagaraFalls;
document.getElementById('s17').textContent = votoGoldenGateBridge;
document.getElementById('s6').textContent = votoHollywoodSign;
document.getElementById('s4').textContent = votoCentralPark;
document.getElementById('s9').textContent = votoWhiteHouse;
document.getElementById('s1').textContent = votoLasVegasStrip;
document.getElementById('s3').textContent = votoDisneyWorld;
document.getElementById('s7').textContent = votoTimesSquare;
document.getElementById('s8').textContent = votoSpaceNeedle;
