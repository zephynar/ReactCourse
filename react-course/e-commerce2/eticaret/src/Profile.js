import React from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardGroup } from 'reactstrap';
  

export default class Profile extends React.Component{
    render(){
        return(
        <div>
            <CardGroup>
                    <Card>
                    <CardBody>
                        <CardImg top width="100%" src={this.props.image}/>
                    <CardTitle>Email:{this.props.email}</CardTitle>
                    <CardText>Text: {this.props.text}</CardText>
                    </CardBody>
                </Card>
            
            </CardGroup>
            </div>

        )
    }
}