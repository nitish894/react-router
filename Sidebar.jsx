import { Link } from "react-router-dom";

const Sidebar = ({}) => {

   
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style={{ width: "180px", minHeight: "100vh" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span className="fs-4">Sidebar</span>
      </a>

      <hr />

      <ul className="nav nav-pills flex-column mb-auto">
        <li>
          <Link to="/" className="nav-link text-white" aria-current="page">
            Home
          </Link>
        </li>

        <li>
          <Link to="/create-post" className="nav-link text-white">
            Create post
          </Link>
        </li>
      </ul>

      <hr />

      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt="Profile"
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>

        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              New Project
            </a>
          </li>

          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>

          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>

          <li>
            <hr className="dropdown-divider" />
          </li>

          <li>
            <a className="dropdown-item" href="#">
              Sign Out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;