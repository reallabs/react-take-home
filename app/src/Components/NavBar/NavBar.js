import React from 'react'
import "./NavBar.css"
import { Navbar, Nav, Button } from "react-bootstrap"


const NavBar = props => {

    return (
        <Navbar fixed="top" className="Navbar" bg="light" variant="light" expand>
            <Navbar.Brand className="brand" style={{textAlign: "center"}}><h1>Plugs</h1></Navbar.Brand>
        </Navbar>
    )
}

export default NavBar
