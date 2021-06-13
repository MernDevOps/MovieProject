import React from "react";
import "./Slider.css";

import { FaStar, FaStarHalf } from "react-icons/fa";
import Polygon from "react-polygon";
import { IoMdPlay } from "react-icons/io";

export const Slider = () => {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators p-0 ">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          // class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div
            class="slick-bg d-block"
            alt="..."
            style={{
              backgroundImage: `url(
                "https://images2.alphacoders.com/851/thumb-1920-85182.jpg"
              )`,
            }}
          ></div>
          <div class="carousel-caption d-block">
            <a href="javascript:void(0);" tabindex="0">
              <div
                class="channel-logo fadeInLeft animated"
                data-animation-in="fadeInLeft"
                data-delay-in="0.5"
                style={{ opacity: "1 animation-delay: 0.5s" }}
              >
                <img
                  src="https://vinzator.com/movieProject/logo1.png"
                  class="c-logo"
                  alt="streamit"
                />
              </div>
            </a>
            <h5
              className="animated fadeInLeft"
              style={{ animationDelay: 0.6 + "s" }}
            >
              Inception
            </h5>
            <div className="d-flex flex-wrap align-items-center fadeInLeft animated">
              <div className="slider-ratting d-flex align-items-center me-4 mt-2 my-md-3">
                <ul className="ratting-start p-0 m-0 list-inline d-flex align-items-center justify-content-left">
                  <li>
                    <FaStar className="fa" />
                  </li>
                  <li>
                    <FaStar className="fa" />
                  </li>
                  <li>
                    <FaStar className="fa" />
                  </li>
                  <li>
                    <FaStar className="fa" />
                  </li>
                  <li>
                    <FaStarHalf className="fa" />
                  </li>
                </ul>
                <span className="text-white ml-2">4.7(Imbd)</span>
              </div>
              <div className="d-flex align-items-center my-2">
                <span className="badge badge-secondary p-2">+18</span>
                <span className="ms-3">Movie</span>
              </div>
            </div>
            <p
              className="animated fadeInUp info-p"
              style={{ animationDelay: 1.2 + "s" }}
            >
              A thief who steals corporate secrets through the use of
              dream-sharing technology is given the inverse task of planting an
              idea into the mind of a C.E.O.
            </p>
            <div className="trending-list">
              <div className="title starring">
                Starring:{" "}
                <span className="text-white">
                  Leonardo DiCaprio, Marion Cotillard, Elliot Page
                </span>
              </div>
              <div className="title starring">
                Genres:{" "}
                <span className="text-white">Action, Adventure, Sci-Fi</span>
              </div>
              <div className="title starring">
                Director: <span className="text-white">Christopher Nolan</span>
              </div>
            </div>
            <div
              className="d-flex align-items-center r-mb-23 fadeInUp animated "
              style={{ animationDelay: 1.2 + "s" }}
            >
              <a href="" className="play-now">
                PLAY NOW
              </a>
              <a href="" className="more-details">
                More Details
              </a>
              <a
                href="video/trailer.mp4"
                class="video-open playBut"
                tabindex="0"
              >
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="80px"
                  height="80px"
                  viewBox="0 0 213.7 213.7"
                  enable-background="new 0 0 213.7 213.7"
                  xmlSpace="preserve"
                >
                  <polygon
                    class="triangle"
                    fill="none"
                    stroke-width="7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    points="73.5,62.5 148.5,105.8 73.5,149.1 "
                  ></polygon>
                  <circle
                    class="circle"
                    fill="none"
                    stroke-width="7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    cx="106.8"
                    cy="106.8"
                    r="103.3"
                  ></circle>
                </svg>
                <span class="w-trailor">Watch Trailer</span>
              </a>
            </div>
          </div>
        </div>
        <div class="carousel-item ">
          <img
            src="https://picsum.photos/1920/1050?random=2"
            class="slick-bg d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item  ">
          <img
            src="https://picsum.photos/1920/1050?random=3"
            class="slick-bg d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the Third slide.</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon arrow-icon"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
      </button>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon arrow-icon"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
      </button>
    </div>
  );
};
