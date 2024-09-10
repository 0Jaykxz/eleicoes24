function calcularSoma() {
    const persa = parseFloat(document.getElementById('num1').value) || 0;
    const siames = parseFloat(document.getElementById('num2').value) || 0;
    const maineCoon = parseFloat(document.getElementById('num3').value) || 0;
    const bengal = parseFloat(document.getElementById('num4').value) || 0;
    const sphynx = parseFloat(document.getElementById('num5').value) || 0;
    const ragdoll = parseFloat(document.getElementById('num6').value) || 0;
    const angora = parseFloat(document.getElementById('num7').value) || 0;
    const birman = parseFloat(document.getElementById('num8').value) || 0;
    const savannah = parseFloat(document.getElementById('num9').value) || 0;
    const scottishFold = parseFloat(document.getElementById('num10').value) || 0;
    const britishShorthair = parseFloat(document.getElementById('num11').value) || 0;
    const abissinio = parseFloat(document.getElementById('num12').value) || 0;
    const oriental = parseFloat(document.getElementById('num13').value) || 0;
    const himalaio = parseFloat(document.getElementById('num14').value) || 0;
    const somaGatos = persa + siames + maineCoon + bengal + sphynx + ragdoll + angora + birman + savannah + scottishFold + britishShorthair + abissinio + oriental + himalaio;
    
    // Atualiza o resultado na página
    document.getElementById('resultado').textContent = somaGatos;
    
    // Salva os valores no localStorage
    localStorage.setItem('persa', persa);
    localStorage.setItem('siames', siames);
    localStorage.setItem('maineCoon', maineCoon);
    localStorage.setItem('bengal', bengal);
    localStorage.setItem('sphynx', sphynx);
    localStorage.setItem('ragdoll', ragdoll);
    localStorage.setItem('angora', angora);
    localStorage.setItem('birman', birman);
    localStorage.setItem('savannah', savannah);
    localStorage.setItem('scottishFold', scottishFold);
    localStorage.setItem('britishShorthair', britishShorthair);
    localStorage.setItem('abissinio', abissinio);
    localStorage.setItem('oriental', oriental);
    localStorage.setItem('himalaio', himalaio);
    localStorage.setItem('somaGatos', somaGatos);
}

function carregarValores() {
    // Carrega os valores salvos no localStorage
    const persa = localStorage.getItem('persa') || 0;
    const siames = localStorage.getItem('siames') || 0;
    const maineCoon = localStorage.getItem('maineCoon') || 0;
    const bengal = localStorage.getItem('bengal') || 0;
    const sphynx = localStorage.getItem('sphynx') || 0;
    const ragdoll = localStorage.getItem('ragdoll') || 0;
    const angora = localStorage.getItem('angora') || 0;
    const birman = localStorage.getItem('birman') || 0;
    const savannah = localStorage.getItem('savannah') || 0;
    const scottishFold = localStorage.getItem('scottishFold') || 0;
    const britishShorthair = localStorage.getItem('britishShorthair') || 0;
    const abissinio = localStorage.getItem('abissinio') || 0;
    const oriental = localStorage.getItem('oriental') || 0;
    const himalaio = localStorage.getItem('himalaio') || 0;
    const somaGatos = localStorage.getItem('somaGatos') || 0;

    // Atualiza os campos de entrada e o resultado com os valores salvos
    document.getElementById('num1').value = persa;
    document.getElementById('num2').value = siames;
    document.getElementById('num3').value = maineCoon;
    document.getElementById('num4').value = bengal;
    document.getElementById('num5').value = sphynx;
    document.getElementById('num6').value = ragdoll;
    document.getElementById('num7').value = angora;
    document.getElementById('num8').value = birman;
    document.getElementById('num9').value = savannah;
    document.getElementById('num10').value = scottishFold;
    document.getElementById('num11').value = britishShorthair;
    document.getElementById('num12').value = abissinio;
    document.getElementById('num13').value = oriental;
    document.getElementById('num14').value = himalaio;
    document.getElementById('resultado').textContent = somaGatos;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;

const totalGatos = localStorage.getItem('somaGatos');
const votoPersa = localStorage.getItem('persa');
const votoSiames = localStorage.getItem('siames');
const votoMaineCoon = localStorage.getItem('maineCoon');
const votoBengal = localStorage.getItem('bengal');
const votoSphynx = localStorage.getItem('sphynx');
const votoRagdoll = localStorage.getItem('ragdoll');
const votoAngora = localStorage.getItem('angora');
const votoBirman = localStorage.getItem('birman');
const votoSavannah = localStorage.getItem('savannah');
const votoScottishFold = localStorage.getItem('scottishFold');
const votoBritishShorthair = localStorage.getItem('britishShorthair');
const votoAbissinio = localStorage.getItem('abissinio');
const votoOriental = localStorage.getItem('oriental');
const votoHimalaio = localStorage.getItem('himalaio');

document.getElementById('x').textContent = totalGatos;
document.getElementById('s2').textContent = votoPersa;
document.getElementById('s13').textContent = votoSiames;
document.getElementById('s15').textContent = votoMaineCoon;
document.getElementById('s18').textContent = votoBengal;
document.getElementById('s19').textContent = votoSphynx;
document.getElementById('s12').textContent = votoRagdoll;
document.getElementById('s17').textContent = votoAngora;
document.getElementById('s6').textContent = votoBirman;
document.getElementById('s4').textContent = votoSavannah;
document.getElementById('s9').textContent = votoScottishFold;
document.getElementById('s1').textContent = votoBritishShorthair;
document.getElementById('s3').textContent = votoAbissinio;
document.getElementById('s7').textContent = votoOriental;
document.getElementById('s8').textContent = votoHimalaio;
