import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Loading from "../../components/Loading/Loading";
import ProductCard from "../../components/Products/Product/List/ProductCard/ProductCard";

function Search() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(null);
  const [isLoading, setLoading] = useState(false);

  // fetch(
  //   `https://www.vestel.com.tr/mobile2/mbProduct/ProductSearch?searchKey=${search}`
  // )
  //   .then((res) => res.json())
  //   .then((data) => setResult(data.Result.ProductList));

  // const isTyping = search.replace(/\s+/, "").length > 0;

  // useEffect(() => {
  //   if (search) {

  //     setResult(
  //       result.filter((item) =>
  //         item.DisplayName.toLowerCase().includes(search.toLowerCase())
  //       )
  //     );
  //   } else {
  //     setResult([]);
  //   }
  // }, [search]);
  // console.log("rsult", result);

  const handleSearch = async () => {
    setLoading(true);
    await fetch(
      `https://www.vestel.com.tr/mobile2/mbProduct/ProductSearch?searchKey=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
        setLoading(false);
      });
  };

  if (isLoading) return <Loading />;

  console.log("result", result);

  return (
    <>
      <Helmet>
        <title>Arama Sayfası | Vestel</title>
        <meta name="description" content="vestel" />
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 mx-auto my-4">
            <div className="input-group mb-4">
              <input
                type="text"
                className="form-control search-input"
                placeholder="Ürün, kategori, servis, mağaza ara"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                className="btn search-button"
                type="button"
                onClick={() => handleSearch()}
              >
                Ara
              </button>
            </div>
            <div>
              {result && (
                <>
                  <div className="container my-5 px-xl-5">
                    <div className="row">
                      {result.Success && <h1>"{search}" Arama sonucu</h1>}
                      {result.Success &&
                        result.Result.ProductList.map((item, key) => (
                          <ProductCard key={key} item={item} />
                        ))}
                    </div>
                    <div>
                      {!result.Success && (
                        <h3 className="text-center mt-5">{result.Message}</h3>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
