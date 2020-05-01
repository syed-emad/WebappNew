import React from "react";

import "./Calender.css";
const Calender = () => {

  var time;

  return (
    
    <div className="wrapperx" style={{marginBottom:"4px"}}>
      <h3 className=" text-center">Availability</h3>
      <main>
        <div className="calendar">
          <div className="calendar__header">
            <div>mon</div>
            <div>tue</div>
            <div>wed</div>
            <div>thu</div>
            <div>fri</div>
            <div>sat</div>
            <div>sun</div>
          </div>
          <div className="calendar__week">
            <div className="calendar__day day">1
            <input 
            type="text"
            className="calendar__day_input"
            disabled={true}
            placeholder="4:00pm-6:00pm"
            />
            </div>
            <div className="calendar__day day">2</div>
            <div className="calendar__day day">3</div>
            <div className="calendar__day day">4</div>
            <div className="calendar__day day">5
            <input 
            type="text"
            className="calendar__day_input"
            disabled={true}
            placeholder="4:00pm-8:00pm"
            />
            </div>
            <div className="calendar__day day">6</div>
            <div className="calendar__day day">7</div>
          </div>
          <div className="calendar__week">
            <div className="calendar__day day">8</div>
            <div className="calendar__day day">9</div>
            <div className="calendar__day day">10</div>
            <div className="calendar__day day">11</div>
            <div className="calendar__day day">12
            <input 
            type="text"
            className="calendar__day_input"
            disabled={true}
            placeholder="8:00am-11:00am"
            />
            </div>
            <div className="calendar__day day">13</div>
            <div className="calendar__day day">14</div>
          </div>
          <div className="calendar__week">
            <div className="calendar__day day">15</div>
            <div className="calendar__day day">16</div>
            <div className="calendar__day day">17</div>
            <div className="calendar__day day">18</div>
            <div className="calendar__day day">19</div>
            <div className="calendar__day day">20
            <input 
            type="text"
            className="calendar__day_input"
            disabled={true}
            placeholder="9:00am-1:00pm"
            />
            </div>
            <div className="calendar__day day">21</div>
          </div>
          <div className="calendar__week">
            <div className="calendar__day day">22</div>
            <div className="calendar__day day">23</div>
            <div className="calendar__day day">24</div>
            <div className="calendar__day day">25</div>
            <div className="calendar__day day">26</div>
            <div className="calendar__day day">27</div>
            <div className="calendar__day day">28</div>
          </div>
          <div className="calendar__week">
            <div className="calendar__day day">29</div>
            <div className="calendar__day day">30</div>
            <div className="calendar__day day">31</div>
            <div className="calendar__day day">1</div>
            <div className="calendar__day day">2</div>
            <div className="calendar__day day">3</div>
            <div className="calendar__day day">4</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Calender;
