let Elvis = 0;
let JimiHendrix = 0;
let Ozzy = 0;
let KurtCobain = 0;

function testar() {
    console.log("teste");

   
    let radios = document.querySelectorAll('input[type="radio"]:checked');
    
    
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

    
    let resultado = `Elvis = ${Elvis}<br>
                     Jimi Hendrix = ${JimiHendrix}<br> 
                     Ozzy = ${Ozzy}<br>
                     Kurt Cobain = ${KurtCobain}`;
    document.getElementById("resultado").innerHTML = resultado;

    
    localStorage.setItem('Elvis', Elvis);
    localStorage.setItem('Jimi Hendrix', JimiHendrix);
    localStorage.setItem('Ozzy', Ozzy);
    localStorage.setItem('Kurt Cobain', KurtCobain);

    
    let maior = Math.max(Elvis, JimiHendrix, Ozzy, KurtCobain);
    let pagina = '';

   
    if (Elvis === maior) {
        pagina = 'Elvis';
    } else if (JimiHendrix === maior) {
        pagina = 'JH';
    } else if (Ozzy === maior) {
        pagina = 'ozzy';
    } else if (KurtCobain === maior) {
        pagina = 'KC';
    }

    
    setTimeout(() => {
        window.location.href = pagina + '.html';  
    }, 5000);
}