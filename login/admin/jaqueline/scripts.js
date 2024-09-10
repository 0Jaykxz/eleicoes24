function calcularSoma() {
    const soco = parseFloat(document.getElementById('num1').value) || 0;
    const chute = parseFloat(document.getElementById('num2').value) || 0;
    const jab = parseFloat(document.getElementById('num3').value) || 0;
    const gancho = parseFloat(document.getElementById('num4').value) || 0;
    const uppercut = parseFloat(document.getElementById('num5').value) || 0;
    const direto = parseFloat(document.getElementById('num6').value) || 0;
    const cotovelada = parseFloat(document.getElementById('num7').value) || 0;
    const joelhada = parseFloat(document.getElementById('num8').value) || 0;
    const queda = parseFloat(document.getElementById('num9').value) || 0;
    const grappling = parseFloat(document.getElementById('num10').value) || 0;
    const armLock = parseFloat(document.getElementById('num11').value) || 0;
    const guilhotina = parseFloat(document.getElementById('num12').value) || 0;
    const mataLeao = parseFloat(document.getElementById('num13').value) || 0;
    const roundhouse = parseFloat(document.getElementById('num14').value) || 0;
    const somaLuta = soco + chute + jab + gancho + uppercut + direto + cotovelada + joelhada + queda + grappling + armLock + guilhotina + mataLeao + roundhouse;
    
    // Atualiza o resultado na página
    document.getElementById('resultado').textContent = somaLuta;
    
    // Salva os valores no localStorage
    localStorage.setItem('soco', soco);
    localStorage.setItem('chute', chute);
    localStorage.setItem('jab', jab);
    localStorage.setItem('gancho', gancho);
    localStorage.setItem('uppercut', uppercut);
    localStorage.setItem('direto', direto);
    localStorage.setItem('cotovelada', cotovelada);
    localStorage.setItem('joelhada', joelhada);
    localStorage.setItem('queda', queda);
    localStorage.setItem('grappling', grappling);
    localStorage.setItem('armLock', armLock);
    localStorage.setItem('guilhotina', guilhotina);
    localStorage.setItem('mataLeao', mataLeao);
    localStorage.setItem('roundhouse', roundhouse);
    localStorage.setItem('somaLuta', somaLuta);
}

function carregarValores() {
    // Carrega os valores salvos no localStorage
    const soco = localStorage.getItem('soco') || 0;
    const chute = localStorage.getItem('chute') || 0;
    const jab = localStorage.getItem('jab') || 0;
    const gancho = localStorage.getItem('gancho') || 0;
    const uppercut = localStorage.getItem('uppercut') || 0;
    const direto = localStorage.getItem('direto') || 0;
    const cotovelada = localStorage.getItem('cotovelada') || 0;
    const joelhada = localStorage.getItem('joelhada') || 0;
    const queda = localStorage.getItem('queda') || 0;
    const grappling = localStorage.getItem('grappling') || 0;
    const armLock = localStorage.getItem('armLock') || 0;
    const guilhotina = localStorage.getItem('guilhotina') || 0;
    const mataLeao = localStorage.getItem('mataLeao') || 0;
    const roundhouse = localStorage.getItem('roundhouse') || 0;
    const somaLuta = localStorage.getItem('somaLuta') || 0;

    // Atualiza os campos de entrada e o resultado com os valores salvos
    document.getElementById('num1').value = soco;
    document.getElementById('num2').value = chute;
    document.getElementById('num3').value = jab;
    document.getElementById('num4').value = gancho;
    document.getElementById('num5').value = uppercut;
    document.getElementById('num6').value = direto;
    document.getElementById('num7').value = cotovelada;
    document.getElementById('num8').value = joelhada;
    document.getElementById('num9').value = queda;
    document.getElementById('num10').value = grappling;
    document.getElementById('num11').value = armLock;
    document.getElementById('num12').value = guilhotina;
    document.getElementById('num13').value = mataLeao;
    document.getElementById('num14').value = roundhouse;
    document.getElementById('resultado').textContent = somaLuta;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;

const totalLuta = localStorage.getItem('somaLuta');
const votoSoco = localStorage.getItem('soco');
const votoChute = localStorage.getItem('chute');
const votoJab = localStorage.getItem('jab');
const votoGancho = localStorage.getItem('gancho');
const votoUppercut = localStorage.getItem('uppercut');
const votoDireto = localStorage.getItem('direto');
const votoCotovelada = localStorage.getItem('cotovelada');
const votoJoelhada = localStorage.getItem('joelhada');
const votoQueda = localStorage.getItem('queda');
const votoGrappling = localStorage.getItem('grappling');
const votoArmLock = localStorage.getItem('armLock');
const votoGuilhotina = localStorage.getItem('guilhotina');
const votoMataLeao = localStorage.getItem('mataLeao');
const votoRoundhouse = localStorage.getItem('roundhouse');

document.getElementById('x').textContent = totalLuta;
document.getElementById('s2').textContent = votoSoco;
document.getElementById('s13').textContent = votoChute;
document.getElementById('s15').textContent = votoJab;
document.getElementById('s18').textContent = votoGancho;
document.getElementById('s19').textContent = votoUppercut;
document.getElementById('s12').textContent = votoDireto;
document.getElementById('s17').textContent = votoCotovelada;
document.getElementById('s6').textContent = votoJoelhada;
document.getElementById('s4').textContent = votoQueda;
document.getElementById('s9').textContent = votoGrappling;
document.getElementById('s1').textContent = votoArmLock;
document.getElementById('s3').textContent = votoGuilhotina;
document.getElementById('s7').textContent = votoMataLeao;
document.getElementById('s8').textContent = votoRoundhouse;
