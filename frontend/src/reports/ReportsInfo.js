import React, { Component } from 'react';

import { withRouter } from 'react-router';
import { Typography, Grid,  } from '@material-ui/core';
import api from '../API';


class ReportsInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reports: []
        }
    }

    async componentDidMount() {
        const { match: { params } } = this.props;
        console.log(params.id);
        const res = await api.auth.getReportsById(params.id);
        if (res.status) {
            this.setState({
                reports: res.data.data
            })
        } else {
            this.setState({
                message: res.message
            })
        }
    }

    render() {
        return (
            <div>
                <h1 style={{
                    margin: 20,
                    display: "flex",
                    flexDirection: 'column',
                    alignItems: 'center',
                    alignContent: 'center'
                }}>
                    <Typography variant="h4" gutterBottom>
                        Reports
            </Typography></h1>


                <Grid container spacing={5} direction="column" style={{ marginLeft: 20 }}>
                    <Grid item>
                        <Typography>
                            Id:   {this.state.reports.id}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography>
                            Name:  {this.state.reports.name}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography>
                            Phone:     {this.state.reports.phone}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography>
                            Birthday:   {this.state.reports.birthday}
                        </Typography>
                    </Grid>
                </Grid>
            </div>

        )
    }
}
export default withRouter(ReportsInfo);