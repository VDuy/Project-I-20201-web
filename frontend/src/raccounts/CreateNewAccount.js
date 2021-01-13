import React from 'react';
import { Button, Grid, Typography, TextField, } from '@material-ui/core';
import { Component } from 'react';
import api from '../API';
//import { withSnackbar } from 'notistack';
import RoleFields from '../components/RoleFields'
import OpenMenu from '../components/OpenMenu'
import SideBar from '../components/Sidebar';
class CreateNewAccount extends Component {
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
                <OpenMenu />
                <div style={{
                    display: "flex",
                    flexDirection: 'row',
                    alignItems: 'self-start',
                    alignContent: 'center'
                }}>
                    <SideBar />
                    <div style={{
                        margin: 50,
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
            </div >
        );
    }
}
export default CreateNewAccount;


