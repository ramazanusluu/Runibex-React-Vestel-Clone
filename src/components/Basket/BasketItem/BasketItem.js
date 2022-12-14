import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeFromCard,
  decreaseCard,
  increaseCard,
  clearCard,
} from "../../../redux/card/cardSlice";

function BasketItem() {
  const card = useSelector((state) => state.card);

  const dispatch = useDispatch();

  const handleRemoveFromCard = (item) => {
    dispatch(removeFromCard(item));
  };

  const handleDecreaseCard = (item) => {
    dispatch(decreaseCard(item));
  };

  const handleIncreaseCard = (item) => {
    dispatch(increaseCard(item));
  };

  const handleClearCard = () => {
    dispatch(clearCard());
  };
  return (
    <>
      <h4 className="basket-item-title">SEPETİM</h4>
      <h5 className="basket-item-info">
        Sepetiniz hazır ise <span>Ödeme Sayfasına Devam Et</span> butonuna
        tıklayarak işleminizi tamamlayabilirsiniz.
      </h5>
      <div className="row mt-5 mb-4">
        <div className="col-lg-7 d-none d-lg-block basket-table-title">
          Sepetteki Ürünlerim
        </div>
        <div className="col-lg-2 text-center d-none d-lg-block basket-table-title">
          Adet
        </div>
        <div className="col-lg-2 text-center d-none d-lg-block basket-table-title">
          Toplam
        </div>
      </div>
      {card.cardItems.map((item) => (
        <div key={item.ID} className="row">
          <div className="col-lg-3 d-flex align-items-center justify-content-center">
            <img
              src={item.FirstProductImageURL}
              alt="ProductType"
              width={130}
              className="img-top-fluid"
            />
          </div>
          <div className="col-lg-4 d-flex align-items-center justify-content-center">
            <Link to={`/product-detail/${item.ID}`}>
              <h5 className="card-item-name">{item.DisplayName}</h5>
            </Link>
          </div>
          <div className="col-lg-2 d-flex align-items-center justify-content-center">
            <div className="btn-group">
              <button
                className="btn btn-piece"
                onClick={() => handleDecreaseCard(item)}
              >
                <i className="fa-solid fa-minus"></i>
              </button>
              <button className="btn btn-item-quantity">
                {item.cardQuantity}
              </button>
              <button
                className="btn btn-piece"
                onClick={() => handleIncreaseCard(item)}
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
          <div className="col-lg-2 d-flex align-items-center justify-content-center">
            <h6 className="item-price">
              {item.ActualPriceToShowOnScreen * item.cardQuantity > 1000
                ? (item.ActualPriceToShowOnScreen * item.cardQuantity) / 1000
                : item.ActualPriceToShowOnScreen * item.cardQuantity}{" "}
              TL
            </h6>
          </div>
          <div className="col-lg-1 text-center text-xl-start ">
            <i
              className="fa-solid fa-xmark item-delete"
              onClick={() => handleRemoveFromCard(item)}
            ></i>
          </div>
        </div>
      ))}
      <button
        className="btn-basket-clear my-5"
        onClick={() => handleClearCard()}
      >
        <i className="fa-regular fa-circle-xmark me-1"></i>SEPETİ BOŞALT
      </button>
    </>
  );
}

export default BasketItem;
