import {conectaApi} from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";
import mostrarVideo from "./mostrarVideos.js";

async function buscarVideo(){
    evento.preventDeafault();
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscarVideo();

    const lista = document.querySelector("[data-lista]")

    // Filtrar para SOMENTE RENDERIZAR o vídeo BUSCADO na hora de buscar
    while(lista.firstChild){ // Enquanto a lista ter um primeiro filho
        lista.removeChild(lista.firstChild) // Ela remove a esse filho
    } // A lista fica vazia! E DEPOIS voce ACRESCENTE o item que voce buscou

    // Criar um card para cada elemento da lista. Cada um criado foi anexado ao pai "ul"
    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.url, elemento.descricao, elemento.imagem)))

    if(busca.length == 0){
        lista.innerHTML = `
            <h2 class="mensagem__">Não existem vídeos com esse termo</h2>
        `
    }
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]")

// Quando CLICA no botao faz o EVENTO da FUNÇÃO BUSCAR VIDEO
botaoDePesquisa = addEventListener('click', evento => buscarVideo(evento))