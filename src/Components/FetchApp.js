
import React, { useState, useEffect } from "react";

export default function FetchApp() {
    const [articles, setArticles] = useState([]);
  
    
    useEffect(() => {
      fetch("http://hn.algolia.com/api/v1/search")
        .then((response) => response.json())
        .then((data) => setArticles(data.hits));
    }, []);
  
    useEffect(() => {
      console.log("fetched articles", articles);
  
      
    }, [articles]);
  
    return (
      <div className="article-list">
       
          {articles.map((article) => {
            return (
              <div className="article-info" key={article.ObjectID}>
                <h4>{article.title} ({article.url})</h4>
                <p>{article.points} points By {article.author} Comments: {article.num_comments}</p>

              </div>
            );
          })}
        
      </div>
    );

    // We need the title, link, points, author, comments
  }