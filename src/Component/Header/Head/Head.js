import { Container, Row, Col} from "react-bootstrap";
import BtnJoin from "../../BtnJoin/BtnJoin";

function Head() {
    return (
        <>
            <Container>
                <Row className="mt-5 justify-content-center align-items-center">
                    <Col lg={5} xs={12} className="text-start" >
                        <Row>
                            <Col xs={12}>
                                <h1
                                    style={{ fontSize: '55px', wordSpacing: 10, fontWeight: 700, lineHeight: '65px' }}>
                                    Excellent IT <span className="text-green">Solutions</span> For Your Success
                                </h1>
                            </Col>
                            <Col lg={10} xs={12}>
                                <p style={{ lineHeight: 2 }}>At Any Rate, Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Eaque Amet, Quod Doloribus The Framework Of The Essence Represents A Bond Between The Flexible Production Planning And The Distribution Of Repetitive Aspect</p>
                            </Col>
                            <BtnJoin />
                        </Row>

                    </Col>
                    <Col lg={7} xs={12}>
                        <img className="img-fluid" src="https://erramix-themes.com/techidaa/images/hero/bodigmas_IT_solutions_company_illustrationvectorflat_designmini_942ad818-e3f4-47af-a5e8-78e030aff9c9-removebg.png" alt="" />
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default Head;