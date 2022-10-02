import React from "react";
import { useNavigate } from "react-router-dom";

function EmptyBasket() {
  let navigate = useNavigate();
  return (
    <div>
      <h1 className="empty-basket-title">ALIŞVERİŞ SEPETİNİZ BOŞ</h1>
      <h4 className="empty-basket-info">
        Ürün ve kampanyaları incelemek için{" "}
        <span onClick={() => navigate("/")}>tıklayınız</span>
      </h4>
    </div>
  );
}

export default EmptyBasket;
