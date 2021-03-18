// library
import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <>
      <h2>Whoops...</h2>
      <h1>404, la page n'existe pas</h1>
      <Link to="/">Allez à l'accueil</Link>
    </>
  )
}


export default Error