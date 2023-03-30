const dadosFaturamento = [
    {
        "estado": "sp",
        "valor": 67836.43
    },
    {
        "estado": "rj",
        "valor": 36678.66
    },
    {
        "estado": "mg",
        "valor": 29229.88
    },
    {
        "estado": "es",
        "valor": 27165.48
    },
    {
        "estado": "ou",
        "valor": 19849.53
    }
];

const botaoMedia = document.getElementById('btnMedia');
const areaCalculo = document.getElementById('areaCalculo');

const listaNumeros = dadosFaturamento.map(x=>  x.valor);
console.log(listaNumeros);
const somaNumeros = listaNumeros.reduce((x, y)=> x + y);
console.log(somaNumeros);

const porcentagem = dadosFaturamento.map(x => (x.valor * 100) / somaNumeros);
console.log(porcentagem);

botaoMedia.addEventListener("click", ()=>{
    areaCalculo.innerHTML = `
    <table>
        <tr>
            <th>ESTADO</th>
            <th>PORCENTAGEM</th>
        </tr>
        <tr>
            <td class="fundo_media">SÃO PAULO</td>
            <td class="fundo_result">${porcentagem[0].toFixed(2)} %</td>
        </tr>
        <tr>
            <td class="fundo_media">RIO DE JANEIRO</td>
            <td class="fundo_result">${porcentagem[1].toFixed(2)} %</td>
        </tr>
        <tr>
            <td class="fundo_media">MINAS GERAIS</td>
            <td class="fundo_result">${porcentagem[2].toFixed(2)} %</td>
        </tr>
        <tr>
            <td class="fundo_media">ESPÍRITO SANTO</td>
            <td class="fundo_result">${porcentagem[3].toFixed(2)} %</td>
        </tr>
        <tr>
            <td class="fundo_media">OUTROS</td>
            <td class="fundo_result">${porcentagem[4].toFixed(2)} %</td>
        </tr>
    </table>
    `
})