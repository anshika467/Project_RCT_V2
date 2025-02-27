import React from "react";
import Marquee from "react-fast-marquee";
import {useGetWhatsNewQuery} from "../../../redux/slice/apiSlice";

function TextSlider({ flag }) {

  const {data, error} = useGetWhatsNewQuery();

  return (
    <div>
      {error ? (
        <Marquee pauseOnHover={true} play={flag}>
          <h5>ERROR: Cannot Load Text.</h5>
        </Marquee>
      ) : (
        <Marquee pauseOnHover={true} play={flag}>
          {data?.data.map((data, index) => {
            return <h5 key={index}>{data.title}</h5>;
          })}
        </Marquee>
      )}
    </div>
  );
}

export default TextSlider;
