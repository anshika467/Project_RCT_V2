import React from "react";
import NavItemContent from "../component/NavItemContent";
import {
  useGetLastUpdateQuery,
  useGetVisitorsQuery,
} from "../../../redux/slice/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { remove, add, reset } from "../../../redux/slice/counterSlice";

function AboutUs() {
  const content = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil nulla blanditiis saepe dolores laudantium explicabo. Beatae iusto maiores aperiam voluptatem aliquam nostrum minima magnam voluptates illo perferendis, quas quaerat nesciunt consequuntur recusandae alias iste doloribus obcaecati praesentium quos? Quae dignissimos ipsam facilis excepturi, asperiores hic harum laudantium nam fuga assumenda facere consectetur doloribus numquam ullam, suscipit recusandae ex quasi culpa optio odio, delectus voluptates ratione cumque expedita? Velit harum sapiente eaque quos excepturi deleniti dolore iure sint aspernatur ipsa, amet delectus suscipit assumenda esse aperiam natus cupiditate,",
    " maxime a tempora. Consequatur laudantium, libero animi dolores, harum ab dolorum quos, error mollitia quis quisquam aperiam. Laudantium quis sed corporis explicabo veniam ad dolores similique, architecto ea adipisci officia saepe nisi minima ipsa eveniet voluptatem in aliquam cum mollitia voluptates eligendi hic consequatur laboriosam debitis. Repellendus, error. Dolor soluta voluptatem debitis earum impedit sed officiis nulla deleniti, eveniet cupiditate explicabo quae, provident possimus corrupti, molestias sint totam? Iusto sint omnis nihil reprehenderit impedit nam magni est provident asperiores corporis, quaerat vel nisi molestiae possimus? Molestias, iusto? Laboriosam itaque cumque tempore culpa ab. In nihil porro vel debitis optio sapiente mollitia fuga quis corrupti dolore. Optio illo amet ipsam, exercitationem deserunt cupiditate.",
  ];

  const nums = useSelector((state) => state.numbers.nums);
  const dispatch = useDispatch();

  const {
    data: visitorsData,
    error: visitorsError,
    isLoading: visitorsIsLoading,
  } = useGetVisitorsQuery();
  const {
    data: lastUpdateData,
    error: lastUpdateError,
    isLoading: lastUpdateIsLoading,
  } = useGetLastUpdateQuery();
  // console.log(error?.error);

  if (visitorsIsLoading || lastUpdateIsLoading) return <p>Loading...</p>;
  if (visitorsError || lastUpdateError)
    return <p>Error: {visitorsError?.error || lastUpdateError?.error}</p>;

  return (
    <>
      <NavItemContent title={"About Us"} content={content} /> <hr />
      <h3>The number is : {nums[0]}</h3>
      <button className="btn btn-primary" onClick={() => dispatch(add())}>
        Add
      </button>{" "}
      <button className="btn btn-primary" onClick={() => dispatch(remove())}>
        Remove
      </button>{" "}
      <button className="btn btn-primary" onClick={() => dispatch(reset())}>
        Reset
      </button>
      <div>
        {nums.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
        <hr />
      <h3>No. of Visitors are: {visitorsData?.data} </h3>
      <h3>Site Updated: {lastUpdateData?.data} </h3>
    </>
  );
}

export default AboutUs;
