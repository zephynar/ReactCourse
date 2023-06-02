import React from "react"
import { Container,Row,Col } from "reactstrap";
import JobTitles from "./JobTitles";
import Navbar from "./Navbar";
import Staffs from "./Staffs";
import { Component } from "react";

export default class App extends Component {
state={
  currentJobTitle:"",
  staffs:[]
}
changeJobTitle=(jobTitle)=>{
  this.setState({currentJobTitle:jobTitle.jobTitle})
  this.getStaffs(jobTitle.id)
}
getStaffs=(jobId)=>{
  let url="http://localhost:3000/staffs"
  if(jobId){
    url+="?jobId="+jobId
  }
  fetch(url).then((response)=>response.json()).then((data)=>this.setState({staffs:data}))
}

componentDidMount(){
  this.getStaffs()
}
  render(){
    return (
      <Container>
          <Navbar/>
          <Row>
            <Col xs="3">
            <JobTitles
            changeJobTitle={this.changeJobTitle}
            currentJobTitle={this.state.currentJobTitle}/>
            </Col>
            <Col xs="9">
            <Staffs
            staffs={this.state.staffs}
            currentJobTitle={this.state.currentJobTitle}/>
            </Col>
          </Row>
          
        </Container>
    );
  }
}

