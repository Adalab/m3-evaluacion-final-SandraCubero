import React from 'react';
import '../App.css';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import getDataFromServer from '../services/DataFromServer';
import Home from './Home';
import CharacterDetail from './CharacterDetail';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      filterText: ''
    };
    this.handleFilter = this.handleFilter.bind(this);
    this.renderDetail = this.renderDetail.bind(this);
    this.filterSearch = this.filterSearch.bind(this);
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

  filterSearch() {
    let filteredCharacters =
      this.state.filterText === ''
        ? this.state.characters
        : this.state.characters.filter(character =>
            character.name
              .toLowerCase()
              .includes(this.state.filterText.toLowerCase())
          );
    return filteredCharacters;
  }

  renderDetail(props) {
    const selectedId = parseInt(props.match.params.id);
    let selectedCharacter;
    for (const character of this.state.characters) {
      if (parseInt(character.id) === selectedId) {
        selectedCharacter = character;
      }
    }
    return <CharacterDetail selectedCharacter={selectedCharacter} />;
  }

  render() {
    return (
      <div className="App">
        <Link to={'/'}>
          <header className="header"></header>
        </Link>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                handleFilter={this.handleFilter}
                filterText={this.state.filterText}
                characters={this.filterSearch()}
              />
            )}
          />
          <Route path="/detail/:id" render={this.renderDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
