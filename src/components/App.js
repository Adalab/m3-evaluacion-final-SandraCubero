import React from 'react';
import '../App.css';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import getDataFromServer from './DataFromServer';
import CharacterList from './CharacterList';
import FilterCharacters from './FilterCharacters';
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
              <React.Fragment>
                <FilterCharacters handleFilter={this.handleFilter} />
                <CharacterList
                  characters={this.state.characters}
                  filterText={this.state.filterText}
                />
              </React.Fragment>
            )}
          />
          <Route path="/detail/:id" render={this.renderDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
