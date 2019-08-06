import React from 'react'

class HelloForm extends React.Component {

    state = {
        text: ''
    }

    handleClick = () => {
        alert(this.state.text)
    }
    

    handleChange = (event) => {
        this.setState({text: event.target.value})
    }

    render() {
        return <div>
            <input type="text" onChange={this.handleChange}></input>
            <div>{this.state.text}</div>
            <button onClick={this.handleClick}>Alert</button>
        </div>
    }
}

export default HelloForm