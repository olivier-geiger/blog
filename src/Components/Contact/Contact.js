// library
import React from 'react'
import { Route } from 'react-router-dom'

// components
import classes from './Contact.module.css'
import Telephone from './Telephone'
import Email from './Email'

function Contact(props) {

  // fonctions
  const mobileClickHandler = () => {
    props.history.push(props.match.url + '/telephone')
  }

  const emailClickHandler = () => {
    props.history.push(props.match.url + '/email')
  }

  return (
    <>
      <h1>Contact</h1>
      <p>Par quel moyen de contact voulez-vous échanger ?</p>
      <button onClick={mobileClickHandler} className={classes.btn}>Téléphone</button>
      <button onClick={emailClickHandler}className={classes.btn}>email</button>

      <Route path={props.match.url + "/telephone"} render={() => <p>téléphone :</p>} component={Telephone} />
      <Route path={props.match.url + "/email"} render={() => <p>email :</p>} component={Email}/>
    </>
  )
}

export default Contact;