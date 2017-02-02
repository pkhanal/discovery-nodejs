import React from 'react';
import moment from 'moment';

import { TextInput, Icon } from 'watson-react-components';

export default React.createClass({
  displayName: 'QueryExpanded',

  propTypes: {
    onQueryChange: React.PropTypes.func.isRequired,
  },

  getInitialState() {
    return {
      query: null,
    };
  },
  /**
   * On Input text change
   */
  handleInputChange(event) {
    this.setState({ query: {
      text: event.target.value
    } });
  },
  /**
   * On Input text key press
   */
  handleKeyPress(event) {
    if (event.key === 'Enter' && event.target.value.match(/[^\s]+/)) {
      this.props.onQueryChange(this.state.query);
    }
  },
  handleSearchClick() {
    if (this.state.query && this.state.query.text.match(/[^\s]+/)) {
      this.props.onQueryChange(this.state.query);
    }
  },
  render() {
    return (
      <section className="_full-width-row query">
        <div className="query--right-bg" />
        <div className="row query--row _container _container_large">
          <div className="query--left">
            <div className="query--search-container">
              <TextInput
                onKeyPress={this.handleKeyPress}
                onInput={this.handleInputChange}
                defaultValue={this.state.query ? this.state.query.text : null}
              />
              <div onClick={this.handleSearchClick} className="query--icon-container">
                <Icon type="search" size="regular" fill="#ffffff" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  },
});
