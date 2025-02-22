import React, { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";

function TextSlider({ flag }) {
  const [whatsNewData, setWhatsNewData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      "http://164.52.201.69/rct_application/public/api/v1/get-news/7/whatsnew"
    )
      .then((response) => response.json())
      .then((data) => {
        setWhatsNewData(data.data);
      })
      .catch((error) => {
        setError(true);
        console.error("Error fetching it: ", error);
      });
  }, []);

  return (
    <div>
      {error ? (
        <Marquee pauseOnHover={true} play={flag}>
          <h5>ERROR: Cannot Load Text.</h5>
        </Marquee>
      ) : (
        <Marquee pauseOnHover={true} play={flag}>
          {whatsNewData.map((data) => {
            return <h5>{data.title}</h5>;
          })}
        </Marquee>
      )}
    </div>
  );
}

export default TextSlider;
