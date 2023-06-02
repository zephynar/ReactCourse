import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class Categories extends React.Component {
    state={
        categories:[]
    }
    componentDidMount(){
        this.getCategories()
    }
    getCategories=()=>{
        fetch(" http://localhost:3000/categories")
        .then((response)=>response.json())
        .then((data)=>this.setState({categories:data}))
    }
    render() {
      return (
        <ListGroup>
            {this.state.categories.map((category)=>{
                <ListGroupItem active={category.categoryName===this.props.currentCategory
                ?true:false}
                onClick={()=> this.props.changeCategory(category)} 
                key={category.id}>{category.categoryName}</ListGroupItem>
            })}
        </ListGroup>
      );
    }
  }