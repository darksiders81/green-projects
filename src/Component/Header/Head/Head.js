import { Container, Row, Col } from "react-bootstrap";
import BtnJoin from "../../BtnJoin/BtnJoin";
import "./Head.css"

function Head(props) {
    return (
        <>
            <Container style={{ paddingTop: 50 }}>
                <Row className="mt-5 justify-content-center align-items-center">
                    <Col lg={props.ColumnCon} xs={12} className={props.alignText} >
                        <Row>
                            <Col lg={props.Column} xs={12}>
                                <h1
                                    className="titleClass"
                                    style={{ fontSize: '55px', wordSpacing: 10, fontWeight: 700, lineHeight: '65px' }}>
                                    Excellent IT <span className="greenTitle">Solutions</span> For Your Success
                                </h1>
                            </Col>
                            <Col lg={props.Column} xs={12}>
                                <p className="textBody"
                                    style={{ lineHeight: 2 }}>
                                    At Any Rate, Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
                                    Eaque Amet, Quod Doloribus The Framework Of The Essence Represents A
                                    Bond Between The Flexible Production Planning And The Distribution Of Repetitive Aspect
                                </p>




                            </Col>
                            <div className="btnContainer">
                                <BtnJoin />
                                {
                                    !props.isImage && (
                                        <BtnJoin name="learn More" bgcolor="gray" />
                                    )
                                }
                            </div>
                        </Row>

                    </Col>
                    {
                        props.isImage && (
                            <Col lg={7} xs={12} >
                                <img className="img-fluid " src="https://erramix-themes.com/techidaa/images/hero/bodigmas_IT_solutions_company_illustrationvectorflat_designmini_942ad818-e3f4-47af-a5e8-78e030aff9c9-removebg.png" alt="" />
                            </Col>
                        )
                    }
                </Row>
            </Container>

        </>
    );
}

export default Head;


Head.defaultProp = {
    isImage: true,
    alignText: "text-start",
    Column: 5
}

