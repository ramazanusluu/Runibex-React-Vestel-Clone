import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchCategoryList } from "../../../api";
import Loading from "../../Loading/Loading";
import { useAuth } from "../../../contexts/AuthContext";

function MobileNav({ open }) {
  const [selected, setSelected] = useState(null);
  const [altSelected, setAltSelected] = useState(null);

  const { loggedIn, user, logout } = useAuth();

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  const subToggle = (i) => {
    if (altSelected === i) {
      return setAltSelected(null);
    }
    setAltSelected(i);
  };

  const handleLogout = async () => {
    logout();
  };

  const { isLoading, error, data } = useQuery("category", fetchCategoryList);

  if (isLoading) return <Loading />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="d-xl-none d-block">
      <div className="mobil-menubar">
        <div className="mobil-auth">
          {!loggedIn && (
            <>
              <ul className="nav justify-content-center mx-4">
                <Link to="/register">
                  <li
                    className="nav-item header-item"
                    onClick={() => open(false)}
                  >
                    <span className="nav-link mobil-header-link first-element">
                      YENİ ÜYE
                    </span>
                  </li>
                </Link>
                <Link to="/login">
                  <li
                    className="nav-item header-item"
                    onClick={() => open(false)}
                  >
                    <span className="nav-link mobil-header-link">
                      ÜYE GİRİŞİ
                    </span>
                  </li>
                </Link>
              </ul>
            </>
          )}
          {loggedIn && (
            <>
              <div className="mobil-user-info">
                <div className="mobil-info">
                  <i className="fa-regular fa-user me-2 mobil-user-icon"></i>
                  <button className="btn btn-link btn-mobil-profile">
                    {user && user.Result.FullName}
                  </button>
                  <button
                    className="btn btn-link btn-logout"
                    onClick={handleLogout}
                  >
                    Çıkış Yap
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
        <div>
          <div className="accordion">
            {data.Result.TreeList.map((item, key) => (
              <div key={key}>
                {item.ID < 11 && (
                  <div className={selected === key ? "item show" : "item"}>
                    <div className="title">
                      <Link to={`/category/${item.ID}`}>
                        <h2
                          className="mobil-menu-title"
                          onClick={() => open(false)}
                        >
                          {item.DisplayName}
                        </h2>
                      </Link>
                      <span onClick={() => toggle(key)}>
                        {selected === key ? "-" : " +"}
                      </span>
                    </div>
                    {item.SubCategoryList.map((subItem, subKey) => (
                      <div
                        key={subKey}
                        className={
                          selected === key ? "content show" : "content"
                        }
                      >
                        <Link to={`/products/${subItem.ID}`}>
                          <span className="mobil-sub-category">
                            {subItem.DisplayName}
                          </span>
                        </Link>

                        {subItem.SubCategoryList.length > 0 && (
                          <>
                            <span
                              onClick={() => subToggle(subKey)}
                              className="float-end sub-info"
                            >
                              {altSelected === subKey ? "-" : " +"}
                            </span>
                            <div
                              className={
                                altSelected === subKey
                                  ? "sub-content-show"
                                  : "sub-content"
                              }
                            >
                              {subItem.SubCategoryList &&
                                subItem.SubCategoryList.map(
                                  (altItem, altKey) => (
                                    <ul key={altKey}>
                                      <Link to={`/products/${altItem.ID}`}>
                                        <li className="mobil-alt-category">
                                          {altItem.DisplayName}
                                        </li>
                                      </Link>
                                    </ul>
                                  )
                                )}
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="ms-3">
          <h6 className="header-text">Kampanyalar</h6>
          <h6 className="header-text">Vestel.com.tr Farkı</h6>
        </div>
        <button className="btn btn-cart position-relative ms-3 mb-3">
          <i className=" fa-solid fa-basket-shopping"></i>
          <span className="basket-items position-absolute top-100 start-100 translate-middle bg-warning border border-light badge rounded-pill rounded-circle">
            1
          </span>
        </button>
      </div>
    </div>
  );
}

export default MobileNav;
