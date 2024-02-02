import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Steps() {
    return(
        <div className='container pt-5'>
        <div className='business'>
          <div>
            <Row>
              <Col xxl={8} lg={8} md={8}>
                <div>
                  <h2 className='display-6' >I am here for you and your business — every step of the way.</h2>
                </div>
                <div>
                  <p className='pt-5'>Here’s how I can help you improve various aspects of your business through coaching.</p>
                </div>
              </Col>
              <Col lg={4} md={4} className='justify-content-sm-center d-flex  justify-content-start' >
                <div className='free-btn py-5'>
                  <button className='p-2'>Free Consulting</button>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className='btn-con pt-5 pb-5'>
          <div className='row1 p-3'>
            <Row >
              <Col sm={12} xl={4} l={4} md={4} >
                <div>
                  <h5 className='pb-3'>Marketing</h5>
                </div>
                <div>
                  <p>Understand how marketing concepts work and approach your marketing tasks efficiently.</p>
                </div>
              </Col >
              <Col sm={12} xl={4} l={4} md={4} >
                <div>
                  <h5 className='pb-3'>Management</h5>
                </div>
                <div>
                  <p>earn how to deal with managerial tasks to achieve the set goals for your business.</p>
                </div></Col>
              <Col xl={4} sm={12} l={4} md={4} >
                <div>
                  <h5 className='pb-3'>Leadership</h5>
                </div>
                <div>
                  <p>Establish powerful leadership in your company’s team through coaching.</p>
                </div>
              </Col>
            </Row>
          </div>

          <div className='row2 p-3 pt-4'>
            <Row >
              <Col xl={4} l={4} md={4} >
                <div>
                  <h5 className='pb-3'>Finance</h5>
                </div>
                <div>
                  <p>Handle your financial challenges easily with professional coaching by Lead Planner.</p>
                </div>
              </Col>
              <Col sm={12} xl={4} l={4} md={4} >
                <div>
                  <h5 className='pb-3'>Lead generation</h5>
                </div>
                <div>
                  <p>Increase the consumer interest and discover how to successfully generate leads</p>
                </div></Col>
              <Col sm={12} xl={4} l={4} md={4} >
                <div>
                  <h5 className='pb-3'>Lead conversion</h5>
                </div>
                <div>
                  <p>Turn a potential customer into a real and regular one in just a few simple steps.</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    )
    
}

export default Steps;