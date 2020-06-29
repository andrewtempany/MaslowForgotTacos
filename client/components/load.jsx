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
    }, 7500);
  }

  render() {
    return (
      <div>
        <h1>Preppin' your tacos fam!</h1>
        <iframe src='https://gfycat.com/ifr/DeadDimwittedEstuarinecrocodile' ></iframe>
        {this.state.loadComplete && <Redirect to="/recipe" />}
      </div>
    )
  }
}

export default Load