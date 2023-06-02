import React,{ Component }from "react";
import { CardGroup, CardImg,Card,Col,CardBody,CardTitle } from "reactstrap";

export default class Staffs extends Component{
    render(){
        const {staffs}=this.props
        return(
            <div>
                <h2>{this.props.currentJobTitle}</h2>
                <CardGroup>
                {staffs.map((staff)=>(
                    <Col xs="3">
                    <Card style={{marginLeft:"10px",marginRight:"10px"}} key={staff.id}>
                    <CardImg top width="100%" src={staff.image} alt={staff.staffName}/>
                    <CardBody>
                        <CardTitle>Name: {staff.staffName}</CardTitle>
                        <CardTitle>Surname: {staff.staffSurname}</CardTitle>
                    </CardBody>
                    </Card>
                    </Col>
                ))}
            </CardGroup>
            </div>
        )
    }
}