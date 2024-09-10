function calcularSoma() {
    const tiranossauro = parseFloat(document.getElementById('num1').value) || 0;
    const velociraptor = parseFloat(document.getElementById('num2').value) || 0;
    const triceratops = parseFloat(document.getElementById('num3').value) || 0;
    const estegossauro = parseFloat(document.getElementById('num4').value) || 0;
    const braquiossauro = parseFloat(document.getElementById('num5').value) || 0;
    const pterodactilo = parseFloat(document.getElementById('num6').value) || 0;
    const anquilossauro = parseFloat(document.getElementById('num7').value) || 0;
    const espinossauro = parseFloat(document.getElementById('num8').value) || 0;
    const diplodoco = parseFloat(document.getElementById('num9').value) || 0;
    const iguanodonte = parseFloat(document.getElementById('num10').value) || 0;
    const apatosaurus = parseFloat(document.getElementById('num11').value) || 0;
    const alossauro = parseFloat(document.getElementById('num12').value) || 0;
    const carnotauro = parseFloat(document.getElementById('num13').value) || 0;
    const deinonico = parseFloat(document.getElementById('num14').value) || 0;
    const somaDinos = tiranossauro + velociraptor + triceratops + estegossauro + braquiossauro + pterodactilo + anquilossauro + espinossauro + diplodoco + iguanodonte + apatosaurus + alossauro + carnotauro + deinonico;
    
    // Atualiza o resultado na página
    document.getElementById('resultado').textContent = somaDinos;
    
    // Salva os valores no localStorage
    localStorage.setItem('tiranossauro', tiranossauro);
    localStorage.setItem('velociraptor', velociraptor);
    localStorage.setItem('triceratops', triceratops);
    localStorage.setItem('estegossauro', estegossauro);
    localStorage.setItem('braquiossauro', braquiossauro);
    localStorage.setItem('pterodactilo', pterodactilo);
    localStorage.setItem('anquilossauro', anquilossauro);
    localStorage.setItem('espinossauro', espinossauro);
    localStorage.setItem('diplodoco', diplodoco);
    localStorage.setItem('iguanodonte', iguanodonte);
    localStorage.setItem('apatosaurus', apatosaurus);
    localStorage.setItem('alossauro', alossauro);
    localStorage.setItem('carnotauro', carnotauro);
    localStorage.setItem('deinonico', deinonico);
    localStorage.setItem('somaDinos', somaDinos);
}

function carregarValores() {
    // Carrega os valores salvos no localStorage
    const tiranossauro = localStorage.getItem('tiranossauro') || 0;
    const velociraptor = localStorage.getItem('velociraptor') || 0;
    const triceratops = localStorage.getItem('triceratops') || 0;
    const estegossauro = localStorage.getItem('estegossauro') || 0;
    const braquiossauro = localStorage.getItem('braquiossauro') || 0;
    const pterodactilo = localStorage.getItem('pterodactilo') || 0;
    const anquilossauro = localStorage.getItem('anquilossauro') || 0;
    const espinossauro = localStorage.getItem('espinossauro') || 0;
    const diplodoco = localStorage.getItem('diplodoco') || 0;
    const iguanodonte = localStorage.getItem('iguanodonte') || 0;
    const apatosaurus = localStorage.getItem('apatosaurus') || 0;
    const alossauro = localStorage.getItem('alossauro') || 0;
    const carnotauro = localStorage.getItem('carnotauro') || 0;
    const deinonico = localStorage.getItem('deinonico') || 0;
    const somaDinos = localStorage.getItem('somaDinos') || 0;

    // Atualiza os campos de entrada e o resultado com os valores salvos
    document.getElementById('num1').value = tiranossauro;
    document.getElementById('num2').value = velociraptor;
    document.getElementById('num3').value = triceratops;
    document.getElementById('num4').value = estegossauro;
    document.getElementById('num5').value = braquiossauro;
    document.getElementById('num6').value = pterodactilo;
    document.getElementById('num7').value = anquilossauro;
    document.getElementById('num8').value = espinossauro;
    document.getElementById('num9').value = diplodoco;
    document.getElementById('num10').value = iguanodonte;
    document.getElementById('num11').value = apatosaurus;
    document.getElementById('num12').value = alossauro;
    document.getElementById('num13').value = carnotauro;
    document.getElementById('num14').value = deinonico;
    document.getElementById('resultado').textContent = somaDinos;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;

const totalDinos = localStorage.getItem('somaDinos');
const votoTiranossauro = localStorage.getItem('tiranossauro');
const votoVelociraptor = localStorage.getItem('velociraptor');
const votoTriceratops = localStorage.getItem('triceratops');
const votoEstegossauro = localStorage.getItem('estegossauro');
const votoBraquiossauro = localStorage.getItem('braquiossauro');
const votoPterodactilo = localStorage.getItem('pterodactilo');
const votoAnquilossauro = localStorage.getItem('anquilossauro');
const votoEspinossauro = localStorage.getItem('espinossauro');
const votoDiplodoco = localStorage.getItem('diplodoco');
const votoIguanodonte = localStorage.getItem('iguanodonte');
const votoApatosaurus = localStorage.getItem('apatosaurus');
const votoAlossauro = localStorage.getItem('alossauro');
const votoCarnotauro = localStorage.getItem('carnotauro');
const votoDeinonico = localStorage.getItem('deinonico');

document.getElementById('x').textContent = totalDinos;
document.getElementById('s2').textContent = votoTiranossauro;
document.getElementById('s13').textContent = votoVelociraptor;
document.getElementById('s15').textContent = votoTriceratops;
document.getElementById('s18').textContent = votoEstegossauro;
document.getElementById('s19').textContent = votoBraquiossauro;
document.getElementById('s12').textContent = votoPterodactilo;
document.getElementById('s17').textContent = votoAnquilossauro;
document.getElementById('s6').textContent = votoEspinossauro;
document.getElementById('s4').textContent = votoDiplodoco;
document.getElementById('s9').textContent = votoIguanodonte;
document.getElementById('s1').textContent = votoApatosaurus;
document.getElementById('s3').textContent = votoAlossauro;
document.getElementById('s7').textContent = votoCarnotauro;
document.getElementById('s8').textContent = votoDeinonico;
