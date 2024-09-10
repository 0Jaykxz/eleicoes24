function calcularSoma() {
    const resistor = parseFloat(document.getElementById('num1').value) || 0;
    const capacitor = parseFloat(document.getElementById('num2').value) || 0;
    const transistor = parseFloat(document.getElementById('num3').value) || 0;
    const diodo = parseFloat(document.getElementById('num4').value) || 0;
    const led = parseFloat(document.getElementById('num5').value) || 0;
    const indutor = parseFloat(document.getElementById('num6').value) || 0;
    const circuitoIntegrado = parseFloat(document.getElementById('num7').value) || 0;
    const potenciometro = parseFloat(document.getElementById('num8').value) || 0;
    const rele = parseFloat(document.getElementById('num9').value) || 0;
    const transformador = parseFloat(document.getElementById('num10').value) || 0;
    const varistor = parseFloat(document.getElementById('num11').value) || 0;
    const fusivel = parseFloat(document.getElementById('num12').value) || 0;
    const relogioCristal = parseFloat(document.getElementById('num13').value) || 0;
    const jumper = parseFloat(document.getElementById('num14').value) || 0;
    const somaEletronicos = resistor + capacitor + transistor + diodo + led + indutor + circuitoIntegrado + potenciometro + rele + transformador + varistor + fusivel + relogioCristal + jumper;
    
    // Atualiza o resultado na página
    document.getElementById('resultado').textContent = somaEletronicos;
    
    // Salva os valores no localStorage
    localStorage.setItem('resistor', resistor);
    localStorage.setItem('capacitor', capacitor);
    localStorage.setItem('transistor', transistor);
    localStorage.setItem('diodo', diodo);
    localStorage.setItem('led', led);
    localStorage.setItem('indutor', indutor);
    localStorage.setItem('circuitoIntegrado', circuitoIntegrado);
    localStorage.setItem('potenciometro', potenciometro);
    localStorage.setItem('rele', rele);
    localStorage.setItem('transformador', transformador);
    localStorage.setItem('varistor', varistor);
    localStorage.setItem('fusivel', fusivel);
    localStorage.setItem('relogioCristal', relogioCristal);
    localStorage.setItem('jumper', jumper);
    localStorage.setItem('somaEletronicos', somaEletronicos);
}

function carregarValores() {
    // Carrega os valores salvos no localStorage
    const resistor = localStorage.getItem('resistor') || 0;
    const capacitor = localStorage.getItem('capacitor') || 0;
    const transistor = localStorage.getItem('transistor') || 0;
    const diodo = localStorage.getItem('diodo') || 0;
    const led = localStorage.getItem('led') || 0;
    const indutor = localStorage.getItem('indutor') || 0;
    const circuitoIntegrado = localStorage.getItem('circuitoIntegrado') || 0;
    const potenciometro = localStorage.getItem('potenciometro') || 0;
    const rele = localStorage.getItem('rele') || 0;
    const transformador = localStorage.getItem('transformador') || 0;
    const varistor = localStorage.getItem('varistor') || 0;
    const fusivel = localStorage.getItem('fusivel') || 0;
    const relogioCristal = localStorage.getItem('relogioCristal') || 0;
    const jumper = localStorage.getItem('jumper') || 0;
    const somaEletronicos = localStorage.getItem('somaEletronicos') || 0;

    // Atualiza os campos de entrada e o resultado com os valores salvos
    document.getElementById('num1').value = resistor;
    document.getElementById('num2').value = capacitor;
    document.getElementById('num3').value = transistor;
    document.getElementById('num4').value = diodo;
    document.getElementById('num5').value = led;
    document.getElementById('num6').value = indutor;
    document.getElementById('num7').value = circuitoIntegrado;
    document.getElementById('num8').value = potenciometro;
    document.getElementById('num9').value = rele;
    document.getElementById('num10').value = transformador;
    document.getElementById('num11').value = varistor;
    document.getElementById('num12').value = fusivel;
    document.getElementById('num13').value = relogioCristal;
    document.getElementById('num14').value = jumper;
    document.getElementById('resultado').textContent = somaEletronicos;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;

const totalEletronicos = localStorage.getItem('somaEletronicos');
const votoResistor = localStorage.getItem('resistor');
const votoCapacitor = localStorage.getItem('capacitor');
const votoTransistor = localStorage.getItem('transistor');
const votoDiodo = localStorage.getItem('diodo');
const votoLed = localStorage.getItem('led');
const votoIndutor = localStorage.getItem('indutor');
const votoCircuitoIntegrado = localStorage.getItem('circuitoIntegrado');
const votoPotenciometro = localStorage.getItem('potenciometro');
const votoRele = localStorage.getItem('rele');
const votoTransformador = localStorage.getItem('transformador');
const votoVaristor = localStorage.getItem('varistor');
const votoFusivel = localStorage.getItem('fusivel');
const votoRelogioCristal = localStorage.getItem('relogioCristal');
const votoJumper = localStorage.getItem('jumper');

document.getElementById('x').textContent = totalEletronicos;
document.getElementById('s2').textContent = votoResistor;
document.getElementById('s13').textContent = votoCapacitor;
document.getElementById('s15').textContent = votoTransistor;
document.getElementById('s18').textContent = votoDiodo;
document.getElementById('s19').textContent = votoLed;
document.getElementById('s12').textContent = votoIndutor;
document.getElementById('s17').textContent = votoCircuitoIntegrado;
document.getElementById('s6').textContent = votoPotenciometro;
document.getElementById('s4').textContent = votoRele;
document.getElementById('s9').textContent = votoTransformador;
document.getElementById('s1').textContent = votoVaristor;
document.getElementById('s3').textContent = votoFusivel;
document.getElementById('s7').textContent = votoRelogioCristal;
document.getElementById('s8').textContent = votoJumper;
