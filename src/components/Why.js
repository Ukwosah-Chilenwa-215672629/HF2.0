import pat from '../assets/img/Pat.jpg'
import "./why.css"
import { Col, Container, Row } from "react-bootstrap";
const Why = () => {
    return (
            // <div>
            //     <img src={pat}></img>
            // </div>
             <section className="tuh"  >
            <Container >
                <Row className="align-items-center">
                     <Col xs={12} md={8} xl ={9}>
                     <img src={pat} alt="pat begging for gas" />
                    </Col>
                    
                     <Col xs={12} md={4} xl ={3}>
                     <h2> 770,000 Ontarrio drivers Struggle
                      Daily to get gas </h2>
                     <h3>      </h3>
                     <h4>      </h4>
                     <h1> Meet Pat.</h1>
                    </Col> 
                 </Row>                  
            </Container>

            {/* <div className='pat'>
                <img src={pat} alt="pat begging for gas" />
            </div>
            <div className='pat'>
                <h2> 770,000 Ontarrio drivers Struggle</h2>
                        <h3> Daily to get gas </h3>
                        <h3>      </h3>
                         <h1> Meet Pat.</h1>
            </div> */}
        </section>
    )
}
export default Why