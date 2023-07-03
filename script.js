let musica = document.querySelector('audio');
document.querySelector('.play').addEventListener('click', tocarMusica)
document.querySelector('.pausa').addEventListener('click', pausarMusica);
musica.addEventListener('timeupdate', atualizarBarra);  
document.querySelector('.stop').addEventListener('click', pararMusica)

let duracaoMusica = document.querySelector('.fim');

// duracaoMusica.textContent=segundosParaMinutos(Math.floor(musica.duration));


function tocarMusica(){
    musica.play();
}

function pausarMusica(){
    musica.pause();
}

function pararMusica(){
    musica.currentTime=0;
    musica.pause();
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width= Math.floor((musica.currentTime/musica.duration)*100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent=segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos= Math.floor(segundos/60);
    let campoSegundos = segundos % 60;
    if (campoSegundos <10) {
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos 
}