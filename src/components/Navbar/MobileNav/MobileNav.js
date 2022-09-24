import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchCategoryList } from "../../../api";

function MobileNav() {
  const [seleced, setSelected] = useState(null);
  const toggle = (i) => {
    if (seleced === i) {
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
        <div className="wrapper">
          <div className="accordion">
            {data.Result.TreeList.map((item, key) => (
              <div key={key} className="item">
                <div className="title" onClick={() => toggle(key)}>
                  <h2>{item.DisplayName}</h2>
                  <span>{seleced === key ? "-" : " +"}</span>
                </div>
                {item.SubCategoryList.map((subItem, subKey) => (
                  <div
                    key={subKey}
                    className={seleced === key ? "content show" : "content"}
                  >
                    {subItem.DisplayName}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
