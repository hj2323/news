import React from 'react';
import axios from 'axios';
import News from '../components/News';
import './Home.css';

class Home extends React.Component{
  state={
    isLoading: true,
    news: [],
  };


  getNews =async() =>{
    const {
        data:{ articles },
    } = await axios.get("http://newsapi.org/v2/top-headlines?country=kr&apiKey=1885281efeb8448b99aeb76201ba2c19");
    this.setState({ news: articles, isLoading: false })
  }
  componentDidMount(){
    //뉴스 데이터 로딩!
    this.getNews();
  }

  render(){
    const {isLoading, news} = this.state;
    return <section className="container">

    {isLoading ? (
      <div className="loader">
        <span className="loader__text">'Loading....' </span>
      </div>
    
    ):(
      <div className="news">
      { news.map(news=>(
      <News 
        key={news.id}
        id={news.id}
        publishedAt={news.publishedAt}
        title={news.title}
        description={news.description}
        urlToImage={news.urlToImage}
      />
      ))}
    </div>
     )}
    </section>
  ;
  }

}

export default Home;
