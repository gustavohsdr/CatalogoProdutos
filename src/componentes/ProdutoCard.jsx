//Ideia de contrato

// {
//   id: 1,
//   name: "Notebook Pro",
//   description: "Notebook potente para trabalho e jogos",
//   price: 1499.99,
//   category: "Eletrônicos"
// }

import React from "react";

const ProdutoCard = ({ nome, descricao, preco, categoria }) => {
  return (
    <div className="produto-card">
      <div className="produto-cabecalho">
        <h4 className="produto-nome">{nome}</h4>
        <div className="produto-categoria">{categoria}</div>
      </div>
      <p className="produto-descricao">{descricao}</p>
      <p className="produto-preco">R$ {preco.toFixed(2)}</p>
    </div>
  );
};

export default ProdutoCard;
