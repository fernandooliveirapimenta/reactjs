import React, { Component } from 'react'

export default class Events extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clicked: 0
        }
        this.click = this.click.bind(this)
    }

    click() {
        console.log("click")
        this.setState({
            clicked: this.state.clicked + 1
        })
    }

    clickJsx() {
        console.log("clickjsx")
        this.setState({
            clicked: this.state.clicked + 1
        })
    }
    clickLambda = () => {
        console.log("clicklambda")
        this.setState({
            clicked: this.state.clicked + 1
        })
    }
    render() {
        const {clicked} = this.state
        return (
            <div>
                {/* <button onClick={this.click.bind(this)} type="button">Click me</button> */}
                <button onClick={this.click} type="button">Click me</button>
                <button onClick={this.clickJsx.bind(this)} type="button">Click me</button>
                <button onClick={this.clickLambda} type="button">Click me</button>
                <p>{clicked}</p>
            </div>
        )
    }
}
