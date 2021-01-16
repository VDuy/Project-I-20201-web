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
import OpenMenu from '../components/OpenMenu'
import SideBar from '../components/Sidebar';
import DeleteIcon from '@material-ui/icons/Delete';
import api from '../API';
import PropTypes from 'prop-types'
//import AccountInfo from './AccountInfo'


class DeleteAccount extends React.Component {
    // static propTypes = {
    //     match: PropTypes.object.isRequired,
    //     location: PropTypes.object.isRequired,
    //     history: PropTypes.object.isRequired
    // };
    constructor(props) {
        super(props)
        this.state = {
            // listaccount: [],
            account: [],
            message: '',
        };
    }

    deleteAccount = async (event) => {
        const username = event.target.username
        const req = await api.auth.deleteAccount(username)
        if (req.status === true) {
            alert('xoa tai khoan thanh cong')
            window.location = `/homepage`
        } else {
            alert('xoa tai khoan that bai')
            window.location = `/account`
        }
    }
    // async listaccount() {
    //     const res = await api.auth.getAllAccount();
    //     if (res.status) {
    //         this.setState({
    //             listaccount: res.data.data
    //         })
    //     } else {
    //         this.setState({
    //             message: res.message
    //         })
    //     }
    // }
    async getaccount() {
        const { match: { params } } = this.props;
        const res = await api.auth.getAccountByUsername(params.username);
        if (res.status) {
            this.setState({
                account: res.data.data
            })
        } else {
            this.setState({
                message: res.message
            })
        }
    }
    async componentDidMount() {
        //await this.listaccount();
        await this.getaccount();
    }
    onClickDirect = (url) => {
        window.location = `/account/${url}`
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
                    <div>

                        <List>
                            {
                                this.state.account.map(s => (
                                    <ListItem button >
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"

                                            />
                                        </ListItemIcon>
                                        <ListItemText id={s.username} primary={s.username}
                                            onClick={() => {
                                                this.props.history.push(`/account/list/${s.username}`)
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
                </div>
            </div>
        )
    }
}
export default DeleteAccount;