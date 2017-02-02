import React from 'react';
import moment from 'moment';
import { TextInput, Icon, ButtonsGroup } from 'watson-react-components';

export default React.createClass({
  displayName: 'QueryCollapsed',

  propTypes: {
    onQueryChange: React.PropTypes.func.isRequired,
    query: React.PropTypes.shape({
      text: React.PropTypes.string
    }).isRequired,
  },

  getInitialState() {
    return {
      focusedInput: null,
      query: this.props.query
    };
  },

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  },

  componentWillUnMount() {
    window.removeEventListener('resize', this.onResize);
  },

  /**
   * On Input text change
   */
  handleInputChange(event) {
    this.setState({ query: { text: event.target.value } });
  },
  /**
   * On Input text key press
   */
  handleKeyPress(event) {
    if (event.key === 'Enter' && event.target.value.match(/[^\s]+/)) {
      this.props.onQueryChange({
        text: this.state.query.text
      });
    }
  },
  handleSearchClick() {
    if (this.state.query && this.state.query.text.match(/[^\s]+/)) {
      this.props.onQueryChange({
        text: this.state.query.text
      });
    }
  },
  render() {
    return (
      <section className="_full-width-row query query_collapsed">
        <div className="_container _container_large">
          <div className="query--flex-container">
            <div className="query--text-input-container">
              <div className="query--search-container">
                <TextInput
                  onInput={this.handleInputChange}
                  onKeyPress={this.handleKeyPress}
                  defaultValue={this.state.query.text || ''}
                  placeholder="Query"
                  />
                <div onClick={this.handleSearchClick} className="query--icon-container">
                  <Icon type="search" size="regular" fill="#ffffff" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  },
});
