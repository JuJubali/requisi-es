async function listaVideo() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json;

    return conexaoConvertida; // Retornar o valor da variável
}

listaVideo();

// PRECISA saber de cor tudo isso!!!
async function criarVideo(titulo, descricao, url, imagem) {
    // CRIAR requisição POST
    // É possível cadastrar o seu vídeo
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        }, // Objeto Video em JSON 
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });
    if(!conexao.ok){
        throw new Error("Não foi possível abrir o vídeo")
    }

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida()
}

async function buscarVideo(termoDeBusca){
    const conexao = await fetch(`http://locahost:3000/video?q=${termoDeBusca}`)
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
    // ConectaApi -> Recebe objeto com funções
    listaVideo,
    criarVideo,
    conexaoConvertida
}

/* SOBRE O FETCH
    Método Assíncrono
    Recebe parâmetro -> URL da API
    Quando não há NENHUM outro parâmetro -> FUNÇÃO GET automaticamente
    Naturalmente assíncrono -> Devolve uma promisse. não uma resposta 
    Promisse -> Resolvida || Rejeitada

    Saber se foi resolvido ou rejeitado -> Wait it (esperar resolver)
*/

/* SOBRE O JSON
    Pega todos os dados em formato de bytes 
    Transforma aqueles dados em um JSON válido
*/