function calcularSoma() {
    const superman = parseFloat(document.getElementById('num1').value) || 0;
    const batman = parseFloat(document.getElementById('num2').value) || 0;
    const wonderWoman = parseFloat(document.getElementById('num3').value) || 0;
    const flash = parseFloat(document.getElementById('num4').value) || 0;
    const aquaman = parseFloat(document.getElementById('num5').value) || 0;
    const greenLantern = parseFloat(document.getElementById('num6').value) || 0;
    const martianManhunter = parseFloat(document.getElementById('num7').value) || 0;
    const cyborg = parseFloat(document.getElementById('num8').value) || 0;
    const greenArrow = parseFloat(document.getElementById('num9').value) || 0;
    const hawkman = parseFloat(document.getElementById('num10').value) || 0;
    const blackCanary = parseFloat(document.getElementById('num11').value) || 0;
    const shazam = parseFloat(document.getElementById('num12').value) || 0;
    const robin = parseFloat(document.getElementById('num13').value) || 0;
    const nightwing = parseFloat(document.getElementById('num14').value) || 0;
    const somaHerois = superman + batman + wonderWoman + flash + aquaman + greenLantern + martianManhunter + cyborg + greenArrow + hawkman + blackCanary + shazam + robin + nightwing;
    
    // Atualiza o resultado na página
    document.getElementById('resultado').textContent = somaHerois;
    
    // Salva os valores no localStorage
    localStorage.setItem('superman', superman);
    localStorage.setItem('batman', batman);
    localStorage.setItem('wonderWoman', wonderWoman);
    localStorage.setItem('flash', flash);
    localStorage.setItem('aquaman', aquaman);
    localStorage.setItem('greenLantern', greenLantern);
    localStorage.setItem('martianManhunter', martianManhunter);
    localStorage.setItem('cyborg', cyborg);
    localStorage.setItem('greenArrow', greenArrow);
    localStorage.setItem('hawkman', hawkman);
    localStorage.setItem('blackCanary', blackCanary);
    localStorage.setItem('shazam', shazam);
    localStorage.setItem('robin', robin);
    localStorage.setItem('nightwing', nightwing);
    localStorage.setItem('somaHerois', somaHerois);
}

function carregarValores() {
    // Carrega os valores salvos no localStorage
    const superman = localStorage.getItem('superman') || 0;
    const batman = localStorage.getItem('batman') || 0;
    const wonderWoman = localStorage.getItem('wonderWoman') || 0;
    const flash = localStorage.getItem('flash') || 0;
    const aquaman = localStorage.getItem('aquaman') || 0;
    const greenLantern = localStorage.getItem('greenLantern') || 0;
    const martianManhunter = localStorage.getItem('martianManhunter') || 0;
    const cyborg = localStorage.getItem('cyborg') || 0;
    const greenArrow = localStorage.getItem('greenArrow') || 0;
    const hawkman = localStorage.getItem('hawkman') || 0;
    const blackCanary = localStorage.getItem('blackCanary') || 0;
    const shazam = localStorage.getItem('shazam') || 0;
    const robin = localStorage.getItem('robin') || 0;
    const nightwing = localStorage.getItem('nightwing') || 0;
    const somaHerois = localStorage.getItem('somaHerois') || 0;

    // Atualiza os campos de entrada e o resultado com os valores salvos
    document.getElementById('num1').value = superman;
    document.getElementById('num2').value = batman;
    document.getElementById('num3').value = wonderWoman;
    document.getElementById('num4').value = flash;
    document.getElementById('num5').value = aquaman;
    document.getElementById('num6').value = greenLantern;
    document.getElementById('num7').value = martianManhunter;
    document.getElementById('num8').value = cyborg;
    document.getElementById('num9').value = greenArrow;
    document.getElementById('num10').value = hawkman;
    document.getElementById('num11').value = blackCanary;
    document.getElementById('num12').value = shazam;
    document.getElementById('num13').value = robin;
    document.getElementById('num14').value = nightwing;
    document.getElementById('resultado').textContent = somaHerois;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;

const totalHerois = localStorage.getItem('somaHerois');
const votoSuperman = localStorage.getItem('superman');
const votoBatman = localStorage.getItem('batman');
const votoWonderWoman = localStorage.getItem('wonderWoman');
const votoFlash = localStorage.getItem('flash');
const votoAquaman = localStorage.getItem('aquaman');
const votoGreenLantern = localStorage.getItem('greenLantern');
const votoMartianManhunter = localStorage.getItem('martianManhunter');
const votoCyborg = localStorage.getItem('cyborg');
const votoGreenArrow = localStorage.getItem('greenArrow');
const votoHawkman = localStorage.getItem('hawkman');
const votoBlackCanary = localStorage.getItem('blackCanary');
const votoShazam = localStorage.getItem('shazam');
const votoRobin = localStorage.getItem('robin');
const votoNightwing = localStorage.getItem('nightwing');

document.getElementById('x').textContent = totalHerois;
document.getElementById('s2').textContent = votoSuperman;
document.getElementById('s13').textContent = votoBatman;
document.getElementById('s15').textContent = votoWonderWoman;
document.getElementById('s18').textContent = votoFlash;
document.getElementById('s19').textContent = votoAquaman;
document.getElementById('s12').textContent = votoGreenLantern;
document.getElementById('s17').textContent = votoMartianManhunter;
document.getElementById('s6').textContent = votoCyborg;
document.getElementById('s4').textContent = votoGreenArrow;
document.getElementById('s9').textContent = votoHawkman;
document.getElementById('s1').textContent = votoBlackCanary;
document.getElementById('s3').textContent = votoShazam;
document.getElementById('s7').textContent = votoRobin;
document.getElementById('s8').textContent = votoNightwing;
