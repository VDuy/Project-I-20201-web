import React, { Component } from 'react';

import { withRouter } from 'react-router';
import { Typography, Grid, ButtonBase } from '@material-ui/core';
import api from '../API';
import OpenMenu from '../components/OpenMenu'
import SideBar from '../components/Sidebar';

class ListReports extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listreports: [],

            message: '',
        };
    }

    async listreports() {
        const res = await api.auth.getAllReports();
        if (res.status) {
            this.setState({
                listreports: res.data.data,

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
                        display: "flex",
                        flex: "auto",
                        flexDirection: "column",
                        alignContent: "center",
                        alignItems: "center"
                    }}>
                        <div style={{
                            margin: 20,
                            display: "flex",
                            flexDirection: 'column',
                            alignItems: 'center',
                            alignContent: 'center'
                        }}>
                            <Typography variant="button" gutterBottom>
                                List Reports
            </Typography>
                            <h2> Total Reports: {this.state.listreports.length}</h2>
                        </div>

                        <div>
                            <Grid container
                                direction="column"
                                justify="space-evenly"
                                alignItems="flex-start"
                                spacing={5}
                                style={{
                                    backgroundColor: 'lightblue'
                                }}>
                                {this.state.listreports.map((st) => {
                                    return <Grid item>
                                        <ButtonBase
                                            onClick={() => {
                                                this.props.history.push(`/reports/list/${st.id}`)
                                            }}
                                        >
                                            <Typography>
                                                {st.id}
                                            </Typography>
                                            <Typography>
                                                -
                                        </Typography>
                                            <Typography>
                                                {st.name}
                                            </Typography>
                                        </ButtonBase>
                                    </Grid>
                                })}
                            </Grid>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ListReports);