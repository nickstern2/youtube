import React from 'react';

class SearchBar extends React.Component {

  state = { term: '' }


  onInputChange = (event) => {
    // console.log(event.target.value);
    this.setState({ term: event.target.value })
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    // TODO: Make sure we call
    // callback from parent component
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return(
      <div className="search-bar ui segment" style={{ marginTop: 20 }}>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="">Video Search</label>
            <input
               type="text"
               value={this.state.term}
               onChange={this.onInputChange}>
             </input>
          </div>
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
