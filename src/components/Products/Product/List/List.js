import React from "react";
import ProductCard from "./ProductCard/ProductCard";

function List({ list }) {
  return (
    <>
      <div className="row">
        {list.map((item, key) => (
          <ProductCard key={key} item={item} />
        ))}
      </div>
    </>
  );
}

export default List;
