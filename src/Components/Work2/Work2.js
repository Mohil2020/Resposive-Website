import { Col, Row } from "react-bootstrap"
// import { Col } from "react-bootstrap"

import './Work2.css'

import { FiMonitor, FiCpu, FiSlack, FiYoutube, FiInstagram, FiFacebook, FiTwitter, FiLinkedin, FiMessageSquare } from "react-icons/fi";

function Work2() {
    return (
        <>
            <div className="container">
                <div>
                    <Row>
                        <Col md={6}>
                            <div className="">
                                <div>
                                    <h2>Working together <br/>for your better life!</h2>
                                </div>
                                <div className="pt-5">
                                    <p>Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit.<br/> Integer congue nisl neque, sagittis pretium <br/>justo egestas sed.</p>
                                </div>
                                <div className="pt-5">
                                    <h5>Diam sit in eget ac nulla amet sit. Aliquam <br/> ipsum consectetur vel senectus
                                        tincidunt <br/> quis ullamcorper diam suspendisse. Tellus <br/> volutpat
                                        consectetur aliquam.</h5>
                                </div>
                            </div>
                        </Col>
                        <Col className="pt-5 ">
                            <div className="">
                                <div className="d-flex ">
                                    <div className="icon1">
                                        <p className="pe-4"><FiMonitor /></p>
                                    </div>
                                    <div>
                                        <h5 >Career mentoring</h5>
                                        <p>Quicquam fratrum declivia gravitate. Nam coegit alto unda austro declivia liberioris liberioris effigiem</p>
                                    </div>
                                </div>

                                <div className="d-flex">
                                    <div className="icon1">
                                        <p className="pe-4"><FiCpu /></p>
                                    </div>
                                    <div>
                                        <h5 >Career mentoring</h5>
                                        <p>Pumero divino toto prima ensis. Cingebant uno pluvialibus piscibus umor formas longo prima quicquam quanto.</p>
                                    </div>
                                </div>

                                <div className="d-flex">
                                    <div className="icon1">
                                        <p className="pe-4"><FiSlack /></p>
                                    </div>
                                    <div>
                                        <h5 >Career mentoring</h5>
                                        <p>Nitidis locum auroram dissaepserat ulla dextra rapidisque spisso caesa. Locum auroram dissaepserat ulla.</p>
                                    </div>
                                </div>


                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )


}


export default Work2