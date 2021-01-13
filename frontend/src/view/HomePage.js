import React, { Component } from 'react';
// import {
//   Avatar,
//   Button,
//   Card, CardActions, CardContent, CardHeader, Typography, IconButton, Toolbar, AppBar, ButtonGroup
//   // TextField
// } from '@material-ui/core'
// import MenuIcon from '@material-ui/icons/Menu';
// import { makeStyles } from '@material-ui/core/styles';
// import SignIn from '../view/SignIn';

import { createBrowserHistory } from 'history'
import OpenMenu from '../components/OpenMenu'
import SideBar from '../components/Sidebar';

class Homepage extends Component {
  constructor(props) {

    super(props)
    this.state = {
      username: '',
      password: '',

      isSignIn: false,
      isSignUp: false,

    }
    this.history = createBrowserHistory();
  }

  signin = async () => {
    this.setState({
      isSignIn: true
    })
  }


  render() {
    return (
      <div>
        <OpenMenu />
        <SideBar />

      </div>
    )
  }
}

export default Homepage;