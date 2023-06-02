import React, { Component } from "react";
import { ListGroup,ListGroupItem } from "reactstrap";
export default class JobTitles extends Component{
    state={
        jobTitles:[]
    }
    componentDidMount(){
        this.getJobTitles();
    }
    getJobTitles=()=>{
        fetch(" http://localhost:3000/jobtitles").then((response)=>response.json()).then((data)=>this.setState({jobTitles:data}))
    }
    render(){
        return(
            <ListGroup>
                {this.state.jobTitles.map((jobtitle)=>(
                     <ListGroupItem style={{backgroundColor:"darkgray"}}onClick={()=>this.props.changeJobTitle(jobtitle)}
                     key={jobtitle.id}>
                        {jobtitle.jobTitle}
                     </ListGroupItem>
                ))}  
            </ListGroup>
        )
    }
}