import React from 'react'
import request from 'superagent'
import marked from 'marked'





class Recipe extends React.Component {

  state = {
    title: '',
    recipe: ''
  }
  
  componentDidMount() {
    request.get('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
    .then(res => {
      
      let condimentRecipe = (res.body.condiment) ? res.body.condiment.recipe : ""
      let condimentName = (res.body.condiment) ? res.body.condiment.name : "no condiment"
      // let condimentName = (res.body.condiment) ? res.body.condiment.name : "no condiment"
      // let condimentName = (res.body.condiment) ? res.body.condiment.name : "no condiment"
      
        this.setState({
          title: res.body.name,
          recipe: marked(res.body.recipe).split('"').join('"').split("↵").join(""),
          baseName: res.body.base_layer.name,
          baseLayer: marked(res.body.base_layer.recipe).split('"').join('"').split("↵").join(""),
          
          condiment: marked(condimentRecipe).split('"').join('"').split("↵").join(""),
          condimentName: condimentName,

        })
        console.log("this one ", res.body)
      })
  }

  // grossHtml = ["<h1 id=", "spaghetti-squash-tacos", ">Spaghetti (Squash) Tacos</h1>↵<p><img src=", "https://farm3.staticflickr.com/2945/15473783312_936e69e795.jpg", " alt=", "Spaghetti (Squash) Tacos", " title=", "Spaghetti (Squash) Tacos", "></p>↵<p>I&#39;m too old for the television show i…t spaghetti tacos were a thing from this <a href=", "http://www.nytimes.com/2010/10/06/dining/06tacos.html", ">New York Times trend piece</a>.  When some <a href=", "http://chicagopatchworkfarms.com/", ">farmer friends</a> gave me a lot of squash, I did…ird but delicious seasonal vegetable.</p>↵<h2 id=", "components", ">Components</h2>↵<ul>↵<li><a href=", "../base_layers/spaghetti_squash.md", ">spaghetti squash</a></li>↵<li><a href=", "../condiments/tomato_sauce_above_average.md", ">tomato sauce</a></li>↵<li>fresh basil</li>↵<li>grated <a href=", "http://en.wikipedia.org/wiki/Grana_(cheese)", ">Grana Padano</a> cheese</li>↵<li>spicy giardinier…ng.  I eat on almost anything)</li>↵</ul>↵<h2 id=", "preparation", ">Preparation</h2>↵<p>Bake the spaghetti squash and…l want to double-up.</p>↵<p>tags: vegetarian</p>↵"]

  render() {
    // console.log(this.state.recipe)
    return (<>
      {/* <div dangerouslySetInnerHTML={{ __html: this.grossHtml.join('"').split("↵").join("") }} /> */}
      <hr></hr>
      <h3>Here's our Taco:</h3>
      {/* <h3>{this.state.title}</h3> */}
      <div dangerouslySetInnerHTML={{ __html: this.state.recipe }} />
      <hr></hr>
      <h3>Here's our Base Layer:</h3>
      {/* <h3>{this.state.baseName}</h3> */}
      <div dangerouslySetInnerHTML={{__html:this.state.baseLayer }}/>
      <hr></hr>
      <h3>Here's our Condiment:</h3>
      {/* <h3>{this.state.condimentName}</h3> */}
      <div dangerouslySetInnerHTML={{__html:this.state.condiment }}/>


    </>
    )
  }
}

export default Recipe