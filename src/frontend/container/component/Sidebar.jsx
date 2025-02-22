import React from "react";
import CalendarComponent from "./CalendarComponent";

function Sidebar({ data, flag }) {
  return (
    <>
      <div class="sidebar">
        {data.map((dataItem) => {
          return (
            <div key={dataItem.id}>
              <div class="sidebar-title">
                <h4 class="hdtxt">{dataItem.title}</h4>
              </div>
              <div class="sidebar-links">
                <ul>
                  {dataItem.content.map((item) => {
                    return (
                      <li key={item} class="nav-item">
                        <a href="/" class="animated-link">
                          <span class="text">{item}</span>
                          <i class="bi bi-chevron-right me-2 arrow"></i>
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
