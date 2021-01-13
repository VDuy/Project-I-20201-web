import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route, Switch, BrowserRouter, Redirect
} from 'react-router-dom';
import SignIn from './view/SignIn';
import HomePage from './view/HomePage';
import SignUp from './view/SignUp';
//import Cookies from 'js-cookie'
import Reports from './reports/Reports';
import Accounts from './raccounts/Accounts';
import Form from './form/Form';
import ListAccounts from './raccounts/ListAccounts';
import AccountInfo from './raccounts/AccountInfo';
import ListReports from './reports/ListReports';
import ReportsInfo from './reports/ReportsInfo';
import PDF from './view/PDF';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routers: [
                {
                    component: HomePage,
                    layout: 'div',
                    path: '/homepage',
                },
                {
                    component: SignIn,
                    layout: 'div',
                    path: '/',
                },
                {
                    component: SignUp,
                    layout: 'div',
                    path: '/signup',
                },
                {
                    component: Reports,
                    layout: 'div',
                    path: '/reports',
                },
                { 
                    component: Accounts,
                    layout: 'div',
                    path: '/account',
                },
                {
                    component: Form,
                    layout: 'div',
                    path: '/form',
                },
                {
                    component: ListAccounts,
                    layout: 'div',
                    path: '/account/list',
                },
                {
                    component: AccountInfo,
                    layout: 'div',
                    path: '/account/list/:username',
                },
                 {
                    component: ListReports,
                    layout: 'div',
                    path: '/reports/list',
                },
                {
                    component: ReportsInfo,
                    layout: 'div',
                    path: '/reports/list/:id',
                },
                 {
                    component: PDF,
                    layout: 'div',
                    path: '/form/pdf',
                },



            ]
        }
    }
    render() {
        return (
            <BrowserRouter>
                {
                    this.state.routers.map(e => (
                        <Route exact path={e.path}>
                            <e.layout>
                                <e.component></e.component>
                            </e.layout>
                        </Route>
                    )

                    )
                }
            </BrowserRouter>
        )
    }
}
