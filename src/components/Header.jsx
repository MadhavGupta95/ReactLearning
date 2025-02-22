import React, { useState } from 'react'
import './css/Header.css'



const Header = ({handleSearch, loader}) => {
    const [query, setQuery] = useState("")
    const handleChange = (e)=>setQuery(e.target.value)
    const onSearch = ()=>{
        handleSearch(query)
    }
  return (
    <div>
        <input onChange={handleChange} type='text'></input>
        <button id='btn' disabled={loader} onClick={onSearch}>
          {loader ? "Loading..." : "Search"}
        </button>
    </div>
  )
}

export default Header