  import React from "react"; 
  import { Container, Row ,Col} from "reactstrap";
  import Dramas from "./Dramas";
  import Footer from "./Footer";
  import Navbar from "./Navbar";
  import Slider from "./Slider";
  import Menu from "./Menu";
  
  function App() {
    const items=[
      {
      src: 'https://ww1.dramacool9.ac/wp-content/uploads/2018/12/The-Moon-That-Embraces-The-Sun-220x320.png',
      altText: 'The Moon That Emraces The Sun',
      caption: 'The Moon That Emraces The Sun'
      },
      {
      src: 'https://ww1.dramacool9.ac/wp-content/uploads/2023/04/Bo-Ra-Deborah-2023-220x320.png',
      altText: 'Bo Ra! Deborah',
      caption: 'Bo Ra! Deborah'
      },
      {
      src: 'https://ww1.dramacool9.ac/wp-content/uploads/2023/01/can-we-be-strangers-1672333082-220x320.png',
      altText: 'Strangers Again',
      caption: 'Strangers Again'
      }
    ];
    const links=[
      {title:"Home",url:"/"},
      {title:"Dramas",url:"/dramas"},
      {title:"Films",url:"/films"}
    ]
    const dramas=[
      {image:"https://ww1.dramacool9.ac/wp-content/uploads/2018/12/The-Moon-That-Embraces-The-Sun-220x320.png", title:"The Moon that Embraces The Sun",category:"Historical",context:"It tells of a poignant love story between a fictional king of the Joseon Dynasty and a female shaman and the conflicts and conspiracy of vying political powers. The plot also echoes Jane Austen's novel Persuasion, even including an eight-year separation of the young lovers."},
      {image:"https://ww1.dramacool9.ac/wp-content/uploads/2023/04/Bo-Ra-Deborah-2023-220x320.png", title:"Bo Ra!Deborah",category:"Rom-Com",context:"The series revolves around Yeon Bo Ra, a well-known love coach and a successful author of romance novels, and Lee Soo Hyuk, a charismatic man who struggles with matters of the heart. Soo Hyuk, a publishing planner, is hard to please and has a negative view of Bo Ra at first. But their lives unexpectedly intertwine, and he finds himself more and more attracted to her.In the meantime, Han Sang Jin, Soo Hyuk’s business partner and friend, leads the Jinri book publishing company."},
      {image:"https://ww1.dramacool9.ac/wp-content/uploads/2023/01/can-we-be-strangers-1672333082-220x320.png", title:"Strangers Again",category:"Rom-Com",context:"It follows an ex-married couple who are both lawyers that specialize in divorce. They find themselves working together as colleagues dealing with cases related to divorce and relationships."}
    ]
  
    return (
      <div>
        <Navbar links={links}/>
  
        <Container>
        <Slider items={items}/>
          <Row>
  
            <Col xs="4"><Menu/></Col>
            <Col xs="8"><Dramas dramas={dramas}/></Col>
            
          </Row> 
        
        </Container>
  
        <Footer/>
      </div>
    );
  }
  
  export default App;
  