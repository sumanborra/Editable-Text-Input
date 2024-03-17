import {Component} from 'react'

import './index.css'

class Editable extends Component {
  state = {isInput: true, inputText: ''}

  changeButton = () => {
    this.setState(prevState => ({isInput: !prevState.isInput}))
  }

  changeInput = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {isInput, inputText} = this.state
    const pageDisplay = isInput ? (
      <input
        type="text"
        value={inputText}
        className="input-element"
        onChange={this.changeInput}
      />
    ) : (
      <p className="para-text">{inputText}</p>
    )
    const buttonText = isInput ? 'Save' : 'Edit'
    return (
      <div className="background-container">
        <div className="card-container">
          <h1 className="heading-editable-text">Editable Text Input</h1>
          <div className="text-container">
            {pageDisplay}
            <button type="button" className="buttn" onClick={this.changeButton}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Editable
