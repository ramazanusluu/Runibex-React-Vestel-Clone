import React from "react";
import { Helmet } from "react-helmet";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import validations from "./validations";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

function Login() {
  let navigate = useNavigate();
  const { login } = useAuth();
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
              validationSchema={validations}
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
                    if (response.data.Success) {
                      toast.success(
                        `Sn. ${response.data.Result.FullName} giriş işleminiz başarılı.`,
                        {
                          position: "bottom-right",
                        }
                      );
                      navigate("/");
                      login(response.data);
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
                    <label htmlFor="Email" className="form-label">
                      E-POSTA ADRESİNİZ
                    </label>
                    <Field
                      id="Email"
                      name="Email"
                      className="form-control form-control-auth"
                      type="email"
                    />
                    {errors.Email && touched.Email && (
                      <div className="login-validation">{errors.Email}</div>
                    )}
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
                    {errors.Password && touched.Password && (
                      <div className="login-validation">{errors.Password}</div>
                    )}
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
