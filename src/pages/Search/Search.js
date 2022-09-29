import React, { useState } from "react";
import { Helmet } from "react-helmet";

function Search() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Helmet>
        <title>Arama Sayfası | Vestel</title>
        <meta name="description" content="vestel" />
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 mx-auto my-3">
            <div class="input-group mb-3">
              <input
                type="text"
                className="form-control search-input"
                placeholder="Ürün, kategori, servis, mağaza ara"
              />
              <button
                className="btn search-button"
                type="button"
              >
                Ara
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
