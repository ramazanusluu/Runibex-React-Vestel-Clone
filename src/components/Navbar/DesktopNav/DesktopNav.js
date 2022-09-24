import React from "react";

function DesktopNav() {
  return (
    <>
      <div id="menu-bar">
        <nav className="bg-danger d-none d-xl-block">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <ul className="nav justify-content-center">
                  <li id="tv-ses" className="nav-item menu-item">
                    <a
                      id="tv-ses-btn"
                      className="dropbtn nav-link menu-link"
                      href="/"
                    >
                      Tv - Ses
                    </a>
                  </li>
                  <li id="beyaz-esya" className="nav-item menu-item">
                    <a
                      id="beyaz-esya-btn"
                      className="nav-link menu-link"
                      href="/"
                    >
                      Beyaz Eşya
                    </a>
                  </li>
                  <li id="ankastre" className="nav-item menu-item">
                    <a
                      id="ankastre-btn"
                      className="nav-link menu-link"
                      href="/"
                    >
                      Ankastre
                    </a>
                  </li>
                  <li id="ev-alet" className="nav-item menu-item">
                    <a id="ev-alet-btn" className="nav-link menu-link" href="/">
                      Küçük Ev Aletleri
                    </a>
                  </li>
                  <li id="isitma-sogutma" className="nav-item menu-item">
                    <a
                      id="isitma-sogutma-btn"
                      className="nav-link menu-link"
                      href="/"
                    >
                      Isıtma - Soğutma
                    </a>
                  </li>
                  <li id="akilli-urun" className="nav-item menu-item">
                    <a
                      id="akilli-urun-btn"
                      className="nav-link menu-link"
                      href="/"
                    >
                      Akıllı Ürünler
                    </a>
                  </li>
                  <li id="mobil" className="nav-item menu-item">
                    <a id="mobil-btn" className="nav-link menu-link" href="/">
                      Mobil Cihazlar
                    </a>
                  </li>
                  <li id="diger" className="nav-item menu-item">
                    <a id="diger-btn" className="nav-link menu-link" href="/">
                      Diğer Ürünler
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default DesktopNav;
