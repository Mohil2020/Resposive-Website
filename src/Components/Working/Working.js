import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import radius from './image/radius.jpg';


function Working() {
    return(
        <div className='container pt-5 working'>
        <Row >
          <Col sm={12} lg={6} md={6} className='p-5'>
            <div >
              <h2 className='display-5'>Working together for your better life!</h2>
            </div>
            <div>
              <p className=''>At Lead Planner, I strive to help you achieve ambitious goals and reach new
                heights just by focusing on what’s important for you.</p>
            </div>
          </Col>
          <Col >
            <div>
              <p>An experienced business coach can easily help you get more from
                your business by setting clear goals and planning your actions on the way to success.</p>
            </div>
            <div>
              <p>As a professional and highly experienced business coach, I will be glad to guide you towards new goals for both you and your team. By ensuring the geometric
                growth of your business, you can push your company to the limit in order to get what you want.</p>
            </div>
            <Row className='pt-4'>
              <Col className='w-30 ' xs={6} md={4}>
                <img src={radius} className='rounded-circle'></img>
              </Col>
              <Col>
                <div>
                  <h3 className=''>John Adams</h3>
                </div>
                <div>
                  <p>Business coach, founder of Lead Planner</p>
                </div>
              </Col>
            </Row>
            <div className='free-btn py-5'>
              <button className='p-2 btn btn-dark' >More About Me</button>
            </div>
          </Col>
        </Row>
      </div>
    )
    
}
export default Working;