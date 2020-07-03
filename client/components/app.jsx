import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Load from './load'
import Recipe from './recipe'
import getReady from './getReady'

// class App extends React.Component {
const App = () => {

  // state = {
  //   isReady: false
  // }  

  // getReady = (evt) => {
  //   this.setState({
  //     isReady: 'true'
  //   })
  // }

  // render(){
  return (<div>
    <Router>
      <div id="header">
        <h1>Tacos.</h1>
        <h3>The Basic Human Need that Maslow Forgot.</h3>
        <Route path='/' component={getReady} />
      </div>
      <Route path='/load' component={Load} />
      <Route path='/recipe' component={Recipe} />
      {/* {this.state.isReady && <Redirect to="/loading"/>} */}
    </Router>
  </div>
  )
}
// }

export default App