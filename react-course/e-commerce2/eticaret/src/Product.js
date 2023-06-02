import React, { Component} from 'react'
import { Col, Card,CardBody,CardImg,CardTitle,Button, CardGroup, CardText } from 'reactstrap'
export default class Product extends Component {
  render() {
    const {products}=this.props
    return (
      <div>
        <h2>{this.props.currentCategory}</h2>
        <CardGroup>
        {products.map((product)=>(
          <Col xs="3">    
              <Card style={{marginLeft:"10px", marginRight:"10px"}}
              key={product.id}>
              <CardImg top width="100%" src={product.image} alt={product.productName} />
              <CardBody>
                <CardTitle >{product.productName}</CardTitle>
                <hr/>
                <CardText>{product.desc}</CardText>
                <Button onClick={()=>this.props.addToCartCount(product)}> Add to Cart</Button>
              </CardBody>
            </Card> 
          </Col>
        ))}
        </CardGroup>
      </div>
    )
  }
}
