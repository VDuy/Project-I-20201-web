import { Button, ButtonGroup, CardActions } from '@material-ui/core';
import React, { Component } from 'react';
//import { deleteAccount } from '../../../backend/src/services/account';

import api from '../API/api';

import OpenMenu from '../components/OpenMenu';
import SideBar from '../components/Sidebar';
import CreateNewAccount from './CreateNewAccount';
import ListAccounts from './ListAccounts';
import DeleteAccounts from './DeleteAccounts';
import UpdateAccount from './UpdateAccount';



export default class Accounts extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }
    creatAcc = async () => {
        this.setState({
            isCreate: true
        })
    }
    list = async () => {
        this.setState({
            isList: true
        })
    }
    del = async () => {
        this.setState({
            isDel: true
        })
    }
    update = async () => {
        this.setState({
            isUpdate: true
        })
    }

    render() {
        if (this.state.isCreate) {
            return (
                <CreateNewAccount></CreateNewAccount>
            )
        } else if (this.state.isList) {
            return (
                <ListAccounts></ListAccounts>
            )

        } else if (this.state.isDel) {
            return (
                <DeleteAccounts></DeleteAccounts>
            )
        } else if (this.state.isUpdate) {
            return (
                <UpdateAccount></UpdateAccount>
            )
        } else {
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
                            alignContent: 'start'
                        }}>
                            <div style={{
                                marginBottom: 10,
                            }}>
                                <Button
                                    variant="contained"
                                    color="inherit"
                                    width="true"
                                    onClick={this.creatAcc}>Create New Account</Button>
                            </div>
                            <div style={{
                                margin: 10,
                            }}>
                                <Button
                                    variant="contained"
                                    color="inherit"
                                    width="true"
                                    onClick={this.list}>List Account</Button>
                            </div>
                            <div style={{
                                margin: 10,
                            }}>
                                <Button
                                    variant="contained"
                                    color="inherit"
                                    width="true"
                                    onClick={this.del}>Delete Account</Button>
                            </div>
                            <div style={{
                                margin: 10,
                            }}>
                                <Button
                                    variant="contained"
                                    color="inherit"
                                    width="true"
                                    onClick={this.update}>Update Account</Button></div>
                        </div>
                    </div>
                </div >
            )
        }
    }
}
