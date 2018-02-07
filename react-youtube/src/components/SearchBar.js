import React from 'react';
import { Input } from 'semantic-ui-react';

class SearchBar extends React.Component {
  state = {
    term: ''
  };

  onInputChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchTermChange(term);
  };

  render() {
    return (
      <div className="search-bar">
        <Input
          type="text"
          value={this.state.term}
          onChange={e => this.onInputChange(e)}
          placeholder="Search..."
        />
      </div>
    );
  }
}

export default SearchBar;
