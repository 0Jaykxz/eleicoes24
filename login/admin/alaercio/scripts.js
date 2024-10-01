function calcularSoma() {
    const naruto = parseFloat(document.getElementById('num1').value) || 0;
    const goku = parseFloat(document.getElementById('num2').value) || 0;
    const luffy = parseFloat(document.getElementById('num3').value) || 0;
    const ichigo = parseFloat(document.getElementById('num4').value) || 0;
    const saitama = parseFloat(document.getElementById('num5').value) || 0;
    const midoriya = parseFloat(document.getElementById('num6').value) || 0;
    const eren = parseFloat(document.getElementById('num7').value) || 0;
    const lightYagami = parseFloat(document.getElementById('num8').value) || 0;
    const sakura = parseFloat(document.getElementById('num9').value) || 0;
    const tanjiro = parseFloat(document.getElementById('num10').value) || 0;
    const edwardElric = parseFloat(document.getElementById('num11').value) || 0;
    const lelouch = parseFloat(document.getElementById('num12').value) || 0;
    const kirito = parseFloat(document.getElementById('num13').value) || 0;
    const asuna = parseFloat(document.getElementById('num14').value) || 0;
    const cnum15 = parseFloat(document.getElementById('num15').value) || 0;
    const cnum16 = parseFloat(document.getElementById('num16').value) || 0;
    const cnum17 = parseFloat(document.getElementById('num17').value) || 0;
    const cnum18 = parseFloat(document.getElementById('num18').value) || 0;
    const somaAnimes = naruto + goku + luffy + ichigo + saitama + midoriya + eren + lightYagami + sakura + tanjiro + edwardElric + lelouch + kirito + asuna + cnum15 + cnum16 + cnum17 + cnum18;

    // Atualiza o resultado na página
    document.getElementById('resultado').textContent = somaAnimes;

    // Salva os valores no localStorage
    localStorage.setItem('naruto', naruto);
    localStorage.setItem('goku', goku);
    localStorage.setItem('luffy', luffy);
    localStorage.setItem('ichigo', ichigo);
    localStorage.setItem('saitama', saitama);
    localStorage.setItem('midoriya', midoriya);
    localStorage.setItem('eren', eren);
    localStorage.setItem('lightYagami', lightYagami);
    localStorage.setItem('sakura', sakura);
    localStorage.setItem('tanjiro', tanjiro);
    localStorage.setItem('edwardElric', edwardElric);
    localStorage.setItem('lelouch', lelouch);
    localStorage.setItem('kirito', kirito);
    localStorage.setItem('asuna', asuna);
    localStorage.setItem('cnum15', cnum15);
    localStorage.setItem('cnum16', cnum16);
    localStorage.setItem('cnum17', cnum17);
    localStorage.setItem('cnum18', cnum18);
    localStorage.setItem('somaAnimes', somaAnimes);
}

function carregarValores() {
    // Carrega os valores salvos no localStorage
    const naruto = localStorage.getItem('naruto') || 0;
    const goku = localStorage.getItem('goku') || 0;
    const luffy = localStorage.getItem('luffy') || 0;
    const ichigo = localStorage.getItem('ichigo') || 0;
    const saitama = localStorage.getItem('saitama') || 0;
    const midoriya = localStorage.getItem('midoriya') || 0;
    const eren = localStorage.getItem('eren') || 0;
    const lightYagami = localStorage.getItem('lightYagami') || 0;
    const sakura = localStorage.getItem('sakura') || 0;
    const tanjiro = localStorage.getItem('tanjiro') || 0;
    const edwardElric = localStorage.getItem('edwardElric') || 0;
    const lelouch = localStorage.getItem('lelouch') || 0;
    const kirito = localStorage.getItem('kirito') || 0;
    const asuna = localStorage.getItem('asuna') || 0;
    const cnum15 = localStorage.getItem('cnum15') || 0;
    const cnum16 = localStorage.getItem('cnum16') || 0;
    const cnum17 = localStorage.getItem('cnum17') || 0;
    const cnum18 = localStorage.getItem('cnum18') || 0;
    const somaAnimes = localStorage.getItem('somaAnimes') || 0;

    // Atualiza os campos de entrada e o resultado com os valores salvos
    document.getElementById('num1').value = naruto;
    document.getElementById('num2').value = goku;
    document.getElementById('num3').value = luffy;
    document.getElementById('num4').value = ichigo;
    document.getElementById('num5').value = saitama;
    document.getElementById('num6').value = midoriya;
    document.getElementById('num7').value = eren;
    document.getElementById('num8').value = lightYagami;
    document.getElementById('num9').value = sakura;
    document.getElementById('num10').value = tanjiro;
    document.getElementById('num11').value = edwardElric;
    document.getElementById('num12').value = lelouch;
    document.getElementById('num13').value = kirito;
    document.getElementById('num14').value = asuna;
    document.getElementById('num15').value = cnum15;
    document.getElementById('num16').value = cnum16;
    document.getElementById('num17').value = cnum17;
    document.getElementById('num18').value = cnum18;
    
    document.getElementById('resultado').textContent = somaAnimes;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;

const totalAnimes = localStorage.getItem('somaAnimes');
const votoNaruto = localStorage.getItem('naruto');
const votoGoku = localStorage.getItem('goku');
const votoLuffy = localStorage.getItem('luffy');
const votoIchigo = localStorage.getItem('ichigo');
const votoSaitama = localStorage.getItem('saitama');
const votoMidoriya = localStorage.getItem('midoriya');
const votoEren = localStorage.getItem('eren');
const votoLightYagami = localStorage.getItem('lightYagami');
const votoSakura = localStorage.getItem('sakura');
const votoTanjiro = localStorage.getItem('tanjiro');
const votoEdwardElric = localStorage.getItem('edwardElric');
const votoLelouch = localStorage.getItem('lelouch');
const votoKirito = localStorage.getItem('kirito');
const votoAsuna = localStorage.getItem('asuna');
const csa = localStorage.getItem('cnum15');
const csb = localStorage.getItem('cnum16');
const csc = localStorage.getItem('cnum17');
const csd = localStorage.getItem('cnum18');

document.getElementById('x').textContent = totalAnimes;
document.getElementById('s2').textContent = votoNaruto;
document.getElementById('s13').textContent = votoGoku;
document.getElementById('s15').textContent = votoLuffy;
document.getElementById('s18').textContent = votoIchigo;
document.getElementById('s19').textContent = votoSaitama;
document.getElementById('s12').textContent = votoMidoriya;
document.getElementById('s17').textContent = votoEren;
document.getElementById('s6').textContent = votoLightYagami;
document.getElementById('s4').textContent = votoSakura;
document.getElementById('s9').textContent = votoTanjiro;
document.getElementById('s1').textContent = votoEdwardElric;
document.getElementById('s3').textContent = votoLelouch;
document.getElementById('s7').textContent = votoKirito;
document.getElementById('s8').textContent = votoAsuna;
document.getElementById('sa').textContent = csa;
document.getElementById('sb').textContent = csb;
document.getElementById('sc').textContent = csc;
document.getElementById('sd').textContent = csd;
