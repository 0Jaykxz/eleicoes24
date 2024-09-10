function calcularSoma() {
    const medico = parseFloat(document.getElementById('num1').value) || 0;
    const engenheiro = parseFloat(document.getElementById('num2').value) || 0;
    const professor = parseFloat(document.getElementById('num3').value) || 0;
    const advogado = parseFloat(document.getElementById('num4').value) || 0;
    const arquiteto = parseFloat(document.getElementById('num5').value) || 0;
    const policial = parseFloat(document.getElementById('num6').value) || 0;
    const bombeiro = parseFloat(document.getElementById('num7').value) || 0;
    const enfermeiro = parseFloat(document.getElementById('num8').value) || 0;
    const psicologo = parseFloat(document.getElementById('num9').value) || 0;
    const piloto = parseFloat(document.getElementById('num10').value) || 0;
    const eletricista = parseFloat(document.getElementById('num11').value) || 0;
    const mecanico = parseFloat(document.getElementById('num12').value) || 0;
    const carpinteiro = parseFloat(document.getElementById('num13').value) || 0;
    const padeiro = parseFloat(document.getElementById('num14').value) || 0;
    const somaProfissoes = medico + engenheiro + professor + advogado + arquiteto + policial + bombeiro + enfermeiro + psicologo + piloto + eletricista + mecanico + carpinteiro + padeiro;

    // Atualiza o resultado na página
    document.getElementById('resultado').textContent = somaProfissoes;

    // Salva os valores no localStorage
    localStorage.setItem('medico', medico);
    localStorage.setItem('engenheiro', engenheiro);
    localStorage.setItem('professor', professor);
    localStorage.setItem('advogado', advogado);
    localStorage.setItem('arquiteto', arquiteto);
    localStorage.setItem('policial', policial);
    localStorage.setItem('bombeiro', bombeiro);
    localStorage.setItem('enfermeiro', enfermeiro);
    localStorage.setItem('psicologo', psicologo);
    localStorage.setItem('piloto', piloto);
    localStorage.setItem('eletricista', eletricista);
    localStorage.setItem('mecanico', mecanico);
    localStorage.setItem('carpinteiro', carpinteiro);
    localStorage.setItem('padeiro', padeiro);
    localStorage.setItem('somaProfissoes', somaProfissoes);
}

function carregarValores() {
    // Carrega os valores salvos no localStorage
    const medico = localStorage.getItem('medico') || 0;
    const engenheiro = localStorage.getItem('engenheiro') || 0;
    const professor = localStorage.getItem('professor') || 0;
    const advogado = localStorage.getItem('advogado') || 0;
    const arquiteto = localStorage.getItem('arquiteto') || 0;
    const policial = localStorage.getItem('policial') || 0;
    const bombeiro = localStorage.getItem('bombeiro') || 0;
    const enfermeiro = localStorage.getItem('enfermeiro') || 0;
    const psicologo = localStorage.getItem('psicologo') || 0;
    const piloto = localStorage.getItem('piloto') || 0;
    const eletricista = localStorage.getItem('eletricista') || 0;
    const mecanico = localStorage.getItem('mecanico') || 0;
    const carpinteiro = localStorage.getItem('carpinteiro') || 0;
    const padeiro = localStorage.getItem('padeiro') || 0;
    const somaProfissoes = localStorage.getItem('somaProfissoes') || 0;

    // Atualiza os campos de entrada e o resultado com os valores salvos
    document.getElementById('num1').value = medico;
    document.getElementById('num2').value = engenheiro;
    document.getElementById('num3').value = professor;
    document.getElementById('num4').value = advogado;
    document.getElementById('num5').value = arquiteto;
    document.getElementById('num6').value = policial;
    document.getElementById('num7').value = bombeiro;
    document.getElementById('num8').value = enfermeiro;
    document.getElementById('num9').value = psicologo;
    document.getElementById('num10').value = piloto;
    document.getElementById('num11').value = eletricista;
    document.getElementById('num12').value = mecanico;
    document.getElementById('num13').value = carpinteiro;
    document.getElementById('num14').value = padeiro;
    document.getElementById('resultado').textContent = somaProfissoes;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;

const totalProfissoes = localStorage.getItem('somaProfissoes');
const votoMedico = localStorage.getItem('medico');
const votoEngenheiro = localStorage.getItem('engenheiro');
const votoProfessor = localStorage.getItem('professor');
const votoAdvogado = localStorage.getItem('advogado');
const votoArquiteto = localStorage.getItem('arquiteto');
const votoPolicial = localStorage.getItem('policial');
const votoBombeiro = localStorage.getItem('bombeiro');
const votoEnfermeiro = localStorage.getItem('enfermeiro');
const votoPsicologo = localStorage.getItem('psicologo');
const votoPiloto = localStorage.getItem('piloto');
const votoEletricista = localStorage.getItem('eletricista');
const votoMecanico = localStorage.getItem('mecanico');
const votoCarpinteiro = localStorage.getItem('carpinteiro');
const votoPadeiro = localStorage.getItem('padeiro');

document.getElementById('x').textContent = totalProfissoes;
document.getElementById('s2').textContent = votoMedico;
document.getElementById('s13').textContent = votoEngenheiro;
document.getElementById('s15').textContent = votoProfessor;
document.getElementById('s18').textContent = votoAdvogado;
document.getElementById('s19').textContent = votoArquiteto;
document.getElementById('s12').textContent = votoPolicial;
document.getElementById('s17').textContent = votoBombeiro;
document.getElementById('s6').textContent = votoEnfermeiro;
document.getElementById('s4').textContent = votoPsicologo;
document.getElementById('s9').textContent = votoPiloto;
document.getElementById('s1').textContent = votoEletricista;
document.getElementById('s3').textContent = votoMecanico;
document.getElementById('s7').textContent = votoCarpinteiro;
document.getElementById('s8').textContent = votoPadeiro;
