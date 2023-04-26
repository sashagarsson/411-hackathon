import React from "react";
import "../App.css"

const getStories = ("http://hn.algolia.com/api/v1/items/:id");
async function searchPage(id, date, author, title);

    let queryString = "";
    if (id) {
      queryString += `id=${id}`;
    }name
    if (date) {
      queryString += `&date=${date}`;
    }
    if (author) {
      queryString += `&author=${author}`;
    }
    if (title) {
      queryString += `&title=${title}`;
    }


const response = await fetch(`${getStories}?${queryString}`);


if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    return null;
  }
