import React from 'react'

export default function SearchBar({searchParam, setSearchParam}) {
  return (
    <div>
        <input onChange={(e)=>{setSearchParam(e.target.value)}} value={searchParam} />
    </div>
  )
}
