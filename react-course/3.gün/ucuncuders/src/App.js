import React, { Component } from "react";
import {Container,Row, Col} from "reactstrap";
import NavBar from "./Navbar";
import Categories from "./Categories";
import Products from "./Products";

export default class App extends Component{
  state={
    currentCategory:"",
    products:[],
    carts:[]
  }
  changeCategory=(category)=>{
    this.setState({currentCategory:category.categoryName})
    this.getProducts(category.id)
  }
  getProducts=(categoryId)=>{
    let url=" http://localhost:3000/products"
    if(categoryId){
      url+="?categoryId="+categoryId
    }
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>this.setState({products:data}))
  }
  componentDidMount(){
    this.getProducts()
  }
  addtoCart=()=>{
    
  }
  render(){
    return (
      <Container>
        <NavBar/>
        <Row>
          <Col xs="3">
          <Categories currentCategory={this.state.currentCategory}
          changeCategory={this.changeCategory}/>
          </Col>
          <Col xs="9">
            <Products currentCategory={this.state.currentCategory} products={this.state.products}/>
          </Col>
        </Row>
      </Container>
    );
  }
  
}


