import React, { useState } from "react";
import List from "../Products/Product/List/List";
import Filter from "./Product/Filter/Filter";

function Products({ data }) {
  const [list] = useState(data.Result.ProductList);
  const [filtered, setFiltered] = useState(data.Result.Filters);

  const handleChangeChecked = (ID) => {
    const ItemsFilter = filtered;
    const changeCheckedItems = ItemsFilter.map((item) =>
      item.ID === ID ? { ...item, checked: !item.checked } : item
    );
    setFiltered(changeCheckedItems);
  };

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <h2>{data.Result.CategoryName}</h2>
          <div className="col-lg-3">
            <h5 className="mt-3 filter-page-title">FİLTRELER</h5>
            <Filter filtered={filtered} changeChecked={handleChangeChecked} />
          </div>
          <div className="col-lg-9">
            <List list={list} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
