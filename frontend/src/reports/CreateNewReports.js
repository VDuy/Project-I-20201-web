import React from 'react';
import { Button, Grid, Typography, TextField, } from '@material-ui/core';
import { Component } from 'react';
import api from '../API';
import { withSnackbar } from 'notistack';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

import InputAdornment from '@material-ui/core/InputAdornment';

class CreateNewReports extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            phone: '',
            createdate: '',
            birthday: '',

            isCreate: false,

        }
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleCreate = async () => {
        const res = await api.auth.createReports(this.state);
        if (res.status === true) {
            window.location = '/homepage'
        } else {
            this.props.enqueueSnackbar(res.message);
        }
    }



    render() {
        return (
            <div>

                <div style={{
                    marginTop: 50,
                    display: "flex",
                    flexDirection: 'column',
                    alignItems: 'center',
                    alignContent: 'center'
                }}>
                    <Typography variant='h4' component='h1'>
                        New Reports</Typography>

                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center">

                        <TextField
                            name='id'
                            variant='standard'
                            margin='dense'
                            label={'Id'}
                            type='number'
                            onChange={this.handleChange}
                        ></TextField>
                        <TextField
                            name='name'
                            variant='standard'
                            margin='dense'
                            label={'Name'}
                            type='text'

                            onChange={this.handleChange}
                        ></TextField>
                        <TextField
                            name='phone'
                            variant='standard'
                            margin='dense'
                            label={'Phone'}
                            type='number'
                            onChange={this.handleChange}
                        ></TextField>
                        <TextField
                            name='createdate'
                            id="input-with-icon-textfield"
                            margin='dense'
                            type='date'
                            label="Create-date"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                       
                                    </InputAdornment>
                                ),
                            }}
                            onChange={this.handleChange}
                        />
                        <TextField
                            name='birthday'
                            id="input-with-icon-textfield"
                            margin='dense'
                            type='date'
                            label="Birthday"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    
                                    </InputAdornment>
                                ),
                            }}
                            onChange={this.handleChange}
                        />
                    </Grid>
                    <div style={{
                        margin: 10
                    }}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="inherit"
                            onClick={this.handleCreate}>Create</Button>
                    </div>
                </div>
            </div >
        );
    }
}
export default withSnackbar(CreateNewReports);