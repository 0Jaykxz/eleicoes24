function calcularSoma() {
    const glamour = parseFloat(document.getElementById('num1').value) || 0;
    const fashion = parseFloat(document.getElementById('num2').value) || 0;
    const amizade = parseFloat(document.getElementById('num3').value) || 0;
    const estilo = parseFloat(document.getElementById('num4').value) || 0;
    const aventura = parseFloat(document.getElementById('num5').value) || 0;
    const elegancia = parseFloat(document.getElementById('num6').value) || 0;
    const brilho = parseFloat(document.getElementById('num7').value) || 0;
    const sorriso = parseFloat(document.getElementById('num8').value) || 0;
    const alegria = parseFloat(document.getElementById('num9').value) || 0;
    const sonho = parseFloat(document.getElementById('num10').value) || 0;
    const inspiracao = parseFloat(document.getElementById('num11').value) || 0;
    const beleza = parseFloat(document.getElementById('num12').value) || 0;
    const confiança = parseFloat(document.getElementById('num13').value) || 0;
    const criatividade = parseFloat(document.getElementById('num14').value) || 0;
    const somaBarbie = glamour + fashion + amizade + estilo + aventura + elegancia + brilho + sorriso + alegria + sonho + inspiracao + beleza + confiança + criatividade;
    
    // Atualiza o resultado na página
    document.getElementById('resultado').textContent = somaBarbie;
    
    // Salva os valores no localStorage
    localStorage.setItem('glamour', glamour);
    localStorage.setItem('fashion', fashion);
    localStorage.setItem('amizade', amizade);
    localStorage.setItem('estilo', estilo);
    localStorage.setItem('aventura', aventura);
    localStorage.setItem('elegancia', elegancia);
    localStorage.setItem('brilho', brilho);
    localStorage.setItem('sorriso', sorriso);
    localStorage.setItem('alegria', alegria);
    localStorage.setItem('sonho', sonho);
    localStorage.setItem('inspiracao', inspiracao);
    localStorage.setItem('beleza', beleza);
    localStorage.setItem('confiança', confiança);
    localStorage.setItem('criatividade', criatividade);
    localStorage.setItem('somaBarbie', somaBarbie);
}

function carregarValores() {
    // Carrega os valores salvos no localStorage
    const glamour = localStorage.getItem('glamour') || 0;
    const fashion = localStorage.getItem('fashion') || 0;
    const amizade = localStorage.getItem('amizade') || 0;
    const estilo = localStorage.getItem('estilo') || 0;
    const aventura = localStorage.getItem('aventura') || 0;
    const elegancia = localStorage.getItem('elegancia') || 0;
    const brilho = localStorage.getItem('brilho') || 0;
    const sorriso = localStorage.getItem('sorriso') || 0;
    const alegria = localStorage.getItem('alegria') || 0;
    const sonho = localStorage.getItem('sonho') || 0;
    const inspiracao = localStorage.getItem('inspiracao') || 0;
    const beleza = localStorage.getItem('beleza') || 0;
    const confiança = localStorage.getItem('confiança') || 0;
    const criatividade = localStorage.getItem('criatividade') || 0;
    const somaBarbie = localStorage.getItem('somaBarbie') || 0;

    // Atualiza os campos de entrada e o resultado com os valores salvos
    document.getElementById('num1').value = glamour;
    document.getElementById('num2').value = fashion;
    document.getElementById('num3').value = amizade;
    document.getElementById('num4').value = estilo;
    document.getElementById('num5').value = aventura;
    document.getElementById('num6').value = elegancia;
    document.getElementById('num7').value = brilho;
    document.getElementById('num8').value = sorriso;
    document.getElementById('num9').value = alegria;
    document.getElementById('num10').value = sonho;
    document.getElementById('num11').value = inspiracao;
    document.getElementById('num12').value = beleza;
    document.getElementById('num13').value = confiança;
    document.getElementById('num14').value = criatividade;
    document.getElementById('resultado').textContent = somaBarbie;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;

const totalBarbie = localStorage.getItem('somaBarbie');
const votoGlamour = localStorage.getItem('glamour');
const votoFashion = localStorage.getItem('fashion');
const votoAmizade = localStorage.getItem('amizade');
const votoEstilo = localStorage.getItem('estilo');
const votoAventura = localStorage.getItem('aventura');
const votoElegancia = localStorage.getItem('elegancia');
const votoBrilho = localStorage.getItem('brilho');
const votoSorriso = localStorage.getItem('sorriso');
const votoAlegria = localStorage.getItem('alegria');
const votoSonho = localStorage.getItem('sonho');
const votoInspiracao = localStorage.getItem('inspiracao');
const votoBeleza = localStorage.getItem('beleza');
const votoConfianca = localStorage.getItem('confiança');
const votoCriatividade = localStorage.getItem('criatividade');

document.getElementById('x').textContent = totalBarbie;
document.getElementById('s2').textContent = votoGlamour;
document.getElementById('s13').textContent = votoFashion;
document.getElementById('s15').textContent = votoAmizade;
document.getElementById('s18').textContent = votoEstilo;
document.getElementById('s19').textContent = votoAventura;
document.getElementById('s12').textContent = votoElegancia;
document.getElementById('s17').textContent = votoBrilho;
document.getElementById('s6').textContent = votoSorriso;
document.getElementById('s4').textContent = votoAlegria;
document.getElementById('s9').textContent = votoSonho;
document.getElementById('s1').textContent = votoInspiracao;
document.getElementById('s3').textContent = votoBeleza;
document.getElementById('s7').textContent = votoConfianca;
document.getElementById('s8').textContent = votoCriatividade;
