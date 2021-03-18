// library
import React from 'react'

function Article(props) {
    return ( 
      <>
        <h2>Ma page article ({props.match.params.id})</h2>
        {props.location.state && props.location.state.fromHome ?
          <p>cliqué depuis l'accueil</p>
        : null
      }
      </>
    )
}

export default Article;