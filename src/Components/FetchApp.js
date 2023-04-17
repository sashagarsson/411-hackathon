import React, { useState, useEffect } from "react";
import ListArticles from "./ListArticles";

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
                <ListArticles data={article} />
            );
          })}
        
      </div>
    );

    // We need the title, link, points, author, comments
  }