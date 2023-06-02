import React from "react";
import { CardBody, CardText ,Card } from "reactstrap";
function About({content}){
    return(
        <Card>
            <CardBody>
                <CardText>{content}</CardText>
            </CardBody>
        </Card>
    )
}
export default About