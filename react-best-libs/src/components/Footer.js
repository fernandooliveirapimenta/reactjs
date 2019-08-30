import React, { Component } from 'react'
import {
Row,
Col
} from 'reactstrap'

export default class Footer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    render() {
        return (
            <Row>
                <Col className="text-center">
                    Copyright Fernando pimenta
                </Col>
            </Row>
        )
    }
}
