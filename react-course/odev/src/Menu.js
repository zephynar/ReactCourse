import React, { Component } from 'react'
import { ListGroup,ListGroupItem } from 'reactstrap'

export default class Menu extends Component {
  render() {
    return (
        <ListGroup>
        <ListGroupItem><a href='#' className='btn'>Dramas</a></ListGroupItem>
        <ListGroupItem><a href='#' className='btn'>Films</a></ListGroupItem>
        <ListGroupItem><a href='#' className='btn'>Upcoming Dramas</a></ListGroupItem>
        <ListGroupItem><a href='#' className='btn'>Popular Dramas</a></ListGroupItem>
        <ListGroupItem><a href='#' className='btn'>A-Z Index</a></ListGroupItem>
      </ListGroup>
    )
  }
}
