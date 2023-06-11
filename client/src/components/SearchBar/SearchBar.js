import React from 'react'

function SearchBar({ placeholder, data }) {
  return (
    <div className='search'>
        <div className='searchInput'>
            <input type='text' />
            <div className='delIcon'></div>
        </div>
        <div className='searchResults'></div>
    </div>
  )
}

export default SearchBar