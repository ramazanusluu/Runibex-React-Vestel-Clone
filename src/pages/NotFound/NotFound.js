import React from "react";

function NotFound() {
  return (
    <div className="my-5">
      <div className="text-center">
        <i className="fa-regular fa-face-rolling-eyes not-found-emoji"></i>
        <h1 className="my-3 not-found-title">404!</h1>
        <h5 className="not-found-info">Aradığınız sayfa bulunamadı.</h5>
      </div>
    </div>
  );
}

export default NotFound;
