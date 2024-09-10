function calcularSoma() {
    const mercurio = parseFloat(document.getElementById('num1').value) || 0;
    const venus = parseFloat(document.getElementById('num2').value) || 0;
    const terra = parseFloat(document.getElementById('num3').value) || 0;
    const marte = parseFloat(document.getElementById('num4').value) || 0;
    const jupiter = parseFloat(document.getElementById('num5').value) || 0;
    const saturno = parseFloat(document.getElementById('num6').value) || 0;
    const urano = parseFloat(document.getElementById('num7').value) || 0;
    const netuno = parseFloat(document.getElementById('num8').value) || 0;
    const plutao = parseFloat(document.getElementById('num9').value) || 0;
    const ceres = parseFloat(document.getElementById('num10').value) || 0;
    const haumea = parseFloat(document.getElementById('num11').value) || 0;
    const makemake = parseFloat(document.getElementById('num12').value) || 0;
    const eris = parseFloat(document.getElementById('num13').value) || 0;
    const sedna = parseFloat(document.getElementById('num14').value) || 0;
    const somaPlanetas = mercurio + venus + terra + marte + jupiter + saturno + urano + netuno + plutao + ceres + haumea + makemake + eris + sedna;
    
    // Atualiza o resultado na página
    document.getElementById('resultado').textContent = somaPlanetas;
    
    // Salva os valores no localStorage
    localStorage.setItem('mercurio', mercurio);
    localStorage.setItem('venus', venus);
    localStorage.setItem('terra', terra);
    localStorage.setItem('marte', marte);
    localStorage.setItem('jupiter', jupiter);
    localStorage.setItem('saturno', saturno);
    localStorage.setItem('urano', urano);
    localStorage.setItem('netuno', netuno);
    localStorage.setItem('plutao', plutao);
    localStorage.setItem('ceres', ceres);
    localStorage.setItem('haumea', haumea);
    localStorage.setItem('makemake', makemake);
    localStorage.setItem('eris', eris);
    localStorage.setItem('sedna', sedna);
    localStorage.setItem('somaPlanetas', somaPlanetas);
}

function carregarValores() {
    // Carrega os valores salvos no localStorage
    const mercurio = localStorage.getItem('mercurio') || 0;
    const venus = localStorage.getItem('venus') || 0;
    const terra = localStorage.getItem('terra') || 0;
    const marte = localStorage.getItem('marte') || 0;
    const jupiter = localStorage.getItem('jupiter') || 0;
    const saturno = localStorage.getItem('saturno') || 0;
    const urano = localStorage.getItem('urano') || 0;
    const netuno = localStorage.getItem('netuno') || 0;
    const plutao = localStorage.getItem('plutao') || 0;
    const ceres = localStorage.getItem('ceres') || 0;
    const haumea = localStorage.getItem('haumea') || 0;
    const makemake = localStorage.getItem('makemake') || 0;
    const eris = localStorage.getItem('eris') || 0;
    const sedna = localStorage.getItem('sedna') || 0;
    const somaPlanetas = localStorage.getItem('somaPlanetas') || 0;

    // Atualiza os campos de entrada e o resultado com os valores salvos
    document.getElementById('num1').value = mercurio;
    document.getElementById('num2').value = venus;
    document.getElementById('num3').value = terra;
    document.getElementById('num4').value = marte;
    document.getElementById('num5').value = jupiter;
    document.getElementById('num6').value = saturno;
    document.getElementById('num7').value = urano;
    document.getElementById('num8').value = netuno;
    document.getElementById('num9').value = plutao;
    document.getElementById('num10').value = ceres;
    document.getElementById('num11').value = haumea;
    document.getElementById('num12').value = makemake;
    document.getElementById('num13').value = eris;
    document.getElementById('num14').value = sedna;
    document.getElementById('resultado').textContent = somaPlanetas;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;

const totalPlanetas = localStorage.getItem('somaPlanetas');
const votoMercurio = localStorage.getItem('mercurio');
const votoVenus = localStorage.getItem('venus');
const votoTerra = localStorage.getItem('terra');
const votoMarte = localStorage.getItem('marte');
const votoJupiter = localStorage.getItem('jupiter');
const votoSaturno = localStorage.getItem('saturno');
const votoUrano = localStorage.getItem('urano');
const votoNetuno = localStorage.getItem('netuno');
const votoPlutao = localStorage.getItem('plutao');
const votoCeres = localStorage.getItem('ceres');
const votoHaumea = localStorage.getItem('haumea');
const votoMakemake = localStorage.getItem('makemake');
const votoEris = localStorage.getItem('eris');
const votoSedna = localStorage.getItem('sedna');

document.getElementById('x').textContent = totalPlanetas;
document.getElementById('s2').textContent = votoMercurio;
document.getElementById('s13').textContent = votoVenus;
document.getElementById('s15').textContent = votoTerra;
document.getElementById('s18').textContent = votoMarte;
document.getElementById('s19').textContent = votoJupiter;
document.getElementById('s12').textContent = votoSaturno;
document.getElementById('s17').textContent = votoUrano;
document.getElementById('s6').textContent = votoNetuno;
document.getElementById('s4').textContent = votoPlutao;
document.getElementById('s9').textContent = votoCeres;
document.getElementById('s1').textContent = votoHaumea;
document.getElementById('s3').textContent = votoMakemake;
document.getElementById('s7').textContent = votoEris;
document.getElementById('s8').textContent = votoSedna;
