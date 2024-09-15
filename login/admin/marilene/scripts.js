function calcularSoma() {
    const ubuntu = parseFloat(document.getElementById('num1').value) || 0;
    const fedora = parseFloat(document.getElementById('num2').value) || 0;
    const debian = parseFloat(document.getElementById('num3').value) || 0;
    const arch = parseFloat(document.getElementById('num4').value) || 0;
    const mint = parseFloat(document.getElementById('num5').value) || 0;
    const opensuse = parseFloat(document.getElementById('num6').value) || 0;
    const centos = parseFloat(document.getElementById('num7').value) || 0;
    const manjaro = parseFloat(document.getElementById('num8').value) || 0;
    const kali = parseFloat(document.getElementById('num9').value) || 0;
    const slackware = parseFloat(document.getElementById('num10').value) || 0;
    const solus = parseFloat(document.getElementById('num11').value) || 0;
    const gentoo = parseFloat(document.getElementById('num12').value) || 0;
    const alpine = parseFloat(document.getElementById('num13').value) || 0;
    const puppy = parseFloat(document.getElementById('num14').value) || 0;
    const somaDistros = ubuntu + fedora + debian + arch + mint + opensuse + centos + manjaro + kali + slackware + solus + gentoo + alpine + puppy;
    
    // Atualiza o resultado na página
    document.getElementById('resultado').textContent = somaDistros;
    
    // Salva os valores no localStorage
    localStorage.setItem('ubuntu', ubuntu);
    localStorage.setItem('fedora', fedora);
    localStorage.setItem('debian', debian);
    localStorage.setItem('arch', arch);
    localStorage.setItem('mint', mint);
    localStorage.setItem('opensuse', opensuse);
    localStorage.setItem('centos', centos);
    localStorage.setItem('manjaro', manjaro);
    localStorage.setItem('kali', kali);
    localStorage.setItem('slackware', slackware);
    localStorage.setItem('solus', solus);
    localStorage.setItem('gentoo', gentoo);
    localStorage.setItem('alpine', alpine);
    localStorage.setItem('puppy', puppy);
    localStorage.setItem('somaDistros', somaDistros);
}

function carregarValores() {
    // Carrega os valores salvos no localStorage
    const ubuntu = localStorage.getItem('ubuntu') || 0;
    const fedora = localStorage.getItem('fedora') || 0;
    const debian = localStorage.getItem('debian') || 0;
    const arch = localStorage.getItem('arch') || 0;
    const mint = localStorage.getItem('mint') || 0;
    const opensuse = localStorage.getItem('opensuse') || 0;
    const centos = localStorage.getItem('centos') || 0;
    const manjaro = localStorage.getItem('manjaro') || 0;
    const kali = localStorage.getItem('kali') || 0;
    const slackware = localStorage.getItem('slackware') || 0;
    const solus = localStorage.getItem('solus') || 0;
    const gentoo = localStorage.getItem('gentoo') || 0;
    const alpine = localStorage.getItem('alpine') || 0;
    const puppy = localStorage.getItem('puppy') || 0;
    const somaDistros = localStorage.getItem('somaDistros') || 0;

    // Atualiza os campos de entrada e o resultado com os valores salvos
    document.getElementById('num1').value = ubuntu;
    document.getElementById('num2').value = fedora;
    document.getElementById('num3').value = debian;
    document.getElementById('num4').value = arch;
    document.getElementById('num5').value = mint;
    document.getElementById('num6').value = opensuse;
    document.getElementById('num7').value = centos;
    document.getElementById('num8').value = manjaro;
    document.getElementById('num9').value = kali;
    document.getElementById('num10').value = slackware;
    document.getElementById('num11').value = solus;
    document.getElementById('num12').value = gentoo;
    document.getElementById('num13').value = alpine;
    document.getElementById('num14').value = puppy;
    document.getElementById('resultado').textContent = somaDistros;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;

const totalDistros = localStorage.getItem('somaDistros');
const votoUbuntu = localStorage.getItem('ubuntu');
const votoFedora = localStorage.getItem('fedora');
const votoDebian = localStorage.getItem('debian');
const votoArch = localStorage.getItem('arch');
const votoMint = localStorage.getItem('mint');
const votoOpensuse = localStorage.getItem('opensuse');
const votoCentos = localStorage.getItem('centos');
const votoManjaro = localStorage.getItem('manjaro');
const votoKali = localStorage.getItem('kali');
const votoSlackware = localStorage.getItem('slackware');
const votoSolus = localStorage.getItem('solus');
const votoGentoo = localStorage.getItem('gentoo');
const votoAlpine = localStorage.getItem('alpine');
const votoPuppy = localStorage.getItem('puppy');

document.getElementById('x').textContent = totalDistros;
document.getElementById('s2').textContent = votoUbuntu;
document.getElementById('s13').textContent = votoFedora;
document.getElementById('s15').textContent = votoDebian;
document.getElementById('s18').textContent = votoArch;
document.getElementById('s19').textContent = votoMint;
document.getElementById('s12').textContent = votoOpensuse;
document.getElementById('s17').textContent = votoCentos;
document.getElementById('s6').textContent = votoManjaro;
document.getElementById('s4').textContent = votoKali;
document.getElementById('s9').textContent = votoSlackware;
document.getElementById('s1').textContent = votoSolus;
document.getElementById('s3').textContent = votoGentoo;
document.getElementById('s7').textContent = votoAlpine;
document.getElementById('s8').textContent = votoPuppy;
