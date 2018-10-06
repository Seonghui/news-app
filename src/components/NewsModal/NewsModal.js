import React, { Component } from 'react';
import './NewsModal.scss';
import { MdClose } from 'react-icons/md';

class NewsModal extends Component {
  componentDidMount() {
    document.body.style.overflowY = 'hidden';
  }
  componentWillUnmount() {
    document.body.style.overflowY = 'auto';
  }

  render() {
    const { onClose, photo, head, body } = this.props;
    return (
      <div className="NewsModal">
        <div className="darkBg" onClick={ onClose } />
        <div className="news">
          <div className="news-header">
            <h1>{head}</h1>
            <div className="textbtn close" onClick={ onClose }>
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

export default NewsModal;