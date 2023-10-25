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
            document.getElementById("resultado_1").innerHTML = "Acertou!!";
        }
        else{
            document.getElementById("errado1").innerHTML = "Errou!!! A resposta certa é a Implementação da legislação trabalhista e criação da Justiça do Trabalho. Essas medidas visavam proteger os direitos dos trabalhadores, regulamentar as relações de trabalho e fortalecer o papel do Estado na garantia desses direitos.";
        }
        
        if(respostaUsuario2.value === "correto"){
            document.getElementById("resultado_2").innerHTML = "Acertou!!";
        
        }
        else{
            document.getElementById("errado2").innerHTML = "Errou!!! A resposta certa é 1930-1945. Getúlio Vargas governou o Brasil de forma autoritária durante esse período, conhecido como Estado Novo. ";
        }
        if(respostaUsuario3.value === "correto"){
        document.getElementById("resultado_3").innerHTML = "Acertou!!";
        }
        else{
        document.getElementById("errado3").innerHTML = "Errou!!! A resposta certa é Banco do Brasil. O Banco do Brasil foi criado em 1808, mas durante a Era Vargas passou por uma reestruturação para se tornar uma instituição financeira de fomento ao desenvolvimento econômico do país.";
        }
        
        if(respostaUsuario4.value === "correto"){
        document.getElementById("resultado_4").innerHTML = "Acertou!!";
        }
        else{
        document.getElementById("errado4").innerHTML = "Errou!!! A resposta certa é  Implantação da política de substituição de importações. Essa medida tinha como objetivo estimular o desenvolvimento industrial nacional, reduzindo a dependência de produtos estrangeiros. " ;
        }

        if(respostaUsuario5.value === "correto"){
        document.getElementById("resultado_5").innerHTML = "Acertou!!";
        }
        else{
        document.getElementById("errado5").innerHTML = "Errou!!! A resposta certa é Consolidação das Leis do Trabalho (CLT). A CLT foi criada em 1943 e representou um marco na regulamentação das relações trabalhistas, estabelecendo direitos e deveres tanto para os empregados quanto para os empregadores.        ";
        }

        if(respostaUsuario6.value === "correto"){
        document.getElementById("resultado_6").innerHTML = "Acertou!!";
        }
        else{
        document.getElementById("errado6").innerHTML = "Errou!!! A resposta certa é Valorização da cultura e história brasileira. Durante a Era Vargas, houve um movimento de valorização da cultura nacional, com incentivos à produção artística e literária brasileira, resgate de tradições históricas e promoção do sentimento de pertencimento à nação brasileira. Isso foi feito como forma de fortalecer o nacionalismo e a identidade brasileira.";
        }

        if(respostaUsuario7.value === "correto"){
        document.getElementById("resultado_7").innerHTML = "Acertou!!";
        }
        else{
        document.getElementById("errado7").innerHTML = "Errou!!! a resposta certa é Estado Novo. Getúlio Vargas instituiu o Estado Novo em 1937, que foi um período de autoritarismo no Brasil, marcado por restrições às liberdades políticas e censura à imprensa.";
        }

        if(respostaUsuario8.value === "correto"){
        document.getElementById("resultado_8").innerHTML = "Acertou!!";
        }
        else{
        document.getElementById("errado8").innerHTML = "Errou!!! A resposta certa é Revolução de 1930. Getúlio Vargas chegou ao poder após liderar a Revolução de 1930, que resultou na queda do presidente Washington Luís. " ;
        }

        if(respostaUsuario9.value === "correto"){
        document.getElementById("resultado_9").innerHTML = "Acertou!!";
        }
        else{
        document.getElementById("errado9").innerHTML = "Errou!!! A resposta certa é Getúlio Vargas foi o presidente do Brasil durante a maior parte da Era Vargas, de 1930 a 1945 e de 1951 a 1954.";
        }

        if(respostaUsuario10.value === "correto"){
            document.getElementById("resultado_10").innerHTML = "Acertou!!";
            }

        else{
            document.getElementById("errado10").innerHTML = "Errou!!! A resposta certa é Derrota eleitoral. Vargas renunciou em 1945 após perder as eleições presidenciais.";
            }
    }   
    else{
        alert("Não deixe questões em branco seu jumentinho");
    }
}

    function ola_usuario(){
        var nome_usu = prompt ("Escreva seu nome:");/*para por o nome do usuario no começo do formulário*/
        if(nome_usu){
            document.getElementById("nome_usuario").innerHTML = nome_usu;
        }
    }
