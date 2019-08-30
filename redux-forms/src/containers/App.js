import React, { Component } from 'react'
import { connect } from 'react-redux'
import InitForm from '../components/InitForm';
import {sendServer} from './../actions'



//container
export class App extends Component {

  onClick = (e, data) => {
    e.preventDefault()
    console.log('redux form', data)
    this.props.createName(data)
  }

  onChangeName = ({target}) => {

    console.log('change')

  }
  render() {

    return (
      <div className="col">
          <div className="card">
            <div className="card-header">
              Redux Form
            </div>
            <div className="card-body">
              <div className="card-title">
                My form
              </div>
              <InitForm onClick={this.onClick}
               onChangeName={this.onChangeName}/>
            </div>
            <div className="card-footer">
            <p>Card Footer</p>
            </div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => {

  return {
    createName: (data) => dispatch(sendServer(data))
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

