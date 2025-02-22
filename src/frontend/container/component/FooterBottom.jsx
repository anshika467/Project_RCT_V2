import React, { useEffect, useState } from "react";
import axios from "axios";

function FooterBottom() {
  const [visitorData, setVisitorData] = useState([]);
  const [lastUpdatedData, setLastUpdatedData] = useState([]);
  const [footerData, setFooterData] = useState([]);
  const [error, setError] = useState(false);

  const API = axios.create({
    baseURL: import.meta.env.VITE_BASE_GET_URL,
  });

  useEffect(() => {
    API.get("/getVisitor")
      .then(function (response) {
        setVisitorData(response.data);
        setError(false);
      })
      .catch(function (error) {
        setError(true);
        console.log(error);
      });

    API.get("/getlastupdate")
      .then(function (response) {
        setLastUpdatedData(response.data);
        setError(false);
      })
      .catch(function (error) {
        setError(true);
        console.log("Error fetching it: ", error);
      });

    API.get("/get-footers/7")
      .then(function (response) {
        setFooterData(response.data.data);
        setError(false);
      })
      .catch(function (error) {
        setError(true);
        console.log("Error fetching it: ", error);
      });
  }, []);

  return (
    <>
      <div class="footer">
        <div class="container-fluid">
          <div class="row">
            <div class="container_footer">
              <div className="footer-details">
                {error ? (
                  <div>
                    <h4>No Data Found</h4>
                  </div>
                ) : (
                  <div>
                    {footerData.map((data) => {
                      return (
                        <span key={data.id}>
                          <a href="#">{data.title}</a>
                        </span>
                      );
                    })}
                  </div>
                )}

                <div>
                  <a href="#">
                    Copyright &copy 2024 Railway Claim Tribunal, Government of
                    India, All Rights Reserved.
                  </a>
                </div>
              </div>
              <div className="footer-details">
                <p>
                  Number of Visitors:{" "}
                  {error ? "No Data Found" : visitorData.data}
                </p>
                <p>
                  Site Updated: {error ? "No Data Found" : lastUpdatedData.data}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterBottom;
