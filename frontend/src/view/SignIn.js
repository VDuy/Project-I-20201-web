import React from 'react';
import { Button, Container, Grid, Typography, TextField, Avatar, Link, CardActions } from '@material-ui/core';
//import axios from 'axios'
import Cookies from 'js-cookies'
import api from '../API';


import SignUp from '../view/SignUp';
import FacebookLogin from 'react-facebook-login';
//import GoogleLogin from 'react-google-login';



class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',

            isSignUp: false,

        }
    }
    login = async () => {
        const result = await api.auth.login(this.state.username, this.state.password);
        if (result.status) {
            Cookies.setItem('token', result.token);
            console.log(Cookies.getItem('token'))
            window.location = '/homepage'
        } else {
            console.log("oklb")
            alert(result.message);
        }
        console.log("asdfs")
    }

    signup = async () => {
        this.setState({
            isSignUp: true
        })
    }
    //props
    render() {
        if (this.state.isSignUp) {
            return (<SignUp />)
        } else {
            return (
                <Container component="main" maxWidth="xs">
                    <div style={{
                        marginTop: 50,
                        display: "flex",
                        flexDirection: 'column',
                        alignItems: 'center',
                        alignContent: 'center'
                    }}>
                        <Avatar style={{
                            margin: 10,
                            backgroundColor: "Background",
                        }}>

                        </Avatar>
                        <Typography variant='h4' component='h1'>
                            Log In</Typography>

                        <Grid item xs={12}>
                            <TextField variant='outlined'
                                margin='dense'
                                label={'Username'}
                                fullWidth
                                value={this.state.username}
                                onChange={(e) => {
                                    this.setState({ username: e.target.value })
                                }}
                            ></TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant='outlined' margin='dense' label={'Password'} type='password' fullWidth
                                value={this.state.password}
                                onChange={(e) => {
                                    this.setState({ password: e.target.value })
                                }}
                            ></TextField>
                        </Grid>

                        <Button
                            variant="contained"
                            color="inherit"
                            fullWidth
                            onClick={() => {
                                this.login()
                            }}
                        >Log in</Button>

                        <CardActions>
                            <FacebookLogin
                                appId="148013250102819"
                                autoLoad={false}
                                callback="handleFacebook"
                                render={(renderProps) => (
                                    <Button
                                        type="submit"
                                        color="primary"
                                        variant="contained"
                                        width="true"
                                        onClick={renderProps.onClick}
                                    ></Button>
                                )}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                width="true"
                                onClick={this.signinGG}>Login with Google</Button>


                        </CardActions>
                        <Link
                            component='button'
                            variant='body2'
                            color='primary'
                            onClick={this.signup}>
                            Don't have account?
                            </Link>

                    </div>

                </Container>
            )
        }
    }

}
export default SignIn;
