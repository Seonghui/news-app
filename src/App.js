import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import NewsList from './components/NewsList/NewsList'
import Article from './components/Article/Article'



class App extends Component {
  state = {
  }

  componentDidMount() {
    this.getNews();
  }

  callApi = () => {
    const url = "https://content.guardianapis.com/search?&page-size=20&show-fields=headline,thumbnail,body&api-key=" + process.env.REACT_APP_NEWS_API_KEY;
    return axios.get(url);
  }

  getNews = async () => {
    try {
      const response = await this.callApi();
      const newsData = response.data.response.results;
      this.setState ({
        newsData
      })
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { newsData } = this.state;
    
    return (
      <div className={newsData ? "App" : "App--loading"}>
      <Header />
      <NewsList list={newsData} />
      {/* <Article /> */}
      </div>
    );
  }
}

export default App;