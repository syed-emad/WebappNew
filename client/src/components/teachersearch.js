import React, { Component } from 'react'
import '../Styling/styles/bootstrap-4.1.2/bootstrap.min.css'
import '../Styling/plugins/font-awesome-4.7.0/css/font-awesome.min.css'
import '../Styling/plugins/OwlCarousel2-2.3.4/owl.carousel.css'
import '../Styling/plugins/OwlCarousel2-2.3.4/owl.theme.default.css'
import '../Styling/plugins/OwlCarousel2-2.3.4/animate.css'
import '../Styling/styles/listings.css'
import '../Styling/styles/listings_responsive.css'

export class teachersearch extends Component {
    render() {
        return (
            <div>
               <form>
								<div class="container"> 
									<div class="row d-flex">
										<div class="col">
									<form autocomplete="off" action="/action_page.php">
										<div class="autocomplete" style={{width:300}}>
										  <input id="myInput" style={{borderRadius: '3%'}} type="text" name="subject" placeholder="Subject" />
										</div>
										
									  </form>
								  
									   </div>

								<script>
									  var subjects = ["english", "maths", "french", "add maths", "computer science","sociology","accounting","commerce","economics", "chemistry","physics", "biology","urdu","history", "geography","islamiat"];
									function autocomplete(inp, arr) {
									  var currentFocus;
									  inp.addEventListener("input", function(e) {
										  var a, b, i, val = this.value;
										  closeAllLists();
										  if (!val) { return false;}
										  currentFocus = -1;
										  a = document.createElement("DIV");
										  a.setAttribute("id", this.id + "autocomplete-list");
										  a.setAttribute("class", "autocomplete-items");
										  this.parentNode.appendChild(a);
										  /*for each item in the array...*/
										  for (i = 0; i < arr.length; i++) {
											/*check if the item starts with the same letters as the text field value:*/
											if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
											  /*create a DIV element for each matching element:*/
											  b = document.createElement("DIV");
											  /*make the matching letters bold:*/
											  b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
											  b.innerHTML += arr[i].substr(val.length);
											  /*insert a input field that will hold the current array item's value:*/
											  b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
											  /*execute a function when someone clicks on the item value (DIV element):*/
											  b.addEventListener("click", function(e) {
												  /*insert the value for the autocomplete text field:*/
												  inp.value = this.getElementsByTagName("input")[0].value;
												  /*close the list of autocompleted values,
												  (or any other open lists of autocompleted values:*/
												  closeAllLists();
											  });
											  a.appendChild(b);
											}
										  }
									  });
									  /*execute a function presses a key on the keyboard:*/
									  inp.addEventListener("keydown", function(e) {
										  var x = document.getElementById(this.id + "autocomplete-list");
										  if (x) x = x.getElementsByTagName("div");
										  if (e.keyCode == 40) {
											/*If the arrow DOWN key is pressed,
											increase the currentFocus variable:*/
											currentFocus++;
											/*and and make the current item more visible:*/
											addActive(x);
										  } else if (e.keyCode == 38) { //up
											/*If the arrow UP key is pressed,
											decrease the currentFocus variable:*/
											currentFocus--;
											/*and and make the current item more visible:*/
											addActive(x);
										  } else if (e.keyCode == 13) {
											/*If the ENTER key is pressed, prevent the form from being submitted,*/
											e.preventDefault();
											if (currentFocus > -1) {
											  /*and simulate a click on the "active" item:*/
											  if (x) x[currentFocus].click();
											}
										  }
									  });
									  function addActive(x) {
										/*a function to classify an item as "active":*/
										if (!x) return false;
										/*start by removing the "active" class on all items:*/
										removeActive(x);
										if (currentFocus >= x.length) currentFocus = 0;
										if (currentFocus < 0) currentFocus = (x.length - 1);
										/*add class "autocomplete-active":*/
										x[currentFocus].classList.add("autocomplete-active");
									  }
									  function removeActive(x) {
										/*a function to remove the "active" class from all autocomplete items:*/
										for (var i = 0; i < x.length; i++) {
										  x[i].classList.remove("autocomplete-active");
										}
									  }
									  function closeAllLists(elmnt) {
										/*close all autocomplete lists in the document,
										except the one passed as an argument:*/
										var x = document.getElementsByClassName("autocomplete-items");
										for (var i = 0; i < x.length; i++) {
										  if (elmnt != x[i] && elmnt != inp) {
											x[i].parentNode.removeChild(x[i]);
										  }
										}
									  }
									  /*execute a function when someone clicks in the document:*/
									  document.addEventListener("click", function (e) {
										  closeAllLists(e.target);
									  });
									}
									autocomplete(document.getElementById("myInput"), subjects);
								</script>

								
								<div class="col" >
								<div class="btn-group btn-group-lg dropdown" style={{marginLeft:30},{marginRight:30}}>
									<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										Cost per hour
									  </button>
									<div class="dropdown-menu dropdown-menu-right">
										<div class="slidecontainer">
											<input type="range" min="501" max="10000" value="500" class="slider" id="myRange"/>
											<p style={{color: black},{textAlign: center}}>Rs.100 - Rs.<span id="demo"></span></p>
										  </div>

										  <script>
											var slider = document.getElementById("myRange");
											var output = document.getElementById("demo");
										    output.innerHTML = slider.value; // Display the default slider value
											  // Update the current slider value (each time you drag the slider handle)
											  slider.oninput = function() {
											  output.innerHTML = this.value;
											  }
											</script>
									</div>
								  </div>
								</div>

							

	          					<div class="col-offset-md-2">
											
											
													<select class="selectpicker" multiple title="Timings" data-style="btn btn-group-lg" data-size="auto" data-width="auto" multiple data-max-options="10" >
														
														<optgroup label="Time of the Day">
															<option>8 am - 10 am</option>
															<option>10 am - 12 pm</option>
															<option>12 pm - 2 pm</option>
															<option>2 pm - 4 pm</option>
															<option>4 pm - 6 pm</option>
															<option>6 pm - 8 pm</option>
															<option>8 pm - 10 pm</option>
														</optgroup>
														<optgroup label="Day of the Week">
														  <option>Monday</option>
														  <option>Tuesday</option>
														  <option>Wednesday</option>
														  <option>Thursay</option>
														  <option>Friday</option>
														  <option>Saturday</option>
														  <option>Sunday</option>
														</optgroup>
														
													  </select>								
								</div>
										

                                <div class="col"> <input type="submit" placeholder="Search" style={{marginleft:30}} /> 
                                </div>	
								
								
				</form>
							
        </div>
        )
    }
}

export default teachersearch;
