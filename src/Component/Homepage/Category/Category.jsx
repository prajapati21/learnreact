import { Container,Row,Col,Card,Button } from "react-bootstrap";

const Category = () =>{
          
        const data = ["a", "b", "c", "d", "e"];

        const Column = () =>{
                const design = (
                        <>
                        <Col>
                        <Card>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                        </Card>
                        </Col>
                        </>
                );
                return design;
        }

        const design = (
                <>
                       <Container>
                        <Row>
                                {
                                        data.map((data,index)=>{
                                            return< Column />
                                        })
                                }
                        </Row>
                       </Container>
                </>
        );
        return design;
        
};
export default Category