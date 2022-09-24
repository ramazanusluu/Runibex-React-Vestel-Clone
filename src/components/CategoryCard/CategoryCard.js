import React from "react";
import { Link } from "react-router-dom";
import dummy from "../../image/dummy.jpg";

function CategoryCard({ item }) {
  return (
    <>
      <div className="col-sm-6 col-lg-4 col-xl-3">
        <Link to={`/category/${item.ID}`}>
          <div className="card mt-5">
            <div className="card-head">
              <img
                src={item.ImageUri === "" ? dummy : item.ImageUri}
                className="card-img-top"
                alt={item.Code}
              />
            </div>
          </div>
          <div className="card-text card-title my-3 text-center">
            {item.DisplayName}
          </div>
        </Link>
      </div>
    </>
  );
}

export default CategoryCard;
