import { cronometro } from "./cronometro.js";

document.addEventListener("DOMContentLoaded", function () {
    let botaoCronometro = document.getElementById("botao_Cronometro") 
    let circuloCronometro = document.getElementById('circulo__Cronometro')

    botaoCronometro.addEventListener("click", function () {
        circuloCronometro.innerHTML = `
        <div class="container__Sessão__Cronometro__Border" id="circulo__Cronometro">
            <span class="container__Sessão__Cronometro_Relogio" id="relogio_Cronometro"></span>
            <?xml version="1.0"?>
            <svg width="224" height="224" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <desc>Círculo</desc>
                <title>Countdown</title>
                <circle id="circulo" class="container__Sessão__circulo-animado" cx="112" cy="112" r="100" 
                    fill="none" stroke="#84CC16" stroke-width="10" />
            </svg>
        </div>
        `
        cronometro()
        botaoCronometro.remove()
        
    })
})