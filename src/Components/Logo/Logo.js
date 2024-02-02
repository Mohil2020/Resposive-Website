import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import icon1 from './image/icon1.png';
import icon2 from './image/icon2.png';
import icon3 from './image/icon3.png';
import icon4 from './image/icon4.png';
import icon5 from './image/icon5.png';
import icon6 from './image/icon6.png';

function Logo() {

    return(
        <div className='container pt-5'>
        <div className='helper'>
          <div>
            <h2 className='text-center display-6 font-weight-bold' >I help millions of owners create a <br /> business that works flawlessly</h2>
          </div>
          <div className='icons pt-5 allicon '>
            <Row className='opacity-50 '>
              <Col  className='d-flex justify-content-center' xl={2} md={4} lg={4}><img src={icon1}></img></Col>
              <Col className='d-flex justify-content-center'xl={2} md={4} lg={4}><img src={icon2}></img></Col>
              <Col className='d-flex justify-content-center'xl={2} md={4} lg={4}><img src={icon3}></img></Col>
              <Col className='d-flex justify-content-center'xl={2} md={4} lg={4}><img src={icon4}></img></Col>
              <Col className='d-flex justify-content-center'xl={2} md={4} lg={4}><img src={icon5}></img></Col>
              <Col className='d-flex justify-content-center'xl={2} md={4} lg={4}><img src={icon6}></img></Col>
            </Row>
          </div>
        </div>
      </div>
    )
    
}

export default Logo;