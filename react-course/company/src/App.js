import React from "react";
import Navbar from"./Navbar";
import Slider from"./Slider";
import About from"./About";
import Footer from"./Footer";
import { Container } from "reactstrap";

function App() {
  const links=[
    {title:"Home", url:"/"},
    {title:"About", url:"/about"},
    {title:"Contact", url:"/contact"}
  ]
  const images=[
    "https://picsum.photos/800/300/?image=1",
    "https://picsum.photos/800/300/?image=2",
    "https://picsum.photos/800/300/?image=3"
  ]
  const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, arcu quis tempor aliquam, magna diam aliquet nunc, sed";
  return (
    <div>
    <Navbar links={links}/>
    <Container>
      <Slider images={images}/>
      <About content={content}/>
    </Container>
    
    <Footer/>
    </div>
  );
}

export default App;
