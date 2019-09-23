import React from 'react';
import '../App.css';
import getDataFromServer from './DataFromServer';
import CharacterList from './CharacterList';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: []
    };
  }
  componentDidMount() {
    getDataFromServer().then(characters =>
      this.setState({ characters: characters.results })
    );
  }

  render() {
    return (
      <div className="App">
        <React.Fragment>
          <header className='header'>
            Hola
          </header>
          <CharacterList
            characters={this.state.characters}
          />
        </React.Fragment>
      </div>
    );
  }
}

export default App;
