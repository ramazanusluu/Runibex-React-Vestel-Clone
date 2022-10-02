import React from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import BasketItem from "../../components/Basket/BasketItem/BasketItem";
import EmptyBasket from "../../components/Basket/EmptyBasket/EmptyBasket";
import SubTotal from "../../components/Basket/SubTotal/SubTotal";

function ShoppingCard() {
  const card = useSelector((state) => state.card);
  return (
    <>
      <Helmet>
        <title>Alışveriş Sepeti | Vestel</title>
        <meta name="description" content="vestel" />
      </Helmet>
      <div className="card-header"></div>
      <div className="container my-4">
        <div className="row">
          {card.cardItems.length < 1 && <EmptyBasket />}
          <div className="col-lg-8">
            {card.cardItems.length > 0 && <BasketItem />}
          </div>
          <div className="col-lg-4">
            {card.cardItems.length > 0 && <SubTotal />}
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCard;
