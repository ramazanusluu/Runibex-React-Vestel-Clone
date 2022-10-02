import React from "react";
import { Link } from "react-router-dom";

function SubTotal() {
  return (
    <div className="sub-total">
      <h5 className="basket-item-title">SİPARİŞ ÖZETİ</h5>
      <div>
        <i className="fa-solid fa-cart-shopping"></i>
        <span className="fs-6"> Toplam ürün</span>
      </div>
      <div className="total-price mt-3">
        <span className="label">Ödenecek Tutar</span>
        <span className="label-price">2000000 TL</span>
      </div>
      <div className="total-price mt-3">
        <span className="label">Ürünler</span>
        <span className="label-price">0 TL</span>
      </div>
      <div className="total-price mt-3">
        <span className="label">Kargo Ücreti</span>
        <span className="label-price">Ücretsiz</span>
      </div>
      <div className="mt-3">
        <h6 className="discount">
          İndirim kodunuzu girin{" "}
          <i className="fa-solid fa-angles-right discount-icon"></i>
        </h6>
      </div>
      <Link to="/">
        <button className="btn-pay w-100 mt-3">Ödeme Sayfasına Devam Et</button>
      </Link>
      <Link to="/">
        <button className="btn-shop w-100 mt-3">ALIŞVERİŞE DEVAM ET</button>
      </Link>
    </div>
  );
}

export default SubTotal;
