function calcularSoma() {
    const romance = parseFloat(document.getElementById('num1').value) || 0;
    const ficcao = parseFloat(document.getElementById('num2').value) || 0;
    const ciencia = parseFloat(document.getElementById('num3').value) || 0;
    const fantasia = parseFloat(document.getElementById('num4').value) || 0;
    const misterio = parseFloat(document.getElementById('num5').value) || 0;
    const aventura = parseFloat(document.getElementById('num6').value) || 0;
    const historia = parseFloat(document.getElementById('num7').value) || 0;
    const biografia = parseFloat(document.getElementById('num8').value) || 0;
    const poesia = parseFloat(document.getElementById('num9').value) || 0;
    const autoajuda = parseFloat(document.getElementById('num10').value) || 0;
    const culinaria = parseFloat(document.getElementById('num11').value) || 0;
    const filosofia = parseFloat(document.getElementById('num12').value) || 0;
    const psicologia = parseFloat(document.getElementById('num13').value) || 0;
    const religiacao = parseFloat(document.getElementById('num14').value) || 0;
    const somaLivros = romance + ficcao + ciencia + fantasia + misterio + aventura + historia + biografia + poesia + autoajuda + culinaria + filosofia + psicologia + religiacao;
    
    // Atualiza o resultado na página
    document.getElementById('resultado').textContent = somaLivros;
    
    // Salva os valores no localStorage
    localStorage.setItem('romance', romance);
    localStorage.setItem('ficcao', ficcao);
    localStorage.setItem('ciencia', ciencia);
    localStorage.setItem('fantasia', fantasia);
    localStorage.setItem('misterio', misterio);
    localStorage.setItem('aventura', aventura);
    localStorage.setItem('historia', historia);
    localStorage.setItem('biografia', biografia);
    localStorage.setItem('poesia', poesia);
    localStorage.setItem('autoajuda', autoajuda);
    localStorage.setItem('culinaria', culinaria);
    localStorage.setItem('filosofia', filosofia);
    localStorage.setItem('psicologia', psicologia);
    localStorage.setItem('religiacao', religiacao);
    localStorage.setItem('somaLivros', somaLivros);
}

function carregarValores() {
    // Carrega os valores salvos no localStorage
    const romance = localStorage.getItem('romance') || 0;
    const ficcao = localStorage.getItem('ficcao') || 0;
    const ciencia = localStorage.getItem('ciencia') || 0;
    const fantasia = localStorage.getItem('fantasia') || 0;
    const misterio = localStorage.getItem('misterio') || 0;
    const aventura = localStorage.getItem('aventura') || 0;
    const historia = localStorage.getItem('historia') || 0;
    const biografia = localStorage.getItem('biografia') || 0;
    const poesia = localStorage.getItem('poesia') || 0;
    const autoajuda = localStorage.getItem('autoajuda') || 0;
    const culinaria = localStorage.getItem('culinaria') || 0;
    const filosofia = localStorage.getItem('filosofia') || 0;
    const psicologia = localStorage.getItem('psicologia') || 0;
    const religiacao = localStorage.getItem('religiacao') || 0;
    const somaLivros = localStorage.getItem('somaLivros') || 0;

    // Atualiza os campos de entrada e o resultado com os valores salvos
    document.getElementById('num1').value = romance;
    document.getElementById('num2').value = ficcao;
    document.getElementById('num3').value = ciencia;
    document.getElementById('num4').value = fantasia;
    document.getElementById('num5').value = misterio;
    document.getElementById('num6').value = aventura;
    document.getElementById('num7').value = historia;
    document.getElementById('num8').value = biografia;
    document.getElementById('num9').value = poesia;
    document.getElementById('num10').value = autoajuda;
    document.getElementById('num11').value = culinaria;
    document.getElementById('num12').value = filosofia;
    document.getElementById('num13').value = psicologia;
    document.getElementById('num14').value = religiacao;
    document.getElementById('resultado').textContent = somaLivros;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;

const totalLivros = localStorage.getItem('somaLivros');
const votoRomance = localStorage.getItem('romance');
const votoFiccao = localStorage.getItem('ficcao');
const votoCiencia = localStorage.getItem('ciencia');
const votoFantasia = localStorage.getItem('fantasia');
const votoMisterio = localStorage.getItem('misterio');
const votoAventura = localStorage.getItem('aventura');
const votoHistoria = localStorage.getItem('historia');
const votoBiografia = localStorage.getItem('biografia');
const votoPoesia = localStorage.getItem('poesia');
const votoAutoajuda = localStorage.getItem('autoajuda');
const votoCulinaria = localStorage.getItem('culinaria');
const votoFilosofia = localStorage.getItem('filosofia');
const votoPsicologia = localStorage.getItem('psicologia');
const votoReligiacao = localStorage.getItem('religiacao');

document.getElementById('x').textContent = totalLivros;
document.getElementById('s2').textContent = votoRomance;
document.getElementById('s13').textContent = votoFiccao;
document.getElementById('s15').textContent = votoCiencia;
document.getElementById('s18').textContent = votoFantasia;
document.getElementById('s19').textContent = votoMisterio;
document.getElementById('s12').textContent = votoAventura;
document.getElementById('s17').textContent = votoHistoria;
document.getElementById('s6').textContent = votoBiografia;
document.getElementById('s4').textContent = votoPoesia;
document.getElementById('s9').textContent = votoAutoajuda;
document.getElementById('s1').textContent = votoCulinaria;
document.getElementById('s3').textContent = votoFilosofia;
document.getElementById('s7').textContent = votoPsicologia;
document.getElementById('s8').textContent = votoReligiacao;
