import React, { Component } from 'react'
import * as b from 'reactstrap'
import {Link} from 'react-router-dom'
import Counter from './Counter';

export default class HomeComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {data: []}
    }

    componentDidMount() {
        this.setState({
            data: JSON.parse(localStorage.getItem('data'))
        })

    }
    render() {
        const {data} = this.state
        return (
            <div>

                <b.Col>
                    <Link to="/add">New</Link>
                </b.Col>
                <b.Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Check</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>
                                    {item.check === true 
                                    ? <b.Badge>True</b.Badge> : <b.Badge>false</b.Badge>}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </b.Table>
                <Counter data={data}/>
                
            </div>
        )
    }
}
