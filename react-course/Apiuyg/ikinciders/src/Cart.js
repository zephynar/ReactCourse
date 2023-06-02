import React from "react";
import { Table ,Button} from 'reactstrap';

export default class Cart extends React.Component{
    render(){
        return(
            <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Category Id</th>
                <th>Product Name</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
                {this.props.cart.map((crt)=>(
                    <tr>
                    <th scope="row">{crt.product.id}</th>
                    <td>{crt.product.categoryId}</td>
                    <td>{crt.product.productName}</td>
                    <td>{crt.product.quantity}</td>
                    <td><Button onClick={this.props.removeToCart(crt.product.id)} className="btn btn-danger">Remove</Button></td>
                  </tr>
                ))}
            </tbody>
          </Table>
        )
    }
    
}