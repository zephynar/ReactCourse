import React, { Component } from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap'
import { Link } from 'react-router-dom';

export default class Categories extends Component {

state = {
categories : []
}

componentDidMount() {
this.getCategories();
}

getCategories = () => {
fetch("http://localhost:3000/categories")
.then((response)=> response.json())
.then((data)=>this.setState({categories:data}))
}
render() {
return (
<ListGroup>
{this.state.categories.map((category)=>(
<ListGroupItem
active={
    category.categoryName===this.props.currentCategory?true:false
}
// onClick={()=>this.props.changeCategory(category)}
key={category.id}
><Link onClick={()=>this.props.changeCategory(category)} style={{textDecoration:"none",color:"black"}} to={category.id}>
{category.categoryName}
</Link>

</ListGroupItem>
))}
</ListGroup>
)
}
}

