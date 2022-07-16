import React, { useState } from "react";
import { ArrowDownCircle, HelpCircle, Lock, Settings } from "react-feather";
import { useNavigate } from "react-router-dom";
import logo from './images/logo.jpeg'

import {
    Col,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Row,
} from "reactstrap";
import './Navbar.css'
// import ysquare from "../images/user.png";
// import logo from "../images/sRecord.png";
// import Profile from "../Profile/Profile";
// import profileimage from '../images/ysquareimperial.png'
export default function Navbar() {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    };
    const navigate = useNavigate();
    return (
        <div>
            <Row className="nav-row m-0 p-0">
                <Col md={2}></Col>
                <Col md={1} className=''>
                </Col>
                <Col md={7} className='text-center mt-1 mb-1'>
                    <h3 className='h-1'>
                    <img src={logo} alt='' style={{ width: 50, display: 'inline-block', float:'', marginRight: 10 }} />
                        UNITY COLLEGE OF EDUCATION KANO STATE
                    </h3>
                    <span style={{ fontSize: 15, margin: 0, fontStyle: 'italic', fontWeight: '', marginLeft: 10, color: 'rgb(95, 203, 102)' }}>Accredited NCE awarding College in Nigeria</span>
                </Col>
                <Col md={2}></Col>
            </Row>
        </div>
    );
}
