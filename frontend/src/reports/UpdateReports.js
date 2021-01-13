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


class UpdateReports extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listreports: [],
            message: '',
        };
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    updateReports = async (event) => {
        const id = event.target.id
        const req = await api.auth.updateReports(id)
        if (req.status === true) {
            alert('update bao cao thanh cong')
            window.location = `/homepage`
        } else {
            alert('update cao that bai')
            window.location = `/reports`
        }
    }
    async listreports() {

        const res = await api.auth.getAllReports();
        if (res.status) {
            this.setState({
                listreports: res.data.data
            })
        } else {
            this.setState({
                message: res.message
            })
        }
    }
    async componentDidMount() {
        await this.listreports()
    }
    onClickDirect = (url) => {
        window.location = `/reports/${url}`
    }
    render() {
        return (
            <div>
                <div>
                    <List>
                        {
                            this.state.listreports.map(s => (
                                <ListItem >
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start" />
                                    </ListItemIcon>
                                    <ListItemText id={s.id} primary={s.id}
                                        onClick={() => {
                                            this.props.history.push(`/account/${s.id}`)
                                        }} />
                                    <ListItemSecondaryAction >
                                        <IconButton edge="end">
                                            <CheckIcon
                                                pointerEvents id={s.id}
                                                onClick={this.updateReports} /></IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            ))
                        }
                    </List>
                </div>
                <div style={{
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
                        <TextField
                        name='name'
                        variant='standard'
                        margin='dense'
                        label={'Name'}
                        onChange={this.handleChange}
                    ></TextField>
                        <TextField
                            name='phone'
                            variant='standard'
                            margin='dense'
                            label={'Phone'}
                            type='number'
                            onChange={this.handleChange}
                        ></TextField>
                        <TextField
                            name='birthday'
                            variant='standard'
                            margin='dense'
                            label={'Birthday'}
                            
                            onChange={this.handleChange}
                        ></TextField>
                        

                    </Grid>
                    <Button
                        type="submit"
                        variant="contained"
                        color="inherit"
                        width="true"
                        onClick={this.updateReports}
                    >Update</Button>
                </div>
            </div>
        )
    }
}
export default UpdateReports;