import React, { Component } from 'react';
import { Carousel, CarouselItem,CarouselControl,CarouselIndicators,CarouselCaption} from 'reactstrap';

const items = [
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

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
        <div>
         <style>
          {
            `.custom-tag {
                max-width: 100%;
                height: 300px;
                background: black;
              }`
          }
        </style>
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
      </div>
    );
  }
}


export default Example;

/*import React from "react";
import { Carousel, CarouselItem, Container } from "reactstrap";

function Slider({dramas}){
    const slides=dramas.map((drama,index)=>(
        <CarouselItem key={index}>
            <img src={drama.image} alt="Slider" width={800} height={300}className="d-block"/>
        </CarouselItem>
    ))
    return(
        <Container>
            <Carousel>{slides}</Carousel>
        </Container>
    )
}
export default Slider*/