import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../../components/Loading/Loading";
import { fetchProductDetail } from "../../api";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import { Helmet } from "react-helmet";

function ProductDetails() {
  const { product } = useParams();
  const { isLoading, error, data } = useQuery(["productDetail", product], () =>
    fetchProductDetail(product)
  );

  if (isLoading) return <Loading />;

  if (error) return "An error has occurred: " + error.message;

  console.log(data);
  return (
    <>
      <Helmet>
        <title>
          {data.Result.PageTitle
            ? data.Result.PageTitle
            : "Vestel'le Olur Neden Olmasın | Vestel"}
        </title>
        <meta name="description" content="vestel" />
      </Helmet>
      <ProductDetail data={data} />
    </>
  );
}

export default ProductDetails;
