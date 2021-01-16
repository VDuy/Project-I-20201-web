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
import OpenMenu from '../components/OpenMenu';
import SideBar from '../components/Sidebar';

import DeleteIcon from '@material-ui/icons/Delete';
import api from '../API';


class DeleteReports extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listreports: [],
            message: '',
        };
    }

    deleteReports = async (event) => {
        const id = event.target.id
        const req = await api.auth.deleteReports(id)
        if (req.status === true) {
            alert('xoa bao cao thanh cong')
            window.location = `/homepage`
        } else {
            alert('xoa bao cao that bai')
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
                                this.state.listreports.map(s => (
                                    <ListItem >
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start" />
                                        </ListItemIcon>

                                        <ListItemText id={s.id} primary={s.id}
                                            onClick={() => {
                                                this.props.history.push(`/reports/${s.id}`)
                                            }}>
                                        </ListItemText>

                                        <ListItemSecondaryAction >
                                            <IconButton edge="end">
                                                <DeleteIcon
                                                    pointerEvents id={s.id}
                                                    onClick={this.deleteReports} />
                                            </IconButton>
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
export default DeleteReports;