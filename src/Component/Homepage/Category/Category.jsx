import "./Category.css"
import { Container,Row,Col,Card, } from "react-bootstrap";
import category from "../../../json.api/category.json"


        const Column = ({data}) =>{
                const design = (
                        <>
                        <Col md className="mt-5 mt-md-0">
                        <Card>
                                <Card.Body className="text-center">
                                        <div className="icon-box">
                                        <i className={data.icon}></i>
                                        </div>
                                        <Card.Title>{data.title}</Card.Title>
                                        <Card.Text>
                                       {
                                        data.subTitle
                                       }
                                        </Card.Text>
                                </Card.Body>
                        </Card>
                        </Col>
                        </>
                );
                return design;
        }

        const Category = () =>{
        const design = (
                <>
                       <Container className="category-box">
                        <Row>
                                {
                                        category.map((data,index)=>{
                                            return< Column data={data} key={index} />
                                            
                                        })
                                }
                        </Row>
                       </Container>
                </>
        );
        return design;
        
};
export default Category