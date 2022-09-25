import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchCategoryList } from "../../../api";
import Loading from "../../Loading/Loading";

function DesktopNav() {
  const [selected, setSelected] = useState(null);
  const [altSelected, setAltSelected] = useState(null);
  const toggle = (key) => {
    if (selected === key) {
      return setSelected(null);
    }
    setSelected(key);
  };
  const toggleLeave = (key) => {
    if (selected === key) {
      return setSelected(null);
    }
    setSelected(null);
  };
  const altToggle = (key) => {
    if (altSelected === key) {
      return setAltSelected(null);
    }
    setAltSelected(key);
  };
  const altToggleLeave = (key) => {
    if (altSelected === key) {
      return setAltSelected(null);
    }
    setAltSelected(null);
  };
  const { isLoading, error, data } = useQuery("category", fetchCategoryList);

  if (isLoading) return <Loading />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <nav className="bg-danger d-none d-xl-block">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="nav justify-content-center">
                {data.Result.TreeList.map((item, key) => (
                  <li
                    key={key}
                    className={
                      selected === key
                        ? "nav-item menu-item menu-item-open"
                        : "nav-item menu-item"
                    }
                    onMouseEnter={() => toggle(key)}
                  >
                    {item.ID < 11 && (
                      <Link to={`/category/${item.ID}`}>
                        <span className="nav-link menu-link">
                          {item.DisplayName}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {data.Result.TreeList.map((item, key) => (
        <div
          key={key}
          onMouseLeave={() => toggleLeave(key)}
          className={
            selected === key ? "dropdown-content show" : "dropdown-content"
          }
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-3 mx-0 px-0 sub-menu">
                {item.SubCategoryList.map((subItem, subKey) => (
                  <ul key={subKey} className="nav flex-column ">
                    <li className="nav-item">
                      <span
                        className={
                          altSelected === subKey
                            ? "nav-link dropdown-list dropdown-list-hover "
                            : "nav-link dropdown-list"
                        }
                        onMouseEnter={() => altToggle(subKey)}
                      >
                        <i className="list-item fa-solid fa-chevron-right"></i>{" "}
                        {subItem.DisplayName}
                      </span>
                      {subItem.SubCategoryList.length > 0 && (
                        <div
                          onMouseLeave={() => altToggleLeave(subKey)}
                          className={
                            altSelected === subKey
                              ? "alt-sub-category-show"
                              : "alt-sub-category"
                          }
                        >
                          {subItem.SubCategoryList &&
                            subItem.SubCategoryList.map((altItem, altKey) => (
                              <ul key={altKey}>
                                <li className="alt-sub-list">
                                  {altItem.DisplayName}
                                </li>
                              </ul>
                            ))}
                        </div>
                      )}
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default DesktopNav;
