import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomeComponent from './components/HomeComponent'
import Sobre from './Sobre';
import Header from './components/Header';
import Footer from './components/Footer';
import {Container, Row, Col} from 'reactstrap';
import Insert from './components/Insert';

export default class App extends Component {
  render() {
    return (
      <main>
        <Header></Header>
        <Container>
          <Row>
            <Col>
              <Router>
                <Route path="/" exact component={HomeComponent}></Route>
                <Route path="/sobre" exact component={Sobre}></Route>
                <Route path="/add" exact component={Insert}></Route>
              </Router>
            </Col>
            
          </Row>
        </Container>
        <Footer></Footer>
      </main>

      
    )
  }
}
