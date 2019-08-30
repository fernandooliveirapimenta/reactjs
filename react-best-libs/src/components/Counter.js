import React, { Component } from 'react'

export default class Counter extends Component {
    render() {
        const {data} = this.props
        const lTrue = data.filter(item => item.check === true).length
        const lFalse = data.filter(item => !item.check).length
        return (
            <div>
                <p>Total {data.length} of itens</p>    
                <p>Total {lTrue} true</p>    
                <p>Total {lFalse} false</p>    
            </div>
        )
    }
}
