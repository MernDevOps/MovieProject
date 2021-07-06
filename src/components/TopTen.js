import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/TopTen.css';
import {IoMdPlay } from "react-icons/io";
import {RiShareFill ,RiLinksFill,RiFacebookFill} from "react-icons/ri";
import {AiFillHeart} from "react-icons/ai";
import {BsPlus} from "react-icons/bs"; 
 import {VscTwitter} from "react-icons/vsc";
 
export default class TopTen extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
         {
          breakpoint: 375,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }
      ]
    };
    return (
<div className="main-contens-topten">

<div className="topten-contens">

<div className="iq-lts-header d-flex align-items-center justify-content-between">
<h3 className="main-title">Top 10</h3>
<a className="iq-view-all" href="#">View All</a>
</div>
     
     <Slider {...settings}>
  
  <div className=" bg-img">


<img   class="img-fluid  " src="http://iqonic.design/themes/streamitnew/frontend/html/images/upcoming/02.jpg"></img>

<div className="container topten_card_container">
<div className="block-description">

<h6 >
<a className="iq-title" href="#" >Shadow</a>
</h6>

<div className="movie-time">
<span className="badge badge-secondary rounded-0 ">18+</span>
<span className="text-white">2h 30m</span>
</div>

<div className="hover-button">
<button type="button" class="btn btn-secondary rounded-0 play-button">
<span className="playicon"> < IoMdPlay className="io" /></span>
PLAY NOW
</button>
</div>
</div>


<div className="block-social-info">
<ul class="list-inline">
<li class="share">
<span class="share-icon"><RiShareFill className="rishare" /></span>
<div class="share-box">
<div class="d-flex align-items-center">
<a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" target="_blank" rel="noopener noreferrer" class="share-ico" tabindex="0"><RiFacebookFill className="ri" /></a>
<a href="https://twitter.com/intent/tweet?text=Currentlyreading" target="_blank" rel="noopener noreferrer" class="share-ico" tabindex="0"><VscTwitter className="vsc" /></a>
<a href="#" data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" class="share-ico iq-copy-link" tabindex="0"><RiLinksFill className="ri" /></a>
</div>
</div>
</li>
<li class="heart" ><span class="heart-icon "><AiFillHeart className /></span>
<span class="count-box">19+</span></li>
<li class="plus"><span class="plus-icon"><BsPlus /></span></li>
</ul>
</div>

</div>
 
  </div>


  <div className="bg-img">
<img   class="img-fluid" src="	http://iqonic.design/themes/streamitnew/frontend/html/images/favorite/03.jpg"></img>

<div className="container topten_card_container">
<div className="block-description">

<h6 >
<a className="iq-title" href="#" >Boop Pitty</a>
</h6>

<div className="movie-time">
<span className="badge badge-secondary p-1 mr-2 rounded-0 ">15+</span>
<span className="text-white">2h 30m</span>
</div>

<div className="hover-button">
<button type="button" class="btn btn-secondary rounded-0 play-button">
<span className="playicon"> < IoMdPlay className="io" /></span>
PLAY NOW
</button>
</div>
</div>


<div className="block-social-info">
<ul class="list-inline">
<li class="share">
<span class="share-icon"><RiShareFill className="rishare" /></span>
<div class="share-box">
<div class="d-flex align-items-center">
<a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" target="_blank" rel="noopener noreferrer" class="share-ico" tabindex="0"><RiFacebookFill className="ri" /></a>
<a href="https://twitter.com/intent/tweet?text=Currentlyreading" target="_blank" rel="noopener noreferrer" class="share-ico" tabindex="0"><VscTwitter className="vsc" /></a>
<a href="#" data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" class="share-ico iq-copy-link" tabindex="0"><RiLinksFill className="ri" /></a>
</div>
</div>
</li>
<li class="heart" ><span class="heart-icon "><AiFillHeart className /></span>
<span class="count-box">19+</span></li>
<li class="plus"><span class="plus-icon"><BsPlus /></span></li>
</ul>
</div>
</div>
</div>


<div className="bg-img">


<img   class="img-fluid" src="http://iqonic.design/themes/streamitnew/frontend/html/images/favorite/04.png"></img>

<div className="container topten_card_container">
<div className="block-description">

<h6 >
<a className="iq-title" href="#" >Dino Land</a>
</h6>

<div className="movie-time">
<span className="badge badge-secondary p-1 mr-2 rounded-0 ">18+</span>
<span className="text-white">3 seasons</span>
</div>

<div className="hover-button">
<button type="button" class="btn btn-secondary rounded-0 play-button">
<span className="playicon"> < IoMdPlay className="io" /></span>
PLAY NOW
</button>
</div>
</div>


<div className="block-social-info">
<ul class="list-inline">
<li class="share">
<span class="share-icon"><RiShareFill className="rishare" /></span>
<div class="share-box">
<div class="d-flex align-items-center">
<a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" target="_blank" rel="noopener noreferrer" class="share-ico" tabindex="0"><RiFacebookFill className="ri" /></a>
<a href="https://twitter.com/intent/tweet?text=Currentlyreading" target="_blank" rel="noopener noreferrer" class="share-ico" tabindex="0"><VscTwitter className="vsc" /></a>
<a href="#" data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" class="share-ico iq-copy-link" tabindex="0"><RiLinksFill className="ri" /></a>
</div>
</div>
</li>
<li class="heart" ><span class="heart-icon "><AiFillHeart className /></span>
<span class="count-box">19+</span></li>
<li class="plus"><span class="plus-icon"><BsPlus /></span></li>
</ul>
</div>

</div>

</div>

<div className="bg-img">


<img  class="img-fluid" src="http://iqonic.design/themes/streamitnew/frontend/html/images/upcoming/01.jpg"></img>

<div className="container topten_card_container">
<div className="block-description">

<h6 >
<a className="iq-title" href="#" >The Last Breath</a>
</h6>

<div className="movie-time">
<span className="badge badge-secondary p-1 mr-2 rounded-0 ">5+</span>
<span className="text-white">2h 30m</span>
</div>

<div className="hover-button">
<button type="button" class="btn btn-secondary rounded-0 play-button">
<span className="playicon"> < IoMdPlay className="io" /></span>
PLAY NOW
</button>
</div>
</div>


<div className="block-social-info">
<ul class="list-inline">
<li class="share">
<span class="share-icon"><RiShareFill className="rishare" /></span>
<div class="share-box">
<div class="d-flex align-items-center ">
<a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" target="_blank" rel="noopener noreferrer" class="share-ico" tabindex="0"><RiFacebookFill className="ri" /></a>
<a href="https://twitter.com/intent/tweet?text=Currentlyreading" target="_blank" rel="noopener noreferrer" class="share-ico" tabindex="0"><VscTwitter className="vsc" /></a>
<a href="#" data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" class="share-ico iq-copy-link" tabindex="0"><RiLinksFill className="ri" /></a>
</div>
</div>
</li>
<li class="heart" ><span class="heart-icon "><AiFillHeart className /></span>
<span class="count-box">19+</span></li>
<li class="plus"><span class="plus-icon"><BsPlus /></span></li>
</ul>
</div>

</div>

</div>

  <div className="bg-img">


<img   class="img-fluid" src="http://iqonic.design/themes/streamitnew/frontend/html/images/favorite/02.jpg"></img>

<div className="container topten_card_container">
<div className="block-description">

<h6 >
<a className="iq-title" href="#" >Last Race</a>
</h6>

<div className="movie-time">
<span className="badge badge-secondary p-1 mr-2 rounded-0 ">7+</span>
<span className="text-white">2 seasons</span>
</div>

<div className="hover-button">
<button type="button" class="btn btn-secondary rounded-0 play-button">
<span className="playicon"> < IoMdPlay className="io" /></span>
PLAY NOW
</button>
</div>
</div>


<div className="block-social-info">
<ul class="list-inline">
<li class="share">
<span class="share-icon"><RiShareFill className="rishare" /></span>
<div class="share-box">
<div class="d-flex align-items-center">
<a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" target="_blank" rel="noopener noreferrer" class="share-ico" tabindex="0"><RiFacebookFill className="ri" /></a>
<a href="https://twitter.com/intent/tweet?text=Currentlyreading" target="_blank" rel="noopener noreferrer" class="share-ico" tabindex="0"><VscTwitter className="vsc" /></a>
<a href="#" data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" class="share-ico iq-copy-link" tabindex="0"><RiLinksFill className="ri" /></a>
</div>
</div>
</li>
<li class="heart" ><span class="heart-icon "><AiFillHeart className /></span>
<span class="count-box">19+</span></li>
<li class="plus"><span class="plus-icon"><BsPlus /></span></li>
</ul>
</div>

</div>

</div>
</Slider>

    
      </div>
     
   
     
      </div>

     
      
    )
  }
}


