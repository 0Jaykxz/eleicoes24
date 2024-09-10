function calcularSoma() {
    const carvalho = parseFloat(document.getElementById('num1').value) || 0;
    const pinheiro = parseFloat(document.getElementById('num2').value) || 0;
    const cedro = parseFloat(document.getElementById('num3').value) || 0;
    const sequoia = parseFloat(document.getElementById('num4').value) || 0;
    const acacia = parseFloat(document.getElementById('num5').value) || 0;
    const baoba = parseFloat(document.getElementById('num6').value) || 0;
    const ipê = parseFloat(document.getElementById('num7').value) || 0;
    const araucaria = parseFloat(document.getElementById('num8').value) || 0;
    const mogno = parseFloat(document.getElementById('num9').value) || 0;
    const abeto = parseFloat(document.getElementById('num10').value) || 0;
    const cerejeira = parseFloat(document.getElementById('num11').value) || 0;
    const jaca = parseFloat(document.getElementById('num12').value) || 0;
    const figueira = parseFloat(document.getElementById('num13').value) || 0;
    const oliveira = parseFloat(document.getElementById('num14').value) || 0;
    const somaArvores = carvalho + pinheiro + cedro + sequoia + acacia + baoba + ipê + araucaria + mogno + abeto + cerejeira + jaca + figueira + oliveira;
    
    // Atualiza o resultado na página
    document.getElementById('resultado').textContent = somaArvores;
    
    // Salva os valores no localStorage
    localStorage.setItem('carvalho', carvalho);
    localStorage.setItem('pinheiro', pinheiro);
    localStorage.setItem('cedro', cedro);
    localStorage.setItem('sequoia', sequoia);
    localStorage.setItem('acacia', acacia);
    localStorage.setItem('baoba', baoba);
    localStorage.setItem('ipê', ipê);
    localStorage.setItem('araucaria', araucaria);
    localStorage.setItem('mogno', mogno);
    localStorage.setItem('abeto', abeto);
    localStorage.setItem('cerejeira', cerejeira);
    localStorage.setItem('jaca', jaca);
    localStorage.setItem('figueira', figueira);
    localStorage.setItem('oliveira', oliveira);
    localStorage.setItem('somaArvores', somaArvores);
}

function carregarValores() {
    // Carrega os valores salvos no localStorage
    const carvalho = localStorage.getItem('carvalho') || 0;
    const pinheiro = localStorage.getItem('pinheiro') || 0;
    const cedro = localStorage.getItem('cedro') || 0;
    const sequoia = localStorage.getItem('sequoia') || 0;
    const acacia = localStorage.getItem('acacia') || 0;
    const baoba = localStorage.getItem('baoba') || 0;
    const ipê = localStorage.getItem('ipê') || 0;
    const araucaria = localStorage.getItem('araucaria') || 0;
    const mogno = localStorage.getItem('mogno') || 0;
    const abeto = localStorage.getItem('abeto') || 0;
    const cerejeira = localStorage.getItem('cerejeira') || 0;
    const jaca = localStorage.getItem('jaca') || 0;
    const figueira = localStorage.getItem('figueira') || 0;
    const oliveira = localStorage.getItem('oliveira') || 0;
    const somaArvores = localStorage.getItem('somaArvores') || 0;

    // Atualiza os campos de entrada e o resultado com os valores salvos
    document.getElementById('num1').value = carvalho;
    document.getElementById('num2').value = pinheiro;
    document.getElementById('num3').value = cedro;
    document.getElementById('num4').value = sequoia;
    document.getElementById('num5').value = acacia;
    document.getElementById('num6').value = baoba;
    document.getElementById('num7').value = ipê;
    document.getElementById('num8').value = araucaria;
    document.getElementById('num9').value = mogno;
    document.getElementById('num10').value = abeto;
    document.getElementById('num11').value = cerejeira;
    document.getElementById('num12').value = jaca;
    document.getElementById('num13').value = figueira;
    document.getElementById('num14').value = oliveira;
    document.getElementById('resultado').textContent = somaArvores;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;

const totalArvores = localStorage.getItem('somaArvores');
const votoCarvalho = localStorage.getItem('carvalho');
const votoPinheiro = localStorage.getItem('pinheiro');
const votoCedro = localStorage.getItem('cedro');
const votoSequoia = localStorage.getItem('sequoia');
const votoAcacia = localStorage.getItem('acacia');
const votoBaoba = localStorage.getItem('baoba');
const votoIpe = localStorage.getItem('ipê');
const votoAraucaria = localStorage.getItem('araucaria');
const votoMogno = localStorage.getItem('mogno');
const votoAbeto = localStorage.getItem('abeto');
const votoCerejeira = localStorage.getItem('cerejeira');
const votoJaca = localStorage.getItem('jaca');
const votoFigueira = localStorage.getItem('figueira');
const votoOliveira = localStorage.getItem('oliveira');

document.getElementById('x').textContent = totalArvores;
document.getElementById('s2').textContent = votoCarvalho;
document.getElementById('s13').textContent = votoPinheiro;
document.getElementById('s15').textContent = votoCedro;
document.getElementById('s18').textContent = votoSequoia;
document.getElementById('s19').textContent = votoAcacia;
document.getElementById('s12').textContent = votoBaoba;
document.getElementById('s17').textContent = votoIpe;
document.getElementById('s6').textContent = votoAraucaria;
document.getElementById('s4').textContent = votoMogno;
document.getElementById('s9').textContent = votoAbeto;
document.getElementById('s1').textContent = votoCerejeira;
document.getElementById('s3').textContent = votoJaca;
document.getElementById('s7').textContent = votoFigueira;
document.getElementById('s8').textContent = votoOliveira;
