import React from 'react';
import {
    Link
  } from "react-router-dom";
import {ButtonGroup,Button} from '@material-ui/core';

class Main extends React.Component {
    constructor(props){
        super(props)
        this.state={
            submited:0
        }
    }
    _handleChange(e){
        this.setState({
            submited:e
        })
    }
    render() {
        console.log("aaaaa",); 
  return (
    <div className={{}} >
        <ButtonGroup   >
           <Link to={"/signIn"}  style={{ textDecoration: 'none' }}> 
           <Button  color="primary" onClick={()=>{this._handleChange(0)}} variant={this.state.submited===0 ?"contained":null} >Sign In</Button>
           </Link>
           <Link to={"/reg"}  style={{ textDecoration: 'none' }}>
            <Button color="primary"  onClick={()=>{this._handleChange(1)}}
             variant={this.state.submited===1 ?"contained":null}>Registration</Button>
             </Link>
        </ ButtonGroup>
      
    </div>
  );
}
}
export default Main;