import React from 'react';
import '../App.css';
import getDataFromServer from './DataFromServer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: []
    };
  }
  componentDidMount() {
    getDataFromServer().then(characters =>
      // console.log(characters)
      this.setState({ characters: characters })
    );
  }
  render() {
    console.log(this.state.characters);
    return <div className="App">Hola</div>;
  }
}

export default App;
