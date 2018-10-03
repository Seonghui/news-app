import React, { Component } from 'react';
import './Article.scss';
import { MdClose } from 'react-icons/md';

class Article extends Component {

  render() {
    const { onClose, photo, head, body } = this.props;
    return (
      <div className="Article">
        <div className="darkBg" onClick={ onClose }></div>
        <div className="news">
          <div className="news-header">
            <h1>{head}</h1>
            <div className="btn close" onClick={ onClose }>
              <MdClose size={30} />
            </div>
          </div>
          <div className="news-body">
            {photo && (<img src={photo} alt="newsphoto"></img>)}
            <div dangerouslySetInnerHTML={{ __html: body }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Article;