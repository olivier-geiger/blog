// Library
import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import routes from './routes'

// Components
import Layout from './hoc/Layout/Layout'
import Home from './Containers/Home/Home'
import Contact from './Components/Contact/Contact'
import Articles from './Containers/Articles/Articles'
import Article from './Containers/Articles/Article/Article'
import Error from './Components/Error/Error'
import Add from './Containers/Admin/Articles/Add/Add'

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path={routes.HOME} component={Home} />
          <Route path={routes.CONTACT} component={Contact} />
          <Route exact path={routes.ARTICLES} component={Articles} />
          <Route exact path={routes.ARTICLES + "/:id"} component={Article} />
          <Route exact path={routes.AJOUTER} component={Add} />
          <Route component={Error} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
