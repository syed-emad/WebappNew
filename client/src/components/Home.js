import React, { Component } from "react";

import axios from "axios";
import LoginSystem from "../components/LoginSystem";
export default class Home extends Component {
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
    return (
      <div>
        <div>
          <p>---------THESE ARE FROM DATABASE---------</p>{" "}
          <ul>
            {this.state.items.map(items => (
              <li>name:{items.name}</li>
            ))}
          </ul>
        </div>

        <p>-----------ADD API-----PLEASE RELOAD AFTER PRESSING BUTTON--</p>
        <div style={{ padding: "10px" }}>
          <input
            type="text"
            onChange={e => this.setState({ name: e.target.value })}
            placeholder="add something in the database"
            style={{ width: "200px", border: "1px solid red" }}
          />
          <button onClick={() => this.putDataToDB(this.state.name)}>ADD</button>
        </div>
        <p>
          -----------DELETE API--sample id :5e6fae746744cc9708357f51
          ---5e6e842c7b625684fcad6cb7--PLEASE RELOAD AFTER PRESSING BUTTON----
        </p>
        <div style={{ padding: "10px" }}>
          <input
            type="text"
            style={{ width: "200px", border: "1px solid red" }}
            onChange={e => this.setState({ idToDelete: e.target.value })}
            placeholder="put id of item to delete here"
          />
          <button onClick={() => this.deleteFromDB(this.state.idToDelete)}>
            DELETE
          </button>
          <p>-----------To go to admin panel write : Localhost:5000/admin--</p>
        </div>
      </div>
    );
  }
}
