import React from "react";

import axios from "axios";
import "./App.css";

import { Component } from "react";

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
        <div>
          {" "}
          <ul>
            {this.state.items.map(items => (
              <li>name:{items.name}</li>
            ))}
          </ul>
        </div>
        <p>------------------</p>

        <div style={{ padding: "10px" }}>
          <input
            type="text"
            onChange={e => this.setState({ name: e.target.value })}
            placeholder="add something in the database"
            style={{ width: "200px" }}
          />
          <button onClick={() => this.putDataToDB(this.state.name)}>ADD</button>
        </div>
        <div style={{ padding: "10px" }}>
          <input
            type="text"
            style={{ width: "200px" }}
            onChange={e => this.setState({ idToDelete: e.target.value })}
            placeholder="put id of item to delete here"
          />
          <button onClick={() => this.deleteFromDB(this.state.idToDelete)}>
            DELETE
          </button>
        </div>
      </div>
    );
  }
}

export default App;
