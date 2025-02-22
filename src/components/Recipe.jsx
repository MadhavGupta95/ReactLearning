import React from 'react'

const Recipe = ({recipe}) => {
  return (
    <div>
        <h2><u>{recipe.title}:</u></h2>
        <p><b>ingredients: </b>{recipe.ingredients}</p>
    </div>
  )
}

export default Recipe