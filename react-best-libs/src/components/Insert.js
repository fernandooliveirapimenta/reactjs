import React, { Component } from 'react'
import * as b from 'reactstrap'
import {Link} from 'react-router-dom'

export default class Insert extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            check: false,
            data: []
        }
    }

    componentDidMount() {
        this.setState({
            data: JSON.parse(localStorage.getItem('data'))
        })
    }

    onChange = ({target}) => {
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        this.setState({
                [name]: value
        })

    }

    click = async () => {
        const {data, name, check} = this.state
        const arr = data;
        arr.push({name, check})

       await this.setState( {
            data: arr
        });

        localStorage.setItem('data', JSON.stringify(data))

    }

    render() {
        const {check} = this.state
        console.log(this.state)
        return (
            <div>
                <b.Form>
                    <b.FormGroup>
                        <b.Label for="name">Name:</b.Label>
                        <b.Input type="text"
                         name="name" id="name"
                         placeholder="Nome" onChange={this.onChange}></b.Input>
                    </b.FormGroup>
                    <b.FormGroup check>
                        <b.Label for="name" check>
                        <b.Input type="checkbox"
                         name="check" checked={check} onChange={this.onChange} />
                         Done?
                        </b.Label>
                    </b.FormGroup>
                    <b.FormGroup>
                        <b.Button color="primary" onClick={this.click}>
                            Add
                        </b.Button>
                        <Link to="/" className="btn btn-secondary ml-4 mr-4">Back</Link>
                    </b.FormGroup>
                </b.Form>
            </div>
        )
    }
}
