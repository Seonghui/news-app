import React, { Component } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import Article from '../NewsModal/NewsModal';
import { FadingCircle } from 'better-react-spinkit';
import './NewsList.scss';

class NewsList extends Component {

  state = {
    articleBox: false,
    newsPhoto: '',
    newsHead: '',
    newsBody: '',
  }

  renderNews = () => {
    const news = this.props.list.map((result, index) => {
      return <NewsCard
        key={index}
        index={index}
        body={result.fields.body}
        headline={result.fields.headline}
        thumbnail={result.fields.thumbnail}
        onClickCard={this.handleClick}
      />
    })
    return news;
  }

  handleClick = (index) => {
    const { list } = this.props;
    this.setState({
      newsPhoto: list[index].fields.thumbnail,
      newsHead: list[index].fields.headline,
      newsBody: list[index].fields.body,
      articleBox: true,
    })
  }

  handleClose = () => {
    this.setState({
      articleBox: false,
    })
  }
  
  render() {
    const { list } = this.props;
    const { articleBox, newsPhoto, newsHead, newsBody } = this.state;
    const loading = <FadingCircle color="#37d9a9" size={60}/>;

    return (
      <div className={list ? "NewsList" : "NewsList loading"}>
        {list ? this.renderNews() : loading}
        {articleBox && (
          <Article 
            onClose={this.handleClose}
            photo={newsPhoto}
            head={newsHead}
            body={newsBody} 
          />
        )}
      </div>
    );
  }
}

export default NewsList;