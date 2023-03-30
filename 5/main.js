const textoDigitado = document.getElementById('inputTexto');
const botaoConverter = document.getElementById('buttonConverter');
const campoTexto = document.getElementById('campoTexto');

function inverterString(texto){
    var saida = "";
    for(var i = texto.length-1; i>=0; i--){
        saida += texto[i];
    }

    campoTexto.innerHTML = `
    <p class="texto_convertido">${saida}
    `
    console.log(saida);
}

botaoConverter.addEventListener("click", ()=>{
    const txtCerto = textoDigitado.value;
    inverterString(txtCerto);
})
