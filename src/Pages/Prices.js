import { Col, Row } from "react-bootstrap";

import { FaCheck } from "react-icons/fa";

import '../Components/Prices/Prices.css';

function Prices() {
    return (

        <div>
            {/* <div className="pt-4 p-4" style={{backgroundColor:'#E5E6E1'}}>
                <h1> 
                   prices
                </h1>
            </div> */}
            <div className="container">

                <div className="main">
                    <div className="pt-5">
                        <h2>Let me suggest the plan that's right for <br /> your business</h2>
                    </div>
                    <div className="slider ">
                        <Row className="pt-5 g-3">
                            <Col className=" col-12 col-md-6 col-xl-3" style={{ border: '1px  black', borderRadius: '20px' }}>
                                <div className="item" >
                                    <div>
                                        <h3>Free consultation</h3>
                                    </div>
                                    <div>
                                        <span>$0</span>
                                    </div>
                                    <div>
                                        <p>Pellentesque et tellus feug</p>
                                    </div>
                                    <div className="">
                                        <li className=""> <FaCheck />Donec quis vehicula diam</li>
                                        <li><FaCheck />Ut viverra ligula non</li>
                                        <li><FaCheck />Suscipit commodo orci</li>
                                        <li><FaCheck />Curabitur orci magna</li>
                                    </div>
                                    <div className="btn pt-5">
                                        <button className="btn btn-dark">Buy Now</button>

                                    </div>
                                </div>
                            </Col>

                            <Col className="  col-12 col-md-6 col-xl-3" style={{ border: '1px  black', borderRadius: '20px' }}>
                            <div className="item" >
                                <div>
                                    <h3>Basic</h3>
                                </div>
                                <div>
                                    <span>$5/month</span>
                                </div>
                                <div>
                                    <p>Penatibus vulputate in sagittis at</p>
                                </div>
                                <div>

                                    <li><FaCheck />Sed iaculis turpis sed</li>
                                    <li><FaCheck />Accumsan pretium</li>
                                    
                                    <li><FaCheck />Pellentesque ornare erat</li>
                                </div>
                                <div className="btn pt-5">
                                    <button className="btn btn-dark">Buy Now</button>

                                </div>
                                </div>
                            </Col>

                            <Col className=" col-12 col-md-6 col-xl-3" style={{ border: '1px  black',  borderRadius: '20px' }}>
                            <div className="item" >
                                <div>
                                    <h3>Standard</h3>
                                </div>
                                <div>
                                    <span>$20/month</span>
                                </div>
                                <div>
                                    <p>Etiam nibh risus nunc ridiculus</p>
                                </div>
                                <div>

                                    <li><FaCheck />Condimentum nunc lectus</li>
                                    <li><FaCheck />Interdum  dictum</li>
                                    <li><FaCheck />Convallis tortor nibh ornare</li>
                                    <li><FaCheck />Curabitur orci magna</li>
                                </div>
                                <div className="btn pt-5">
                                    <button className="btn btn-dark">Buy Now</button>

                                </div>
                                </div>
                            </Col>

                            <Col className=" col-12 col-md-6 col-xl-3" style={{ border: '1px  black',  borderRadius: '20px' }}>
                            <div className="item" >
                                <div>
                                    <h3>Premium</h3>
                                </div>
                                <div>
                                    <span>$50/month</span>
                                </div>
                                <div>
                                    <p>Porta nunc facilisi cras quisque </p>
                                </div>
                                <div>

                                    <li><FaCheck />Proin iaculis diam et</li>
                                    <li><FaCheck />Placerat lacinia odio nisl</li>
                                    <li><FaCheck />Congue tellus sed</li>
                                    <li><FaCheck />Placerat nunc neque id urna</li>
                                </div>
                                <div className="btn pt-5">
                                    <button className="btn btn-dark">Buy Now</button>

                                </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Prices;