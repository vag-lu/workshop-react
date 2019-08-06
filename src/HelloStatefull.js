import React, { Component } from 'react'

class HelloStatefull extends Component {

    state = {
        clicou: 'ainda não clicou'
    }

    componentDidMount = () => {
        console.log(this.props.nome)
    }

    componentDidUpdate = (prevProps, PrevState) => {
        console.log("New state was ", PrevState)
        console.log("New state is ", this.state)
    }

    componentWillUnmount = () => {
        console.log("Saiu da tela")
    }

    handleClick = () => {
        this.setState({ clicou: 'clicou' })
    }

    render() {
        return (
            <div>Olá {this.props.nome}
                <div>
                    Você {this.state.clicou}
                    <button onClick={this.handleClick}>Clique aqui</button>
                </div>
            </div>
        )
    }
}

export default HelloStatefull