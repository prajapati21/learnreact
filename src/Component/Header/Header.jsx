import "../Header/Header.css";
import {
        Navbar,
        Container,
        Nav,
        Image,
        NavDropdown
 } from "react-bootstrap";
import { Link } from "react-router-dom";
import menu from "../../json.api/menu.json";
import brand from "../../json.api/brand.json";

const Menu = ({item}) =>{
        const design = (
                <Link data-bs-dismiss="Navbar"
                style = {{color : item.color}}
                to={item.link} 
                className={item.isButton ? "btn btn-primary" : "nav-link "}
                >{item.label}</Link>
          );
          return design ;
}

const DropdownMenu = ({item}) =>{
        const design = (

                <>
                 <NavDropdown  title={item.label} id="basic-nav-dropdown">
                  {
                       item.dropdownMenu.map((data,index)=>{
                         return <Menu item={data } />
                        }) 
                  }
                </NavDropdown>
                </>

        )
        return design;
}

const Header = () =>{
        console.log(menu);
        const design = (
                <>
                 <Navbar expand="lg" className="fixed-top">
                 <Container>
                        <Image src={brand.logo} width="40px"/>
                  <Navbar.Brand href="#home" className="mx-3 text-white brand-name fw-bold">{brand.name}</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end w-100">
                        {

                                menu.map((item,index)=>{
                                        if(item.isDropdown)
                                        {
                                                return <DropdownMenu item={item} />
                                        }
                                        item["color"] = "white"
                                    return <Menu item={item} key={index}/>
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