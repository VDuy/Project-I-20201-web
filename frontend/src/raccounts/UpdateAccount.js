import React, { Component } from 'react';

import { withRouter } from 'react-router';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Checkbox,
    IconButton,
    Grid, TextField, Button
} from '@material-ui/core';

import CheckIcon from '@material-ui/icons/Check';
import api from '../API';


class UpdateAccount extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listaccount: [],
            message: '',
        };
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    updateAccount = async (event) => {
        const username = event.target.username
        const req = await api.auth.updateAccount(username)
        if (req.status === true) {
            alert('update tai khoan thanh cong')
            window.location = `/homepage`
        } else {
            alert('update tai khoan that bai')
            window.location = `/account`
        }
    }
    async listaccount() {

        const res = await api.auth.getAllAccount();
        if (res.status) {
            this.setState({
                listaccount: res.data.data
            })
        } else {
            this.setState({
                message: res.message
            })
        }
    }
    async componentDidMount() {
        await this.listaccount()
    }
    onClickDirect = (url) => {
        window.location = `/account/${url}`
    }
    render() {
        return (
            <div>
                <div>
                    <List>
                        {
                            this.state.listaccount.map(s => (
                                <ListItem >
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start" />
                                    </ListItemIcon>
                                    <ListItemText id={s.username} primary={s.username}
                                        onClick={() => {
                                            this.props.history.push(`/account/${s.username}`)
                                        }} />
                                    <ListItemSecondaryAction >
                                        <IconButton edge="end">
                                            <CheckIcon
                                                pointerEvents id={s.username}
                                                onClick={this.updateAccount} /></IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            ))
                        }
                    </List>
                </div>
                <div  style={{
                            margin: 5,
                            display: "flex",
                            flexDirection: 'column',
                            alignItems: 'center',
                            alignContent: 'start'
                        }}>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        {/* <TextField
                        name='username'
                        variant='standard'
                        margin='dense'
                        label={'Username'}
                        onChange={this.handleChange}
                    ></TextField> */}
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
                        onClick={this.updateAccount}
                    >Create</Button>
                </div>
            </div>
        )
    }
}
export default UpdateAccount;