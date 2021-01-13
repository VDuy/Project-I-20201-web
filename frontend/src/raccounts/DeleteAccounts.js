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
} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import api from '../API';


class DeleteAccount extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listaccount: [],
            message: '',
        };
    }

    deleteAccount = async (event) => {
        const username = event.target.username
        const req = await api.auth.DeleteAccount(username)
        if (req.status) {
            alert('xoa tai khoan thanh cong')
            window.location = `/`
        } else {
            alert('xoa tai khoan that bai')
            window.location = `/`
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

                <List>
                    {
                        this.state.listaccount.map(s => (
                            <ListItem button >
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
                                        <DeleteIcon
                                            pointerEvents id={s.username}
                                            onClick={this.deleteAccount} /></IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))
                    }
                </List>

            </div>
        )
    }
}
export default DeleteAccount;