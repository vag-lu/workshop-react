import React from 'react'

class Lista extends React.Component {

    state = {
        linguagens: []
    }

    componentDidMount() {
        fetch('https://alefesouza.dev/api/languages.php')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    linguagens: res
                })
            })
    }

    render() {
        return <div>
            <ul>
                {this.state.linguagens.map(item => (
                    <li key={item.id}>
                        <p><b>Nome:</b> {item.name}</p>
                        <p><b>Criador:</b> {item.creator}</p>
                        <p><b>Ano de criação:</b> {item.year}</p>
                    </li>
                ))}
            </ul>
        </div>
    }
}

export default Lista