import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchCategoryList } from "../../../api";

function MobileNav() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  const { isLoading, error, data } = useQuery("category", fetchCategoryList);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log(data);
  return (
    <div className="d-xl-none d-block">
      <div className="mobil-menubar">
        <div className="mobil-auth">
          <ul className="nav justify-content-center mx-4">
            <li className="nav-item header-item">
              <span className="nav-link mobil-header-link first-element">
                YENİ ÜYE
              </span>
            </li>
            <li className="nav-item header-item">
              <span className="nav-link mobil-header-link">ÜYE GİRİŞİ</span>
            </li>
          </ul>
        </div>
        <div>
          <div className="accordion">
            {data.Result.TreeList.map((item, key) => (
              <div key={key}>
                {item.ID < 11 && (
                  <div className={selected === key ? "item show" : "item"}>
                    <div className="title" onClick={() => toggle(key)}>
                      <h2>{item.DisplayName}</h2>
                      <span>{selected === key ? "-" : " +"}</span>
                    </div>
                    {item.SubCategoryList.map((subItem, subKey) => (
                      <div
                        key={subKey}
                        className={selected === key ? "content show" : "content"}
                      >
                        <span>{subItem.DisplayName}</span>

                        {subItem.SubCategoryList.length > 0 && (
                          <>
                            <span className="float-end sub-info">
                              {selected === key ? "-" : " +"}
                            </span>
                            <div className="sub-content">
                              {subItem.SubCategoryList &&
                                subItem.SubCategoryList.map(
                                  (altItem, altKey) => (
                                    <ul key={altKey}>
                                      <li className="mobil-sub-category">{altItem.DisplayName}</li>
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
        <h4>React</h4>
      </div>
    </div>
  );
}

export default MobileNav;
