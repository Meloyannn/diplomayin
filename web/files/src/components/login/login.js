import React from 'react';
import { Container, Button } from '@material-ui/core';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import {
  Link
} from "react-router-dom";
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formData: {
        email: "",
        password: ""
      },
      submitted: false,
    }
  }
  _handleSubmit = () => {
    console.log("kmtni handleSubmiteddddddddd");
    
    this.setState({ submitted: true }) 
    
  }

  _handleChange = (event) => {
    console.log("event taregret",event.target);
    
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  }
  render() {
    console.log("login",this.props);
    
    return (
      <Container maxWidth="xs">
     <h1 >Login</h1>
        <ValidatorForm
          ref="form"
          onSubmit={this._handleSubmit}
        >
          <TextValidator
            value={this.state.formData.email}
            variant='outlined'
            margin="normal"
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={this._handleChange}
            validators={['required', 'isEmail']}
            errorMessages={['this field is required', 'Email is not valid,try again']}
            autoFocus
          />
          <TextValidator
            validators={['required',]}
            errorMessages={['this field is required']}
            value={this.state.formData.password}
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            onChange={this._handleChange}
            autoComplete="current-password"
          />
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
      Sign In
          </Button>
          
        </ValidatorForm>
      </Container>
    );
  }
}

export default Login;
