export function cronometro() {
    let tempoRestante = 1500
    let tempo = 1500
    let inicial = 628
    let contador = 0

    let cronometroElemento = document.getElementById('container__Sessão__Cronometro')
    let cronometroRelogio = document.getElementById('relogio_Cronometro')
    let modoAtual = document.getElementById('modo__atual')
    let proximoModo = document.getElementById('proximo__modo')

    let circuloAnimado = document.querySelector(".container__Sessão__circulo-animado")

    // cronometroBotao.innerHTML = ''

    
    let atualizarCronometro = setInterval(() => {
        tempoRestante--

        if (tempoRestante < 0) {
            clearInterval(atualizarCronometro)
            cronometroElemento.innerHTML = '<p>Tempo esgotado!</p>'
            return
        }

        let minutos = Math.floor(tempoRestante / 60)
        let segundos = tempoRestante % 60

        // let tempoFormatado = `<p class="container__Sessão__Cronometro__Timer">${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}</p>`

        cronometroRelogio.innerHTML = `
               <p class="container__Sessão__Cronometro__Timer">${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}</p>
        `
        circuloAnimado.style.strokeDashoffset = inicial - ((contador + 1) * (inicial/tempo))
        contador++

    }, 1000)

    modoAtual.innerHTML = `<img src="./img/type_foco.png" alt="">`
    proximoModo.innerHTML = `<img src="./img/type_pausa-curta.png" alt="">`
}


