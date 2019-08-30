import React, { Component } from 'react'

import Panel from './share/Panel'

export default class Props extends Component {

    constructor(props) {
        super(props)
        const {attr, attr2} = this.props
        console.log(attr, attr2)
    }

    render() {
        const {attr, attr2} = this.props
        return (
            <div>
                {attr === 'p'
                 ? <p>Props</p> : 
                 <h1>Props</h1>}
                 <Panel header="bonito" body="corpo"/>
            </div>
        )
    }
}
