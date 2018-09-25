import React, { Component } from 'react';
import './NewsCard.scss';
import LinesEllipsis from 'react-lines-ellipsis';

class NewsCard extends Component {
  render() {
    const { thumbnail, headline } = this.props;
    return (
      <div className="NewsCard">
        <img src={thumbnail} alt="thumbnail"/>
        <div className="card-title">
        {headline}
          {/* <LinesEllipsis
            text={headline}
            maxLine='2'
            ellipsis='...'
            trimRight
            basedOn='letters'
          /> */}
        </div>
      </div>
    );
  }
}

export default NewsCard;