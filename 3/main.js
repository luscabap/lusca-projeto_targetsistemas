async function requisitarAPI(){
        const conexao = await fetch("http://localhost:3000/dias");
        return conexao.json();
}

const campoTexto = document.getElementById('campoNumero')

requisitarAPI().then(x => {
    const lista = x.filter(num => num.valor !== 0);
    console.log(lista);

    const ValoresOrdenados = lista.sort((a, b)=> a.valor - b.valor);
    console.log("O menor valor está no dia " + ValoresOrdenados[0].dia + " equivalente a " + ValoresOrdenados[0].valor);
    console.log("O maior valor está no dia " + ValoresOrdenados[20].dia + " equivalente a " + ValoresOrdenados[20].valor)

    const listaNumeros = lista.map((x, y) => x.valor);
    console.log(listaNumeros);
    const numerosSomados = listaNumeros.reduce((x, y)=> x + y);
    console.log(numerosSomados.toFixed(2));
    const mediaMensal = numerosSomados / listaNumeros.length;
    console.log(mediaMensal.toFixed(2));

    const numerosSuperioresMedia = listaNumeros.filter((x, y)=>{
        return x > mediaMensal;
    })
    console.log(numerosSuperioresMedia);

    const diasCertos = numerosSuperioresMedia.length;
    console.log(diasCertos);

    campoTexto.innerHTML = `
        O número de dias no mês em que o valor de faturamento diário é superior à média mensal são: <strong class="mauz">${diasCertos} dias</strong>.
    `
})