import { MenuItem } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import React from 'react';
import { NavLink } from 'react-router-dom';
import AssignmentIcon from '@material-ui/icons/Assignment';
import './Sidebar.css';
import EqualizerIcon from '@material-ui/icons/Equalizer';
const SideBar = ({ activeSideBar, setActiveSideBar }) => {
    //const { userInfo } = useContext(UserContext);

    return (

        <div className={activeSideBar ? 'SideBar SideBar-active' : 'SideBar'}>
            <div className={activeSideBar ? 'SideBar-Container SideBar-Container-Active' : 'SideBar-Container'}>
                <div className="header">
                    <h2 className="logo">Dashboard</h2>
                    <div className="close-btn" onClick={() => setActiveSideBar(false)}>
                        <div className="line1"></div>
                        <div className="line2"></div>

                    </div>
                </div>
                <div style={{ margin: 10 }}>
                   
                    <NavLink to="/account" activeClassName="selected">
                        <div className="sidebar-item">
                            <MenuItem><AccountCircle></AccountCircle></MenuItem>
                            <span>Accounts</span>
                        </div>
                    </NavLink>
                    <NavLink to="/reports" activeClassName="selected">
                        <div className="sidebar-item">
                            <MenuItem><AssignmentIcon /></MenuItem>
                            <span>Reports</span>
                        </div>
                    </NavLink>
                    <NavLink to="/form" activeClassName="selected">
                        <div className="sidebar-item">
                            <MenuItem><EqualizerIcon/></MenuItem>
                            <span>Form</span>
                        </div>
                    </NavLink>

                </div>
            </div>


        </div>
    )
};

export default SideBar;