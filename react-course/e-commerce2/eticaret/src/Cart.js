import React from "react";
import { Table } from 'reactstrap';

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
                <th></th>
              </tr>
            </thead>
            <tbody>
                {this.props.cart.map((crt)=>(
                    <tr>
                    <th scope="row">{crt.product.id}</th>
                    <td>{crt.product.categoryId}</td>
                    <td>{crt.product.productName}</td>
                    <td>{crt.quantity}</td>
                     <td><button onClick={()=>this.props.removeToCart(crt.product)} className="btn btn-danger">Remove</button></td>
                  </tr> 
                ))}
            </tbody>
          </Table>
        )
    }
    
}