import React from 'react'
import HelloStateless from './HelloStateless';
import HelloStatefull from './HelloStatefull';
import HelloForm from './HelloForm';

class Home extends React.Component {
    
  state = {
    exibeDados: true,
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ exibeDados: false })
    }, 3000)
  }


  render() {
    let nome = 'Teste'

    if (!this.state.exibeDados) {
      nome = "Outro Teste"
    }

    return (
      <div className="App">
        <HelloStateless
          nome='Vagner'
          sobrenome='Lucion' />

        {this.state.exibeDados ? <HelloStatefull
          nome='Wagner' /> : null}
        <HelloStatefull
          nome={nome} />
        <HelloStatefull
          nome='Ana' />

        <HelloForm />
      </div>
    )
  }
}

export default Home