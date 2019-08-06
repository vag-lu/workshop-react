import React from 'react';
import './App.css';

import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './Home';
import Lista from './Lista'

class App extends React.Component {

  state = {
    exibeDados: true,
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ exibeDados: false })
    }, 3000)
  }


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1 className="title">Meu App React</h1>
        </div>

        <Link to="/">Inicio</Link> | <Link to="/lista">Lista</Link>

        <Route path='/' exact  component={Home}></Route>
        <Route path='/lista' component={Lista}></Route>
      </BrowserRouter>
    )
  }
}

export default App;
