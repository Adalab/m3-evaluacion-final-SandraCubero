import React from 'react';
import '../App.css';
import getDataFromServer from './DataFromServer';
import CharacterList from './CharacterList';
import FilterCharacters from './FilterCharacters';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      filterText: ''
    };
    this.handleFilter = this.handleFilter.bind(this);
  }
  componentDidMount() {
    getDataFromServer().then(characters =>
      this.setState({ characters: characters.results })
    );
  }
  handleFilter(inputText) {
    this.setState({
      filterText: inputText
    });
  }

  render() {
    console.log(this.state.filterText);
    return (
      <div className="App">
        <React.Fragment>
          <header className="header"></header>
          <FilterCharacters handleFilter={this.handleFilter} />
          <CharacterList
            characters={this.state.characters}
            filterText={this.state.filterText}
          />
        </React.Fragment>
      </div>
    );
  }
}

export default App;
