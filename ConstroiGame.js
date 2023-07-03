import { listaMusicas } from "./informacoesMusicas.js";

const campoDigitacao = document.querySelector('.digitar');
const botaoConfirmar = document.querySelector('.confirmar');
const barra = document.querySelector('.duracao');
const botaoDica = document.querySelector('.dica');
const botaoContinuar = document.querySelector('.continuar').hidden=true;
const audio = document.querySelector('audio');
const botaoPular=document.querySelector('.pular');
let pontos = document.querySelector('.pontos');
let adicionaPontos=0;
let index = 0;



//Função principal
botaoConfirmar.addEventListener('click',(event) => {
    event.preventDefault();
    var textoMinusculo = campoDigitacao.value.toLowerCase()
    console.log(textoMinusculo)
    if(textoMinusculo==listaMusicas[index].titulo || textoMinusculo==listaMusicas[index].anime || textoMinusculo==listaMusicas[index].artista || textoMinusculo==listaMusicas[index].anime2 ){
        esconderElementos();
        const construirCard=document.createElement("vid");
        construirCard.innerHTML=listaMusicas[index].card;
        document.querySelector('.card').append(construirCard);
        fazerPontos();
        musica.currentTime=0;
        musica.pause();
        campoDigitacao.value="";
        

    }else{
        diminuirPontos();
        const mensagemErro = document.createElement("Errou");
        mensagemErro.innerHTML="Resposta Errada!!"
        setTimeout(excluirErro,2000)
        document.querySelector('.div_erro').append(mensagemErro);

        function excluirErro(){
           mensagemErro.innerHTML="";
        }
    }
})




botaoDica.addEventListener('click',() =>{
    diminuirPontos();
    document.querySelector('.dicaInput').innerHTML=listaMusicas[index].dica;
    setTimeout( excluirDica,4000);

    function excluirDica(){
        document.querySelector('.dicaInput').innerHTML=""
    }  
})

document.querySelector('.continuar').addEventListener('click',(event) =>{
    if(index==24){
        event.preventDefault();
        document.querySelector('.card').hidden=true;
        document.querySelector('.informacoes_cima').hidden=true;
        document.querySelector('.continuar').hidden=true;
        document.querySelector('.dificuldade').hidden=true;
        document.querySelector('.pontos').hidden=true;
        document.querySelector('.dica').hidden=true;
        document.querySelector('.digitar').hidden=true;

        const imgFinal = document.createElement("teste");
        imgFinal.innerHTML=`<img class="imagem_final" src="imagens/anime-congratulations.gif">`;
        document.querySelector('body').appendChild(imgFinal);
        
        const mensagemFinal = document.createElement("teste1");
        mensagemFinal.innerHTML=`<p>Você concluiu o quiz com ${adicionaPontos} pontos, parabéns!!!</p>`;
        document.querySelector('body').appendChild(mensagemFinal);
        
        const botaoFinal = document.createElement("teste2");
        botaoFinal.innerHTML=`<a class="button" href="index.html">Jogar novamente</a>`;
        document.querySelector('body').appendChild(botaoFinal);
        
        
        

    }

    event.preventDefault();
    index++;
    duracaoMusica.textContent=segundosParaMinutos(Math.floor(audio.duration));
    trocarMusica(index);
    mostrarElementos();

  
    document.querySelector('.dificuldade').textContent=`Dificuldade: ${listaMusicas[index].dificuldade}`
   
    document.querySelector('.card').innerHTML="";
    
})

botaoPular.addEventListener('click', (event) => {
    event.preventDefault();
    esconderElementos();
    campoDigitacao.value="";
    musica.currentTime=0;
    musica.pause();
    const construirCard=document.createElement("vid");
    construirCard.innerHTML=listaMusicas[index].card;
    document.querySelector('.card').append(construirCard);
})

function esconderElementos(){
    barra.hidden=true;
    document.querySelector('.imagem_musica').hidden=true;
    document.querySelector('.duracao').hidden=true;
    document.querySelector('.tempo').hidden=true;
    document.querySelector('.player').hidden=true;
    document.querySelector('.icone').hidden=true;
    document.querySelector('.pausa').hidden=true;
    document.querySelector('.play').hidden=true;
    document.querySelector('.stop').hidden=true;
    document.querySelector('.confirmar').hidden=true;
    document.querySelector('.pular').hidden=true;
    document.querySelector('.digitar').hidden=true;
    document.querySelector('.continuar').hidden=false;

}

function mostrarElementos(){
    barra.hidden=false;
    document.querySelector('.imagem_musica').hidden=false;
    document.querySelector('.duracao').hidden=false;
    document.querySelector('.tempo').hidden=false;
    document.querySelector('.player').hidden=false;
    document.querySelector('.icone').hidden=false;
    document.querySelector('.pausa').hidden=false;
    document.querySelector('.play').hidden=false;
    document.querySelector('.stop').hidden=false;
    document.querySelector('.confirmar').hidden=false;
    document.querySelector('.pular').hidden=false;
    document.querySelector('.digitar').hidden=false;
    document.querySelector('.continuar').hidden=true;

}

function trocarMusica(index){
    audio.setAttribute('src', listaMusicas[index].src)
}

function fazerPontos(){
    adicionaPontos=adicionaPontos + 3;
    document.querySelector('.pontos').innerHTML=`${adicionaPontos} pontos`
}

function diminuirPontos(){
    adicionaPontos--;
    if(adicionaPontos<0){
        adicionaPontos=0
        document.querySelector('.pontos').innerHTML=`${adicionaPontos} pontos`
    }else{
        document.querySelector('.pontos').innerHTML=`${adicionaPontos} pontos`
    }
    
}

