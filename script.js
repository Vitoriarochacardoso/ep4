function botaozinho() {
    var respostaUsuario1 = document.querySelector('input[name="resposta1"]:checked');
    var respostaUsuario2 = document.querySelector('input[name="resposta2"]:checked');
    var respostaUsuario3 = document.querySelector('input[name="resposta3"]:checked');
    var respostaUsuario4 = document.querySelector('input[name="resposta4"]:checked');
    var respostaUsuario5 = document.querySelector('input[name="resposta5"]:checked');
    var respostaUsuario6 = document.querySelector('input[name="resposta6"]:checked');
    var respostaUsuario7 = document.querySelector('input[name="resposta7"]:checked');
    var respostaUsuario8 = document.querySelector('input[name="resposta8"]:checked');
    var respostaUsuario9 = document.querySelector('input[name="resposta9"]:checked');
    var respostaUsuario10 = document.querySelector('input[name="resposta10"]:checked');

    if (respostaUsuario1 && respostaUsuario2 && respostaUsuario3 && respostaUsuario4 && respostaUsuario5 && respostaUsuario6 && respostaUsuario7 && respostaUsuario8 && respostaUsuario9 && respostaUsuario10) {
        if(respostaUsuario1.value === "correto"){
            document.getElementById("resultado_1").innerHTML = "acertou!!";
        }
        else{
            document.getElementById("resultado_1").innerHTML = "Errou!!";
    }
    }
    if(respostaUsuario1.value === "correto"){
        document.getElementById("resultado_2").innerHTML = "acertou!!";
    
    }
    else{
        document.getElementById("resultado_2").innerHTML = "Errou!!";
    }
    if(respostaUsuario1.value === "correto"){
    document.getElementById("resultado_3").innerHTML = "acertou!!";
    }
    else{
    document.getElementById("resultado_3").innerHTML = "Errou!!";
    }
    
    if(respostaUsuario1.value === "correto"){
    document.getElementById("resultado_4").innerHTML = "acertou!!";
    }
    else{
    document.getElementById("resultado_4").innerHTML = "Errou!!" ;
    }

    if(respostaUsuario1.value === "correto"){
    document.getElementById("resultado_5").innerHTML = "acertou!!";
    }
    else{
    document.getElementById("resultado_5").innerHTML = "Errou!!";
    }

    if(respostaUsuario1.value === "correto"){
    document.getElementById("resultado_6").innerHTML = "acertou!!";
    }
    else{
    document.getElementById("resultado_6").innerHTML = "Errou!!";
    }

    if(respostaUsuario1.value === "correto"){
    document.getElementById("resultado_7").innerHTML = "acertou!!";
    }
    else{
    document.getElementById("resultado_7").innerHTML = "Errou!!";
    }

    if(respostaUsuario1.value === "correto"){
    document.getElementById("resultado_8").innerHTML = "acertou!!";
    }
    else{
     document.getElementById("resultado_8").innerHTML = "Errou!!" ;
    }

    if(respostaUsuario1.value === "correto"){
    document.getElementById("resultado_9").innerHTML = "acertou!!";
    }
    else{
    document.getElementById("resultado_9").innerHTML = "Errou!!";
    }

    if(respostaUsuario1.value === "correto"){
        document.getElementById("resultado_10").innerHTML = "acertou!!";
        }

    else{
        document.getElementById("resultado_10").innerHTML = "Errou!!";
        }
    }   
    else{
        alert("Não deixe questões em branco seu jumentinho")
    }
    function ola_usuario(){
        var nome_usu = prompt ("Escreva seu nome:");
        if(nome_usu){
            document.getElementById("nome_usuario").innerHTML = nome_usu
        }
    }
