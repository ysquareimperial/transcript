import React from 'react'
import { Outlet } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function AppIndex() {
    return (
        <div>
            <Row className="navbar m-0 p-0">
                <Col lg={12} md={12} sm={12} xs={12}>
                    <Navbar />
                </Col>
            </Row>
            <Row className="sidebar-row m-0 p-0">
                <Col lg={2} md={2} className="sidebar">
                    <Sidebar />
                </Col>
                <Col lg={10} md={10} sm={12} xs={12} className="index-container">
                    <Outlet />
                </Col>
            </Row>
        </div>
    )
}
