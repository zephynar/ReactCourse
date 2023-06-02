import React from "react";
import { Container ,Row,Col} from "reactstrap";
import Header from "./Header";
import Categories from "./Categories";
import Products from "./Products";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const categories=["Beverages","Condiments","Confections","Dairy Products","Grains/Cereals","Meat/Poultry","Produce","Seafood"]
  const products=["Product1","Product2","Product3","Product4","Product5"]
  return (
    <Container>
      <Header/>
      <Row>
        <Col xs="3">
          <Categories categories={categories}/>
        </Col>
        <Col xs="9">
          <Products products={products}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
