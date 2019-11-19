import React from 'react';
import { Container, Button } from '@material-ui/core';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'

class Registration extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formData: {
        first_name:"",
        email: "",
        password: "",
        repeatPassword: '',
      },
      submitted: false,
    }
  }
  _handleSubmit = () => {
    this.setState({ submitted: true })
    alert("registration")
}
_handleChange = (event) => {   
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  }
  componentDidMount() {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
        const { formData } = this.state;
        if (value !== formData.password) {
            return false;
        }
        return true;
    });
}
  render() {
    return (
      <Container maxWidth="xs" >
        <h1 >Registration</h1>
        <ValidatorForm
          ref="form"
          onSubmit={this._handleSubmit}
        >
             <TextValidator
            value={this.state.formData.first_name}
            variant='outlined'
            margin="normal"
            fullWidth
            label="First name"
            name="first_name"
            onChange={this._handleChange}
            validators={['required',]}
            errorMessages={['this field is required', ]}
            autoFocus
          />

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
           <TextValidator
                    label="Repeat password"
                    onChange={this.handleChange}
                    name="repeatPassword"
                    type="password"
                    validators={['isPasswordMatch', 'required']}
                    errorMessages={['password mismatch', 'this field is required']}
                    onChange={this._handleChange}
                    value={this.state.formData.repeatPassword}
                    autoComplete="current-password"
                    fullWidth
                    variant="outlined"
                    margin="normal"        
                />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            REGITRATION
          </Button>
        </ValidatorForm>
      </Container>
    );
  }
}

export default Registration