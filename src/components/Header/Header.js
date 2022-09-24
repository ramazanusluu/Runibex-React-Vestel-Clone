import React from "react";
import headerLogo from "../../image/header-logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-xl">
        <div className="container">
          <span className="navbar-brand me-auto">
            <Link to="/">
              <img
                src={headerLogo}
                alt="logo"
                width="140px"
                title="header-logo"
                className="img-fluid"
              />
            </Link>
          </span>

          {/* Mobil ekranlarda görünen ara butonu */}
          <button
            id="btn-search"
            className="btn d-xl-none d-block buton input-group-text"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          {/* Mobil ekranlarda gelecek olan hamburger menu */}
          {/* <button
            id="nav-toggle-btn"
            className="navbar-toggler ms-3"
            type="button"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <button id="btn-hamburger" className="btn btn-bars d-xl-none d-block">
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="navbar-collapse">
            {/* Kampanyalar ve vstel.com.tr farkı yazısı */}
            <ul className="navbar-nav ms-2 me-auto mb-2 mb-lg-0 d-none d-xl-flex">
              <li className="nav-item">
                <a className="nav-link header-text" href="/">
                  Kampanyalar
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link header-text" href="/">
                  Vestel.com.tr Farkı
                </a>
              </li>
            </ul>
            {/* Search için input group */}
            <div>
              <div className="input-group d-none d-xl-flex">
                <input
                  type="text"
                  className="form-control search"
                  placeholder="Ürün, kategori, servis, mağaza ara"
                />
                <button className="btn btn-desktop-search input-group-text">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
            <ul className="nav justify-content-center mx-4 d-none d-xl-block">
              <Link to="/">
                <li className="nav-item header-item">
                  <span className="nav-link header-link first-element">
                    YENİ ÜYE
                  </span>
                </li>
              </Link>
              <Link to="/">
                <li className="nav-item header-item">
                  <span className="nav-link header-link" href="/">
                    ÜYE GİRİŞİ
                  </span>
                </li>
              </Link>
            </ul>
            {/* <div className="ms-4 d-none d-xl-block">
              <i className="fa-regular fa-user"></i>
            </div>
            <div className="uye-bilgi ms-4 d-none d-xl-block">
              <h6>Ramazan USLU</h6>
              <span className="text-danger">
                Hesabım <i className="fa-solid fa-angle-down"></i>
              </span>
            </div> */}
            <div className="d-none d-xl-block">
              <div className="position-relative">
                <i className="fa-solid fa-basket-shopping"></i>
                <span className="basket-items position-absolute top-100 start-100 translate-middle badge rounded-pill rounded-circle">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
