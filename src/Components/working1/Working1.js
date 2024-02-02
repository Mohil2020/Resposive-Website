import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import  './/Working1.css'

function Working1() {
    return (
        <>
            <div className='all'>
            <div className="container">
                <Row className=''>
                    <Col md={6}  >
                        <div className='img-mod-2 '>
                        <img src={require(`./image/same.png`) }></img>
                        {/* <img class="img-mod-2" src="images/img-02-950x920.png" alt="" ></img> */}
                        </div>
                    </Col>
                    <Col md={6} >
                        <div className='part2'>
                            <div>
                                <h2>Working together for your better life!</h2>
                            </div>
                            <div className='pt-5'>
                                <p>Nullam eu felis congue, finibus urna vulputate, vehicula diam. In vitae
                                    massa ut odio mollis cursus. Sed iaculis cursus odio, sed porttitor quam vulputate eget.</p>
                            </div>
                            <div className='pt-4'>
                                <h5>Etiam quis justo vel leo pretium facilisis ut a neque.
                                    Vivamus sagittis tortor et sem tincidunt, vitae tincidunt
                                    turpis posuere. Suspendisse euismod neque vel lorem
                                    posuere, nec interdum aliquam. Etiam quis justo vel
                                    leo pretium</h5>
                            </div>

                            <div className='pt-5'>
                                <h6>John Adams</h6>
                            </div>
                            <div>
                                <p>Business coach, founder of Lead Planner</p>
                            </div>
                            <div className='btn pt-5'>
                                <button className='btn btn-dark '>More about me</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            </div>
        </>
    )

}

export default Working1