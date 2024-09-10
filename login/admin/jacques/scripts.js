function calcularSoma() {
    const hokage = parseFloat(document.getElementById('num1').value) || 0;
    const sharingan = parseFloat(document.getElementById('num2').value) || 0;
    const rasengan = parseFloat(document.getElementById('num3').value) || 0;
    const bijuu = parseFloat(document.getElementById('num4').value) || 0;
    const chakra = parseFloat(document.getElementById('num5').value) || 0;
    const kunai = parseFloat(document.getElementById('num6').value) || 0;
    const shuriken = parseFloat(document.getElementById('num7').value) || 0;
    const anbu = parseFloat(document.getElementById('num8').value) || 0;
    const jutsu = parseFloat(document.getElementById('num9').value) || 0;
    const genjutsu = parseFloat(document.getElementById('num10').value) || 0;
    const rinnegan = parseFloat(document.getElementById('num11').value) || 0;
    const chidori = parseFloat(document.getElementById('num12').value) || 0;
    const taijutsu = parseFloat(document.getElementById('num13').value) || 0;
    const kagebunshin = parseFloat(document.getElementById('num14').value) || 0;
    const somaNinjas = hokage + sharingan + rasengan + bijuu + chakra + kunai + shuriken + anbu + jutsu + genjutsu + rinnegan + chidori + taijutsu + kagebunshin;
    
    // Atualiza o resultado na página
    document.getElementById('resultado').textContent = somaNinjas;
    
    // Salva os valores no localStorage
    localStorage.setItem('hokage', hokage);
    localStorage.setItem('sharingan', sharingan);
    localStorage.setItem('rasengan', rasengan);
    localStorage.setItem('bijuu', bijuu);
    localStorage.setItem('chakra', chakra);
    localStorage.setItem('kunai', kunai);
    localStorage.setItem('shuriken', shuriken);
    localStorage.setItem('anbu', anbu);
    localStorage.setItem('jutsu', jutsu);
    localStorage.setItem('genjutsu', genjutsu);
    localStorage.setItem('rinnegan', rinnegan);
    localStorage.setItem('chidori', chidori);
    localStorage.setItem('taijutsu', taijutsu);
    localStorage.setItem('kagebunshin', kagebunshin);
    localStorage.setItem('somaNinjas', somaNinjas);
}

function carregarValores() {
    // Carrega os valores salvos no localStorage
    const hokage = localStorage.getItem('hokage') || 0;
    const sharingan = localStorage.getItem('sharingan') || 0;
    const rasengan = localStorage.getItem('rasengan') || 0;
    const bijuu = localStorage.getItem('bijuu') || 0;
    const chakra = localStorage.getItem('chakra') || 0;
    const kunai = localStorage.getItem('kunai') || 0;
    const shuriken = localStorage.getItem('shuriken') || 0;
    const anbu = localStorage.getItem('anbu') || 0;
    const jutsu = localStorage.getItem('jutsu') || 0;
    const genjutsu = localStorage.getItem('genjutsu') || 0;
    const rinnegan = localStorage.getItem('rinnegan') || 0;
    const chidori = localStorage.getItem('chidori') || 0;
    const taijutsu = localStorage.getItem('taijutsu') || 0;
    const kagebunshin = localStorage.getItem('kagebunshin') || 0;
    const somaNinjas = localStorage.getItem('somaNinjas') || 0;

    // Atualiza os campos de entrada e o resultado com os valores salvos
    document.getElementById('num1').value = hokage;
    document.getElementById('num2').value = sharingan;
    document.getElementById('num3').value = rasengan;
    document.getElementById('num4').value = bijuu;
    document.getElementById('num5').value = chakra;
    document.getElementById('num6').value = kunai;
    document.getElementById('num7').value = shuriken;
    document.getElementById('num8').value = anbu;
    document.getElementById('num9').value = jutsu;
    document.getElementById('num10').value = genjutsu;
    document.getElementById('num11').value = rinnegan;
    document.getElementById('num12').value = chidori;
    document.getElementById('num13').value = taijutsu;
    document.getElementById('num14').value = kagebunshin;
    document.getElementById('resultado').textContent = somaNinjas;
}

// Chama a função para carregar os valores ao carregar a página
window.onload = carregarValores;

const totalNinjas = localStorage.getItem('somaNinjas');
const votoHokage = localStorage.getItem('hokage');
const votoSharingan = localStorage.getItem('sharingan');
const votoRasengan = localStorage.getItem('rasengan');
const votoBijuu = localStorage.getItem('bijuu');
const votoChakra = localStorage.getItem('chakra');
const votoKunai = localStorage.getItem('kunai');
const votoShuriken = localStorage.getItem('shuriken');
const votoAnbu = localStorage.getItem('anbu');
const votoJutsu = localStorage.getItem('jutsu');
const votoGenjutsu = localStorage.getItem('genjutsu');
const votoRinnegan = localStorage.getItem('rinnegan');
const votoChidori = localStorage.getItem('chidori');
const votoTaijutsu = localStorage.getItem('taijutsu');
const votoKagebunshin = localStorage.getItem('kagebunshin');

document.getElementById('x').textContent = totalNinjas;
document.getElementById('s2').textContent = votoHokage;
document.getElementById('s13').textContent = votoSharingan;
document.getElementById('s15').textContent = votoRasengan;
document.getElementById('s18').textContent = votoBijuu;
document.getElementById('s19').textContent = votoChakra;
document.getElementById('s12').textContent = votoKunai;
document.getElementById('s17').textContent = votoShuriken;
document.getElementById('s6').textContent = votoAnbu;
document.getElementById('s4').textContent = votoJutsu;
document.getElementById('s9').textContent = votoGenjutsu;
document.getElementById('s1').textContent = votoRinnegan;
document.getElementById('s3').textContent = votoChidori;
document.getElementById('s7').textContent = votoTaijutsu;
document.getElementById('s8').textContent = votoKagebunshin;
