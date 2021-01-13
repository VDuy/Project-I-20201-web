import React, { Component } from 'react';

import { withRouter } from 'react-router';

import { Typography, Grid, } from '@material-ui/core';
import api from '../API';


class AccountInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            accounts: []
        }
    }

    async componentDidMount() {
        const { match: { params } } = this.props;
        console.log(params.username);
        const res = await api.auth.getAccountByUsername(params.username);
        if (res.status) {
            this.setState({
                accounts: res.data.data
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
                    display: "flex",
                    flexDirection: 'column',
                    alignItems: 'center',
                    alignContent: 'center'
                }}>Account Info</h1>

                <Grid container spacing={5} direction="column" style={{ marginLeft: 20 }}>
                    <Grid item>
                        <Typography>
                            Username: {this.state.accounts.username}
                        </Typography>
                    </Grid>
                    {/* <Grid item>
                        <Typography>
                            Password:  {this.state.accounts.password}
                        </Typography>
                    </Grid> */}
                    <Grid item>
                        <Typography>
                            Phone:   {this.state.accounts.phone}
                        </Typography>

                    </Grid>
                    <Grid item>
                        <Typography>
                            Role:   {this.state.accounts.role}
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default withRouter(AccountInfo);