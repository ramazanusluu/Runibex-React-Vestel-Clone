import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { fetchProducts } from "../../api";

function ProductPage() {
  const { product_id } = useParams();
  const { isLoading, error, data } = useQuery(["products", product_id], () =>
    fetchProducts(product_id)
  );

  if (isLoading) return <Loading />;

  if (error) return "An error has occurred: " + error.message;

  console.log(data);
  console.log(data.Result.ProductList);

  return (
    <div>
      <h1>Products</h1>
    </div>
  );
}

export default ProductPage;
