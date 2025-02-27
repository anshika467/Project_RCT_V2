import React from "react";
import LoadingSpinner from "./LoadingSpinner";
import { useGetBannersQuery } from "../../../redux/slice/apiSlice";

function MainSlider() {

  const {data, error, isLoading} = useGetBannersQuery();

  return (
    <>
      <div className="carousel-slider">
        <div className="c-slider">
          {/* Carousel  */}
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {error && (
                <div className="spinner-custom">
                  <h2>Error: Cannot Load Images</h2>
                </div>
              )}
              {isLoading && (
                <div className="spinner-custom">
                  <LoadingSpinner />
                </div>
              )}
              {data?.data.map((banner) => (
                <div
                  key={banner.id}
                  className="carousel-item active"
                  data-bs-interval="2000"
                >
                  <img
                    src={banner.image_url}
                    className="d-block w-100"
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
