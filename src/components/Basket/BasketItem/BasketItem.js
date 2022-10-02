import React from "react";

function BasketItem() {
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
      <div className="row">
        <div className="col-lg-3 text-center">Resim</div>
        <div className="col-lg-4 text-center">Bilgi</div>
        <div className="col-lg-2 text-center">Adet</div>
        <div className="col-lg-2 text-center">Toplam</div>
        <div className="col-lg-1 text-center">Temizle</div>
      </div>
    </>
  );
}

export default BasketItem;
