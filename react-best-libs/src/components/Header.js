import React, { Component } from 'react'
import {Navbar,
NavItem,
NavLink,
Collapse,
NavbarToggler,
NavbarBrand,
Nav} from 'reactstrap'

export default class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    toggle = () => {

        this.setState({
            open: !this.state.open
        })

    }
    render() {
        const {open} = this.state
        return (
            <div>
                <Navbar color="light" >
                    <NavbarBrand>
                        Checklist
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={open} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Text</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>

                </Navbar>
            </div>
        )
    }
}
