import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {
  constructor (props){
    super (props);
    this.state = {
      animales: []
    }
  }

  async componentDidMount(){
    const resp = await axios.get('/api/animales');
    this.setState({
      animales: resp.data
    })
  }

  desplegarAnimales = () => (
    this.state.animales.map ((animal) => (
      <li>
        {animal.nombre}
      </li>
    ))
  )
 
  render(){
    return(
      <div>
        Animales: 
        <ul>
          {this.desplegarAnimales() }
        </ul>
      </div>
    );
  }
}

export default App;
