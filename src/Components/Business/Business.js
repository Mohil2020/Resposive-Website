import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaRegMessage } from "react-icons/fa6";
import { FiMonitor, FiCpu, FiSlack, FiYoutube, FiInstagram, FiFacebook, FiTwitter, FiLinkedin, FiMessageSquare } from "react-icons/fi";


function Business() {
    return(
        <div className='container mt-3 pt-5'>
        <div className='bus-h2 text-center'>
          <h2>I help people tackle their business issues</h2>
        </div>
        <div className='bus-p text-center pt-5'>
          <p>It’s easy to get the results you want with the top-quality advice.</p>
        </div>
        <div>
          <Row className='pt-5'>
            <Col xs={12} md={6} lg={4}>
              <div className='box'>
                <div className='box-icon'>
                  <p className='display-2'><FiMonitor /></p>
                </div>
                <div className='box-a pt-3' >
                  <p >Career mentoring</p>
                </div>
                <div className='box-p pt-3'>
                  <p className=''>Accelerate your career and achieve your goals through mentoring at Lead Planner.</p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4} className='mb-3 mb-lg-0'>
              <div className='box2 p-3'>
                <div className='box-icon'>
                  <p className='display-2'><FiCpu /></p>
                </div>
                <div className='box-a pt-3'>
                  <p >Work & life balance</p>
                </div>
                <div className='box-p pt-3'>
                  <p className=''>Gain more balance between work and life and make a positive change today.</p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4} className='m-md-auto last-box box3 mt-3'>
              <div className='p-3 '>
                <div className='box-icon'>
                  <p className='display-2'><FiSlack /></p>
                </div>
                <div className='box-a pt-3'>
                  <p >Important decisions</p>
                </div>
                <div className='box-p'>
                  <p className='pt-3'>Decide what to do next with your work to achieve success with your business.</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
    
}

export default Business;