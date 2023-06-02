import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default function Packages(props) {

    return (
        <Container className="packages">
            <Container>
                <h1>Our Packages</h1>
            </Container>
            <Card className="packages">
                <Card.Body className="packagesHeader">
                    <Card.Title style={{color: "black"}}>
                        Take a look at some of our packages!
                    </Card.Title>
                </Card.Body>
                <Row xs={1} md={2} className="g-4" style={{padding: '20px'}}>
                    {props.packages.map((eachPackage, i) => (
                        <Col key={i}>
                            <Card border="info">
                                <Card.Title style={{fontSize: "16px"}}>{eachPackage}</Card.Title>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Card>
        </Container>
    )
}