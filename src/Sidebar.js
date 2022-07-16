import React from "react";
import { Col, Row } from "reactstrap";
// import './Dashboard.css'

import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <div style={{ position: "fixed", left:0 }}>
            <ul>
                <li onClick={() => navigate("/")}
                    className={`active1 ${location.pathname === "/" && "active_sidebar"
                        }`}>
                        Generate Transcript
                    
                </li>
                <li onClick={() => navigate("/print-transcript")}
                    className={`active1 ${location.pathname === "/print-transcript" && "active_sidebar"
                        }`}>
                        Print / Edit Transcript
                    
                </li>
            </ul>
        </div>
    );
}
