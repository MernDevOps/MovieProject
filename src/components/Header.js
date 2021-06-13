import React from "react";
import {
  FaPlusCircle,
  FaSearch,
  FaBell,
  FaUserCircle,
  FaCog,
  FaMoneyBillWaveAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Header.css";

export const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-dark navbar-expand-lg justify-content-center fixed-top">
        <div class="container">
          <a href="/" class="navbar-brand d-flex w-50 me-auto">
            <img
              class="header-img-fluid logo"
              src="images/logo1.png"
              alt="Kamera Aşçısı / Camera Cook"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsingNavbar3"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
            <ul class="navbar-nav w-100 justify-content-between">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  HOME
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  MOVIES
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  TV SHOWS
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link "
                  href="#"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PAGES
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-left dropdown-menu-dark"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li
                    class="channel-logo fadeInLeft animated"
                    data-animation-in="fadeInLeft"
                    data-delay-in="0.5"
                  >
                    <a class="dropdown-item" href="/About">
                      About Us
                    </a>
                  </li>
                  <li
                    class="channel-logo fadeInLeft animated"
                    data-animation-in="fadeInLeft"
                    data-delay-in="0.5"
                  >
                    <a class="dropdown-item" href="/ContactUs">
                      Contact
                    </a>
                  </li>
                  <li
                    class="channel-logo fadeInLeft animated"
                    data-animation-in="fadeInLeft"
                    data-delay-in="0.5"
                  >
                    <a class="dropdown-item" href="/Faq">
                      FAQ
                    </a>
                  </li>
                  <li
                    class="channel-logo fadeInLeft animated"
                    data-animation-in="fadeInLeft"
                    data-delay-in="0.5"
                  >
                    <a class="dropdown-item" href="/Policies">
                      Privacy-Policy
                    </a>
                  </li>
                </ul>
              </li>

              <li class="nav-item"></li>
            </ul>
            <ul class="nav navbar-nav ms-auto w-100 justify-content-end">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <FaPlusCircle />
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link"
                  href="#"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FaSearch />
                </a>
                <div class="dropdown-menu dropdown-menu-dark dropdown-menu-end dropdown-search animated fadeInUp">
                  <form class="px-4 py-3 search-form ">
                    <div class="form-group ">
                      {/* <label for="exampleDropdownFormEmail1">Search</label> */}
                      <input
                        class="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </div>

                    <button type="submit" class="btn btn-dark">
                      Search
                    </button>
                  </form>
                </div>
              </li>
              <li class="nav-item " style={{ marginTop: "10px" }}>
                <a
                  // class="nav-link dropdown-toggle"
                  href="#"
                  class="search-toggle nav-link "
                  data-toggle="search-toggle"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    class="noti-svg "
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      d="M18 10a6 6 0 1 0-12 0v8h12v-8zm2 8.667l.4.533a.5.5 0 0 1-.4.8H4a.5.5 0 0 1-.4-.8l.4-.533V10a8 8 0 1 1 16 0v8.667zM9.5 21h5a2.5 2.5 0 1 1-5 0z"
                      fill="#D1D0CF"
                    ></path>
                  </svg>
                  <span class="bg-danger dots "></span>
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-dark dropdown-menu-end dropdown-bell animated fadeInUp "
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <a class="dropdown-item p-0" href="#">
                      <div class="card text-white bg-dark mb-1">
                        <div class="row g-0">
                          <div class="col-md-4 d-flex justify-content-center">
                            <img
                              src="https://ramensosu.files.wordpress.com/2013/03/dovus-kulubu-fight-club-afis.jpg"
                              alt="..."
                              className="bell-poster"
                            />
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title">Fight Club</h5>
                              <p class="card-text">
                                İncelemeniz yayımlanmıştır.
                              </p>
                              <p class="card-text">
                                <small class="text-muted">3 dakika önce.</small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item p-0" href="#">
                      <div class="card text-white bg-dark mb-1">
                        <div class="row g-0">
                          <div class="col-md-4 d-flex justify-content-center">
                            <img
                              src="https://ramensosu.files.wordpress.com/2013/03/dovus-kulubu-fight-club-afis.jpg"
                              alt="..."
                              className="bell-poster"
                            />
                          </div>
                          <div class="col-md-8">
                            <div class="card-body ">
                              <h5 class="card-title">Fight Club</h5>
                              <p class="card-text">
                                İncelemeniz yayımlanmıştır.
                              </p>
                              <p class="card-text">
                                <small class="text-muted">3 dakika önce.</small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item p-0" href="#">
                      <div class="card text-white bg-dark">
                        <div class="row g-0">
                          <div class="col-md-4 d-flex justify-content-center">
                            <img
                              src="https://ramensosu.files.wordpress.com/2013/03/dovus-kulubu-fight-club-afis.jpg"
                              alt="..."
                              className="bell-poster"
                            />
                          </div>
                          <div class="col-md-8 ">
                            <div class="card-body">
                              <h5 class="card-title">Fight Club</h5>
                              <p class="card-text">
                                İncelemeniz yayımlanmıştır.
                              </p>
                              <p class="card-text">
                                <small class="text-muted">3 dakika önce.</small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown ">
                <a
                  class="nav-link "
                  href="#"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://image.flaticon.com/icons/png/512/147/147144.png"
                    className="avatar-icon"
                    alt=""
                  />
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-dark dropdown-menu-end dropdown-avatar"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li
                    class="channel-logo fadeInLeft animated"
                    data-animation-in="fadeInLeft"
                    data-delay-in="0.5"
                  >
                    <a class="dropdown-item" href="/ManageProfile">
                      Manage Profile
                    </a>
                  </li>
                  <li
                    class="channel-logo fadeInLeft animated"
                    data-animation-in="fadeInLeft"
                    data-delay-in="0.5"
                  >
                    <a class="dropdown-item" href="/Settings">
                      Settings
                    </a>
                  </li>
                  <li
                    class="channel-logo fadeInLeft animated"
                    data-animation-in="fadeInLeft"
                    data-delay-in="0.5"
                  >
                    <a class="dropdown-item" href="/Signin">
                      Login
                    </a>
                  </li>

                  <li
                    class="channel-logo fadeInLeft animated"
                    data-animation-in="fadeInLeft"
                    data-delay-in="0.5"
                  >
                    <a class="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
