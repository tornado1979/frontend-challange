import React from 'react'

import './sort.scss'

export const Sort = () => {
  return (
    <div className="sort">
      <form>
        <select className="sortOrderBox" >
          <option value="POPULARITY,desc">Popularity desc</option>
          <option value="POPULARITY,asc">Popularity asc</option>
          <option value="RATE,desc">Rate desc</option>
          <option value="RATE,asc">Rate asc</option>
          <option value="DATE,desc">Date desc</option>
          <option value="DATE,asc">Date asc</option>
        </select>
      </form>
    </div>
  )
}
