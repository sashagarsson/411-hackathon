import React from "react";

export default function ListArticles(props) {
  return (
    <div className="article-info" key={props.data.ObjectID}>
        <h4>{props.data.title} ({props.data.url})</h4>
        <p>{props.data.points} points By {props.data.author} Comments: {props.data.num_comments}</p>
    </div>
  );
}