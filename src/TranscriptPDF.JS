import React from 'react'
import { Page, Text, Image, Document, StyleSheet, View, Font } from '@react-pdf/renderer'
import schoolLogo from '../../images/sRecord.png'
import { Col, Row } from 'reactstrap'
// import oswald from './Oswald/oswald.ttf'
// Font.register({ family: 'oswald', src: oswald });
const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
    },
    text: {
        maargin: 12,
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Times-Roman',
        border: '1px black solid',
        padding: 2
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
        color: 'grey',
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey'
    },

})

const transcriptInfo = [
    {
        schoolName: 'UNITY COLLEGE OF EDUCATION KANO STATE',

    }
]
const TranscriptPDF = () => {
    return (

        <Document>

            <Page>
                <View>
                    <Text>dfsdaf</Text>
                </View>
            </Page>
        </Document>

    )
}
export default TranscriptPDF;

