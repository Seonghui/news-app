import React, { Component } from 'react';
import NewsCard from '../NewsCard/NewsCard'

class NewsList extends Component {

  renderNews = () => {
    const news = this.props.list.map((result, index) => {
      return <NewsCard
        key={index}
        body={result.fields.body}
        headline={result.fields.headline}
        thumbnail={result.fields.thumbnail}
      />
    })
    return news;
  }

  render() {
    const { list } = this.props;
    return (
      <div className="NewsList">
        {list ? this.renderNews() : 'Loading'}
      </div>
    );
  }
}

export default NewsList;