import React from "react";
import { Helmet } from "react-helmet";
import { Formik, Field, Form } from "formik";
import axios from "axios";

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
                    <label htmlFor="Main.FirstName" className="form-label">
                      First Name
                    </label>
                    <Field
                      id="Main.FirstName"
                      className="form-control form-control-auth"
                      name="Main.FirstName"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Main.LastName" className="form-label">
                      Last Name
                    </label>
                    <Field
                      id="Main.LastName"
                      name="Main.LastName"
                      className="form-control form-control-auth"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Main.CellPhone" className="form-label">
                      CellPhone
                    </label>
                    <Field
                      id="Main.CellPhone"
                      name="Main.CellPhone"
                      className="form-control form-control-auth"
                      maxLength={10}
                      placeholder="(5__) ___ __ __"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Main.Email" className="form-label">
                      Email
                    </label>
                    <Field
                      id="Main.Email"
                      name="Main.Email"
                      className="form-control form-control-auth"
                      type="email"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="MainPassword" className="form-label">
                      Password
                    </label>
                    <Field
                      id="Main.Password"
                      name="Main.Password"
                      className="form-control form-control-auth"
                      type="password"
                    />
                  </div>
                  <button type="submit" className="btn-register w-100 my-3">
                    Submit
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
