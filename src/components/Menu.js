import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Semesters from "./Semesters";
import Courses from "./Courses";
import Classes from "./Classes";
import Lecturers from "./Lecturers";
import Students from "./Students";
import Enrolments from "./Enrolments";

function Menu(props) {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Gradebook App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="/semesters">Semesters</Nav.Link>
                        <Nav.Link href="/courses">Courses</Nav.Link>
                        <Nav.Link href="/classes">Classes</Nav.Link>
                        <Nav.Link href="/lecturers">Lecturers</Nav.Link>
                        <Nav.Link href="/students">Students</Nav.Link>
                        {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
                        {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.2">*/}
                        {/*        Another action*/}
                        {/*    </NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Divider/>*/}
                        {/*    <NavDropdown.Item href="#action/3.4">*/}
                        {/*        Separated link*/}
                        {/*    </NavDropdown.Item>*/}
                        {/*</NavDropdown>*/}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;