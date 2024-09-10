function calcularSoma() {
    const monaLisa = parseFloat(document.getElementById('num1').value) || 0;
    const starryNight = parseFloat(document.getElementById('num2').value) || 0;
    const persistenceOfMemory = parseFloat(document.getElementById('num3').value) || 0;
    const scream = parseFloat(document.getElementById('num4').value) || 0;
    const girlWithAPearlEarring = parseFloat(document.getElementById('num5').value) || 0;
    const nightHawks = parseFloat(document.getElementById('num6').value) || 0;
    const birthOfVenus = parseFloat(document.getElementById('num7').value) || 0;
    const creationOfAdam = parseFloat(document.getElementById('num8').value) || 0;
    const theKiss = parseFloat(document.getElementById('num9').value) || 0;
    const theLastSupper = parseFloat(document.getElementById('num10').value) || 0;
    const waterLilies = parseFloat(document.getElementById('num11').value) || 0;
    const theSchoolOfAthens = parseFloat(document.getElementById('num12').value) || 0;
    const americanGothic = parseFloat(document.getElementById('num13').value) || 0;
    const theBirthOfVenus = parseFloat(document.getElementById('num14').value) || 0;
    const somaArtes = monaLisa + starryNight + persistenceOfMemory + scream + girlWithAPearlEarring + nightHawks + birthOfVenus + creationOfAdam + theKiss + theLastSupper + waterLilies + theSchoolOfAthens + americanGothic + theBirthOfVenus;
    
    // Atualiza o resultado na página
    document.getElementById('resultado').textContent = somaArtes;
    
    // Salva os valores no localStorage
    localStorage.setItem('monaLisa', monaLisa);
    localStorage.setItem('starryNight', starryNight);
    localStorage.setItem('persistenceOfMemory', persistenceOfMemory);
    localStorage.setItem('scream', scream);
    localStorage.setItem('girlWithAPearlEarring', girlWithAPearlEarring);
    localStorage.setItem('nightHawks', nightHawks);
    localStorage.setItem('birthOfVenus', birthOfVenus);
    localStorage.setItem('creationOfAdam', creationOfAdam);
    localStorage.setItem('theKiss', theKiss);
    localStorage.setItem('theLastSupper', theLastSupper);
    localStorage.setItem('waterLilies', waterLilies);
    localStorage.setItem('theSchoolOfAthens', theSchoolOfAthens);
    localStorage.setItem('americanGothic', americanGothic);
    localStorage.setItem('theBirthOfVenus', theBirthOfVenus);
    localStorage.setItem('somaArtes', somaArtes);
}

function carregarValores() {
    // Carrega os valores salvos no localStorage
    const monaLisa = localStorage.getItem('monaLisa') || 0;
    const starryNight = localStorage.getItem('starryNight') || 0;
    const persistenceOfMemory = localStorage.getItem('persistenceOfMemory') || 0;
    const scream = localStorage.getItem('scream') || 0;
    const girlWithAPearlEarring = localStorage.getItem('girlWithAPearlEarring') || 0;
    const nightHawks = localStorage.getItem('nightHawks') || 0;
    const birthOfVenus = localStorage.getItem('birthOfVenus') || 0;
    const creationOfAdam = localStorage.getItem('creationOfAdam') || 0;
    const theKiss = localStorage.getItem('theKiss') || 0;
    const theLastSupper = localStorage.getItem('theLastSupper') || 0;
    const waterLilies = localStorage.getItem('waterLilies') || 0;
    const theSchoolOfAthens = localStorage.getItem('theSchoolOfAthens') || 0;
    const americanGothic = localStorage.getItem('americanGothic') || 0;
    const theBirthOfVenus = localStorage.getItem('theBirthOfVenus') || 0;
    const somaArtes = localStorage.getItem('somaArtes') || 0;

    // Atualiza os campos de entrada e o resultado com os valores salvos
    document.getElementById('num1').value = monaLisa;
    document.getElementById('num2').value = starryNight;
    document.getElementById('num3').value = persistenceOfMemory;
    document.getElementById('num4').value = scream;
    document.getElementById('num5').value = girlWithAPearlEarring;
    document.getElementById('num6').value = nightHawks;
    document.getElementById('num7').value = birthOfVenus;
    document.getElementById('num8').value = creationOfAdam;
    document.getElementById('num9').value = theKiss;
    document.getElementById('num10').value = theLastSupper;
    document.getElementById('num11').value = waterLilies;
    document.getElementById('num12').value = theSchoolOfAthens;
    document.getElementById('num13').value = americanGothic;
    document.getElementById('num14').value = theBirthOfVenus;
    document.getElementById('resultado').textContent = somaArtes;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;

const totalArtes = localStorage.getItem('somaArtes');
const votoMonaLisa = localStorage.getItem('monaLisa');
const votoStarryNight = localStorage.getItem('starryNight');
const votoPersistenceOfMemory = localStorage.getItem('persistenceOfMemory');
const votoScream = localStorage.getItem('scream');
const votoGirlWithAPearlEarring = localStorage.getItem('girlWithAPearlEarring');
const votoNightHawks = localStorage.getItem('nightHawks');
const votoBirthOfVenus = localStorage.getItem('birthOfVenus');
const votoCreationOfAdam = localStorage.getItem('creationOfAdam');
const votoTheKiss = localStorage.getItem('theKiss');
const votoTheLastSupper = localStorage.getItem('theLastSupper');
const votoWaterLilies = localStorage.getItem('waterLilies');
const votoTheSchoolOfAthens = localStorage.getItem('theSchoolOfAthens');
const votoAmericanGothic = localStorage.getItem('americanGothic');
const votoTheBirthOfVenus = localStorage.getItem('theBirthOfVenus');

document.getElementById('x').textContent = totalArtes;
document.getElementById('s2').textContent = votoMonaLisa;
document.getElementById('s13').textContent = votoStarryNight;
document.getElementById('s15').textContent = votoPersistenceOfMemory;
document.getElementById('s18').textContent = votoScream;
document.getElementById('s19').textContent = votoGirlWithAPearlEarring;
document.getElementById('s12').textContent = votoNightHawks;
document.getElementById('s17').textContent = votoBirthOfVenus;
document.getElementById('s6').textContent = votoCreationOfAdam;
document.getElementById('s4').textContent = votoTheKiss;
document.getElementById('s9').textContent = votoTheLastSupper;
document.getElementById('s1').textContent = votoWaterLilies;
document.getElementById('s3').textContent = votoTheSchoolOfAthens;
document.getElementById('s7').textContent = votoAmericanGothic;
document.getElementById('s8').textContent = votoTheBirthOfVenus;
