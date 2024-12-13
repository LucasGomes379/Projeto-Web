let Elvis = 0;
let JimiHendrix = 0;
let Ozzy = 0;
let KurtCobain = 0;

function testar() {
    console.log("teste");

    // Pega todos os radio buttons selecionados
    let radios = document.querySelectorAll('input[type="radio"]:checked');
    
    // Loop para contar os votos
    radios.forEach(e => {
        if (e.value == "Elvis") {
            Elvis++;
        } else if (e.value == "Jimi-Hendrix") {
            JimiHendrix++;
        } else if (e.value == "Ozzy") {
            Ozzy++;
        } else if (e.value == "Kurt-Cobain") {
            KurtCobain++;
        }
    });

    // Exibe o resultado no label
    let resultado = `Elvis = ${Elvis}<br>
                     Jimi Hendrix = ${JimiHendrix}<br> 
                     Ozzy = ${Ozzy}<br>
                     Kurt Cobain = ${KurtCobain}`;
    document.getElementById("resultado").innerHTML = resultado;

    // Salva os votos no localStorage
    localStorage.setItem('Elvis', Elvis);
    localStorage.setItem('Jimi Hendrix', JimiHendrix);
    localStorage.setItem('Ozzy', Ozzy);
    localStorage.setItem('Kurt Cobain', KurtCobain);

    // Encontra o artista com mais votos
    let maior = Math.max(Elvis, JimiHendrix, Ozzy, KurtCobain);
    let pagina = '';

    // Verifica qual o artista com mais votos
    if (Elvis === maior) {
        pagina = 'Elvis';
    } else if (JimiHendrix === maior) {
        pagina = 'JH';
    } else if (Ozzy === maior) {
        pagina = 'ozzy';
    } else if (KurtCobain === maior) {
        pagina = 'KC';
    }

    // Abre a página após 5 segundos
    setTimeout(() => {
        window.location.href = pagina + '.html';  // Usando window.location.href ao invés de window.open
    }, 5000);
}