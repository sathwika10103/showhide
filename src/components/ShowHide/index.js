// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  first = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  last = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div>
        <h1>Show/Hide</h1>
        <button type="button" onClick={this.first}>
          Show/Hide Firstname
        </button>
        {firstName && <p>Joe</p>}
        <button type="button" onClick={this.last}>
          Show/Hide Lastname
        </button>
        {lastName && <p>Jonas</p>}
      </div>
    )
  }
}
export default ShowHide
