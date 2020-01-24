import React from "react";
import axios from "axios";
import Header from "./header";
import Attribution from "./attribution";
import NewsCards from "./newsCards";
import Menu1 from './Menu1';
import Bottom from './Bottom';

 export default class Wellness extends React.Component {
  state = {
    news: []
  };
  componentDidMount() {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=3d8e86d4de6e4541bb8632e0bcf83d5c`
      )
      .then(res => {
        const news = res.data.articles;
        this.setState({ news });
        console.log(news);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const newsData = this.state.news.map((article, id) => (
      <NewsCards
        key={id}
        image={article.urlToImage}
        title={article.title}
        description={article.description}
        source={article.source.name}
        url={article.url}
      />
    ));
    return (
      <div>
         <Menu1/>
         <br/>
         <br/>
         <br/>
        <div className="container">
         <Header/>
          <div className="row">{newsData}</div>
        </div>
        <Attribution />     
         <br/>
       <br/>
       <br/>
       <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
        <br/>
       <Bottom/>
      </div>
    );
  }
}