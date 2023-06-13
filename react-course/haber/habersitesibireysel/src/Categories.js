import React, { Component } from "react";
import {Col, ListGroup, ListGroupItem} from 'reactstrap'
import { Link } from 'react-router-dom';


export default class categories extends Component{
    render(){
        return(
        <Col>
        <ListGroup>
           {this.props.categories.map((category)=>(
            <ListGroupItem onClick={()=>this.props.changeCategory(category)}
            active={ category.id===this.props.currentCategory.id?true:false}
// onClick={( )=>this.props.changeCategory(category)}
            key={category.id}
            >
            <Link  style={{textDecoration:"none",color:"black"}} to={`/${category.id}`}>
            {category.categoryName}
            </Link>

            </ListGroupItem>
            ))}
        </ListGroup>
        </Col>
        )
    }
}