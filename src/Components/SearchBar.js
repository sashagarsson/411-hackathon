import React from "react";

export default function SearchBar({
  searchParam,
  setSearchParam,
  type,
  setType,
}) {
  return (
    <div>
      <input
        onChange={(e) => {
          setSearchParam(e.target.value);
        }}
        value={searchParam}
      />
      <select
        name="type"
        id="type"
        value={type}
        onChange={(event) => {
          setType(event.target.value);
        }}
      >
        <option value="stories">Stories</option>
        <option value="author">Author</option>
      </select>
    </div>
  );
}
