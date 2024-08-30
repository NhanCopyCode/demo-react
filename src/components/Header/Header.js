import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <NavLink to="/" className="navbar-brand">
                    Hoi Thanh Nhan
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className="nav-link">
                            Home
                        </NavLink>
                        <NavLink to="/users" className="nav-link">
                            User
                        </NavLink>
                        <NavLink to="/admins" className="nav-link">
                            Admin
                        </NavLink>
                    </Nav>
                    <Nav>
                        <button className="header__login-btn">Login</button>
                        <button className="header__signup-btn">SignUp</button>
                        {/* <NavDropdown title="Setting" id="basic-nav-dropdown">
                            <NavDropdown.Item>Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Login</NavDropdown.Item>
                            <NavDropdown.Item>Logout</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
