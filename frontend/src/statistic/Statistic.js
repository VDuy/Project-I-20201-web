import React, { Component } from 'react';
import api from '../API';
import OpenMenu from '../components/OpenMenu';
import SideBar from '../components/Sidebar';

export default class Statistic extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
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
                    margin: 50,
                    display: "flex",
                    flexDirection: 'column',
                    alignItems: 'center',
                    alignContent: 'start'
                }}>



                    </div>
                </div>
            </div>
        )
    }
}
