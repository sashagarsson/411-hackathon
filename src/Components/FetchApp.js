import React, { useState, useEffect } from "react";
import ListArticles from "./ListArticles";

export default function FetchApp({ searchParam, type }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (type === "author" && !!searchParam) {
        console.log("type:author")
      fetch(
        `http://hn.algolia.com/api/v1/search?tags=story,author_${searchParam}`
      )
        .then((response) => {
            console.log(response)
            return response.json()})
        .then((data) => {
            console.log(data)
            setArticles(data.hits)});
    } else if (searchParam && type==="stories") {
      fetch(
        `http://hn.algolia.com/api/v1/search?query=${searchParam}&tags=story`
      )
        .then((response) => response.json())
        .then((data) => setArticles(data.hits));
    } else {
        fetch(
          `http://hn.algolia.com/api/v1/search?tags=front_page`
        )
          .then((response) => response.json())
          .then((data) => setArticles(data.hits));

    }
  }, [searchParam, type]);

  useEffect(() => {
    console.log("fetched articles", articles);
  }, [articles]);

  return (
    <div className="article-list">
      {articles.map((article) => {
        return <ListArticles data={article} />;
      })}
    </div>
  );

  // We need the title, link, points, author, comments
}
