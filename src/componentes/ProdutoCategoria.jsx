import React from "react";

const ProdutoCategoria = ({ value, onChange, categorias }) => {
  return (
    <select
      className="produto-categoria-filtro"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">Todas as categorias</option>
      {categorias.map((categoria) => (
        <option key={categoria} value={categoria}>
          {categoria}
        </option>
      ))}
    </select>
  );
};

export default ProdutoCategoria;
