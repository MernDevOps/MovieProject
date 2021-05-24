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
import "../css/style.css";

export const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-dark navbar-expand-md bg-dark justify-content-center fixed-top">
        <div class="container">
          <a href="/" class="navbar-brand d-flex w-50 me-auto">
            Movied
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
                <a class="nav-link" href="/">
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
                  class="nav-link dropdown-toggle"
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
                  <li>
                    <a class="dropdown-item" href="/About">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/ContactUs">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/Faq">
                      FAQ
                    </a>
                  </li>
                  <li>
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
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <FaSearch />
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FaBell />
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-dark dropdown-menu-end dropdown-bell "
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
                  class="nav-link dropdown-toggle"
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
                  <li>
                    <a class="dropdown-item" href="#">
                      Manage Profile
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Pricing Plan
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
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