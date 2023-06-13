import React, { Component } from "react";
import { Col, CardGroup, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardHeader} from 'reactstrap';

export default class Details extends Component{
    
    render(){
        const nws=this.props.selectedNews;
        return(
            <Col>
        <div>
        <CardGroup>          
            <Card>
                <CardHeader>
                    <CardTitle>{nws.title}</CardTitle>
                    <CardSubtitle>{nws.author}/{nws.publishedAt}</CardSubtitle>
                    <CardImg top width="100%" src={nws.image} alt={nws.source.name} />
                </CardHeader>
                <CardBody>
                    <CardText>{nws.content}</CardText>
                </CardBody>
            </Card>
        </CardGroup>
        </div>
        </Col>
        )
    }
}