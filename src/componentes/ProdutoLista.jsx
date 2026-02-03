import React from "react";
import ProdutoCard from "./ProdutoCard";

const ProdutoLista = ({ produtos }) => {
  if (produtos.length === 0) {
    return <p>Nenhum produto encontrado.</p>;
  }
  return (
    <div className="produto-lista">
      {produtos.map((produtos) => (
        <ProdutoCard
          key={produtos.id}
          nome={produtos.nome}
          descricao={produtos.descricao}
          preco={produtos.preco}
          categoria={produtos.categoria}
        />
      ))}
    </div>
  );
};

export default ProdutoLista;
