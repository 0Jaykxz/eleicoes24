function calcularSoma() {
    const boeing747 = parseFloat(document.getElementById('num1').value) || 0;
    const airbusA380 = parseFloat(document.getElementById('num2').value) || 0;
    const cessna172 = parseFloat(document.getElementById('num3').value) || 0;
    const concorde = parseFloat(document.getElementById('num4').value) || 0;
    const embraer190 = parseFloat(document.getElementById('num5').value) || 0;
    const f16 = parseFloat(document.getElementById('num6').value) || 0;
    const f22 = parseFloat(document.getElementById('num7').value) || 0;
    const mig29 = parseFloat(document.getElementById('num8').value) || 0;
    const bombardierCRJ = parseFloat(document.getElementById('num9').value) || 0;
    const sr71 = parseFloat(document.getElementById('num10').value) || 0;
    const lockheedMartin = parseFloat(document.getElementById('num11').value) || 0;
    const piperPA28 = parseFloat(document.getElementById('num12').value) || 0;
    const spitfire = parseFloat(document.getElementById('num13').value) || 0;
    const douglasDC3 = parseFloat(document.getElementById('num14').value) || 0;
    const somaAvioes = boeing747 + airbusA380 + cessna172 + concorde + embraer190 + f16 + f22 + mig29 + bombardierCRJ + sr71 + lockheedMartin + piperPA28 + spitfire + douglasDC3;

    // Atualiza o resultado na página
    document.getElementById('resultado').textContent = somaAvioes;

    // Salva os valores no localStorage
    localStorage.setItem('boeing747', boeing747);
    localStorage.setItem('airbusA380', airbusA380);
    localStorage.setItem('cessna172', cessna172);
    localStorage.setItem('concorde', concorde);
    localStorage.setItem('embraer190', embraer190);
    localStorage.setItem('f16', f16);
    localStorage.setItem('f22', f22);
    localStorage.setItem('mig29', mig29);
    localStorage.setItem('bombardierCRJ', bombardierCRJ);
    localStorage.setItem('sr71', sr71);
    localStorage.setItem('lockheedMartin', lockheedMartin);
    localStorage.setItem('piperPA28', piperPA28);
    localStorage.setItem('spitfire', spitfire);
    localStorage.setItem('douglasDC3', douglasDC3);
    localStorage.setItem('somaAvioes', somaAvioes);
}

function carregarValores() {
    // Carrega os valores salvos no localStorage
    const boeing747 = localStorage.getItem('boeing747') || 0;
    const airbusA380 = localStorage.getItem('airbusA380') || 0;
    const cessna172 = localStorage.getItem('cessna172') || 0;
    const concorde = localStorage.getItem('concorde') || 0;
    const embraer190 = localStorage.getItem('embraer190') || 0;
    const f16 = localStorage.getItem('f16') || 0;
    const f22 = localStorage.getItem('f22') || 0;
    const mig29 = localStorage.getItem('mig29') || 0;
    const bombardierCRJ = localStorage.getItem('bombardierCRJ') || 0;
    const sr71 = localStorage.getItem('sr71') || 0;
    const lockheedMartin = localStorage.getItem('lockheedMartin') || 0;
    const piperPA28 = localStorage.getItem('piperPA28') || 0;
    const spitfire = localStorage.getItem('spitfire') || 0;
    const douglasDC3 = localStorage.getItem('douglasDC3') || 0;
    const somaAvioes = localStorage.getItem('somaAvioes') || 0;

    // Atualiza os campos de entrada e o resultado com os valores salvos
    document.getElementById('num1').value = boeing747;
    document.getElementById('num2').value = airbusA380;
    document.getElementById('num3').value = cessna172;
    document.getElementById('num4').value = concorde;
    document.getElementById('num5').value = embraer190;
    document.getElementById('num6').value = f16;
    document.getElementById('num7').value = f22;
    document.getElementById('num8').value = mig29;
    document.getElementById('num9').value = bombardierCRJ;
    document.getElementById('num10').value = sr71;
    document.getElementById('num11').value = lockheedMartin;
    document.getElementById('num12').value = piperPA28;
    document.getElementById('num13').value = spitfire;
    document.getElementById('num14').value = douglasDC3;
    document.getElementById('resultado').textContent = somaAvioes;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;

const totalAvioes = localStorage.getItem('somaAvioes');
const votoBoeing747 = localStorage.getItem('boeing747');
const votoAirbusA380 = localStorage.getItem('airbusA380');
const votoCessna172 = localStorage.getItem('cessna172');
const votoConcorde = localStorage.getItem('concorde');
const votoEmbraer190 = localStorage.getItem('embraer190');
const votoF16 = localStorage.getItem('f16');
const votoF22 = localStorage.getItem('f22');
const votoMig29 = localStorage.getItem('mig29');
const votoBombardierCRJ = localStorage.getItem('bombardierCRJ');
const votoSR71 = localStorage.getItem('sr71');
const votoLockheedMartin = localStorage.getItem('lockheedMartin');
const votoPiperPA28 = localStorage.getItem('piperPA28');
const votoSpitfire = localStorage.getItem('spitfire');
const votoDouglasDC3 = localStorage.getItem('douglasDC3');

document.getElementById('x').textContent = totalAvioes;
document.getElementById('s2').textContent = votoBoeing747;
document.getElementById('s13').textContent = votoAirbusA380;
document.getElementById('s15').textContent = votoCessna172;
document.getElementById('s18').textContent = votoConcorde;
document.getElementById('s19').textContent = votoEmbraer190;
document.getElementById('s12').textContent = votoF16;
document.getElementById('s17').textContent = votoF22;
document.getElementById('s6').textContent = votoMig29;
document.getElementById('s4').textContent = votoBombardierCRJ;
document.getElementById('s9').textContent = votoSR71;
document.getElementById('s1').textContent = votoLockheedMartin;
document.getElementById('s3').textContent = votoPiperPA28;
document.getElementById('s7').textContent = votoSpitfire;
document.getElementById('s8').textContent = votoDouglasDC3;
