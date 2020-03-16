import React, { Component } from "react";

import axios from "axios";
import "./App.css";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import LoginSystem from "./components/LoginSystem";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import UpperSection from "./components/Homepage/UpperSection";
import Howitworks from "./components/Homepage/Howitworks";
import BecomeTeacher from "./components/Homepage/BecomeTeacher";
import Footer from "./components/Homepage/Footer";
import App2 from "./App2";

class App extends Component {
  state = {
    items: [],
    id: 0,
    message: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null
  };

  // never let a process live forever
  // always kill a process everytime we are done using it
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  //Getting from DB
  componentDidMount() {
    axios.get(`/api/items/`).then(res => {
      const items = res.data;
      this.setState({ items });
    });
  }

  //Post request, putting data to DB
  putDataToDB = name => {
    let currentIds = this.state.items.map(items => items.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post("/api/items", {
      id: idToBeAdded,
      name: name
    });
  };

  //DELETING FROM DATABASE
  deleteFromDB = idTodelete => {
    parseInt(idTodelete);
    let objIdToDelete = null;
    this.state.items.forEach(items => {
      if (items.id === idTodelete) {
        objIdToDelete = items._id;
      }
    });

    axios.delete(`/api/items/${idTodelete}`, {
      items: {
        id: objIdToDelete
      }
    });
  };

  // our update method that uses our backend api
  // to overwrite existing data base information
  updateDB = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    parseInt(idToUpdate);
    this.state.data.forEach(dat => {
      if (dat.id === idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post("api/items/updateData", {
      id: objIdToUpdate,
      update: { message: updateToApply }
    });
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        <BrowserRouter>
          <div>
            <div className="header"></div>
            <div className="content">
              <Switch>
                <Route exact path="/" component={UpperSection} />
                <Route exact path="/" component={Howitworks} />
                <Route exact path="/" component={BecomeTeacher} />
                <Route exact path="/" component={Footer} />

                <Route exact path="/2" component={App2} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
