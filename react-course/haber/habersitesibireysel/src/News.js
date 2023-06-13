import React, { Component } from "react";
import { Col, CardGroup, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from "react-router-dom";
export default class News extends Component{
    state={
        news:[],
        categoryId:this.props.currentCategory.id
    }
   
    componentDidMount(){
        this.props.getSelectedNews()
        this.getNews()
    }
    getNews=(categoryId)=>{
        let url="http://localhost:3000/articles"
          if(categoryId){
            url+="?categoryId="+categoryId
          }
          fetch(url).then((response)=>response.json())
          .then((data)=>this.setState({news:data}))
    }
    render(){
        return(
            
        <div>
        <h2>{this.props.currentCategory.categoryName}</h2>
        <CardGroup>
        {this.state.news.map((art)=>(
                <Col xs="9"> 
            <Card>
                <CardImg top width="100%" src={art.image} alt={art.source.name} />
                <CardBody>
                    <CardTitle>{art.title}</CardTitle>
                    <CardSubtitle>{art.author}</CardSubtitle>
                    <CardText>{art.description}</CardText>
                    <Link to={`/${this.props.currentCategory.id}/${art.source.id}`}>
                    <Button onClick={()=>(this.props.getSelectedNews(art))}>Read More</Button>
                    </Link>
                    
                </CardBody>
            </Card>
            </Col> 
            
    ))}
    <br/>
        </CardGroup>
        </div>
      
        )
    }
}