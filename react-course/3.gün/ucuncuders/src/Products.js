import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';

  export default class Products extends Component{
    
    render(){
        const {products}=this.props
        return(
            <div>
                <h2>{this.props.currentCategory}</h2>
                {products.map((product)=>{
                    <Card>
                    <CardImg style={{marginTop:"10px"}}top width="100%" src="./public/image/product.jpg" alt={product.productName} />
                    <CardBody>
                        <CardTitle>{product.productName}</CardTitle>
                        <CardText>{product.desc}</CardText>
                        <Button>Button</Button>
                    </CardBody>
                    </Card>
                })}     
            </div>
        )
    }
  }