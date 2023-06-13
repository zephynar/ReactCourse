// import alertify from 'alertifyjs';
import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Contact extends React.Component {
   
    onSubmitHandler=(event)=>{
      event.preventDefault();
    //  alertify.warning(this.state.email+" login successful",2)
  }
  
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Article Category</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>Hot News</option>
            <option>Economy</option>
            <option>Technology</option>
            <option>Politics</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Article</Label>
          <Input type="textarea" name="text" id="exampleText"/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            You can upload your article as a file.
          </FormText>
        </FormGroup>
        <Button onClick={()=>this.onSubmitHandler(this.state)}>Submit</Button>
      </Form>
    );
  }
}