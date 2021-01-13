import { Button, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import OpenMenu from '../components/OpenMenu'
import SideBar from '../components/Sidebar';
class PDF extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (

            <div >
                <OpenMenu />
                <div style={{
                    display: "flex",
                    flexDirection: 'row',
                    alignItems: 'center',
                    alignContent: 'center'
                }}>
             
                    <Typography>
                        Report From
                </Typography>
                </div>
            </div>
        )
    }
}
export default withRouter(PDF);