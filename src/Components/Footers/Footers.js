import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaRegMessage } from "react-icons/fa6";
import { FiMonitor, FiCpu, FiSlack, FiYoutube, FiInstagram, FiFacebook, FiTwitter, FiLinkedin, FiMessageSquare } from "react-icons/fi";

function Footers() {
    return(
        <div className=' pt-5'>
        <div className='footer bg-dark text-white p-5 lastseen'>
          <Row>
            <Col md={6} lg={3}>
              <div className=''>
                <p className=' pb-0 pt-4'>3828 Fincham Road <br />Los Angeles, CA <br />California 90017</p>
              </div>
              <div className='footerp pt-5'>
                <p>P: +1 (256) 1087 000</p>
                <a href="" className='text-white'>mail@demolink.org</a>
              </div>
              <div >
                <ul className='d-flex list pt-5'>
                  <li className=''><FiYoutube /></li>
                  <li>< FiInstagram /></li>
                  <li><FiFacebook /></li>
                  <li><FiTwitter /></li>
                  <li><FiLinkedin /></li>
                </ul>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className='footer2 pt-4'>
                <div>
                  <ul>
                    <li>About me</li>
                    <li>Coaching</li>
                    <li>Client Stories</li>
                    <li>Prices</li>
                    <li>Blog</li>
                  </ul>
                </div>
                <div className='footerbtn pt-5'>
                  <button className='bg-dark text-white'>Contact Me <FiMessageSquare /></button>
                </div>
              </div>
            </Col>
            <Col className='lg={6}'>
              <div>
                <h3>Stay in touch! Get latest updates and offers.</h3>
              </div>
              <div class="input-group pt-5">
                <input type="search" class="form-control rounded " placeholder="Enter Your Email" />
                <button type="button " class="btn btn-light" data-mdb-ripple-init>Subscribe</button>
              </div>
              <div className='pt-5'>
                <p>By clicking the button you agree to the Privacy Policy and Terms and Conditions</p>
              </div>

            </Col>
          </Row>
          <Row>
            <Col lg={3} md={6}><div className='footer-last'>
              <p>Lead Planner © 2023. All rights reserved.</p>
            </div>
            </Col>
            <Col lg={4} md={6}>
              <div className='lastp'>
                <ul className='d-flex'>
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </div>



      </div>
    )
    
}

export default Footers;