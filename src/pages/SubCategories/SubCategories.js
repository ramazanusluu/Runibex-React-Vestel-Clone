import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { fetchSubCategories } from "../../api";
import SubCategoryCard from "../../components/SubCategoryCard/SubCategoryCard";
import { Helmet } from "react-helmet";

function SubCategories() {
  const { category_id } = useParams();
  const { isLoading, error, data } = useQuery(
    ["subCategory", category_id],
    () => fetchSubCategories(category_id)
  );
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return "An error has occurred: " + error.message;
  }
  console.log(data);
  console.log(data.Result.TopCategory.SubCategoryList);
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
          content={data.Result.Category.MetaDescription}
        />
        <meta name="keywords" content={data.Result.Category.MetaKeywords} />
      </Helmet>
      <div className="container my-5">
        <div className="row">
          <h5 className="display-6 text-center">{data.Result.CategoryName}</h5>
          {data.Result.TopCategory.SubCategoryList.map((item, key) => (
            <SubCategoryCard key={key} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default SubCategories;
