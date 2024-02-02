import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import 'bootstrap/dist/css/bootstrap.min.css';



import { FaRegMessage } from "react-icons/fa6";
import { FiMonitor, FiCpu, FiSlack, FiYoutube, FiInstagram, FiFacebook, FiTwitter, FiLinkedin, FiMessageSquare } from "react-icons/fi";



import {Link} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import one from './image/logo.svg';


function Menubar() {

    return(
       
        <div className=''>
      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container fluid className=''>
          <Navbar.Brand href="#">
            <div>
              <img src={one}></img>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className=' '>
            <Nav
              className="ms-auto my-2 my-lg-0 "
              // style={{ maxHeight: '100px' }}
              navbarScroll>
               <Nav.Link href="#action1 "as={Link} to='/' >  Home  </Nav.Link>
              <Nav.Link href="#action1" as={Link} to='/about'>About Me</Nav.Link>
              <Nav.Link href="#action2" as={Link} to='/coaching'>Coaching</Nav.Link>
              <Nav.Link href="#action2" as={Link} to='/clientstory'>Client Stories</Nav.Link>
              <Nav.Link href="#action2" as={Link} to='/allprices'>Prices</Nav.Link>
              <Nav.Link href="#action2">Blog</Nav.Link>
              <Nav.Link href="#action2">Pages</Nav.Link>
             

            </Nav>
            <Form className="d-flex">
              <div className='btn d-xl-block d-none '>
                <button >Contact Me <a><FaRegMessage /></a></button>
              </div>

            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    );

}



export default Menubar;