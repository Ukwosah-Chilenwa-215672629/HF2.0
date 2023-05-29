import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel"; 
// import "react-multi-carousel/lib/styles…css";
import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"
import colorSharp from "../assets/img/color-sharp.png";
export const Skills = () =>{
const responsive = {
    superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 }, 
    items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items:3
    },
    tablet:{
        breakpoint: {max:1024, min: 464},
        items:2
    },
    mobile:{
        breakpoint: {max:464, min: 0},
        items:1
        }
    };
    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <col>
                       <div className="skill-bx">
                         <h1>Skills</h1>
                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised i</p>
                         <Carousel responsive={responsive} infinite={true} className="skill-slider"></Carousel>
                            <div className="item">
                                <img src={meter1} alt="image"/>
                                <h4>Web Developement</h4>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="image"/>
                                <h4>Brand identity</h4>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="image"/>
                                <h4>Logo Design</h4>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="image"/>
                                <h4>Web Scrapper</h4>
                            </div>

                        </div> 
                    </col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}/>
        </section>
    )
}