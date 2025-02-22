import React from 'react'

const Recipe = ({recipe}) => {
  return (
    <div>
        <h3>{recipe.title}:</h3>
        <p>{recipe.ingredients}</p>
    </div>
  )
}

export default Recipe