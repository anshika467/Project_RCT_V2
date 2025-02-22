import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
// import { bannerData } from "./banners";

function MainSlider() {
  const [bannerData, setBannerData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://164.52.201.69/rct_application/public/api/v1/get-banners/7")
      .then((response) => response.json())
      .then((data) => {
        setBannerData(data.data);
        setError(false);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching it: ", error);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div class="carousel-slider">
        <div class="c-slider">
          {/* Carousel  */}
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              {error && (
                <div className="spinner-custom">
                  <h2>Error: Cannot Load Images</h2>
                </div>
              )}
              {loading && (
                <div className="spinner-custom">
                  <LoadingSpinner />
                </div>
              )}
              {bannerData.map((banner) => (
                <div
                  key={banner.id}
                  class="carousel-item active"
                  data-bs-interval="2000"
                >
                  <img
                    src={banner.image_url}
                    // src={banner.src}
                    class="d-block w-100"
                    alt="Image_1"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainSlider;
