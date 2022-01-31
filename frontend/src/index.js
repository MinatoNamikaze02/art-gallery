import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Home, MainPage, SignIn, SignUp, AddArt, Products, Kart, Payment, Admin, AdminDashboard, AdminArtPage, EditArtPage, AdminArtistPage, AddArtistPage, EditArtistPage} from './pages'


ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path = '/'>
        <Home />
      </Route>
      <Route exact path = '/signin'>
        <SignIn />
      </Route>
      <Route exact path = '/signup'>
        <SignUp />
      </Route>
      <Route exact path = '/adminDashboard/art/add'>
        <AddArt />
      </Route>
      <Route exact path = '/user/customer'>
        <MainPage />
      </Route>
      <Route exact path = '/products'>
        <Products />
      </Route>
      <Route exact path = '/cart'>
        <Kart/>
      </Route>
      <Route exact path = '/checkout'>
        <Payment/>
      </Route>
      <Route exact path = '/signin/admin'>
        <Admin />
      </Route>
      <Route exact path = '/adminDashboard'>
        <AdminDashboard />
      </Route>
      <Route exact path = '/adminDashboard/art'>
        <AdminArtPage />
      </Route>
      <Route exact path = '/adminDashboard/editArt'>
        <EditArtPage />
      </Route>
      <Route exact path = '/adminDashboard/artist'>
        <AdminArtistPage/>
      </Route>
      <Route exact path = '/adminDashboard/artist/add'>
        <AddArtistPage/>
      </Route>
      <Route exact path = '/adminDashboard/artist/update'>
        <EditArtistPage/>
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
)
