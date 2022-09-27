import React from "react";
import { Helmet } from "react-helmet";
import { useFormik } from "formik";

function Register() {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      phone: "",
      date: "",
      password: "",
      passwordConfirm: "",
      genderID: "1",
    },
    onSubmit: async (values, bag) => {
      console.log(values);
    },
  });
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
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Ad
                </label>
                <input
                  type="text"
                  className="form-control "
                  id="name"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                <span className="validation-message">Selam</span>
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastname}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.date}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="passwordConfirm" className="form-label">
                  Şifre
                </label>
                <input
                  type="password"
                  className="form-control "
                  id="passwordConfirm"
                  name="passwordConfirm"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.passwordConfirm}
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
