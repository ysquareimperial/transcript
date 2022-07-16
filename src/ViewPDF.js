import React from 'react'
import {PDFViewer} from "@react-pdf/renderer"
import TranscriptPDF from './TranscriptPDF.JS'
    function ViewPDF() {
        return (
            <div style={{marginTop:"70px"}}>
                <PDFViewer style={{width:"100%",height:"100vh"}}>
                    <TranscriptPDF />
                </PDFViewer>
            </div>
        )
    }

export default ViewPDF