import React from "react";

const Header = () => {
  return (
    <nav
      className=" navbar navbar-expand-lg bg-body-tertiary shadow-sm sticky-top
d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 mb-4 border-bottom
"
    >
      <div className="container-fluid">
        <a
          href="/"
          class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <img
            width="100px"
            className="d-inline-block align-text-top"
            src="https://www.freeiconspng.com/uploads/register-button-png-20.png"
            alt="logo"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse   navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link fs-5" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" aria-current="page" href="/">
                about
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-warning" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
