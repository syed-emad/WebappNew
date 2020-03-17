import React, { Component } from 'react';
import '../Styling/styles/bootstrap-4.1.2/bootstrap.min.css';
import '../Styling/plugins/font-awesome-4.7.0/css/font-awesome.min.css';
import '../Styling/plugins/OwlCarousel2-2.3.4/owl.carousel.css';
import '../Styling/plugins/OwlCarousel2-2.3.4/owl.theme.default.css';
import '../Styling/plugins/OwlCarousel2-2.3.4/animate.css';
import '../Styling/styles/listings.css';
import '../Styling/styles/listings_responsive.css';

export class teacherresult extends Component {
    render() {
        return (
            <div>
                <div class="results_container">
									<div class="section_title">
										<h1><span>Results for:
										</span>Maths
	
										    </h1>
									</div>
									<div class="results grid">

										
										<div class="grid-item result food">
											<div class="listing">
												<div class="listing_image">

													<div><img src="images/Tpic5.jpg" alt=""  style={{width:300}, {height:auto},{margin:20}} /></div>
													
												</div>
												<div class="listing_title_container">
													<div class="listing_title"><a href="listing.html">Neha Ahmed</a>
													</div>
													
													 <div class="listing_info">
														<div class="d-flex flex-row">
														<div class="col-8 ">
															
														<p><strong>Platform: </strong>
															<span class="badge bg-primary">Alevels</span> 
															<span class="badge bg-info">Olevels</span>
															<span class="badge bg-warning">Intermediate</span>
															<span class="badge bg-success">Matric</span>
														</p>
													</div>
													
													<div class="col-4">
														<div class="listing_price">Rs.1000 /hour</div>
													<div class="listing_rating">4.5</div>
														<p><strong>Qualification: </strong> Undergraduate, Bachelors in CS</p>

													</div>
												</div>
												</div> 
												</div>
											</div>
										</div>

										
										<div class="grid-item result food">
											<div class="listing">
												<div class="listing_image">

													<div><img src="images/Tpic5.jpg" alt="" style={{width:300}, {height:auto},{margin:20}} />

                                                    </div>
													
												</div>
												<div class="listing_title_container">
													<div class="listing_title"><a href="listing.html">Neha Ahmed</a>
													</div>
													
													 <div class="listing_info">
														<div class="d-flex flex-row">
														<div class="col-8 ">
															
														<p><strong>Platform: </strong>
															<span class="badge bg-primary">Alevels</span> 
															<span class="badge bg-info">Olevels</span>
															<span class="badge bg-warning">Intermediate</span>
															<span class="badge bg-success">Matric</span>
														</p>
													</div>
													
													<div class="col-4">
														<div class="listing_price">Rs.1000 /hour</div>
													<div class="listing_rating">4.5</div>
														<p><strong>Qualification: </strong> Undergraduate, Bachelors in CS</p>

													</div>
												</div>
												</div> 
												</div>
											</div>
										</div>

										

										

									</div>
								</div>
            </div>
        )
    }
}

export default teacherresult;
