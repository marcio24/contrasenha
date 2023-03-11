let contrasenha = 0;
let a = false;
let resultado = "0";
let open = false;


document.querySelector(".form").addEventListener("submit", (e)=>{
    e.preventDefault();
    dados();
});

function dados(){
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
