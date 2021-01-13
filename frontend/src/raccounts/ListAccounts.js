import React, { Component } from 'react';

import { withRouter } from 'react-router';
import { Typography, Grid, ButtonBase } from '@material-ui/core';
import api from '../API';

class ListAccounts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listaccount: [],
            message: '',
        };
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


    render() {
        return (
            <div style={{
                display: "flex",
                flex: "auto",
                flexDirection: "column",
                alignItems: 'center',
                alignContent: 'center'
            }}>
                <div style={{
                    margin: 20,
                    display: "flex",
                    flexDirection: 'column',
                    alignItems: 'center',
                    alignContent: 'center'
                }}>
                    <Typography variant="h4" gutterBottom>
                        List Accounts
            </Typography>
                    <h2> Total Account: {this.state.listaccount.length}</h2>
                </div>
                <div>
                    <Grid
                        container
                        direction="column"
                        justify="space-evenly"
                        alignItems="flex-start"
                        spacing={5}
                        style={{
                            backgroundColor: 'lightblue'
                        }}>
                        {this.state.listaccount.map((st) => {
                            return <Grid item>
                                <ButtonBase
                                    onClick={() => {
                                        this.props.history.push(`/account/list/${st.username}`)
                                    }}
                                >
                                    <Typography>
                                        {st.username}
                                    </Typography>
                                </ButtonBase>
                            </Grid>
                        })}
                    </Grid>

                </div>
            </div>
        )
    }
}

export default withRouter(ListAccounts);