import React from "react";
import { Link } from "react-router-dom";
import dummy from "../../../../../image/dummy.jpg";

function ProductCard({ item }) {
  return (
    <div className="col-sm-6 col-lg-4 col-xl-4">
      <div className="card product-card my-4">
        <div className="card-head text-center">
          <img
            src={item.FirstProductImageURL ? item.FirstProductImageURL : dummy}
            className="card-img-top"
            alt={item.DisplayName}
          />
          <div className="card-text product-card-text p-1">{item.DisplayName}</div>
        </div>
        <div className="card-body">
          <p className="card-body-text text-center mb-0">
            {item.AttributeList[0].DisplayName}
          </p>
          <p className="card-body-text  text-center">
            {item.AttributeList[1].DisplayName}
          </p>
          <h4 className="card-price text-center">
            {item.StrikeThroughPriceToShowOnScreen > 1000
              ? item.StrikeThroughPriceToShowOnScreen / 1000
              : item.StrikeThroughPriceToShowOnScreen}
            TL
          </h4>
          <div className="text-center my-4">
            <input
              type="checkbox"
              name="check"
              id={item.ID}
              className="form-check-input compare-box me-1"
            />
            <label htmlFor={item.ID} className="form-check-label compare-text">
              Karşılaştır
            </label>
          </div>
        </div>
        <div>
          <Link to={`/product-detail/${item.ID}`}>
            <button type="button" className="btn-incele">
              İNCELE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
