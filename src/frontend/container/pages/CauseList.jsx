import React, { useEffect, useState } from "react";
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Breadcrumbs from "../component/Breadcrumbs";
import Sidebar from "../component/Sidebar.jsx";
import { dataLeft } from "../component/sidebar.js";
import CauseListModal from "../component/CauseListModal.jsx";
import * as Yup from "yup";

function CauseList() {
  const [benches, setBenches] = useState([]);
  const [benchID, setBenchID] = useState(0);
  const [courts, setCourts] = useState([]);
  const [values, setValues] = useState([]);
  const [data, setData] = useState({});
  const [error, setError] = useState("Loading...");
  const [loading, setLoading] = useState(true);
  
  const API = axios.create({
    baseURL: import.meta.env.VITE_BASE_POST_URL,
  });

  const validationSchema = Yup.object({
    RCTbenchID: Yup.string().required("RCT Bench is required"),
    courtNum: Yup.string().required("Court is required"),
    date: Yup.string().required("Date is required"),
  });


  useEffect(() => {
    // console.log("Base URL:", import.meta.env.VITE_BASE_POST_URL);
    API.post("/getBenchLocations")
      .then((response) => {
        setBenches(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    API.post("/getCourtNos", {
      bench_location: benchID,
    })
      .then((response) => {
        // console.log(response);
        setCourts(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [benchID]);

  useEffect(() => {
    API.post("/public_causelist", {
      bench_id: values.RCTbenchID,
      court_no: values.courtNum,
      listing_date: values.date,
    })
      .then(async (response) => {
        // console.log(response);
        // console.log(response.data.data[0]);
        // console.log(response.data.error);

        setError(response.data.error);
        setData(response.data.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Data Not Found");
        setLoading(false);
      });
  }, [values]);

  return (
    <>
      <div className="nav-item-content">
        <h2>Cause List</h2>
        <Breadcrumbs title="Cause List" />
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-3">
              <Sidebar flag={true} data={dataLeft} />
            </div>

            <div class="col-12 col-sm-12 col-md-12 col-lg-9">
              <div className="row">
                <div className="container">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="form-content m-4">
                      <Formik
                        initialValues={{
                          RCTbenchID: "",
                          courtNum: "",
                          date: "",
                        }}
                        onSubmit={async (values, { resetForm }) => {
                          setValues(values);
                          resetForm();
                          setLoading(true);
                        }}
                        validationSchema={validationSchema}
                      >
                        {({ setFieldValue, resetForm, isValid, dirty }) => (
                          <Form>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-item-custom">
                                  <label htmlFor="RCTbenchID">RCT Bench</label>
                                  <Field
                                    className="field-custom"
                                    as="select"
                                    id="RCTbenchID"
                                    name="RCTbenchID"
                                    onChange={(event) => {
                                      setFieldValue(
                                        "RCTbenchID",
                                        event.target.value
                                      );
                                      setBenchID(event.target.value);
                                    }}
                                  >
                                    <option value={0}>Select Bench</option>
                                    {benches.map((bench) => {
                                      return (
                                        <option key={bench.id} value={bench.id}>
                                          {bench.railway_bench_name}
                                        </option>
                                      );
                                    })}
                                  </Field>
                                  <ErrorMessage
                                    name="RCTbenchID"
                                    component="div"
                                    style={{ color: "red" }}
                                  />
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="form-item-custom">
                                  <label htmlFor="courtNum">Select Court</label>
                                  <Field
                                    className="field-custom"
                                    as="select"
                                    id="courtNum"
                                    name="courtNum"
                                  >
                                    <option value={0}>Select Court</option>
                                    {courts.map((court) => {
                                      return (
                                        <option
                                          key={court.court_no}
                                          value={court.court_no}
                                        >
                                          {court.court_description}
                                        </option>
                                      );
                                    })}
                                  </Field>
                                  <ErrorMessage
                                    name="courtNum"
                                    component="div"
                                    style={{ color: "red" }}
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-item-custom">
                                  <label htmlFor="date">Select Date</label>
                                  <Field
                                    id="date"
                                    name="date"
                                    type="date"
                                    className="field-custom"
                                  />
                                  <ErrorMessage
                                    name="date"
                                    component="div"
                                    style={{ color: "red" }}
                                  />
                                </div>
                              </div>
                              <div className="col-md-6"></div>
                              <div className="text-center m-4 col-md-12">
                                <button
                                  type="submit"
                                  className="btn btn-primary me-4"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                  disabled={!(isValid && dirty)}
                                >
                                  Submit
                                </button>

                                <button
                                  type="reset"
                                  onClick={resetForm}
                                  className="btn btn-secondary"
                                >
                                  Reset
                                </button>
                              </div>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {data != {} && (
          <CauseListModal data={data} error={error} loading={loading} />
        )}
      </div>
    </>
  );
}

export default CauseList;
