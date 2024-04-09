import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(titulo, desricao, url, imagem) {
    const video = document.createElement("li");
    video.className = "videos__item" // Linha 38
    video.innerHTML = `
    <iframe width="100%" height="72%" src="${url}"
        title="${titulo}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>
    <div class="descricao-video">
        <img src="${imagem}" alt="logo canal alura">
        <h3>${titulo}</h3>
        <p>${desricao}</p>
    </div>
    `
    return video
}

async function listaVideos(){
    try{
        // forEach item da lista JSON -> Uma LI será criada
        const listaApi = await conectaApi.listaVideo();
        listaApi.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.desricao, elemento.url, elemento.imagem)))
    } catch {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de videos</h2>`
    }
}

listaVideos();