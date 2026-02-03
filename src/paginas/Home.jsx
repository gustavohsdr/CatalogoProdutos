import React, { useState } from "react";
import { produtos } from "../dados/produtos";
import ProdutoLista from "../componentes/ProdutoLista";
import ProdutoPesquisa from "../componentes/ProdutoPesquisa";
import ProdutoCategoria from "../componentes/ProdutoCategoria";

const Home = () => {
  const [busca, setBusca] = useState("");
  const [produtoLista, setProdutoLista] = useState(produtos);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");

  const produtosFiltrados = produtoLista.filter((produto) => {
    const escolherNome = produto.nome
      .toLowerCase()
      .includes(busca.toLowerCase());

    const escolherCategoria =
      categoriaSelecionada === "" || produto.categoria == categoriaSelecionada;

    return escolherNome && escolherCategoria;
  });

  const categorias = [...new Set(produtos.map((p) => p.categoria))];
  return (
    <div>
      <h1 className="home-titulo">Cátalogo de Produtos</h1>
      <div className="filtros">
        <ProdutoPesquisa value={busca} onChange={setBusca} />
        <ProdutoCategoria
          value={categoriaSelecionada}
          onChange={setCategoriaSelecionada}
          categorias={categorias}
        />
      </div>
      <ProdutoLista produtos={produtosFiltrados} />
    </div>
  );
};

export default Home;
