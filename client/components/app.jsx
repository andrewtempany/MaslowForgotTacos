import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Load from './load'
import Recipe from './recipe'


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
      <h1>Get your taco on.</h1>
      <p>Let us know when you're ready for this</p>
      <Link to="/load" >I'm Ready!  </Link>

      <Route path='/load' component={Load} />
      <Route path='/recipe' component={Recipe} />
      {/* {this.state.isReady && <Redirect to="/loading"/>} */}
    </Router>
  </div>
  )}
// }

export default App