function calcularSoma() {
    const felipeNeto = parseFloat(document.getElementById('num1').value) || 0;
    const whinderssonNunes = parseFloat(document.getElementById('num2').value) || 0;
    const rezendeEvil = parseFloat(document.getElementById('num3').value) || 0;
    const canalCanalha = parseFloat(document.getElementById('num4').value) || 0;
    const julioCocielo = parseFloat(document.getElementById('num5').value) || 0;
    const gabiLopes = parseFloat(document.getElementById('num6').value) || 0;
    const bocaRosa = parseFloat(document.getElementById('num7').value) || 0;
    const kefera = parseFloat(document.getElementById('num8').value) || 0;
    const castanhari = parseFloat(document.getElementById('num9').value) || 0;
    const luba = parseFloat(document.getElementById('num10').value) || 0;
    const pkf = parseFloat(document.getElementById('num11').value) || 0;
    const brksedu = parseFloat(document.getElementById('num12').value) || 0;
    const authenticGames = parseFloat(document.getElementById('num13').value) || 0;
    const cellbit = parseFloat(document.getElementById('num14').value) || 0;
    const somaYoutubers = felipeNeto + whinderssonNunes + rezendeEvil + canalCanalha + julioCocielo + gabiLopes + bocaRosa + kefera + castanhari + luba + pkf + brksedu + authenticGames + cellbit;

    // Atualiza o resultado na página
    document.getElementById('resultado').textContent = somaYoutubers;

    // Salva os valores no localStorage
    localStorage.setItem('felipeNeto', felipeNeto);
    localStorage.setItem('whinderssonNunes', whinderssonNunes);
    localStorage.setItem('rezendeEvil', rezendeEvil);
    localStorage.setItem('canalCanalha', canalCanalha);
    localStorage.setItem('julioCocielo', julioCocielo);
    localStorage.setItem('gabiLopes', gabiLopes);
    localStorage.setItem('bocaRosa', bocaRosa);
    localStorage.setItem('kefera', kefera);
    localStorage.setItem('castanhari', castanhari);
    localStorage.setItem('luba', luba);
    localStorage.setItem('pkf', pkf);
    localStorage.setItem('brksedu', brksedu);
    localStorage.setItem('authenticGames', authenticGames);
    localStorage.setItem('cellbit', cellbit);
    localStorage.setItem('somaYoutubers', somaYoutubers);
}

function carregarValores() {
    // Carrega os valores salvos no localStorage
    const felipeNeto = localStorage.getItem('felipeNeto') || 0;
    const whinderssonNunes = localStorage.getItem('whinderssonNunes') || 0;
    const rezendeEvil = localStorage.getItem('rezendeEvil') || 0;
    const canalCanalha = localStorage.getItem('canalCanalha') || 0;
    const julioCocielo = localStorage.getItem('julioCocielo') || 0;
    const gabiLopes = localStorage.getItem('gabiLopes') || 0;
    const bocaRosa = localStorage.getItem('bocaRosa') || 0;
    const kefera = localStorage.getItem('kefera') || 0;
    const castanhari = localStorage.getItem('castanhari') || 0;
    const luba = localStorage.getItem('luba') || 0;
    const pkf = localStorage.getItem('pkf') || 0;
    const brksedu = localStorage.getItem('brksedu') || 0;
    const authenticGames = localStorage.getItem('authenticGames') || 0;
    const cellbit = localStorage.getItem('cellbit') || 0;
    const somaYoutubers = localStorage.getItem('somaYoutubers') || 0;

    // Atualiza os campos de entrada e o resultado com os valores salvos
    document.getElementById('num1').value = felipeNeto;
    document.getElementById('num2').value = whinderssonNunes;
    document.getElementById('num3').value = rezendeEvil;
    document.getElementById('num4').value = canalCanalha;
    document.getElementById('num5').value = julioCocielo;
    document.getElementById('num6').value = gabiLopes;
    document.getElementById('num7').value = bocaRosa;
    document.getElementById('num8').value = kefera;
    document.getElementById('num9').value = castanhari;
    document.getElementById('num10').value = luba;
    document.getElementById('num11').value = pkf;
    document.getElementById('num12').value = brksedu;
    document.getElementById('num13').value = authenticGames;
    document.getElementById('num14').value = cellbit;
    document.getElementById('resultado').textContent = somaYoutubers;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;

const totalYoutubers = localStorage.getItem('somaYoutubers');
const votoFelipeNeto = localStorage.getItem('felipeNeto');
const votoWhinderssonNunes = localStorage.getItem('whinderssonNunes');
const votoRezendeEvil = localStorage.getItem('rezendeEvil');
const votoCanalCanalha = localStorage.getItem('canalCanalha');
const votoJulioCocielo = localStorage.getItem('julioCocielo');
const votoGabiLopes = localStorage.getItem('gabiLopes');
const votoBocaRosa = localStorage.getItem('bocaRosa');
const votoKefera = localStorage.getItem('kefera');
const votoCastanhari = localStorage.getItem('castanhari');
const votoLuba = localStorage.getItem('luba');
const votoPkf = localStorage.getItem('pkf');
const votoBrksedu = localStorage.getItem('brksedu');
const votoAuthenticGames = localStorage.getItem('authenticGames');
const votoCellbit = localStorage.getItem('cellbit');

document.getElementById('x').textContent = totalYoutubers;
document.getElementById('s2').textContent = votoFelipeNeto;
document.getElementById('s13').textContent = votoWhinderssonNunes;
document.getElementById('s15').textContent = votoRezendeEvil;
document.getElementById('s18').textContent = votoCanalCanalha;
document.getElementById('s19').textContent = votoJulioCocielo;
document.getElementById('s12').textContent = votoGabiLopes;
document.getElementById('s17').textContent = votoBocaRosa;
document.getElementById('s6').textContent = votoKefera;
document.getElementById('s4').textContent = votoCastanhari;
document.getElementById('s9').textContent = votoLuba;
document.getElementById('s1').textContent = votoPkf;
document.getElementById('s3').textContent = votoBrksedu;
document.getElementById('s7').textContent = votoAuthenticGames;
document.getElementById('s8').textContent = votoCellbit;
