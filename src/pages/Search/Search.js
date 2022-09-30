import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

function Search() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(null);

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
    await fetch(
      `https://www.vestel.com.tr/mobile2/mbProduct/ProductSearch?searchKey=${search}`
    )
      .then((res) => res.json())
      .then((data) => setResult(data));
  };
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
                <div>
                  {result.Result.ProductList.map((item) => (
                    <div key={item.ID}>{item.DisplayName}</div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
