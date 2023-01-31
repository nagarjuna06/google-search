import { Component } from "react";
import SuggestItem from "../suggestionItem";
import "./index.css";
class GoogleSuggestions extends Component {
  state = {
    searchInput: "",
    filteredList: [],
    onfocus: false,
  };
  onChange = (e) => {
    this.setState({ searchInput: e.target.value });
  };
  onFocussed = () => {
    this.setState((prevState) => ({
      onfocus: true,
    }));
  };
  display = (filteredList) => {
    const { onfocus } = this.state;
    if (onfocus) {
      return (
        <div>
          {filteredList.map((eachItem) => (
            <SuggestItem
              search={eachItem.search}
              key={eachItem.id}
              onClickSuggest={this.onClickSuggests}
            />
          ))}
        </div>
      );
    }
    return null;
  };
  onClickSuggests = (suggest) => {
    this.setState({ searchInput: suggest });
  };
  render() {
    const { suggests } = this.props;
    const { searchInput } = this.state;
    const filteredList = suggests.filter((each) =>
      each.search.toLowerCase().includes(searchInput.toLowerCase())
    );
    return (
      <div className="google-suggestions">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
          alt="google-logo"
          className="google-logo"
        />
        <div className="container">
          <div className="search-container">
            <img
              src="https://cdn-icons-png.flaticon.com/512/622/622669.png"
              alt="search-img"
              className="search-img"
            ></img>
            <input
              type="search"
              className="search-input"
              placeholder="Search Google"
              onChange={this.onChange}
              onFocus={this.onFocussed}
              value={searchInput}
            />
          </div>
          <div className="suggestion-container">
            {this.display(filteredList)}
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleSuggestions;
