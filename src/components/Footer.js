import React, { useState } from 'react';
import '../css/Footer.css';
import { FaStar, FaStarHalf } from "react-icons/fa";

import {
	AiOutlineFacebook,
	AiOutlineInstagram,
	AiFillTwitterCircle,
} from 'react-icons/ai';
import {
	IoIosArrowUp
} from 'react-icons/io';

const Footer = () => {


	return (
		<div class="footer-top">
		<div >
		<footer id="contact" class="footer-one iq-bg-dark">
     
		 {/* <!-- Address --> */}
		 <div >
				 <div class="footer-top container-fluid">
						 <div class="row-footer footer-standard">
								 <div class="col-lg-7">
										 <div class="widget text-left">
												 <div class="menu-footer-link-1-container">
														 <ul id="menu-footer-link-1" class="menu p-0">
																 <li id="menu-item-7314" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7314">
																		 <a href="#">Terms Of Use</a>
																 </li>
																 <li id="menu-item-7316" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7316">
																		 <a href="../html/privacy-policy.html">Privacy-Policy</a>
																 </li>
																 <li id="menu-item-7118" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7118">
																		<a href="../html/faq.html">FAQ</a>
																</li>
																 <li id="menu-item-7118" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7118">
																		 <a href="../html/watch-video.html">Watch List</a>
																 </li>
														 </ul>
												 </div>
										 </div>
										 <div class="widget text-left">			
												 <div class="textwidget">
														 <p><small>© 2021 CINETRAIL. All Rights Reserved. All videos and shows on this platform are trademarks of, and all related images and content are the property of, XPRSOFT Duplication and copy of this is strictly prohibited. All rights reserved. </small></p>
												 </div>
										 </div>                        
								 </div>
								 <div class="col-lg-2 col-md-6 mt-4 mt-lg-0">
										 <h6 class="footer-link-title">
												 Follow Us :
										 </h6>
										 <ul class="info-share"> 
												 <li><a  target="_blank" href="#"><i class="icon-hover fa fa-facebook"></i></a></li>
												 <li><a  target="_blank" href="#"><i class="icon-hover fa fa-twitter"></i></a></li>
												 <li><a  target="_blank" href="#"><i class="icon-hover fa fa-google-plus"></i></a></li>
												 <li><a  target="_blank" href="#"><i class="icon-hover fa fa-github"></i></a></li>
												
                             
                           
										 </ul>

								 </div>
								 <div class="col-lg-3 col-md-6 mt-4 mt-lg-0">
										 <div class="widget text-left">
												 <div class="textwidget">
														 <h6 class="footer-link-title">Cinetrail App</h6>
														 <div class="d-flex align-items-center">
																 <a class="app-image" href="#">
																		 <img src="https://vinzator.com/movieProject/images/footer/01.jpg" alt="play-store"/>
																 </a>
																 <a class="ml-3 app-image" href="#"><img src="https://vinzator.com/movieProject/images/footer/02.jpg" alt="app-store"/></a>
														 </div>
												 </div>
										 </div>
								 </div>
						 </div>
				 </div>
		 </div>
		 <li><a class="top" href="#top"><IoIosArrowUp/></a></li>
		 {/* <!-- Address END --> */}
 </footer>
		</div>
		</div>
	);
};

export default Footer;