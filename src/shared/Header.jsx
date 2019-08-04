import React from 'react';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg">
        <div className="container">
          <button type="button" className="button-link navbar-brand">
            Royal Palm Nanny
          </button>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2 rpn-search"
              type="search"
              placeholder="Search by Name"
              aria-label="Search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0 btn-rpn-search" type="submit">
              Search
            </button>
          </form>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <button type="button" className="button-link nav-item nav-link active">
                Log In
                <span className="sr-only">(current)</span>
              </button>
              <button type="button" className="button-link nav-item nav-link">
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
