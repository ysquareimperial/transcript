import React from 'react'
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer"
import TranscriptPDF from './TranscriptPDF.js'
function ViewPDF() {
    return (
        <div style={{ marginTop: "70px" }}>
          
            <PDFViewer style={{ width: "100%", height: "100vh" }}>
                <TranscriptPDF />
            </PDFViewer>
        </div>
    )
}

export default ViewPDF