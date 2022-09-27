import { FormControlLabel, Checkbox } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    "&$checked": {
      color: "rgba(0, 0, 0, 0.64)",
    },
  },
  checked: {},
  wrap: {
    width: "100%",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 0,
  },
  label: {},
});

function FilterItem({ filter, changeChecked }) {
  const classes = useStyles();

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
                className={
                  seleced === filter.ID
                    ? "filter-content show"
                    : "filter-content"
                }
              >
                <FormControlLabel
                  classes={{ label: classes.label, root: classes.wrap }}
                  control={
                    <Checkbox
                      classes={{ checked: classes.checked, root: classes.root }}
                      size="small"
                      checked={attribute.IsChecked}
                      onChange={() => changeChecked(attribute.ID)}
                    />
                  }
                  label={attribute.ValueText}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterItem;
