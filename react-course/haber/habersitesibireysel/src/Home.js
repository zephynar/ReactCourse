import React, { Component } from "react";
import Navbar from "./Navbar";
import Categories from "./Categories";
import News from "./News";
import {Row,Col} from "reactstrap";

export default class Home extends Component{
    render(){
        return(
            <Row>
            <Navbar/>
            <Col xs="3">
                <Categories/>
            </Col>
            <Col xs="9">
                <News/>
              
            </Col>
            </Row>
        )
    }

}