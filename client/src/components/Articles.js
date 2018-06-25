import React, { Component } from 'react';

class Articles extends Component {

    constructor(props) {
      super(props)
      this.state = {
          articles: []
      }
    }
  
    componentDidMount () {
  
      //Using the newsAPI dependency from newsapi.org (alternative for using many news headline APIs)
  
      const url = 'https://newsapi.org/v2/top-headlines?' +
        'sources=bbc-news&' +
        'apiKey=d733824f40d448d080a95b7553b39205';
  
      const req = new Request(url);
      fetch(req)
        .then(data => data.json())
        .then(data => {
            console.log(data);
          this.setState({
            articles: data.articles
          })
        })
    }
  
    render() { 
    const { articles } = this.state;
      return (
        <div>
            <ul>
            {articles.map(article => (<li key={article.title}>
            <div><img src={article.urlToImage}></img></div>
            <div>{article.title}</div>
            <div>{article.author}</div>
            <div>{article.publishedAt}</div>
            <div>{article.description}</div>
            </li>))}
            </ul>
        </div>
      )
    }
  }
  
  export default Articles;