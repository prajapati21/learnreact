import {
        Navbar,
        Container,
        Nav,
        Image
 } from "react-bootstrap";
import { Link } from "react-router-dom";
import menu from "../../json.api/menu.json";
import brand from "../../json.api/brand.json";

const Menu = ({item}) =>{
        const design = (
                <Link data-bs-dismiss="Navbar"to={item.link} className="nav-link">{item.label}</Link>
          );
          return design ;
}

const Header = () =>{
        console.log(menu);
        const design = (
                <>
                 <Navbar expand="lg" className="bg-body-tertiary">
                 <Container>
                        <Image src={brand.logo} width="40px"/>
                  <Navbar.Brand href="#home" className="mx-3 fw-bold">{brand.name}</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end w-100">
                        {
                                menu.map((item,index)=>{
                                    return <Menu item={item} />
                                })
                        }
                      
                    </Nav>
                  </Navbar.Collapse>
                </Container>
               </Navbar>
                </>
        );
        return design

}

export default Header;