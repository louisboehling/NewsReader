import React, { Component } from 'react';

class IndividualArticle extends Component {

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
            {articles.map(article => (
            <div className="row" id="article">
                <div className="col-4">
                    <div><img src={article.urlToImage} alt="bbc"></img></div>
                </div>
                <div className="col-8">
                    <div id="title"><h1>{article.title}</h1></div>
                    <div id="date">{article.publishedAt}</div>
                    <div id="description">{article.description}</div>
                    <div className="buttons">
                        <button type="button" class="btn" id="readMoreButton">
                            <a href={article.url}>Full Article</a>
                        </button>
                        <button type="button" class="btn" id="saveButton">
                            Save
                        </button>
                    </div>
                </div>
            </div>
            ))}
        </div>
      )
    }
  }
  
  export default IndividualArticle;