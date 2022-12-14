import React, { useState } from "react";
import headerLogo from "../../image/header-logo.png";
import { Link } from "react-router-dom";
import MobileNav from "../Navbar/MobileNav/MobileNav";
import { useAuth } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const card = useSelector((state) => state.card);

  let navigate = useNavigate();

  const { loggedIn, user, logout } = useAuth();

  console.log("AuthContext user", user);

  const handleLogout = async () => {
    logout();
    if (logout) {
      toast.info(`Çıkış işlemi başarılı.`, {
        position: "bottom-right",
      });
    }
    navigate("/login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-xl fixed-top">
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
          <Link to="/search">
            <button
              id="btn-search"
              className="btn d-xl-none d-block buton input-group-text"
              onClick={() => setIsOpen(false)}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </Link>
          {/* Mobil ekranlarda gelecek olan hamburger menu */}
          {/* <button
            id="nav-toggle-btn"
            className="navbar-toggler ms-3"
            type="button"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          {!isOpen && (
            <button
              id="btn-hamburger"
              className="btn btn-bars d-xl-none d-block"
              onClick={() => setIsOpen(true)}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          )}
          {isOpen && (
            <button
              id="btn-hamburger"
              className="btn btn-closed d-xl-none d-block"
              onClick={() => setIsOpen(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          )}
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
                  onFocus={() => navigate("/search")}
                  readOnly
                />
                <Link to="/search">
                  <button className="btn btn-desktop-search input-group-text">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </Link>
              </div>
            </div>
            {!loggedIn && (
              <>
                <ul className="nav justify-content-center mx-4 d-none d-xl-block">
                  <Link to="/register">
                    <li className="nav-item header-item">
                      <span className="nav-link header-link first-element">
                        YENİ ÜYE
                      </span>
                    </li>
                  </Link>
                  <Link to="/login">
                    <li className="nav-item header-item">
                      <span className="nav-link header-link" href="/">
                        ÜYE GİRİŞİ
                      </span>
                    </li>
                  </Link>
                </ul>
              </>
            )}
            {loggedIn && (
              <>
                <div className="mx-4 d-none d-xl-block user-info">
                  <i className="fa-regular fa-user me-2"></i>
                  <button className="btn btn-link btn-profile">
                    {user && user.Result.FullName}
                  </button>
                  <button
                    className="btn btn-link btn-logout"
                    onClick={handleLogout}
                  >
                    Çıkış Yap
                  </button>
                </div>
              </>
            )}
            <Link to="/card">
              <div className="d-none d-xl-block shopping-card">
                <div className="position-relative">
                  <i className="fa-solid fa-basket-shopping"></i>
                  <span className="basket-items position-absolute top-100 start-100 translate-middle badge rounded-pill rounded-circle">
                    {card.cardItems.length}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </nav>
      <div className="desktop-menu">
        {isOpen && <MobileNav open={setIsOpen} />}
      </div>
    </div>
  );
}

export default Header;
