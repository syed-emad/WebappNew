import React, { Component } from "react";
import UserDetails from './UserDetails';
import PersonalDetails from './PersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export default class TeacherFinal extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    password:'',
    occupation: '',
    age: '',
    About: '',
    subjects:' '
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, password,occupation, age, About,subjects } = this.state;
    const values = { firstName, lastName, email, password,occupation, age, About,subjects };

    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            step={step}
          />
        );
      case 2:
        return (
          <PersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            step={step}
          />
          
        );
      case 3:
        return (
          // <Confirm
          //   nextStep={this.nextStep}
          //   prevStep={this.prevStep}
          //   values={values}
          // />
          <h1>user details</h1>
        );
      case 4:
        return <h1>user details</h1>
        // return <Success />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }

}