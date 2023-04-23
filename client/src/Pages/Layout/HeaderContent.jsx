import React from "react";
import { Link, Outlet } from "react-router-dom";

export const HeaderContent = () => (
  <div className="header-content">
    <header>
      <h3 className="fw-bold" style={{ color: "#222" }}>
        <label htmlFor="nav-toggle">
          <span
            className="dashboardIcon btn las la-bars"
            style={{ fontSize: "1.7rem", color: "#222" }}
          ></span>
        </label>
        Dashboard
      </h3>
      <div
        className="search-wrapper input-group"
        style={{ width: "250px", height: "20px" }}
      >
        <input
          type="search"
          className="form-control rounded-start-pill"
          placeholder="Search here"
        />
        <button
          className="btn btn-light border-end border-top border-bottom rounded-end-pill"
          type="button"
          id="button-addon1"
        >
          <span className="las la-search"></span>
        </button>
      </div>
      <div className="btn border-0 searching d-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 14 14"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </div>
      <div className="user-wrapper">
        <Link to={"/about"}>
          <img src="user.jpg" width={"40px"} height={"40px"} alt="user" />
        </Link>
        <div>
          <h5 className="m-0 fw-bold " style={{ fontSize: "1rem" }}>
            Flavius Gav.
          </h5>
          <small>Software developer</small>
        </div>
      </div>
    </header>
    <main>
      <Outlet />
    </main>
  </div>
);
