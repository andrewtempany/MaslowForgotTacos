import React from 'react'
import { Redirect } from 'react-router-dom'

// const load = () => {
class Load extends React.Component {

  state = {
    loadComplete: false

  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loadComplete: true
      })
    }, 2000);
  }

  render() {
    return (
      <div id="load">
        <h1>Preppin' your tacos fam!</h1>
        <img src="images/tacoDance.gif" alt="A dancing taco" />
        {this.state.loadComplete && <Redirect to="/recipe" />}
      </div>
    )
  }
}

export default Load