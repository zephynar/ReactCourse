import React, { Component } from "react";
import Categories from "./Categories";
import Product from "./Product";
import { Row,Col, Container } from "reactstrap";
import Navbar from "./Navbar";
import alertify from "alertifyjs";
import { Route,Routes } from "react-router-dom";
import Cart from "./Cart";
import Contact from "./Contact";
import NotFound from "./NotFound";
import Profile from "./Profile";

export default class App extends Component {
  state={
    currentCategory:"",
    products:[],
    categoryList:[],
    cart:[],
    userForm:[],
    email:"",
    image: null,
    text:""
  }

onChangeHandler=(event)=>{
    let name=event.target.name;
    let value=event.target.value;
    this.setState({[name]:value})
  }
onImageChange = (event) => {
  if (event.target.files && event.target.files[0]) {
    let img = event.target.files[0];
    this.setState({
      image: URL.createObjectURL(img)
    });
  }
};

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
  listCategory=(category)=>{
    let list=this.state.categoryList
    let newCat=list.find((c)=>c.category.id===category.id)
    if(!newCat){
      list.push({category:category.categoryName})
    }this.setState({categoryList:category})
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

  getUser=(user)=>{
    this.setState({userForm:user})
    user.preventDefault();
    alertify.warning(this.state.email+" register successful",2)
  }

  componentDidMount(){
      this.getProducts()
  }
    render(){
      return (
        <Container>
          <Navbar removeToCart={this.removeToCart} cart={this.state.cart}/>
          <Row>
          <Col xs="9">
            <Routes>
                <Route path="/" exact
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

                <Route path="/profile" element={<Profile email={this.state.email} text={this.state.text} image={this.state.image}/>}/>

                <Route path="/contact" element={<Contact onImageChange={this.onImageChange} onChangeHandler={this.onChangeHandler}/>}/>

                <Route path="*" element={<NotFound/>}/>
              </Routes>
            
            </Col>
            <Col xs="3">
            <Routes>
            {this.state.categoryList.map(()=>(
              <Route path="" element={
                <Categories
                changeCategory={this.changeCategory}
                currentCategory={this.state.currentCategory}/>}
                />
            ))}  
            
            </Routes>
            </Col>
            
          </Row>
          
        </Container>
      );
    }
  
}

