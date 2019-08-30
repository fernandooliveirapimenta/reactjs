import React, { Component } from 'react'

export default class Panel extends Component {
    render() {
    const {header, body} = this.props
        return (
            <div className="panel">
                <div className="panel-head" 
                style={{width: '100%',
                height: '100px',
                 background: 'red'}}>
                    {header}
                </div>
                <div className="panel-body">
                    {body}
                </div>
            </div>
        )
    }
}
