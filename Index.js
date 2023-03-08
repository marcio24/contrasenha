let contrasenha = 0;
let a = false;

function dados(){
    contrasenha = document.querySelector('#contrasenha').value; //Obtem a String
    tratado = contrasenha.split(""); //Separa os caracteres em arrays
    a = document.querySelector('#A'); // Obtem o status do Checkbox

        if(a.checked == false){
            let fBlock = (parseInt(tratado[0]) + parseInt(tratado[1])).toString();
            let sBlock = (parseInt(tratado[2]) + parseInt(tratado[3])).toString();
            let Fbt = fBlock.split("");
            let Sbt = sBlock.split("");

                if(Fbt.length == 1 && Sbt.length == 1){alert(`Senha: 00${fBlock}00${sBlock}`)};
                if(Fbt.length == 2 && Sbt.length == 1){alert(`Senha: 0${fBlock}00${sBlock}`)};
                if(Fbt.length == 1 && Sbt.length == 2){alert(`Senha: 00${fBlock}0${sBlock}`)};
                if(Fbt.length == 2 && Sbt.length == 2){alert(`Senha: 0${fBlock}0${sBlock}`)};
        }

        else if(a.checked == true){
            let fBlock = (parseInt(tratado[0]) + parseInt(tratado[1])).toString();
            let sBlock = (parseInt(tratado[2]) + parseInt(tratado[3])).toString();
            let Fbt = fBlock.split("");
            let Sbt = sBlock.split("");

                if(Fbt.length == 1 && Sbt.length == 1){alert(`Senha: A00${fBlock}00${sBlock}`)};
                if(Fbt.length == 2 && Sbt.length == 1){alert(`Senha: A0${fBlock}00${sBlock}`)};
                if(Fbt.length == 1 && Sbt.length == 2){alert(`Senha: A00${fBlock}0${sBlock}`)};
                if(Fbt.length == 2 && Sbt.length == 2){alert(`Senha: A0${fBlock}0${sBlock}`)};
        }
}