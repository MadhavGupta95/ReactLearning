import React, { useState } from 'react'

const Header = ({handleSearch}) => {
    const [query, setQuery] = useState("")
    const handleChange = (e)=>setQuery(e.target.value)
    const onSearch = ()=>{
        handleSearch(query)
    }
  return (
    <div>
        <input onChange={handleChange} type='text'></input>
        <button onClick={onSearch}>search</button>
    </div>
  )
}

export default Header