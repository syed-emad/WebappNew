import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
//no use of uuid now
//import uuidv1 from "uuid/v1";
//connect comes from react redux and allows us to et state from redux to react components
import { connect } from "react-redux";
import { getTeachers } from "../actions/teacheraction";
import PropTypes from "prop-types";

class TeachersList extends Component {
  componentDidMount() {
    this.props.getTeachers();
  }
  render() {
    const { teachers } = this.props.teacher;
    return (
      <div>
        {teachers.map(({ id, name, Qualification }) => (
          <div>
            <p>Name of teacher: {name}</p>
            <p>Qualification of teacher: {Qualification}</p>
          </div>
        ))}
      </div>
    );
  }
}

TeachersList.propTypes = {
  getTeachers: PropTypes.func.isRequired,
  teacher: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  teacher: state.teacher
});
//connect wil take in 2 things given below
export default connect(mapStateToProps, { getTeachers })(TeachersList);