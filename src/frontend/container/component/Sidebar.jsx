import React from "react";
import CalendarComponent from "./CalendarComponent";

function Sidebar({ data, flag }) {
  return (
    <>
      <div className="sidebar">
        {data.map((dataItem) => {
          return (
            <div key={dataItem.id}>
              <div className="sidebar-title">
                <h4 className="hdtxt">{dataItem.title}</h4>
              </div>
              <div className="sidebar-links">
                <ul>
                  {dataItem.content.map((item) => {
                    return (
                      <li key={item} className="nav-item">
                        <a href="/" className="animated-link">
                          <span className="text">{item}</span>
                          <i className="bi bi-chevron-right me-2 arrow"></i>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
        {flag && <CalendarComponent />}
      </div>
    </>
  );
}

export default Sidebar;
