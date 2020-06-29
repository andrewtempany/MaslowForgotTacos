import React from 'react'
import request from 'superagent'
class Recipe extends React.Component {

  state = {
    title: '',
    recipe: ''
  }

  componentWillMount() {
    request.get('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
      .then(res => {
        this.setState({
          title: res.body.name,
          recipe: res.body.recipe
        })
        console.log(res.body)
      })
  }

  render() {
    return (<>
      <p>Oooh boy! Here I go making tacos again!</p>
      <h1>{this.state.title}</h1>
    </>
    )
  }
}

export default Recipe