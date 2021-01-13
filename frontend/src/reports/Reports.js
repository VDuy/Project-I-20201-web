import React, { Component } from 'react';
// import api from '../API/api';
import OpenMenu from '../components/OpenMenu';
//import SideBar from '../components/Sidebar';
import CreateNewReports from './CreateNewReports'
import { Button, } from '@material-ui/core';

import ListReports from './ListReports';
import SideBar from '../components/Sidebar';
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
    render() {
        if (this.state.isCreate) {
            return (
                <CreateNewReports></CreateNewReports>
            )
        } else if (this.state.isList) {
            return (
                <ListReports></ListReports>
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
                            <div >
                                <Button
                                    variant="contained"
                                    color="inherit"
                                    width="true"
                                    onClick={this.listReps}>List Reports</Button>
                            </div>
                        </div>
                    </div>

                </div >
            )
        }
    }
}