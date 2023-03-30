const botaoVerifica = document.getElementById('verificar');
const botaoLimpar = document.getElementById('limpar');
botaoVerifica.addEventListener("click", ()=>{
    var num = document.getElementById('numFib').value;
    console.log(num);

    fazerSequencia();
})

async function fazerSequencia(){
    //0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
    // x, y, z 

    const num = await document.getElementById('numFib').value;
    let x = 0, y = 1, z = 0;
    let listaFib = [""];
    
    listaFib += x + " " + y;
    
    for (let i = 1; i < num; i++){
        z = x + y;
        listaFib += " " + z;
        x = y;
        y = z;
    }
    
    console.log([listaFib]);
    
    var campoEscrita = document.getElementById('campoExisteOuNao');

    if (listaFib.includes(num)){
        campoEscrita.classList.remove("erro");
        campoEscrita.classList.remove("hide");
        campoEscrita.classList.add("certo");
        campoEscrita.innerHTML = `
        <p> Esse número existe na sequência fibonacci</p>
        <p>${listaFib}</p>
        `;
    } else{
        campoEscrita.classList.remove("certo");
        campoEscrita.classList.remove("hide");
        campoEscrita.classList.add("erro") ;
        campoEscrita.innerHTML = `<p> Esse número não existe na sequência fibonacci</p>`;
    }
    

}

botaoLimpar.addEventListener("click", ()=>{
    var campoEscrita = document.getElementById('campoExisteOuNao');
    campoEscrita.classList.add("hide");
})