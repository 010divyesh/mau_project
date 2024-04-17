import React from "react";
import classNames from "classnames";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { userDef } from "@/components/types.js";
import { initValue } from "./config.js";
import FormField from "@/components/FormField";
import { useTranslations } from "next-intl";

interface props {
  submitBtnLable: string;
  title?: string;
  user?: userDef;
  save: (user: userDef) => void; // Define the save function type
}

const SignupSchema = Yup.object().shape({
  //   location: Yup.string()
  //     .oneOf(["Pune", "PCMC"], "Please select a valid area")
  //     .required("Please select an area"),
  name: Yup.string().min(2).max(25).required("Please enter your name"),

  number: Yup.string()
    .matches(/^\d{10}$/, "Please enter a 10-digit number")
    .required("Please enter your phone number"),

  alt_number: Yup.string()
    .matches(/^\d{10}$/, "Please enter a 10-digit number")
    .required("Please enter your phone number"),

  email: Yup.string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address")
    .required("Please enter your email address"),

  house: Yup.string().min(5).max(25).required("Please enter valid address"),

  area: Yup.string().min(5).max(25).required("Please enter valid address"),

  landmark: Yup.string().min(5).max(25).required("Please enter valid address"),

  pincode: Yup.string().min(6).max(6).required("Please enter valid pincode"),

  adhar: Yup.string()
    .min(12)
    .max(12)
    .required("Please enter valid adhar number"),

  pan: Yup.string()
    .matches(/^([A-Z\d]){10}$/, "Please enter a valid PAN card number")
    .max(10, "PAN card number must not exceed 10 characters")
    .required("Please enter your PAN card number"),
});

export default function UserForm({ submitBtnLable, user, title, save }: props) {
 
  const t = useTranslations("Index.Form");
 
  return (
    <main>
      <h5 className="fw-bold text-center my-3">{t("lable")}</h5>

      <Formik
        initialValues={user ? user : initValue}
        validationSchema={SignupSchema}
        onSubmit={save}
      >
        {({ errors, touched, values }) => (
          <div className="container">
            <div className="d-flex justify-content-center">
              <Form
                className="row g-3 card mt-1 p-3 col-md-6"
                style={{ backgroundColor: "gainsboro" }}
              >
                {/* for location */}
                <div>
                  <label className="col-sm-2-col-form-label">
                    <b>{t("area")}</b>
                  </label>
                  <div className="radio-group">
                    <div className="form-check form-check-inline">
                      <Field
                        type="radio"
                        name="location"
                        value="Pune"
                        className="form-check-input"
                      />
                      <label className="form-check-label">{t("pune")}</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <Field
                        type="radio"
                        name="location"
                        value="PCMC"
                        className="form-check-input"
                      />
                      <label className="form-check-label">{t("pcmc")}</label>
                    </div>
                  </div>
                </div>

                {/* for name */}
                <FormField
                  label="Full Name"
                  name="name"
                  placeholder={t("name_field")}
                  type="text"
                  errors={errors}
                  touched={touched}
                />

                {/* for phone number and alternate phone number */}
                <div className="d-flex">
                  {/* Phone Number */}
                  <div className="flex-grow-1 me-2">
                    <FormField
                      label={t("ph_1")}
                      name="number"
                      placeholder={t("phone_field")}
                      type="number"
                      errors={errors}
                      touched={touched}
                    />
                  </div>

                  {/* Alternate Phone Number */}
                  <div className="flex-grow-1 ms-2">
                    <FormField
                      label={t("ph_2")}
                      name="alt-number"
                      placeholder={t("phone_field_1")}
                      type="number"
                      errors={errors}
                      touched={touched}
                    />
                  </div>
                </div>

                {/* for Email id */}
                <div>
                  <FormField
                    label={t("email")}
                    name="email"
                    placeholder={t("email_field")}
                    errors={errors}
                    touched={touched}
                  />
                </div>

                {/* full address */}

                <div className="d-flex">
                  {/* house, building, apartment */}
                  <div className="flex-grow-1 me-2">
                    {/* <h6>
                      <b>Full Address</b>
                    </h6> */}
                    <div>
                      <label className="col-sm-2-col-form-label">
                        <b>{t("address_1")}</b>
                      </label>
                    </div>
                    {/* <label className="col-sm-2-col-form-label">
                      Flat, House, Building, Apartment
                    </label>
                    <Field
                      name="house"
                      placeholder="Enter Your Address"
                      className={classNames("form-control", {
                        "is-invalid": touched.house && errors.house,
                      })}
                      style={{ fontStyle: "italic", fontSize: "small" }}
                    />
                    {errors.house && touched.house && (
                      <div className="invalid-feedback">{errors.house}</div>
                    )} */}
                    <FormField
                      label={t("address_2")}
                      name="house"
                      placeholder={t("address_field")}
                      errors={errors}
                      touched={touched}
                    />
                  </div>

                  {/* area, street, sector */}
                  <div className="flex-grow-1 ms-2">
                    <div>
                      <label className="col-sm-2-col-form-label"></label>
                    </div>
                    {/* <label className="col-sm-2-col-form-label">
                      Area, street, Sector
                    </label>
                    <Field
                      name="area"
                      placeholder="Enter Your Address"
                      className={classNames("form-control", {
                        "is-invalid": touched.area && errors.area,
                      })}
                      style={{ fontStyle: "italic", fontSize: "small" }}
                    />
                    {errors.area && touched.area && (
                      <div className="invalid-feedback">{errors.area}</div>
                    )} */}
                    <FormField
                      label={t("address_3")}
                      name="area"
                      placeholder={t("address_field")}
                      errors={errors}
                      touched={touched}
                    />
                  </div>
                </div>

                <div className="d-flex">
                  {/* landmark */}
                  <div className="flex-grow-1 me-2">
                    {/* <label className="col-sm-2-col-form-label">Landmark</label>
                    <Field
                      name="landmark"
                      placeholder="Enter Your Address"
                      className={classNames("form-control", {
                        "is-invalid": touched.house && errors.house,
                      })}
                      style={{ fontStyle: "italic", fontSize: "small" }}
                    />
                    {errors.landmark && touched.landmark && (
                      <div className="invalid-feedback">{errors.landmark}</div>
                    )} */}
                    <FormField
                      label= {t("address_4")}
                      name="landmark"
                      placeholder={t("address_field")}
                      errors={errors}
                      touched={touched}
                    />
                  </div>

                  {/* area, street, sector */}
                  <div className="flex-grow-1 ms-2">
                    {/* <label className="col-sm-2-col-form-label">Pincode</label>
                    <Field
                      name="pincode"
                      type="number"
                      placeholder="Enter Your Pincode"
                      className={classNames("form-control", {
                        "is-invalid": touched.pincode && errors.pincode,
                      })}
                      style={{ fontStyle: "italic", fontSize: "small" }}
                    />
                    {errors.pincode && touched.pincode && (
                      <div className="invalid-feedback">{errors.area}</div>
                    )} */}
                    <FormField
                      label={t("address_5")}
                      name="pincode"
                      type="number"
                      placeholder={t("pincode_field")}
                      errors={errors}
                      touched={touched}
                    />
                  </div>
                </div>

                {/* no of cats with gender */}
                <div className="d-flex">
                  <div className="flex-grow-1 me-2">
                    <div>
                     <label className="col-sm-2-col-form-label">
                        <b>{t("no-of-cat")}</b>
                      </label>
                    </div>
                    {/* for male */}
                    {/* <label className="col-sm-2-col-form-label">Male</label>
                    <Field
                      name="male"
                      type="number"
                      placeholder="Number of Cats"
                      className={classNames("form-control", {
                        "is-invalid": touched.gender && errors.gender,
                      })}
                      style={{ fontStyle: "italic", fontSize: "small" }}
                    />
                    {errors.gender && touched.gender && (
                      <div className="invalid-feedback">{errors.gender}</div>
                    )}  */}
                    <FormField
                      label={t("male")}
                      name="male"
                      type="number"
                      placeholder={t("no_of_cat")}
                      errors={errors}
                      touched={touched}
                    />
                  </div>

                  {/* for female */}
                  <div className="flex-grow-1 ms-2">
                    <div>
                      <label className="col-sm-2-col-form-label"></label>
                    </div>
                    {/* <label className="col-sm-2-col-form-label">Female</label>
                    <Field
                      name="female"
                      placeholder="Number of Cats"
                      className={classNames("form-control", {
                        "is-invalid": touched.gender && errors.gender,
                      })}
                      style={{ fontStyle: "italic", fontSize: "small" }}
                    />
                    {errors.gender && touched.gender && (
                      <div className="invalid-feedback">{errors.gender}</div>
                    )} */}
                    <FormField
                      label={t("female")}
                      name="female"
                      type="number"
                      placeholder={t("no_of_cat")}
                      errors={errors}
                      touched={touched}
                    />
                  </div>
                </div>

                {/* age of cat */}
                <div>
                  <label className="col-sm-2-col-form-label">
                  {t("instruction-1")}
                  </label>
                  <Field
                    name="age"
                    // className="form-control"
                    // placeholder="Enter Your Name"
                    className={classNames("form-control", {
                      "is-invalid": touched.age && errors.age,
                    })}
                  />
                </div>

                <div>
                  <label className="col-sm-2-col-form-label">
                  {t("instruction-2")}
                  </label>
                  <Field
                    name="illness"
                    // className="form-control"
                    // placeholder="Enter Your Name"
                    className={classNames("form-control", {
                      "is-invalid": touched.illness && errors.illness,
                    })}
                  />
                </div>

                {/* for vaccination  */}

                <div>
                  <label className="col-sm-2-col-form-label">
                    <b>{t("vaccination-1")}</b>{t("vaccination-2")}
                  </label>
                  <div
                    style={{
                      fontStyle: "italic",
                      fontSize: "small",
                      textAlign: "left",
                    }}
                  >
                    <i>
                    {t("vaccination-inst-1")}
                      <br /> {t("vaccination-inst-2")}
                    </i>
                  </div>
                  <div className="radio-group">
                    <div className="form-check form-check-inline">
                      <Field
                        type="radio"
                        name="vaccine"
                        value="yes"
                        className="form-check-input"
                      />
                      <label className="form-check-label">{t("yes")}</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <Field
                        type="radio"
                        name="vaccine"
                        value="no"
                        className="form-check-input"
                      />
                      <label className="form-check-label">{t("no")}</label>
                    </div>
                  </div>
                </div>

                {/* for adhar card number */}
                <div>
                  <FormField
                      label={t("adhar")}
                      name="adhar"
                      type="number"
                      placeholder={t("adhar_field")}
                      errors={errors}
                      touched={touched}
                    />
                </div>

                {/* for pan card number */}
                <div>
                  <label className="col-sm-2-col-form-label">
                    <b>{t("pan_1")}</b>{t("pan_2")}
                  </label>
                  <Field
                    name="pan"
                    placeholder={t("pan_field")}
                    className={classNames("form-control", {
                      "is-invalid": touched.pan && errors.pan,
                    })}
                    style={{ fontStyle: "italic", fontSize: "small" }}
                  />
                  {errors.pan && touched.pan && (
                    <div className="invalid-feedback">{errors.pan}</div>
                  )}
                </div>

                {/* for transport */}

                <div>
                  <label className="col-sm-2-col-form-label">
                    <b>{t("transport-1")}</b>
                    <i> {t("transport-2")}</i>
                  </label>
                  <div className="radio-group">
                    <div className="form-check form-check-inline">
                      <Field
                        type="radio"
                        name="transport"
                        value="yes"
                        className="form-check-input"
                      />
                      <label className="form-check-label">{t("yes")}</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <Field
                        type="radio"
                        name="transport"
                        value="no"
                        className="form-check-input"
                      />
                      <label className="form-check-label">{t("no")}</label>
                    </div>
                  </div>
                </div>

                {/* for GPS location */}

                {values.transport === "yes" && (
                  <>
                    <div>
                      <label className="col-sm-2-col-form-label">
                        <b>GPS Location</b>
                      </label>
                      <Field
                        name="gpsLocation"
                        placeholder="Paste your Google Location Here"
                        className={classNames("form-control", {
                          "is-invalid":
                            touched.gpsLocation && errors.gpsLocation,
                        })}
                        style={{ fontStyle: "italic", fontSize: "small" }}
                      />
                      {errors.gpsLocation && touched.gpsLocation && (
                        <div className="invalid-feedback">
                          {errors.gpsLocation}
                        </div>
                      )}
                    </div>

                    {/* for traps */}

                    <div>
                      <label className="col-sm-2-col-form-label">
                        <b>Need of Traps</b>
                        <i> (Only if Feral Cats are wary of People)</i>
                      </label>
                      <div className="radio-group">
                        <div className="form-check form-check-inline">
                          <Field
                            type="radio"
                            name="trap"
                            value="yes"
                            className="form-check-input"
                          />
                          <label className="form-check-label">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <Field
                            type="radio"
                            name="trap"
                            value="no"
                            className="form-check-input"
                          />
                          <label className="form-check-label">No</label>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* for post-op */}

                <div>
                  <label className="col-sm-2-col-form-label">
                    <b>{t("post-op-1")}</b>
                    <div
                      style={{
                        fontStyle: "italic",
                        fontSize: "small",
                        textAlign: "left",
                      }}
                    >
                      <i>
                      {t("post-op-2")}
                      </i>
                    </div>
                    {/* <i> (Only if Feral Cats are wary of People)</i> */}
                  </label>

                  <div className="radio-group">
                    <div className="form-check form-check-inline">
                      <Field
                        type="radio"
                        name="post-op"
                        value="yes"
                        className="form-check-input"
                      />
                      <label className="form-check-label">{t("yes")}</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <Field
                        type="radio"
                        name="post-op"
                        value="no"
                        className="form-check-input"
                      />
                      <label className="form-check-label">{t("no")}</label>
                    </div>
                  </div>
                </div>

                {/* for buttons */}

                <div className="buttons">
                  <div className="d-flex flex-row mb-3">
                    <div className=" p-3">
                      <button type="submit" className="btn btn-primary">
                      {t("submit")}
                      </button>
                    </div>
                    <div className="p-3">
                      <button
                        type="button"
                        className="btn btn-warning"
                        // onClick={clearForm}
                      >
                         {t("clear")}
                      </button>
                    </div>
                    <div className="p-3 ">
                      <Link href="/">
                        <button type="button" className="btn btn-danger">
                        {t("cancel")}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </main>
  );
}