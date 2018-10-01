import React, { Component } from 'react';
import './Article.scss';

class Article extends Component {

  render() {
    const { onClose, photo, head, body } = this.props;
    return (
      <div className="Article">
        <div className="darkBg"></div>
        <div className="box">
          <div className="btn close" onClick={onClose}>닫기</div>
          {photo && (<img src={photo} alt="newsphoto"></img>)}
          <h1>{head}</h1>
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </div>
      </div>
    );
  }
}

export default Article;