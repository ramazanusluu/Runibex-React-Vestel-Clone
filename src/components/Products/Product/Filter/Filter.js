import React from "react";
import FilterItem from "../../Partials/FilterItem/FilterItem";

function Filter({ changeChecked, filtered }) {
  return (
    <div className="my-4">
      <div>
        {filtered.map((filter, key) => (
          <FilterItem key={key} filter={filter} changeChecked={changeChecked} />
        ))}
      </div>
      <h6>Price componenti çağrılacak</h6>
    </div>
  );
}

export default Filter;
