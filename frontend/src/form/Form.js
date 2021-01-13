import { Button, Typography, ButtonBase, Grid } from '@material-ui/core';
import React, { Component } from 'react';
import api from '../API';
import OpenMenu from '../components/OpenMenu';
import SideBar from '../components/Sidebar';
import { withRouter } from 'react-router';
class Form extends Component {

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
                    < div style={{
                        margin: 20,
                        display: "flex",
                        flexDirection: 'row',
                        alignItems: 'self-start',
                        alignContent: 'center'
                    }}>
                        <Grid container
                            direction="column"
                            justify="space-evenly"
                            alignItems="flex-start"
                            spacing={5}
                        >
                            {this.state.listreports.map((st) => {
                                return <Grid item>
                                    <ButtonBase
                                        onClick={() => {
                                            this.props.history.push(`/form/pdf`)
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
        )
    }
}
export default withRouter(Form);