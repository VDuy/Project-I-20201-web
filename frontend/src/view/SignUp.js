import React, { Component } from 'react';
import { Button, Container, Grid, Typography, TextField, Avatar } from '@material-ui/core';


import api from '../API';
import { withSnackbar } from 'notistack';
//import SignIn from './SignIn';
class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            phone: '',
            role: '',


            isCreate: false,

        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleCreate = async () => {
        const res = await api.auth.createAccount(this.state);
        if (res.status === true) {
            window.location = '/homepage'
        } else {
            window.location = '/account'
        }
    }



    render() {
        return (
            <div>
                <div style={{
                    marginTop: 50,
                    display: "flex",
                    flexDirection: 'column',
                    alignItems: 'center',
                    alignContent: 'center'
                }}>
                    <Typography variant='h4' component='h1'>
                        New Accounts</Typography>

                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <TextField
                            name='username'
                            variant='standard'
                            margin='dense'
                            label={'Username'}
                            onChange={this.handleChange}
                        ></TextField>
                        <TextField
                            name='password'
                            variant='standard'
                            margin='dense'
                            label={'Password'}
                            type='password'
                            onChange={this.handleChange}
                        ></TextField>
                        <TextField
                            name='phone'
                            variant='standard'
                            margin='dense'
                            label={'Phone'}
                            type="number"
                            onChange={this.handleChange}
                        ></TextField>
                        <TextField
                            name='role'
                            variant='standard'
                            margin='dense'
                            label={'Role(ADMIN/USER)'}
                            type="text"
                            onChange={this.handleChange}
                        ></TextField>
                      
                    </Grid>
                    <Button
                        type="submit"
                        variant="contained"
                        color="inherit"
                        width="true"
                        onClick={this.handleCreate}
                    >Create</Button>

                </div>
            </div >
        );
    }
}
export default SignUp;