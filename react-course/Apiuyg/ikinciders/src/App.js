import React, { Component } from "react";
import Categories from "./Categories";
import Product from "./Product";
import { Row,Col, Container } from "reactstrap";
import Navbar from "./Navbar";
import alertify from "alertifyjs";
import { Route,Routes } from "react-router-dom";
import Cart from "./Cart";

export default class App extends Component {
  state={
    currentCategory:"",
    products:[],
    cart:[]
  }
  changeCategory=(category)=>{
    this.setState({currentCategory:category.categoryName});
    this.getProducts(category.id)
  }
  getProducts=(categoryId)=>{
      let url="http://localhost:3000/products"
      if(categoryId){
        url+="?categoryId="+categoryId
      }
      fetch(url).then((response)=>response.json())
      .then((data)=>this.setState({products:data}))

  }
  addToCartCount=(product)=>{
    let newCart=this.state.cart
    let addedItem=newCart.find((c)=>c.product.id===product.id)
  if(addedItem){
    addedItem.quantity+=1
  }
  else{
    newCart.push({product:product,quantity:1})
  }
  this.setState({cart:newCart})
  alertify.success(product.productName+" added to cart",2);
  }

  removeToCart=(product)=>{
    let newCart=this.state.cart.filter((c)=>c.product.id!==product.id)
    this.setState({cart:newCart})
    alertify.error(product.productName+" removed from cart",2)
  }

  componentDidMount(){
      this.getProducts()
  }
    render(){
      return (
        <Container>
          <Navbar removeToCart={this.removeToCart} cart={this.state.cart}/>
          <Row>
            <Col xs="3">
            <Categories
            changeCategory={this.changeCategory}
            currentCategory={this.state.currentCategory}/>
            </Col>
            <Col xs="9">
              <Routes>
                <Route path="/"
                element={
                  <Product
                  addToCartCount={this.addToCartCount}
                  products={this.state.products}
                  currentCategory={this.state.currentCategory}
                  />
                }>
                </Route>
                <Route
                path="/cart"
                element={
                  <Cart
                    cart={this.state.cart}
                    removeToCart={this.removeToCart}
                  />
                }>
                </Route>
              </Routes>
            
            </Col>
          </Row>
          
        </Container>
      );
    }
  
}

