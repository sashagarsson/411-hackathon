import React, { useState, useEffect } from "react"
import ListArticles from "./ListArticles"

export default function FetchApp({ searchParam, type, age }) {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    if (type === "author" && !!searchParam) {
      // console.log("type:author")
      fetch(
        `http://hn.algolia.com/api/v1/search?tags=story,author_${searchParam}`
      )
        .then((response) => {
          console.log(response)
          return response.json()
        })
        .then((data) => {
          // console.log(data)
          setArticles(data.hits)
        })
    } else if (searchParam && type === "stories") {
      fetch(
        `http://hn.algolia.com/api/v1/search?query=${searchParam}&tags=story`
      )
        .then((response) => response.json())
        .then((data) => setArticles(data.hits))
    } else {
      fetch(`http://hn.algolia.com/api/v1/search?tags=front_page`)
        .then((response) => response.json())
        .then((data) => setArticles(data.hits))
    }
  }, [searchParam, type])

  useEffect(() => {
    // console.log("fetched articles", articles)
  }, [articles])

  const sortStoriesAZ = () => {
    articles.sort(function (a, b) {
      if (a.title < b.title) {
        return -1
      }
      if (a.title > b.title) {
        return 1
      }
      return 0
    })
  }

  const sortAuthorAZ = () => {
    articles.sort(function (a, b) {
      if (a.author.toLowerCase() < b.author.toLowerCase()) {
        return -1
      }
      if (a.author.toLowerCase() > b.author.toLowerCase()) {
        return 1
      }
      return 0
    })
  }

  const sortTime = () => {
    articles
      .sort(function (a, b) {
        if (a.created_at < b.created_at) {
          return -1
        }
        if (a.created_at > b.created_at) {
          return 1
        }
        return 0
      })
      .reverse()
  }

  if (age === 1 && type === "stories") {
    sortStoriesAZ()
  } else if (age === 1 && type === "author") {
    sortAuthorAZ()
    console.log(articles)
  } else if (age === 2) {
    sortTime()
  }

  return (
    <div classTitle="article-list">
      {articles.map((article) => {
        return <ListArticles data={article} />
      })}
    </div>
  )
}
