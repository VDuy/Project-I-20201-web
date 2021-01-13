import React, { Component } from 'react';
// import api from '../API/api';
import OpenMenu from '../components/OpenMenu';
//import SideBar from '../components/Sidebar';
import CreateNewReports from './CreateNewReports'
import { Button, } from '@material-ui/core';

import ListReports from './ListReports';
import SideBar from '../components/Sidebar';
import DeleteReports from './DeleteReports';
import UpdateReports from './UpdateReports';
export default class Reports extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // id: " ",
            // name: " ",
            // birthday: " ",
        }
    }

    creatReps = async () => {
        this.setState({
            isCreate: true
        })
    }
    listReps = async () => {
        this.setState({
            isList: true
        })
    }
    delReps = async () => {
        this.setState({
            isdel: true
        })
    }
    updateReps = async () => {
        this.setState({
            isUpdate: true
        })
    }
    render() {
        if (this.state.isCreate) {
            return (
                <CreateNewReports></CreateNewReports>
            )
        } else if (this.state.isList) {
            return (
                <ListReports></ListReports>
            )
        }
        else if (this.state.isdel) {
            return (
                <DeleteReports></DeleteReports>
            )
        }
        else if (this.state.isUpdate) {
            return (
                <UpdateReports></UpdateReports>
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
                                    onClick={this.creatReps}>Create New Reports</Button>
                            </div>
                            <div style={{
                                marginBottom: 10,
                            }} >
                                <Button
                                    variant="contained"
                                    color="inherit"
                                    width="true"
                                    onClick={this.listReps}>List Reports</Button>
                            </div>
                            <div style={{
                                marginBottom: 10,
                            }}>
                                <Button
                                    variant="contained"
                                    color="inherit"
                                    width="true"
                                    onClick={this.delReps}>Delete Reports</Button>
                            </div>
                            <div style={{
                                marginBottom: 10,
                            }}>
                                <Button
                                    variant="contained"
                                    color="inherit"
                                    width="true"
                                    onClick={this.updateReps}>Update Reports</Button>
                            </div>
                        </div>
                    </div>

                </div >
            )
        }
    }
}