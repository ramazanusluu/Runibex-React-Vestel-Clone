import React from "react";
import { useSelector } from "react-redux";
import BasketItem from "../../components/Basket/BasketItem/BasketItem";
import EmptyBasket from "../../components/Basket/EmptyBasket/EmptyBasket";

function ShoppingCard() {
  const card = useSelector((state) => state.card);
  return (
    <>
      <div className="card-header"></div>
      <div className="container my-4">
        <div className="row">
          {card.cardItems.length < 1 && <EmptyBasket />}
          <div className="col-md-8">
            {card.cardItems.length > 0 && <BasketItem />}
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCard;
