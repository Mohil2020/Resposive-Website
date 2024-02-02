import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import footer2 from './image/footer2.jpg';
import footer1 from './image/footer1.jpg';
import footer3 from './image/footer3.jpg';import Card from 'react-bootstrap/Card';
import OwlCarousel from 'react-owl-carousel';



function Client() {
    const option = {
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 3,
          }
        }
      }
    return(
        <div>
        <div className='container pt-5'>
          <div >
            <Row className='pt-5'>
              <Col>
                <div>
                  <h2 className='display-5'>Kind words from my happy clients</h2>
                </div>
                <div className='text-box'>
                  <p className='pt-4' >My clients appreciate the provided guidance and assistance I offer along the way to help them become stronger leaders
                    and unlock the full potential of their businesses. Read their latest testimonials below.</p>
                </div>
              </Col>
  
            </Row>
          </div>
  
  
        </div>
  
        <div className='container pt-5 sliderop'>
          <OwlCarousel className='owl-theme' loop margin={10} nav {...option}>
            <div class='item'>
              <h4>
                <Card style={{ width: '18rem' }}>
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                  <Card.Body>
                    <Card.Title className='p-4 texts'> I have worked with John for almost a year, and during this
                      time I’ve learned how to be realistic about my as we know as we know work as.</Card.Title>
                    <Card.Text>
                      <Row>
                        <Col >
                          <div className='photo'>
                            <img src={footer1}></img>
                          </div>
                        </Col>
                        <Col>
                          <div className='icon-ti'>
                            <p>Courtney Johnson</p>
                          </div>
                          <div className='icon-1 '>
                            <p>28.10.2023</p>
                          </div>
                        </Col>
                      </Row>
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </h4>
            </div>
            <div class='item'>
              <h4>
  
                <Card style={{ width: '18rem' }}>
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                  <Card.Body>
                    <Card.Title className='p-4 texts text-center' >The coaching has been really rewarding.
                      I have learned how to communicate clearly with my team and to reflect on my leadership skills.</Card.Title>
                    <Card.Text>
                      <Row>
                        <Col >
                          <div className='photo'>
                            <img src={footer2}></img>
                          </div>
                        </Col>
                        <Col>
                          <div className='icon-ti'>
                            <h4>Emli johson</h4>
                          </div>
                          <div className='icon-1'>
                            <p>28.10.2023</p>
                          </div>
                        </Col>
                      </Row>
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </h4>
            </div>
            <div class='item'>
              <h4>
                <Card style={{ width: '18rem' }}>
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                  <Card.Body>
                    <Card.Title className='p-4 texts'>The coaching has been really rewarding.
                      I have learned how to communicate clearly with my team and to reflect on my leadership skills.</Card.Title>
                    <Card.Text>
                      <Row>
                        <Col>
                          <div className='photo'>
                            <img src={footer3}></img>
                          </div>
                        </Col>
                        <Col>
                          <div className='icon-ti'>
                            <h4>johnson amroy</h4>
                          </div>
                          <div className='icon-1'>
                            <p>28.10.2023</p>
                          </div>
                        </Col>
                      </Row>
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </h4>
            </div>
  
          </OwlCarousel>;
        </div>
        </div>
    )
    
}
export default Client;