import React from 'react'
import {Col,Card,CardImg,CardTitle,CardSubtitle,CardText,Button,CardBody} from "reactstrap"
function Dramas({dramas}){
    return (
        <Col>
        {dramas.map((drama,index,)=>(
            <Card>
            <CardImg top width="100%" src={drama.image} alt="Card image cap" />
            <CardBody>
              <CardTitle key={index}>{drama.title}</CardTitle>
              <CardSubtitle>{drama.category}</CardSubtitle>
              <CardText>{drama.context}</CardText>
              <Button>Watch</Button>
            </CardBody>
          </Card>
            
        ))}
        </Col>
            
       
    )
}
export default Dramas

