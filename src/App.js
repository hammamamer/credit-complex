import React, { Component } from 'react';
import './App.css';
import {connect} from "react-redux";
import {setName} from "./action/userAction"
import {setValidThru} from "./action/userAction";
import {setCode} from "./action/userAction";
import {setCompanyName} from "./action/companyAction";
import store from "./store.js"
import masterCardImg from "./res/master.png"
const style={
  backgroundImage: `url(${masterCardImg})`,
  
}
class App extends Component {
 
  render() {
    return (
      
     
      <div  className="App">
      <div className="container">
       <div className="masterCardInfo">
      
      <h3>{this.props.company.companyName}</h3>
      <p className="code">{this.props.user.code}</p>
      <p className="validThru">{this.props.user.validThru}</p>
      <h4>{this.props.user.name}</h4>
      
      <img className="masterCardImg" height="250px" width="400px" src={masterCardImg}/>
      </div>
      <div><br/>
      <form onSubmit={()=>console.log(store.getState())} action="#">
      <input type="text" minLength="3" maxLength="20"  placeholder="Your Company Name" id="change" onChange={e=>this.props.setCompanyName(e.target.value.toUpperCase())} required/><br/>
      <input type="text" maxLength="20" minLength="3" placeholder="Your Name" id="change" onChange={e=>this.props.setName(e.target.value.toUpperCase(),)} required/><br/>
      <input type="text" placeholder="Your ValidThru" type="text" onChange={e=>this.props.setValidThru(e.target.value)} pattern="[1-12]{2}/[1-99]{2}" title="Le format Requis est le Format XX/YY" required /><br/>
      <input type="text" pattern="[1-9]{4} [1-9]{4} [1-9]{4} [1-9]{4}" title="format requis xxxx xxxx xxxx xxxx"  placeholder="Youre Number" id="change" onChange={e=>this.props.setCode(e.target.value)} required/><br/>
      <input type="submit">
      </input>
      </form>
      </div>
     
      </div>
      </div>
    );
  }
  
}
const mapStateToProps = (state) => {
  return {
      user: state.user,
      company:state.company
      
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
      setName: (name)=>
      {
        dispatch(setName(name))
      },
      setValidThru:(validThru)=> 
      {
        dispatch(setValidThru(validThru))
      },
      setCode:(code)=>
      {
        dispatch(setCode(code))
      },
      setCompanyName:(companyName)=>
      {
        dispatch(setCompanyName(companyName))
      }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
