import React, { Component } from 'react';
import '../Styling/styles/bootstrap-4.1.2/bootstrap.min.css';
import '../Styling/plugins/font-awesome-4.7.0/css/font-awesome.min.css';
import '../Styling/plugins/OwlCarousel2-2.3.4/owl.carousel.css';
import '../Styling/plugins/OwlCarousel2-2.3.4/owl.theme.default.css';
import "../Styling/plugins/OwlCarousel2-2.3.4/animate.css";
import '../Styling/styles/listings.css';
import '../Styling/styles/listings_responsive.css';


export class teacherheader extends Component {
    render() {
        return (
            <div>
            <div class="menu">
            <div class="menu_container text-right">
                <div class="menu_close">close</div>
                <nav class="menu_nav">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="listings.html">Listings</a></li>
                        <li><a href="blog.html">News</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </nav>
                <div class="menu_link">
                    <a href="#">+Add Listing</a>
                </div>
            </div>
        </div>
    
       
    
           
    
            <header class="header">
                <div class="header_background">
                    <div class="background_image" style="background-image:url(images/header.jpg)"></div>
                </div>
                <div class="header_overlay"></div>
                <div class="header_content d-flex flex-row align-items-center justify-content-start">
    
                
                    <div class="logo"><a href="#">Directory<span>Plus</span><span>+</span></a></div>
    
                   
                    <div class="header_right d-flex flex-row align-items-center justify-content-start ml-auto">
                        <nav class="main_nav">
                            <ul class="d-flex flex-row align-items-center justify-content-start">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="#">About us</a></li>
                                <li class="active"><a href="listings.html">Listings</a></li>
                                <li><a href="blog.html">News</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </nav>
                        <div class="add_listing text-center trans_200"><a href="#">+Add Listing</a></div>
                        <div class="log_reg">
                            <ul class="d-flex flex-row align-items-center justify-content-start">
                                <li><a href="#">Login</a></li>
                                <li><a href="#">Register</a></li>
                            </ul>
                        </div>
                        <div class="hamburger">
                            <i class="fa fa-bars trans_200"></i>
                        </div>
                    </div>
    
                </div>
            </header>
            </div>
        )
    }
}

export default teacherheader;
