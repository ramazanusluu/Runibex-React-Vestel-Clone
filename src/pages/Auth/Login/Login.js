import React from "react";
import { Helmet } from "react-helmet";
import { Formik, Field, Form } from "formik";
import axios from "axios";

function Login() {
  return (
    <>
      <Helmet>
        <title>Üye Girişi | Türkiye Vestelleniyor</title>
        <meta name="description" content="vestel" />
      </Helmet>
      <div className="container my-5">
        <div className="row">
          <h1 className="register-title text-center mt-3">ÜYE GİRİŞİ</h1>
          <div className="col-lg-5 mx-auto">
            <Formik
              initialValues={{
                Email: "",
                Password: "",
              }}
              onSubmit={async (values) => {
                axios
                  .post(
                    "https://www.vestel.com.tr/mobile2/mbUser/Login?Email=" +
                      values.Email +
                      "&Password=" +
                      values.Password
                  )
                  .then((response) => {
                    console.log(response);
                  })
                  .catch(function (error) {
                    // handle error
                    console.log(error);
                  });
              }}
            >
              {(props) => (
                <Form>
                  <div className="mb-3">
                    <label htmlFor="Email" className="form-label">
                      E-POSTA ADRESİNİZ
                    </label>
                    <Field
                      id="Email"
                      name="Email"
                      className="form-control form-control-auth"
                      type="email"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Password" className="form-label">
                      ŞİFRENİZ
                    </label>
                    <Field
                      id="Password"
                      name="Password"
                      className="form-control form-control-auth"
                      type="password"
                    />
                  </div>
                  <button type="submit" className="btn-login w-100 my-3">
                    Giriş Yap
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
