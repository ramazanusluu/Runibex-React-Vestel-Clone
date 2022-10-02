import React from "react";
import { useSelector } from "react-redux";
import EmptyBasket from "../../components/Basket/EmptyBasket/EmptyBasket";

function ShoppingCard() {
  const card = useSelector((state) => state.card);
  return (
    <>
      <div className="card-header"></div>
      <div className="container my-5">
        <div className="row">
          {card.cardItems.length < 1 && <EmptyBasket />}
        </div>
      </div>
    </>
  );
}

export default ShoppingCard;
