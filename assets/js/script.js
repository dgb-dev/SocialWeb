document.addEventListener("DOMContentLoaded", function() {
    let section = document.getElementById("resultados-pesquisa");
    section.innerHTML = "<p>Digite para ver os resultados.</p>"; // Mensagem inicial
});

function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    let resultados = "";

    // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa.trim()) {
        section.innerHTML = "<p>Digite algo para ver os resultados.</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Procura os dados que correspondem à pesquisa
    for (let dado of dados) {
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao ? dado.descricao.toLowerCase() : "";
        let tags = dado.tags ? dado.tags.toLowerCase() : "";

        // Se o campo de pesquisa estiver presente no título, descrição ou tags
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Adicione o encodeURIComponent(dado.titulo) na URL para passar o título como parâmetro
resultados += `
<a href="resultado.html?titulo=${encodeURIComponent(dado.titulo)}">
<div class="box">
    <div class="card">
        <div class="card-contend">
            <h3>${dado.titulo}</h3>
            <p style="text-align: center;">Clique e veja Mais</p><br>
            <div class="iframe-container">
                <iframe width="375" height="245" src="${dado.link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <p class="referencia">${dado.referencia}</p><br>
        </div>
    </div>
</div>
</a>
`;

        }
    }

    // Se não houver resultados, exibe uma mensagem
    if (!resultados) {
        resultados = "<p>Nenhum resultado encontrado.</p>";
    }

    // Exibe os resultados
    section.innerHTML = resultados;
}









            // <a href="resultado.html?titulo=${encodeURIComponent(dado.titulo)}">
            // <div class="box">
            // <div class="card">
            //     <div class="card-contend"> <h3>${dado.titulo}</h3>
            //     <p style="text-align: center;">Clique e veja Mais</p><br>
            //     <div class="iframe-container">
            //                <iframe width="375" height="245" src="${dado.link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            //                </div>
            //     <p class="referencia">${dado.referencia}</p><br>
            //     </div>
            // </div>
            // </div>
            // </a>
            // `;