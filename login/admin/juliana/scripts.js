function calcularSoma() {
    const labrador = parseFloat(document.getElementById('num1').value) || 0;
    const beagle = parseFloat(document.getElementById('num2').value) || 0;
    const poodle = parseFloat(document.getElementById('num3').value) || 0;
    const bulldog = parseFloat(document.getElementById('num4').value) || 0;
    const dachshund = parseFloat(document.getElementById('num5').value) || 0;
    const husky = parseFloat(document.getElementById('num6').value) || 0;
    const pastorAlemao = parseFloat(document.getElementById('num7').value) || 0;
    const golden = parseFloat(document.getElementById('num8').value) || 0;
    const chihuahua = parseFloat(document.getElementById('num9').value) || 0;
    const rottweiler = parseFloat(document.getElementById('num10').value) || 0;
    const pitbull = parseFloat(document.getElementById('num11').value) || 0;
    const borderCollie = parseFloat(document.getElementById('num12').value) || 0;
    const boxer = parseFloat(document.getElementById('num13').value) || 0;
    const akita = parseFloat(document.getElementById('num14').value) || 0;
    const somaCaes = labrador + beagle + poodle + bulldog + dachshund + husky + pastorAlemao + golden + chihuahua + rottweiler + pitbull + borderCollie + boxer + akita;
    
    // Atualiza o resultado na página
    document.getElementById('resultado').textContent = somaCaes;
    
    // Salva os valores no localStorage
    localStorage.setItem('labrador', labrador);
    localStorage.setItem('beagle', beagle);
    localStorage.setItem('poodle', poodle);
    localStorage.setItem('bulldog', bulldog);
    localStorage.setItem('dachshund', dachshund);
    localStorage.setItem('husky', husky);
    localStorage.setItem('pastorAlemao', pastorAlemao);
    localStorage.setItem('golden', golden);
    localStorage.setItem('chihuahua', chihuahua);
    localStorage.setItem('rottweiler', rottweiler);
    localStorage.setItem('pitbull', pitbull);
    localStorage.setItem('borderCollie', borderCollie);
    localStorage.setItem('boxer', boxer);
    localStorage.setItem('akita', akita);
    localStorage.setItem('somaCaes', somaCaes);
}

function carregarValores() {
    // Carrega os valores salvos no localStorage
    const labrador = localStorage.getItem('labrador') || 0;
    const beagle = localStorage.getItem('beagle') || 0;
    const poodle = localStorage.getItem('poodle') || 0;
    const bulldog = localStorage.getItem('bulldog') || 0;
    const dachshund = localStorage.getItem('dachshund') || 0;
    const husky = localStorage.getItem('husky') || 0;
    const pastorAlemao = localStorage.getItem('pastorAlemao') || 0;
    const golden = localStorage.getItem('golden') || 0;
    const chihuahua = localStorage.getItem('chihuahua') || 0;
    const rottweiler = localStorage.getItem('rottweiler') || 0;
    const pitbull = localStorage.getItem('pitbull') || 0;
    const borderCollie = localStorage.getItem('borderCollie') || 0;
    const boxer = localStorage.getItem('boxer') || 0;
    const akita = localStorage.getItem('akita') || 0;
    const somaCaes = localStorage.getItem('somaCaes') || 0;

    // Atualiza os campos de entrada e o resultado com os valores salvos
    document.getElementById('num1').value = labrador;
    document.getElementById('num2').value = beagle;
    document.getElementById('num3').value = poodle;
    document.getElementById('num4').value = bulldog;
    document.getElementById('num5').value = dachshund;
    document.getElementById('num6').value = husky;
    document.getElementById('num7').value = pastorAlemao;
    document.getElementById('num8').value = golden;
    document.getElementById('num9').value = chihuahua;
    document.getElementById('num10').value = rottweiler;
    document.getElementById('num11').value = pitbull;
    document.getElementById('num12').value = borderCollie;
    document.getElementById('num13').value = boxer;
    document.getElementById('num14').value = akita;
    document.getElementById('resultado').textContent = somaCaes;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;

const totalCaes = localStorage.getItem('somaCaes');
const votoLabrador = localStorage.getItem('labrador');
const votoBeagle = localStorage.getItem('beagle');
const votoPoodle = localStorage.getItem('poodle');
const votoBulldog = localStorage.getItem('bulldog');
const votoDachshund = localStorage.getItem('dachshund');
const votoHusky = localStorage.getItem('husky');
const votoPastorAlemao = localStorage.getItem('pastorAlemao');
const votoGolden = localStorage.getItem('golden');
const votoChihuahua = localStorage.getItem('chihuahua');
const votoRottweiler = localStorage.getItem('rottweiler');
const votoPitbull = localStorage.getItem('pitbull');
const votoBorderCollie = localStorage.getItem('borderCollie');
const votoBoxer = localStorage.getItem('boxer');
const votoAkita = localStorage.getItem('akita');

document.getElementById('x').textContent = totalCaes;
document.getElementById('s2').textContent = votoLabrador;
document.getElementById('s13').textContent = votoBeagle;
document.getElementById('s15').textContent = votoPoodle;
document.getElementById('s18').textContent = votoBulldog;
document.getElementById('s19').textContent = votoDachshund;
document.getElementById('s12').textContent = votoHusky;
document.getElementById('s17').textContent = votoPastorAlemao;
document.getElementById('s6').textContent = votoGolden;
document.getElementById('s4').textContent = votoChihuahua;
document.getElementById('s9').textContent = votoRottweiler;
document.getElementById('s1').textContent = votoPitbull;
document.getElementById('s3').textContent = votoBorderCollie;
document.getElementById('s7').textContent = votoBoxer;
document.getElementById('s8').textContent = votoAkita;
