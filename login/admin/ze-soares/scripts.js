function calcularSoma() {
    const vladimirVysotsky = parseFloat(document.getElementById('num1').value) || 0;
    const allaPugacheva = parseFloat(document.getElementById('num2').value) || 0;
    const fedorShalyapin = parseFloat(document.getElementById('num3').value) || 0;
    const annaNetrebko = parseFloat(document.getElementById('num4').value) || 0;
    const dimashKudaibergen = parseFloat(document.getElementById('num5').value) || 0;
    const philippKirkorov = parseFloat(document.getElementById('num6').value) || 0;
    const zara = parseFloat(document.getElementById('num7').value) || 0;
    const yuliaSavicheva = parseFloat(document.getElementById('num8').value) || 0;
    const dimaBilan = parseFloat(document.getElementById('num9').value) || 0;
    const sergeyLazarev = parseFloat(document.getElementById('num10').value) || 0;
    const polinaGagarina = parseFloat(document.getElementById('num11').value) || 0;
    const grigoryLeps = parseFloat(document.getElementById('num12').value) || 0;
    const valeriya = parseFloat(document.getElementById('num13').value) || 0;
    const olgaKormukhina = parseFloat(document.getElementById('num14').value) || 0;
    const somaCantores = vladimirVysotsky + allaPugacheva + fedorShalyapin + annaNetrebko + dimashKudaibergen + philippKirkorov + zara + yuliaSavicheva + dimaBilan + sergeyLazarev + polinaGagarina + grigoryLeps + valeriya + olgaKormukhina;
    
    // Atualiza o resultado na página
    document.getElementById('resultado').textContent = somaCantores;
    
    // Salva os valores no localStorage
    localStorage.setItem('vladimirVysotsky', vladimirVysotsky);
    localStorage.setItem('allaPugacheva', allaPugacheva);
    localStorage.setItem('fedorShalyapin', fedorShalyapin);
    localStorage.setItem('annaNetrebko', annaNetrebko);
    localStorage.setItem('dimashKudaibergen', dimashKudaibergen);
    localStorage.setItem('philippKirkorov', philippKirkorov);
    localStorage.setItem('zara', zara);
    localStorage.setItem('yuliaSavicheva', yuliaSavicheva);
    localStorage.setItem('dimaBilan', dimaBilan);
    localStorage.setItem('sergeyLazarev', sergeyLazarev);
    localStorage.setItem('polinaGagarina', polinaGagarina);
    localStorage.setItem('grigoryLeps', grigoryLeps);
    localStorage.setItem('valeriya', valeriya);
    localStorage.setItem('olgaKormukhina', olgaKormukhina);
    localStorage.setItem('somaCantores', somaCantores);
}

function carregarValores() {
    // Carrega os valores salvos no localStorage
    const vladimirVysotsky = localStorage.getItem('vladimirVysotsky') || 0;
    const allaPugacheva = localStorage.getItem('allaPugacheva') || 0;
    const fedorShalyapin = localStorage.getItem('fedorShalyapin') || 0;
    const annaNetrebko = localStorage.getItem('annaNetrebko') || 0;
    const dimashKudaibergen = localStorage.getItem('dimashKudaibergen') || 0;
    const philippKirkorov = localStorage.getItem('philippKirkorov') || 0;
    const zara = localStorage.getItem('zara') || 0;
    const yuliaSavicheva = localStorage.getItem('yuliaSavicheva') || 0;
    const dimaBilan = localStorage.getItem('dimaBilan') || 0;
    const sergeyLazarev = localStorage.getItem('sergeyLazarev') || 0;
    const polinaGagarina = localStorage.getItem('polinaGagarina') || 0;
    const grigoryLeps = localStorage.getItem('grigoryLeps') || 0;
    const valeriya = localStorage.getItem('valeriya') || 0;
    const olgaKormukhina = localStorage.getItem('olgaKormukhina') || 0;
    const somaCantores = localStorage.getItem('somaCantores') || 0;

    // Atualiza os campos de entrada e o resultado com os valores salvos
    document.getElementById('num1').value = vladimirVysotsky;
    document.getElementById('num2').value = allaPugacheva;
    document.getElementById('num3').value = fedorShalyapin;
    document.getElementById('num4').value = annaNetrebko;
    document.getElementById('num5').value = dimashKudaibergen;
    document.getElementById('num6').value = philippKirkorov;
    document.getElementById('num7').value = zara;
    document.getElementById('num8').value = yuliaSavicheva;
    document.getElementById('num9').value = dimaBilan;
    document.getElementById('num10').value = sergeyLazarev;
    document.getElementById('num11').value = polinaGagarina;
    document.getElementById('num12').value = grigoryLeps;
    document.getElementById('num13').value = valeriya;
    document.getElementById('num14').value = olgaKormukhina;
    document.getElementById('resultado').textContent = somaCantores;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;

const totalCantores = localStorage.getItem('somaCantores');
const votoVladimirVysotsky = localStorage.getItem('vladimirVysotsky');
const votoAllaPugacheva = localStorage.getItem('allaPugacheva');
const votoFedorShalyapin = localStorage.getItem('fedorShalyapin');
const votoAnnaNetrebko = localStorage.getItem('annaNetrebko');
const votoDimashKudaibergen = localStorage.getItem('dimashKudaibergen');
const votoPhilippKirkorov = localStorage.getItem('philippKirkorov');
const votoZara = localStorage.getItem('zara');
const votoYuliaSavicheva = localStorage.getItem('yuliaSavicheva');
const votoDimaBilan = localStorage.getItem('dimaBilan');
const votoSergeyLazarev = localStorage.getItem('sergeyLazarev');
const votoPolinaGagarina = localStorage.getItem('polinaGagarina');
const votoGrigoryLeps = localStorage.getItem('grigoryLeps');
const votoValeriya = localStorage.getItem('valeriya');
const votoOlgaKormukhina = localStorage.getItem('olgaKormukhina');

document.getElementById('x').textContent = totalCantores;
document.getElementById('s2').textContent = votoVladimirVysotsky;
document.getElementById('s13').textContent = votoAllaPugacheva;
document.getElementById('s15').textContent = votoFedorShalyapin;
document.getElementById('s18').textContent = votoAnnaNetrebko;
document.getElementById('s19').textContent = votoDimashKudaibergen;
document.getElementById('s12').textContent = votoPhilippKirkorov;
document.getElementById('s17').textContent = votoZara;
document.getElementById('s6').textContent = votoYuliaSavicheva;
document.getElementById('s4').textContent = votoDimaBilan;
document.getElementById('s9').textContent = votoSergeyLazarev;
document.getElementById('s1').textContent = votoPolinaGagarina;
document.getElementById('s3').textContent = votoGrigoryLeps;
document.getElementById('s7').textContent = votoValeriya;
document.getElementById('s8').textContent = votoOlgaKormukhina;
