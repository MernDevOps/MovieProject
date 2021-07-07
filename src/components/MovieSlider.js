import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/MovieSlider.css";
import { IoMdPlay } from "react-icons/io";
import { RiShareFill, RiLinksFill, RiFacebookFill } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { VscTwitter } from "react-icons/vsc";
import Datas from '../data/movies.json';

export default class MovieSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1020,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],
    };
    return (
      <div className="main-contens-fav">
        <div className="favourite-contens">
          <div className="iq-lts-header d-flex align-items-center justify-content-between">
            <h3 className="main-title">Latest Movies</h3>
            <a className="iq-view-all" href="#">
              View All
            </a>
          </div>

          <Slider {...settings}>
          {Datas.map((data)=>(
            <div className="bg-img" >
              <img className="img-fluid" src={data.image}/>
              <div className="container latest_card_container">
                <div className="block-description">
                  <h6>
                    <a className="iq-title" href="#">{data.filmName}</a>
                  </h6>
                  <div className="movie-time">
                    <span className="badge badge-secondary rounded-0 ">{data.range}</span>
                    <span className="text-white">{data.duration}</span>
                  </div>

                  <div className="hover-button">
                    <button
                      type="button"
                      class="btn btn-secondary rounded-0 play-button"
                    >
                      <span className="playicon">
                        {" "}
                        <IoMdPlay className="io" />
                      </span>
                      PLAY NOW
                    </button>
                  </div>
                </div>

                <div className="block-social-info">
                  <ul class="list-inline">
                    <li class="share">
                      <span class="share-icon">
                        <RiShareFill className="rishare" />
                      </span>
                      <div class="share-box">
                        <div class="d-flex align-items-center">
                          <a
                            href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="share-ico"
                            tabindex="0"
                          >
                            <RiFacebookFill className="ri" />
                          </a>
                          <a
                            href="https://twitter.com/intent/tweet?text=Currentlyreading"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="share-ico"
                            tabindex="0"
                          >
                            <VscTwitter className="vsc" />
                          </a>
                          <a
                            href="#"
                            data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                            class="share-ico iq-copy-link"
                            tabindex="0"
                          >
                            <RiLinksFill className="ri" />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li class="heart">
                      <span class="heart-icon ">
                        <AiFillHeart className />
                      </span>
                      <span class="count-box">19+</span>
                    </li>
                    <li class="plus">
                      <span class="plus-icon">
                        <BsPlus />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
          </Slider>
        </div>
      </div>
    );
  }
}
