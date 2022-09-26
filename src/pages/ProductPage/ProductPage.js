import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { fetchProducts } from "../../api";
import { Helmet } from "react-helmet";
import Products from "../../components/Products/Products";

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
    <>
      <Helmet>
        <title>
          {data.Result.Category.PageTitle
            ? data.Result.Category.PageTitle
            : "Vestel'le Olur Neden Olmasın | Vestel"}
        </title>
        <meta
          name="description"
          content={
            data.Result.Category.MetaDescription
              ? data.Result.Category.MetaDescription
              : "Vestel"
          }
        />
        <meta
          name="keywords"
          content={
            data.Result.Category.MetaKeywords
              ? data.Result.Category.MetaKeywords
              : "Vestel"
          }
        />
      </Helmet>
      <Products data={data} />
    </>
  );
}

export default ProductPage;
