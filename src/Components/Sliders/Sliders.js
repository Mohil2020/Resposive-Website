import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import slider from './image/slider.png';


function Sliders() {
    return (
        <div className='slider'>
            <Row className='nav-text'>
                <Col className='nav-img'>
                    <div className='slider_con'>
                        <div className='slidercon1 '>
                            <h1 className='display-4'>Transform your <br /> business. Take back<br /> your life.</h1>
                        </div>
                        <div className='slidercon2'>
                            <p>Get the most out of your business with my coaching services.</p>
                        </div>
                        <div className='d-flex align-items-center ms-5'>
                            <div className='button p-2 '>
                                <a className='  me-2 btn'>More about me</a>
                            </div>
                            <div className='button2 p-2'>
                                <a className='colbtn m-0'>Free Consultaion</a>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={5}>
                    <div className='slider '>
                        <img src={slider} className=''></img>
                    </div>
                </Col>
            </Row>
        </div>
    )

}
export default Sliders;