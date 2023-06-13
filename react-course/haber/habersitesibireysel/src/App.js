import React, { Component } from 'react';
import Categories from './Categories';
import News from './News';
import Details from './Details';
import Navbar from './Navbar';
import { Route,Routes } from 'react-router-dom';
import { Row, Container,Col } from "reactstrap";
import Contact from './Contact';
import NotFound from './NotFound';

export default class App extends Component {
  state={
    currentCategory:[],
    news:[],
    categories : [],
    selectedNews:[]
  }
  getSelectedNews=(art)=>{
    this.setState({selectedNews:art})
  }
  getCategories = () => {
    fetch("http://localhost:3000/categories")
    .then((response)=> response.json())
    .then((data)=>this.setState({categories:data}))
    }
  
  changeCategory=(category)=>{
    this.setState({currentCategory:category});
    console.log(category)
  }
  componentDidMount(){
    this.getCategories()
    this.getSelectedNews()
  }

  render(){
    return (
      <Container>
        <Navbar/>
        <Row>
          <Col xs="3">
            <Routes>
            {this.state.categories.map(()=>(
              <Route path="/" exact element={
                <Categories
                categories={this.state.categories}
                changeCategory={this.changeCategory}
                currentCategory={this.state.currentCategory}/>}
                />
            ))}  
            </Routes>
          </Col>
          <Col xs="9">
            <Routes>
              <Route path={`/${this.state.currentCategory.id}`} element={<News currentCategory={this.state.currentCategory} getSelectedNews={this.getSelectedNews}/>}/>
              <Route path="/" element={<News currentCategory={this.state.currentCategory} getSelectedNews={this.getSelectedNews}/>}/>
              <Route path={`/${this.state.currentCategory.id}/${this.state.selectedNews.source.id}`} 
              element={<Details currentCategory={this.state.currentCategory} 
              selectedNews={this.state.selectedNews}/>}/>
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound/>}/>
            </Routes>
            </Col>
        </Row>
      </Container>
    );
  }
}
  