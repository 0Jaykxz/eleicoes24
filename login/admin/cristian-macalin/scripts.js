function calcularSoma() {
    const ai = parseFloat(document.getElementById('num1').value) || 0;  // 愛 "Amor"
    const hikari = parseFloat(document.getElementById('num2').value) || 0; // 光 "Luz"
    const yume = parseFloat(document.getElementById('num3').value) || 0;  // 夢 "Sonho"
    const ki = parseFloat(document.getElementById('num4').value) || 0;    // 気 "Energia"
    const saki = parseFloat(document.getElementById('num5').value) || 0;  // 先 "Futuro"
    const umi = parseFloat(document.getElementById('num6').value) || 0;   // 海 "Mar"
    const sora = parseFloat(document.getElementById('num7').value) || 0;  // 空 "Céu"
    const hana = parseFloat(document.getElementById('num8').value) || 0;  // 花 "Flor"
    const tsuki = parseFloat(document.getElementById('num9').value) || 0; // 月 "Lua"
    const hi = parseFloat(document.getElementById('num10').value) || 0;   // 火 "Fogo"
    const mizu = parseFloat(document.getElementById('num11').value) || 0; // 水 "Água"
    const yuki = parseFloat(document.getElementById('num12').value) || 0; // 雪 "Neve"
    const kaze = parseFloat(document.getElementById('num13').value) || 0; // 風 "Vento"
    const hoshi = parseFloat(document.getElementById('num14').value) || 0; // 星 "Estrela"
    const brigadeiro = parseFloat(document.getElementById('num15').value) || 0;
	const beijinho = parseFloat(document.getElementById('num16').value) || 0;
	const quindim = parseFloat(document.getElementById('num17').value) || 0;
	const pudim = parseFloat(document.getElementById('num18').value) || 0;
    const somaKanjis = ai + hikari + yume + ki + saki + umi + sora + hana + tsuki + hi + mizu + yuki + kaze + hoshi + brigadeiro + beijinho + quindim + pudim;
    
    // Atualiza o resultado na página
    document.getElementById('resultado').textContent = somaKanjis;
    
    // Salva os valores no localStorage
    localStorage.setItem('ai', ai);
    localStorage.setItem('hikari', hikari);
    localStorage.setItem('yume', yume);
    localStorage.setItem('ki', ki);
    localStorage.setItem('saki', saki);
    localStorage.setItem('umi', umi);
    localStorage.setItem('sora', sora);
    localStorage.setItem('hana', hana);
    localStorage.setItem('tsuki', tsuki);
    localStorage.setItem('hi', hi);
    localStorage.setItem('mizu', mizu);
    localStorage.setItem('yuki', yuki);
    localStorage.setItem('kaze', kaze);
    localStorage.setItem('hoshi', hoshi);
    localStorage.setItem('somaKanjis', somaKanjis);
    localStorage.setItem('brigadeiro', brigadeiro);
	localStorage.setItem('beijinho', beijinho);
	localStorage.setItem('quindim', quindim);
	localStorage.setItem('pudim', pudim);
}

function carregarValores() {
    // Carrega os valores salvos no localStorage
    const ai = localStorage.getItem('ai') || 0;
    const hikari = localStorage.getItem('hikari') || 0;
    const yume = localStorage.getItem('yume') || 0;
    const ki = localStorage.getItem('ki') || 0;
    const saki = localStorage.getItem('saki') || 0;
    const umi = localStorage.getItem('umi') || 0;
    const sora = localStorage.getItem('sora') || 0;
    const hana = localStorage.getItem('hana') || 0;
    const tsuki = localStorage.getItem('tsuki') || 0;
    const hi = localStorage.getItem('hi') || 0;
    const mizu = localStorage.getItem('mizu') || 0;
    const yuki = localStorage.getItem('yuki') || 0;
    const kaze = localStorage.getItem('kaze') || 0;
    const hoshi = localStorage.getItem('hoshi') || 0;
    const brigadeiro = localStorage.getItem('brigadeiro') || 0;
	const beijinho = localStorage.getItem('beijinho') || 0;
	const quindim = localStorage.getItem('quindim') || 0;
	const pudim = localStorage.getItem('pudim') || 0;
    const somaKanjis = localStorage.getItem('somaKanjis') || 0;

    // Atualiza os campos de entrada e o resultado com os valores salvos
    document.getElementById('num1').value = ai;
    document.getElementById('num2').value = hikari;
    document.getElementById('num3').value = yume;
    document.getElementById('num4').value = ki;
    document.getElementById('num5').value = saki;
    document.getElementById('num6').value = umi;
    document.getElementById('num7').value = sora;
    document.getElementById('num8').value = hana;
    document.getElementById('num9').value = tsuki;
    document.getElementById('num10').value = hi;
    document.getElementById('num11').value = mizu;
    document.getElementById('num12').value = yuki;
    document.getElementById('num13').value = kaze;
    document.getElementById('num14').value = hoshi;
    document.getElementById('num15').value = brigadeiro;
	document.getElementById('num16').value = beijinho;
	document.getElementById('num17').value = quindim;
	document.getElementById('num18').value = pudim;
    document.getElementById('resultado').textContent = somaKanjis;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;

const totalKanjis = localStorage.getItem('somaKanjis');
const votoAi = localStorage.getItem('ai');
const votoHikari = localStorage.getItem('hikari');
const votoYume = localStorage.getItem('yume');
const votoKi = localStorage.getItem('ki');
const votoSaki = localStorage.getItem('saki');
const votoUmi = localStorage.getItem('umi');
const votoSora = localStorage.getItem('sora');
const votoHana = localStorage.getItem('hana');
const votoTsuki = localStorage.getItem('tsuki');
const votoHi = localStorage.getItem('hi');
const votoMizu = localStorage.getItem('mizu');
const votoYuki = localStorage.getItem('yuki');
const votoKaze = localStorage.getItem('kaze');
const votoHoshi = localStorage.getItem('hoshi');
const sa = localStorage.getItem('brigadeiro');
const sb = localStorage.getItem('beijinho');
const sc = localStorage.getItem('quindim');
const sd = localStorage.getItem('pudim');

document.getElementById('x').textContent = totalKanjis;
document.getElementById('s2').textContent = votoAi;
document.getElementById('s13').textContent = votoHikari;
document.getElementById('s15').textContent = votoYume;
document.getElementById('s18').textContent = votoKi;
document.getElementById('s19').textContent = votoSaki;
document.getElementById('s12').textContent = votoUmi;
document.getElementById('s17').textContent = votoSora;
document.getElementById('s6').textContent = votoHana;
document.getElementById('s4').textContent = votoTsuki;
document.getElementById('s9').textContent = votoHi;
document.getElementById('s1').textContent = votoMizu;
document.getElementById('s3').textContent = votoYuki;
document.getElementById('s7').textContent = votoKaze;
document.getElementById('s8').textContent = votoHoshi;
document.getElementById('sa').textContent = sa;
document.getElementById('sb').textContent = sb;
document.getElementById('sc').textContent = sc;
document.getElementById('sd').textContent = sd;

