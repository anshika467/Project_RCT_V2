import React from "react";
import NavItemContent from "../component/NavItemContent";
import Breadcrumbs from "../component/Breadcrumbs";

function PageNotFound() {
  return (
    <>
      <NavItemContent title={"Page Not Found"} />
      <div className="error-message">
        <h2> ERROR 404 : Page Not Found</h2>
      </div>
    </>
  );
}

export default PageNotFound;
