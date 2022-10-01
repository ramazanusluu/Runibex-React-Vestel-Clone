import React from "react";
import ImageGallery from "react-image-gallery";
import { useDispatch } from "react-redux";
import { addToCard } from "../../redux/card/cardSlice";
import { useNavigate } from "react-router-dom";

function ProductDetail({ data }) {
  const images = data.Result.ImageSetList?.map((item) => ({
    original: item.ImageList[0]?.Path,
  }));
  const item = data.Result;

  let navigate = useNavigate();

  const dispatch = useDispatch();
  const handleAddToCard = (item) => {
    dispatch(addToCard(item));
  };

  return (
    <>
      <div>
        <div className="container my-5">
          <div className="row product-detail">
            <div className="col-xl-6 border">
              <ImageGallery items={images} showThumbnails={true} />
            </div>
            <div className="col-xl-6">
              <div className="ms-3">
                <h1 className="detail-title">{item.DisplayName}</h1>
                <div className="fs-5 my-2">
                  <i className="fa-solid fa-caret-right text-danger"></i>
                  <span className="ms-3 detail-attribute">
                    {item.VisibleAttributeList[0].ActualValueText}
                  </span>
                </div>
                <div className="fs-5 my-2">
                  <i className="fa-solid fa-caret-right text-danger"></i>
                  <span className="ms-3 detail-attribute">
                    {item.VisibleAttributeList[1].ActualValueText}
                  </span>
                </div>
                <div className="fs-5 my-2">
                  <i className="fa-solid fa-caret-right text-danger"></i>
                  <span className="ms-3 detail-attribute">
                    {item.VisibleAttributeList[2].ActualValueText}
                  </span>
                </div>
                <div className="fs-5 my-2">
                  <i className="fa-solid fa-caret-right text-danger"></i>
                  <span className="ms-3 detail-attribute">
                    {item.VisibleAttributeList[3].ActualValueText}
                  </span>
                </div>
                <div className="fs-5 my-2">
                  <i className="fa-solid fa-caret-right text-danger"></i>
                  <span className="ms-3 detail-attribute">
                    {item.VisibleAttributeList[4].ActualValueText}
                  </span>
                </div>
                <h2 className="text-price my-5">
                  {item.ActualPriceToShowOnScreen > 1000
                    ? item.ActualPriceToShowOnScreen / 1000
                    : item.ActualPriceToShowOnScreen}
                  TL
                </h2>
                {item.SelectionList[0].OptionList[0].Quantity > 0 ? (
                  <div className="my-2 md-block">
                    <button
                      className="basket"
                      onClick={() => handleAddToCard(item)}
                    >
                      SEPETE EKLE
                    </button>
                  </div>
                ) : (
                  <div className="my-2">
                    <button
                      className="quantity"
                      onClick={() => navigate("/login")}
                    >
                      STOK GELİNCE HABER VER
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
