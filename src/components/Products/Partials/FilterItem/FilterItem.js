import { FormControlLabel, Checkbox } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";

function FilterItem({ filter, changeChecked }) {
  const [seleced, setSelected] = useState(null);
  const toggle = (i) => {
    if (seleced === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <>
      <div>
        <div className="filter-accordion">
          <div className="filter-item">
            <div className="filter-title" onClick={() => toggle(filter.ID)}>
              <h2>{filter.DisplayName}</h2>
              <span>
                {seleced === filter.ID ? (
                  <i className="fa-solid fa-chevron-up"></i>
                ) : (
                  <i className="fa-solid fa-chevron-down"></i>
                )}
              </span>
            </div>
            {filter.Attributes.map((attribute) => (
              <div
                key={attribute.ID}
                className={seleced === filter.ID ? "filter-content show" : "filter-content"}
              >
                {attribute.ValueText}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterItem;
