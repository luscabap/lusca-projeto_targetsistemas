async function requisitarAPI(){
        const conexao = await fetch("http://localhost:3000/dias");
        return conexao.json();
}

const campoTexto = document.getElementById('campoNumero')

requisitarAPI().then(x => {
    const lista = x.filter(num => num.valor !== 0);

    const ValoresOrdenados = lista.sort((a, b)=> a.valor - b.valor);
    const menorValor = ValoresOrdenados[0].dia;

    const listaNumeros = lista.map((x, y) => x.valor);

    const numerosSomados = listaNumeros.reduce((x, y)=> x + y);

    const mediaMensal = numerosSomados / listaNumeros.length;

    const numerosSuperioresMedia = listaNumeros.filter((x, y)=>{
        return x > mediaMensal;
    })

    const diasCertos = numerosSuperioresMedia.length;

    campoTexto.innerHTML = `
        <p>O menor valor está no dia ${ValoresOrdenados[0].dia} equivalente a R$ ${ValoresOrdenados[0].valor.toFixed(2)}.</p>
        <p>O maior valor está no dia ${ValoresOrdenados[20].dia} equivalente a R$ ${ValoresOrdenados[20].valor.toFixed(2)}.</p>
        <p>O número de dias no mês em que o valor de faturamento diário é superior à média mensal são: <strong class="mauz">${diasCertos} dias</strong>.</p>
    `
})