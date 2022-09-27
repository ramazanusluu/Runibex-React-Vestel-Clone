import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../../components/Loading/Loading";
import { fetchProductDetail } from "../../api";
import ProductDetail from "../../components/ProductDetail/ProductDetail";

function ProductDetails() {
  const { product } = useParams();
  const { isLoading, error, data } = useQuery(["productDetail", product], () =>
    fetchProductDetail(product)
  );

  if (isLoading) return <Loading />;

  if (error) return "An error has occurred: " + error.message;

  console.log(data);
  return (
    <div>
      <ProductDetail data={data} />
    </div>
  );
}

export default ProductDetails;
