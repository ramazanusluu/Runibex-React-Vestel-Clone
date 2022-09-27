import React from "react";
import { Helmet } from "react-helmet";

function Register() {
  return (
    <>
      <Helmet>
        <title>Yeni Üye | Türkiye Vestelleniyor</title>
        <meta name="description" content="vestel" />
      </Helmet>
      <div className="container my-5">
        <div className="row">
          <h1 className="register-title text-center mt-3">YENİ ÜYELİK</h1>
          <div className="col-lg-5 mx-auto">
            <form onSubmit={() => {}}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Ad
                </label>
                <input
                  type="text"
                  className="form-control "
                  id="name"
                  name="name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastname" className="form-label">
                  Soyad
                </label>
                <input
                  type="text"
                  className="form-control "
                  id="lastname"
                  name="lastname"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  E-Posta
                </label>
                <input
                  type="email"
                  className="form-control "
                  id="email"
                  name="email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Telefon
                </label>
                <input
                  type="text"
                  className="form-control "
                  id="phone"
                  name="phone"
                  placeholder="(5___) ___ __ __"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="date" className="form-label">
                  Doğum Tarihi
                </label>
                <input
                  type="date"
                  className="form-control "
                  id="date"
                  name="date"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Şifre
                </label>
                <input
                  type="password"
                  className="form-control "
                  id="password"
                  name="password"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="psswordConfirm" className="form-label">
                  Şifre
                </label>
                <input
                  type="password"
                  className="form-control "
                  id="passwordConfirm"
                  name="passwordConfirm"
                />
              </div>
              <button type="submit" className="btn-register w-100 my-3">
                ÜYE OL
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
