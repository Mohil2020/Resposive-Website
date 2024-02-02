import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import banner2 from './image/banner2.jpg';

function Helping() {
    return(
        <div className='container pt-5 pb-5 helping'>
        <Row>
          <Col md={6} className='d-block d-sm-none '>
            <div>
              <img src={banner2} width={'100%'} />
            </div>
          </Col>
          <Col md={6} >
            <div>
              <h2>Helping millions of owners create a business that works.</h2>
            </div>
            <div>
              <p className='pt-4'>My name is John Adams and I am a business coach and trainer. I work with you
                to increase your awareness and choices, so you can set meaningful goals
                and get the results you truly want. I will challenge you to learn and think differently.</p>
            </div>
            <div className='d-flex'>
              <div className='help1'>
                <div className=''>
                  <h2 className='display-3 '>82%</h2>
                </div>
                <div className='help-con'>
                  <p>Percentage of regular and returning customers</p>
                </div>
              </div>

              <div className='help2'>
                <div className=''>
                  <div className=''>
                    <h2 className='display-3 '>100%</h2>
                  </div>
                  <div className='help-con'>
                    <p>Positive reviews and testimonials submitted by my clients</p>
                  </div>
                </div>
              </div>

            </div>
            <div className='pt-5 about-btn '>
              <button className='p-2 bg-dark text-white'>More About Me</button>
            </div>
          </Col>
          <Col md={6} className='d-none d-sm-block '>
            <div>
              <img src={banner2} width={'100%'} />
            </div>
          </Col>
        </Row>
      </div>
    )
    
}

export default Helping;