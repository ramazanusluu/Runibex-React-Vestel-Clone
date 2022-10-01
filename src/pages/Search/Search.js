import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

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
        setResult(data.Result.ProductList);
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
                <div>
                  {result &&
                    result.map((item) => (
                      <Link to={`/product-detail/${item.ID}`}>
                        <div key={item.ID}>{item.DisplayName}</div>
                      </Link>
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
