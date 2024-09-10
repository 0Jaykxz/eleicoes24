function calcularSoma() {
    const fe = parseFloat(document.getElementById('num1').value) || 0;
    const oracao = parseFloat(document.getElementById('num2').value) || 0;
    const amor = parseFloat(document.getElementById('num3').value) || 0;
    const gratidao = parseFloat(document.getElementById('num4').value) || 0;
    const caridade = parseFloat(document.getElementById('num5').value) || 0;
    const paz = parseFloat(document.getElementById('num6').value) || 0;
    const esperanca = parseFloat(document.getElementById('num7').value) || 0;
    const humildade = parseFloat(document.getElementById('num8').value) || 0;
    const perdão = parseFloat(document.getElementById('num9').value) || 0;
    const misericordia = parseFloat(document.getElementById('num10').value) || 0;
    const salvacao = parseFloat(document.getElementById('num11').value) || 0;
    const evangelho = parseFloat(document.getElementById('num12').value) || 0;
    const discipulado = parseFloat(document.getElementById('num13').value) || 0;
    const servico = parseFloat(document.getElementById('num14').value) || 0;
    const somaCristianismo = fe + oracao + amor + gratidao + caridade + paz + esperanca + humildade + perdão + misericordia + salvacao + evangelho + discipulado + servico;
    
    // Atualiza o resultado na página
    document.getElementById('resultado').textContent = somaCristianismo;
    
    // Salva os valores no localStorage
    localStorage.setItem('fe', fe);
    localStorage.setItem('oracao', oracao);
    localStorage.setItem('amor', amor);
    localStorage.setItem('gratidao', gratidao);
    localStorage.setItem('caridade', caridade);
    localStorage.setItem('paz', paz);
    localStorage.setItem('esperanca', esperanca);
    localStorage.setItem('humildade', humildade);
    localStorage.setItem('perdão', perdão);
    localStorage.setItem('misericordia', misericordia);
    localStorage.setItem('salvacao', salvacao);
    localStorage.setItem('evangelho', evangelho);
    localStorage.setItem('discipulado', discipulado);
    localStorage.setItem('servico', servico);
    localStorage.setItem('somaCristianismo', somaCristianismo);
}

function carregarValores() {
    // Carrega os valores salvos no localStorage
    const fe = localStorage.getItem('fe') || 0;
    const oracao = localStorage.getItem('oracao') || 0;
    const amor = localStorage.getItem('amor') || 0;
    const gratidao = localStorage.getItem('gratidao') || 0;
    const caridade = localStorage.getItem('caridade') || 0;
    const paz = localStorage.getItem('paz') || 0;
    const esperanca = localStorage.getItem('esperanca') || 0;
    const humildade = localStorage.getItem('humildade') || 0;
    const perdão = localStorage.getItem('perdão') || 0;
    const misericordia = localStorage.getItem('misericordia') || 0;
    const salvacao = localStorage.getItem('salvacao') || 0;
    const evangelho = localStorage.getItem('evangelho') || 0;
    const discipulado = localStorage.getItem('discipulado') || 0;
    const servico = localStorage.getItem('servico') || 0;
    const somaCristianismo = localStorage.getItem('somaCristianismo') || 0;

    // Atualiza os campos de entrada e o resultado com os valores salvos
    document.getElementById('num1').value = fe;
    document.getElementById('num2').value = oracao;
    document.getElementById('num3').value = amor;
    document.getElementById('num4').value = gratidao;
    document.getElementById('num5').value = caridade;
    document.getElementById('num6').value = paz;
    document.getElementById('num7').value = esperanca;
    document.getElementById('num8').value = humildade;
    document.getElementById('num9').value = perdão;
    document.getElementById('num10').value = misericordia;
    document.getElementById('num11').value = salvacao;
    document.getElementById('num12').value = evangelho;
    document.getElementById('num13').value = discipulado;
    document.getElementById('num14').value = servico;
    document.getElementById('resultado').textContent = somaCristianismo;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;

const totalCristianismo = localStorage.getItem('somaCristianismo');
const votoFe = localStorage.getItem('fe');
const votoOracao = localStorage.getItem('oracao');
const votoAmor = localStorage.getItem('amor');
const votoGratidao = localStorage.getItem('gratidao');
const votoCaridade = localStorage.getItem('caridade');
const votoPaz = localStorage.getItem('paz');
const votoEsperanca = localStorage.getItem('esperanca');
const votoHumildade = localStorage.getItem('humildade');
const votoPerdao = localStorage.getItem('perdão');
const votoMisericordia = localStorage.getItem('misericordia');
const votoSalvacao = localStorage.getItem('salvacao');
const votoEvangelho = localStorage.getItem('evangelho');
const votoDiscipulado = localStorage.getItem('discipulado');
const votoServico = localStorage.getItem('servico');

document.getElementById('x').textContent = totalCristianismo;
document.getElementById('s2').textContent = votoFe;
document.getElementById('s13').textContent = votoOracao;
document.getElementById('s15').textContent = votoAmor;
document.getElementById('s18').textContent = votoGratidao;
document.getElementById('s19').textContent = votoCaridade;
document.getElementById('s12').textContent = votoPaz;
document.getElementById('s17').textContent = votoEsperanca;
document.getElementById('s6').textContent = votoHumildade;
document.getElementById('s4').textContent = votoPerdao;
document.getElementById('s9').textContent = votoMisericordia;
document.getElementById('s1').textContent = votoSalvacao;
document.getElementById('s3').textContent = votoEvangelho;
document.getElementById('s7').textContent = votoDiscipulado;
document.getElementById('s8').textContent = votoServico;

