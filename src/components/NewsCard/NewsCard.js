import React, { Component } from 'react';
import './NewsCard.scss';

class NewsCard extends Component {
  render() {
    const { thumbnail, headline, index, onClickCard } = this.props;

    return (
      <div className="NewsCard" onClick={() => onClickCard(index)}>
        {thumbnail && (<img src={thumbnail} alt="thumbnail"/>)}
        <div className="card-title">
        {headline}
        </div>
      </div>
    );
  }
}

export default NewsCard;