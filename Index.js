let contrasenha = 0;
let a = false;
let resultado = "0";
let open = false;


document.querySelector(".form").addEventListener("submit", (e)=>{
    e.preventDefault();
    dados(e);
});

function dados(e){
    
    contrasenha = document.querySelector('#contrasenha').value; //Obtem a String
    tratado = contrasenha.split(""); //Separa os caracteres em arrays
    a = document.querySelector('#A'); // Obtem o status do Checkbox

        if(a.checked == false){
            let fBlock = (parseInt(tratado[0]) + parseInt(tratado[1])).toString();
            let sBlock = (parseInt(tratado[2]) + parseInt(tratado[3])).toString();
            let Fbt = fBlock.split("");
            let Sbt = sBlock.split("");

                if(Fbt.length == 1 && Sbt.length == 1){resultado = (`${Math.floor(Math.random() * 10)}0${fBlock}${Math.floor(Math.random() * 10)}0${sBlock}`)};
                if(Fbt.length == 2 && Sbt.length == 1){resultado = (`${Math.floor(Math.random() * 10)}${fBlock}${Math.floor(Math.random() * 10)}0${sBlock}`)};
                if(Fbt.length == 1 && Sbt.length == 2){resultado = (`${Math.floor(Math.random() * 10)}0${fBlock}${Math.floor(Math.random() * 10)}${sBlock}`)};
                if(Fbt.length == 2 && Sbt.length == 2){resultado = (`${Math.floor(Math.random() * 10)}${fBlock}${Math.floor(Math.random() * 10)}${sBlock}`)};
        }

        else if(a.checked == true){
            let fBlock = (parseInt(tratado[0]) + parseInt(tratado[1])).toString();
            let sBlock = (parseInt(tratado[2]) + parseInt(tratado[3])).toString();
            let Fbt = fBlock.split("");
            let Sbt = sBlock.split("");

                if(Fbt.length == 1 && Sbt.length == 1){resultado = (`A${Math.floor(Math.random() * 10)}0${fBlock}${Math.floor(Math.random() * 10)}0${sBlock}`)};
                if(Fbt.length == 2 && Sbt.length == 1){resultado = (`A${Math.floor(Math.random() * 10)}${fBlock}${Math.floor(Math.random() * 10)}0${sBlock}`)};
                if(Fbt.length == 1 && Sbt.length == 2){resultado = (`A${Math.floor(Math.random() * 10)}0${fBlock}${Math.floor(Math.random() * 10)}${sBlock}`)};
                if(Fbt.length == 2 && Sbt.length == 2){resultado = (`A${Math.floor(Math.random() * 10)}${fBlock}${Math.floor(Math.random() * 10)}${sBlock}`)};
        }
        abreModal();

}
function abreModal() {
    $("#modal-mensagem").modal();
    let element = document.querySelector(".conteudo");
    element.innerHTML = `Senha: ${resultado}`;
    navigator.clipboard.writeText(resultado);
    document.querySelector('#contrasenha').value='';
}
function Openframe(){

    document.querySelector(".dframe").style.display = "block";
    document.querySelector(".fecha-frame").style.display = "block";

    document.querySelector(".abre-frame").style.display = "none";
}
function Closeframe(){
    
    document.querySelector(".dframe").style.display = "none";
    document.querySelector(".fecha-frame").style.display = "none";

    document.querySelector(".abre-frame").style.display = "block";
}

let i = setInterval(function loading() {
    clearInterval(i);
    document.getElementById("loading").style.display = "none";
    document.querySelector(".content").style.display = "block";
}, 500);



//document.querySelector(".dframe").style.display = "block";