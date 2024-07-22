
import { Col, CardLink, Card } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";
function CardSer(props) {
    return (
        <>

            <Col lg={4} className='g-4 ' >
                <Card border='0' className='transaction-card' >
                    <h1
                        style={{ fontSize: 90, marginLeft: 15, marginTop: 20, fontWeight: 'inherit', color: '#1FA84F' }} >
                        {props.icons}
                    </h1>
                    <Card.Body>
                        <Card.Title className="titleClass" style={{ fontSize: 28, fontWeight: 'bolder' }}>{props.title}</Card.Title>
                        <Card.Text className="textBody" style={{ fontSize: 15, lineHeight: 2, fontWeight: 600 }}>
                            {props.decs}
                        </Card.Text>
                        <CardLink style={{ textDecoration: 'none' }}>
                            <h4>learn more <FaArrowRightLong /></h4>
                        </CardLink>
                    </Card.Body>

                </Card>
            </Col>



        </>
    )
}
export default CardSer