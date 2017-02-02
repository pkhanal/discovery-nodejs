import 'whatwg-fetch';
import React from 'react';
import { Icon } from 'watson-react-components';
import jpath from 'jpath-query';

import Query from './Query/index.jsx';
import TopEntities from './TopEntities/index.jsx';
import TopStories from './TopStories/index.jsx';
import SentimentAnalysis from './SentimentAnalysis/index.jsx';
import MentionsAndSentiments from './MentionsAndSentiments/index.jsx';
import NoResults from './NoResults/index.jsx';

export default React.createClass({
  displayName: 'Demo',

  getInitialState() {
    return {
      query: null,  // object that has text and date
      error: null,
      data: null,
      loading: false,
    };
  },

  handleQueryChange(query) {
    this.fetchNewData(query);
  },
  /**
   * Call the query API every time the query change.
   */
  fetchNewData(query) {
    this.setState({ query, loading: true });
    /* query */
    /*fetch('/api/query', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(query),
    })
    .then((response) => {
      if (response.ok) {
        response.json()
          .then((json) => {
            this.setState({ loading: false, data: json.results });
          });
      } else {
        response.json()
        .then((error) => this.setState({ error, loading: false }))
        .catch((errorMessage) => {
          console.error(errorMessage);
          this.setState({
            error: { error: 'There was a problem with the request, please try again' },
            loading: false,
          });
        });
      }
    });*/
    // scroll to the loading bar
    window.scrollTo(100, 344);
  },

  render() {
    return (
      <div>
        <Query onQueryChange={this.handleQueryChange} query={this.state.query} />
        { this.state.loading ?
          (
            <div className="results">
              <div className="loader--container">
                <Icon type="loader" size="large" />
              </div>
            </div>) : null }
        { !this.state.loading && this.state.data && this.state.data.length > 0 ? (
          <div className="results">
            <div className="_container _container_large">
              <div className="row">
                <div className="results--panel-1">
                  <div>Add view to show result</div>
                </div>
              </div>
            </div>
          </div>
        ) : null }
        { !this.state.loading && this.state.data && this.state.data.length === 0 ?
          <NoResults query={this.state.query} />
        : null }
      </div>
    );
  },
});
