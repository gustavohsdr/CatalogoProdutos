import React from "react";

const ProdutoPesquisa = ({ value, onChange }) => {
  return (
    <div>
      <input
        className="produto-pesquisa"
        type="text"
        placeholder="Buscar produto..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default ProdutoPesquisa;
