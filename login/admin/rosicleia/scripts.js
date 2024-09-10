function calcularSoma() {
    const vermelho = parseFloat(document.getElementById('num1').value) || 0;
    const azul = parseFloat(document.getElementById('num2').value) || 0;
    const verde = parseFloat(document.getElementById('num3').value) || 0;
    const amarelo = parseFloat(document.getElementById('num4').value) || 0;
    const laranja = parseFloat(document.getElementById('num5').value) || 0;
    const roxo = parseFloat(document.getElementById('num6').value) || 0;
    const rosa = parseFloat(document.getElementById('num7').value) || 0;
    const marrom = parseFloat(document.getElementById('num8').value) || 0;
    const preto = parseFloat(document.getElementById('num9').value) || 0;
    const branco = parseFloat(document.getElementById('num10').value) || 0;
    const cinza = parseFloat(document.getElementById('num11').value) || 0;
    const violeta = parseFloat(document.getElementById('num12').value) || 0;
    const turquesa = parseFloat(document.getElementById('num13').value) || 0;
    const dourado = parseFloat(document.getElementById('num14').value) || 0;
    const somaCores = vermelho + azul + verde + amarelo + laranja + roxo + rosa + marrom + preto + branco + cinza + violeta + turquesa + dourado;

    // Atualiza o resultado na página
    document.getElementById('resultado').textContent = somaCores;

    // Salva os valores no localStorage
    localStorage.setItem('vermelho', vermelho);
    localStorage.setItem('azul', azul);
    localStorage.setItem('verde', verde);
    localStorage.setItem('amarelo', amarelo);
    localStorage.setItem('laranja', laranja);
    localStorage.setItem('roxo', roxo);
    localStorage.setItem('rosa', rosa);
    localStorage.setItem('marrom', marrom);
    localStorage.setItem('preto', preto);
    localStorage.setItem('branco', branco);
    localStorage.setItem('cinza', cinza);
    localStorage.setItem('violeta', violeta);
    localStorage.setItem('turquesa', turquesa);
    localStorage.setItem('dourado', dourado);
    localStorage.setItem('somaCores', somaCores);
}

function carregarValores() {
    // Carrega os valores salvos no localStorage
    const vermelho = localStorage.getItem('vermelho') || 0;
    const azul = localStorage.getItem('azul') || 0;
    const verde = localStorage.getItem('verde') || 0;
    const amarelo = localStorage.getItem('amarelo') || 0;
    const laranja = localStorage.getItem('laranja') || 0;
    const roxo = localStorage.getItem('roxo') || 0;
    const rosa = localStorage.getItem('rosa') || 0;
    const marrom = localStorage.getItem('marrom') || 0;
    const preto = localStorage.getItem('preto') || 0;
    const branco = localStorage.getItem('branco') || 0;
    const cinza = localStorage.getItem('cinza') || 0;
    const violeta = localStorage.getItem('violeta') || 0;
    const turquesa = localStorage.getItem('turquesa') || 0;
    const dourado = localStorage.getItem('dourado') || 0;
    const somaCores = localStorage.getItem('somaCores') || 0;

    // Atualiza os campos de entrada e o resultado com os valores salvos
    document.getElementById('num1').value = vermelho;
    document.getElementById('num2').value = azul;
    document.getElementById('num3').value = verde;
    document.getElementById('num4').value = amarelo;
    document.getElementById('num5').value = laranja;
    document.getElementById('num6').value = roxo;
    document.getElementById('num7').value = rosa;
    document.getElementById('num8').value = marrom;
    document.getElementById('num9').value = preto;
    document.getElementById('num10').value = branco;
    document.getElementById('num11').value = cinza;
    document.getElementById('num12').value = violeta;
    document.getElementById('num13').value = turquesa;
    document.getElementById('num14').value = dourado;
    document.getElementById('resultado').textContent = somaCores;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;

const totalCores = localStorage.getItem('somaCores');
const votoVermelho = localStorage.getItem('vermelho');
const votoAzul = localStorage.getItem('azul');
const votoVerde = localStorage.getItem('verde');
const votoAmarelo = localStorage.getItem('amarelo');
const votoLaranja = localStorage.getItem('laranja');
const votoRoxo = localStorage.getItem('roxo');
const votoRosa = localStorage.getItem('rosa');
const votoMarrom = localStorage.getItem('marrom');
const votoPreto = localStorage.getItem('preto');
const votoBranco = localStorage.getItem('branco');
const votoCinza = localStorage.getItem('cinza');
const votoVioleta = localStorage.getItem('violeta');
const votoTurquesa = localStorage.getItem('turquesa');
const votoDourado = localStorage.getItem('dourado');

document.getElementById('x').textContent = totalCores;
document.getElementById('s2').textContent = votoVermelho;
document.getElementById('s13').textContent = votoAzul;
document.getElementById('s15').textContent = votoVerde;
document.getElementById('s18').textContent = votoAmarelo;
document.getElementById('s19').textContent = votoLaranja;
document.getElementById('s12').textContent = votoRoxo;
document.getElementById('s17').textContent = votoRosa;
document.getElementById('s6').textContent = votoMarrom;
document.getElementById('s4').textContent = votoPreto;
document.getElementById('s9').textContent = votoBranco;
document.getElementById('s1').textContent = votoCinza;
document.getElementById('s3').textContent = votoVioleta;
document.getElementById('s7').textContent = votoTurquesa;
document.getElementById('s8').textContent = votoDourado;
