import React from "react";
import { Helmet } from "react-helmet";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

function Register() {
  let navigate = useNavigate();
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
            <Formik
              initialValues={{
                Main: {
                  FirstName: "",
                  LastName: "",
                  GenderID: 1,
                  CellPhone: "",
                  Email: "",
                  Password: "",
                },
              }}
              validationSchema={Yup.object().shape({
                Main: Yup.object().shape({
                  FirstName: Yup.string().required("Lütfen adınızı giriniz."),
                  LastName: Yup.string().required("Lütfen soyadınızı giriniz."),
                  CellPhone: Yup.string()
                    .min(10, "Telefon numaranız 10 karakter olmalıdır.")
                    .required("Cep telefonu numarasını yazmalısınız."),
                  Email: Yup.string()
                    .email("Lütfen geçerli bir e-posta adresi giriniz.")
                    .required("Lütfen e-posta adresinizi giriniz."),
                  Password: Yup.string()
                    .min(8, "Şifreniz 8 karakterden oluşmalıdır.")
                    .required("Lütfen şifrenizi giriniz."),
                }),
              })}
              onSubmit={async (values) => {
                axios
                  .post(
                    "https://store.vrunibex.com/mobile2/mbUser/RegisterUser/?Main.FirstName=" +
                      values.Main.FirstName +
                      "&Main.LastName=" +
                      values.Main.LastName +
                      "&Main.CellPhone=" +
                      values.Main.CellPhone +
                      "&Main.Email=" +
                      values.Main.Email +
                      "&Main.Password=" +
                      values.Main.Password
                  )
                  .then((response) => {
                    console.log(response);
                    if (response.data.Success) {
                      toast.success(`${response.data.Message}`, {
                        position: "bottom-right",
                      });
                      navigate("/login");
                    } else {
                      toast.warn(`${response.data.Message}`, {
                        position: "bottom-right",
                      });
                    }
                  })
                  .catch(function (error) {
                    // handle error
                    console.log(error);
                  });
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="mb-3">
                    <label htmlFor="FirstName" className="form-label">
                      Ad
                    </label>
                    <Field
                      id="FirstName"
                      className="form-control form-control-auth"
                      name="Main.FirstName"
                    />
                    {errors.Main?.FirstName && touched.Main?.FirstName && (
                      <div className="validation-message">
                        {errors.Main?.FirstName}
                      </div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="LastName" className="form-label">
                      Soyad
                    </label>
                    <Field
                      id="LastName"
                      name="Main.LastName"
                      className="form-control form-control-auth"
                    />
                    {errors.Main?.LastName && touched.Main?.LastName && (
                      <div className="validation-message">
                        {errors.Main?.LastName}
                      </div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="CellPhone" className="form-label">
                      Telefon
                    </label>
                    <Field
                      id="CellPhone"
                      name="Main.CellPhone"
                      className="form-control form-control-auth"
                      maxLength={10}
                      placeholder="(5__) ___ __ __"
                    />
                    {errors.Main?.CellPhone && touched.Main?.CellPhone && (
                      <div className="validation-message">
                        {errors.Main?.CellPhone}
                      </div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Email" className="form-label">
                      E-Posta
                    </label>
                    <Field
                      id="Email"
                      name="Main.Email"
                      className="form-control form-control-auth"
                      type="email"
                    />
                    {errors.Main?.Email && touched.Main?.Email && (
                      <div className="validation-message">
                        {errors.Main?.Email}
                      </div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Password" className="form-label">
                      Şifre
                    </label>
                    <Field
                      id="Password"
                      name="Main.Password"
                      className="form-control form-control-auth"
                      type="password"
                    />
                    {errors.Main?.Password && touched.Main?.Password && (
                      <div className="validation-message">
                        {errors.Main?.Password}
                      </div>
                    )}
                  </div>
                  <button type="submit" className="btn-register w-100 my-3">
                    ÜYE OL
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      {/* <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Ad
        </label>
        <input
          type="text"
          className="form-control form-control-auth"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.errors.name && formik.touched.name && (
          <span className="validation-message">{formik.errors.name}</span>
        )}
      </div> */}
    </>
  );
}

export default Register;
