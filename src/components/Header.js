import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
    const [user, loading] = useAuthState(auth);
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" className="shadow-sm">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/todo">
                            To-Do
                        </Nav.Link>
                    </Nav>
                    <Nav className="me-auto">
                        {user ? (
                            <button onClick={() => signOut(auth)} className="btn btn-outline-dark">Logout</button>
                        ) : (
                            <Nav.Link as={Link} to="/login">
                                Login
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
